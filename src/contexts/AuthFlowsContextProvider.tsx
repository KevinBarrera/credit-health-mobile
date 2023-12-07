import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { ResetPasswordData, SignUpData } from "../common/interfaces";
import {
  ForgotPasswordType,
  ResetPasswordType,
  SignUpEmailType,
  SignUpInfoType
} from "../schemas/auth.schemas";

interface AuthFlowsContextData {
  signUpData: SignUpData;
  resetPasswordData: ResetPasswordData;
  saveEmailAndPassword: (data: SignUpEmailType) => void;
  saveUserInfo: (data: SignUpInfoType) => void;
  saveEmail: (data: ForgotPasswordType) => void;
  saveOtpAndNewPassword: (data: ResetPasswordType) => void;
}

const AuthFlowsContext = createContext<AuthFlowsContextData>(
  {} as AuthFlowsContextData
);

interface AuthFlowsProviderProps {
  children: ReactNode;
}

const AuthFlowsContextProvider = ({ children }: AuthFlowsProviderProps) => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: "",
    password: "",
    phone: "",
    name: "",
    lastName: "",
    birthDate: ""
  });

  const [resetPasswordData, setResetPasswordData] = useState<ResetPasswordData>(
    {
      email: "",
      otp: "",
      newPassword: ""
    }
  );

  const saveEmailAndPassword = (data: SignUpEmailType) => {
    setSignUpData((prev) => ({
      ...prev,
      email: data.email,
      password: data.confirmPassword
    }));
  };

  const saveUserInfo = (data: SignUpInfoType) => {
    setSignUpData((prev) => ({
      ...prev,
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      birthDate: data.birthDate
    }));
  };

  const saveEmail = (data: ForgotPasswordType) => {
    setResetPasswordData((prev) => ({ ...prev, email: data.email }));
  };

  const saveOtpAndNewPassword = (data: ResetPasswordType) => {
    setResetPasswordData((prev) => ({
      ...prev,
      otp: data.otp,
      newPassword: data.confirmNewPassword
    }));
  };

  const contextValue = useMemo(
    () => ({
      signUpData,
      resetPasswordData,
      saveEmailAndPassword,
      saveUserInfo,
      saveEmail,
      saveOtpAndNewPassword
    }),
    [signUpData, resetPasswordData]
  );

  return (
    <AuthFlowsContext.Provider value={contextValue}>
      {children}
    </AuthFlowsContext.Provider>
  );
};

const useAuthFlowsContext = (): AuthFlowsContextData => {
  const context = useContext(AuthFlowsContext);

  if (!context) {
    throw new Error(
      "useAuthFlowsContext must be used within an AuthFlowsContextProvider"
    );
  }

  return context;
};

export { AuthFlowsContextProvider, useAuthFlowsContext };
