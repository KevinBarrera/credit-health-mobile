import { AuthData } from "../common/interfaces";

const signIn = async (email: string, _password: string): Promise<AuthData> => {
  const result = await new Promise<AuthData>((resolve) => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email,
        name: "Kevin Barrera"
      });
    }, 1000);
  });
  return result;
};

export const authService = {
  signIn
};

const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";
