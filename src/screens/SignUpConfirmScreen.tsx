import { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme } from "../common/theme";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ScrollKeyboardAvoidingView from "../components/ScrollKeyboardAvoidingView";
import ArrowLeft from "../../assets/svg/icons/ArrowLeft";
import { AuthStackParamList } from "../routes/params";

const SignUpConfirmScreen = () => {
  const [otp, setOtp] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleVerifyEmail = () => {
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
          <CustomInput
            placeholder="00-00-00"
            textContentType="oneTimeCode"
            maxLength={6}
            keyboardType="number-pad"
            onChangeText={setOtp}
            value={otp}
          />
          <CustomButton
            type="Primary"
            text="Verificar"
            onPress={handleVerifyEmail}
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: theme.colors.glacier[50],
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    paddingBottom: 16
  },
  safeContainer: {
    flex: 1,
    width: "100%",
    padding: 0
  },
  title: {
    ...theme.fonts.h1,
    textAlign: "center",
    color: theme.colors.glacier[950],
    marginVertical: 24
  },
  instructions: {
    ...theme.fonts.h6,
    color: theme.colors.glacier[700],
    paddingHorizontal: 32,
    textAlign: "center",
    marginBottom: 24
  },
  resendText: {
    paddingHorizontal: 56,
    textAlign: "center"
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  }
});
