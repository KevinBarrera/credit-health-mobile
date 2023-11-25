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

export type { AuthContextData, AuthData };
