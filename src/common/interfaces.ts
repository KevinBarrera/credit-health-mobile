interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => void;
}

interface SignUpData {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
  birthDate: string;
}

interface ResetPasswordData {
  email: string;
  otp: string;
  newPassword: string;
}

export type { AuthContextData, AuthData, SignUpData, ResetPasswordData };
