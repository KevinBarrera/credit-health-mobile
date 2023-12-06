import { z } from "zod";

export const EmailSchema = z
  .string({ required_error: "Por favor ingresa tu correo electrónico" })
  .email("Correo electrónico inválido");

export const PasswordSchema = z
  .string({ required_error: "Por favor ingresa tu contraseña" })
  .min(6, "La contraseña debe ser de al menos 6 caracteres")
  .refine((password) => /[A-Z]/.test(password), {
    message: "La contraseña debe incluir al menos una letra en mayúscula"
  })
  .refine((password) => /\d/.test(password), {
    message: "La contraseña debe incluir al menos un número"
  })
  .refine((password) => /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password), {
    message: "La contraseña debe incluir al menos un caracter especial"
  });

export const OtpSchema = z
  .string({ required_error: "Por favor ingrese el código que mandamos" })
  .length(6, "El código debe ser de exactamente 6 caracteres");
