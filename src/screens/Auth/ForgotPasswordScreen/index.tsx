import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SubmitHandler, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from "../../../../assets/svg/icons/ArrowLeft";
import { theme } from "../../../common/theme";
import CustomButton from "../../../components/CustomButton";
import FormInput from "../../../components/FormInput";
import ScrollKeyboardAvoidingView from "../../../components/ScrollKeyboardAvoidingView";
import { AuthStackParamList } from "../../../routes/params";
import {
  ForgotPasswordSchema,
  ForgotPasswordType
} from "../../../schemas/auth.schemas";
import { styles } from "./elements";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema)
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSendCode: SubmitHandler<ForgotPasswordType> = (data) => {
    console.log(data);
    // TODO: we need to send an otp code to the email
    // if code successfully sent we need to move to ResetPasswordScreen
    navigation.navigate("ResetPasswordScreen");
  };

  const handleGoBack = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollKeyboardAvoidingView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <SafeAreaView style={styles.safeContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft color={theme.colors.glacier[900]} width={32} height={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Restablecer contraseña</Text>
        <View style={styles.formContainer}>
          <FormInput<ForgotPasswordType>
            control={control}
            name="email"
            placeholder="Correo"
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <Text style={styles.infoText}>
            Enviaremos a tu correo electrónico un código para que puedas
            restablecer tu contraseña.
          </Text>
          <CustomButton
            type="Primary"
            text="Enviar código"
            onPress={handleSubmit(handleSendCode)}
          />
          <CustomButton
            type="Tertiary"
            text="Regresar a la pantalla principal"
            onPress={handleGoBack}
          />
        </View>
      </SafeAreaView>
    </ScrollKeyboardAvoidingView>
  );
};

export { ForgotPasswordScreen };
