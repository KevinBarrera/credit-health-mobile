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
  SignUpConfirmSchema,
  SignUpConfirmType
} from "../../../schemas/auth.schemas";
import { styles } from "./elements";

const SignUpConfirmScreen = () => {
  const { control, handleSubmit } = useForm<SignUpConfirmType>({
    resolver: zodResolver(SignUpConfirmSchema)
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleVerifyEmail: SubmitHandler<SignUpConfirmType> = (data) => {
    console.log(data);
    // TODO: we need to send the otp code to backend to we determine if valid email
    // if all good we tell user account created and move to SignInScreen
    navigation.navigate("SignInScreen");
  };

  const handleResendCode = () => {
    // TODO: we need to resend another otp code to the user email
  };

  const handleGoBack = () => {
    navigation.goBack();
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
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.instructions}>
          Ingresa el código de 6 dígitos que enviamos a tu correo electrónico
        </Text>
        <View style={styles.formContainer}>
          <FormInput<SignUpConfirmType>
            control={control}
            name="otp"
            placeholder="000000"
            textContentType="oneTimeCode"
            maxLength={6}
            keyboardType="number-pad"
          />
          <CustomButton
            type="Primary"
            text="Verificar"
            onPress={handleSubmit(handleVerifyEmail)}
          />
          <CustomButton
            type="Tertiary"
            text="¿No recibiste el código? Reenviar en 21 segundo(s)"
            onPress={handleResendCode}
            textStyle={styles.resendText}
          />
        </View>
      </SafeAreaView>
    </ScrollKeyboardAvoidingView>
  );
};

export { SignUpConfirmScreen };
