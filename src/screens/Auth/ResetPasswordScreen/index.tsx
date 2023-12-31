import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from "../../../../assets/svg/icons/ArrowLeft";
import { ResetPasswordData } from "../../../common/interfaces";
import { theme } from "../../../common/theme";
import CustomButton from "../../../components/CustomButton";
import FormInput from "../../../components/FormInput";
import ScrollKeyboardAvoidingView from "../../../components/ScrollKeyboardAvoidingView";
import { useAuthFlowsContext } from "../../../contexts/AuthFlowsContextProvider";
import { AuthStackParamList } from "../../../routes/params";
import {
  ResetPasswordSchema,
  ResetPasswordType
} from "../../../schemas/auth.schemas";
import { styles } from "./elements";

const ResetPasswordScreen = () => {
  const { control, handleSubmit } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema)
  });

  const { saveOtpAndNewPassword, resetPasswordData } = useAuthFlowsContext();

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleResetPassword = (data: ResetPasswordData) => {
    console.log("Lets verify OTP with new password", data);
    // TODO: we need to send the email, otp code and new password
    // if all good we tell user the password was reset and send him to SignInScreen
    navigation.navigate("SignInScreen");
  };

  const handleGoToSignIn = () => {
    navigation.navigate("SignInScreen");
  };

  useEffect(() => {
    const { email, otp, newPassword } = resetPasswordData;
    if (email && otp && newPassword) {
      handleResetPassword(resetPasswordData);
    }
  }, [resetPasswordData]);

  return (
    <ScrollKeyboardAvoidingView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <SafeAreaView style={styles.safeContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeft color={theme.colors.glacier[900]} width={32} height={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Restablecer contraseña</Text>
        <View style={styles.formContainer}>
          <FormInput<ResetPasswordType>
            control={control}
            name="newPassword"
            placeholder="Nueva contraseña"
            textContentType="password"
            secureTextEntry
          />
          <FormInput<ResetPasswordType>
            control={control}
            name="confirmNewPassword"
            placeholder="Confirmar nueva contraseña"
            textContentType="password"
            secureTextEntry
          />
          <Text style={styles.infoText}>
            Enviamos a tu correo un código de 6 dígitos de verificación.
          </Text>
          <FormInput
            control={control}
            name="otp"
            placeholder="000000"
            maxLength={6}
            textContentType="oneTimeCode"
            keyboardType="numeric"
          />
          <CustomButton
            type="Primary"
            text="Restablecer contraseña"
            onPress={handleSubmit(saveOtpAndNewPassword)}
          />
          <CustomButton
            type="Tertiary"
            text="Regresar a la pantalla principal"
            onPress={handleGoToSignIn}
          />
        </View>
      </SafeAreaView>
    </ScrollKeyboardAvoidingView>
  );
};

export { ResetPasswordScreen };
