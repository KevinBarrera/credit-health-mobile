import { z } from "zod";

import { EmailSchema, OtpSchema, PasswordSchema } from "./shared.schemas";

export const SignInSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema
});

export const SignUpEmailSchema = SignInSchema.extend({
  confirmPassword: PasswordSchema
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
});

export const SignUpInfoSchema = z.object({
  name: z.string({ required_error: "Por favor ingresa tu(s) nombre(s)" }),
  lastName: z.string({ required_error: "Por favor ingresa tu(s) apellido(s)" }),
  phone: z.string({ required_error: "Por favor ingresa tu número de celular" }),
  birthDate: z
    .string({
      required_error: "Por favor ingresa tu fecha de nacimiento",
      invalid_type_error: "Por favor ingresa una fecha válida"
    })
    .refine((value) => new Date(value) >= new Date("1900-01-01"), {
      message: "No se permiten fechas anteriores al 01-01-1900"
    })
    .refine((value) => new Date(value) <= new Date(), {
      message: "No se permiten fechas posteriores al día de hoy"
    })
});

export const SignUpConfirmSchema = z.object({
  otp: OtpSchema
});

export const ForgotPasswordSchema = z.object({
  email: EmailSchema
});

export const ResetPasswordSchema = z
  .object({
    newPassword: PasswordSchema,
    confirmNewPassword: PasswordSchema,
    otp: OtpSchema
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
  });

export type SignInType = Zod.infer<typeof SignInSchema>;
export type SignUpEmailType = Zod.infer<typeof SignUpEmailSchema>;
export type SignUpInfoType = Zod.infer<typeof SignUpInfoSchema>;
export type SignUpConfirmType = Zod.infer<typeof SignUpConfirmSchema>;
export type ForgotPasswordType = Zod.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordType = Zod.infer<typeof ResetPasswordSchema>;
