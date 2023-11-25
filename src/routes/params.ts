import { ParamListBase } from "@react-navigation/native";

interface AuthStackParamList extends ParamListBase {
  SignInScreen: undefined;
  SignUpEmailScreen: undefined;
  SignUpInfoScreen: undefined;
  SignUpConfirmScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
}

export type { AuthStackParamList };
