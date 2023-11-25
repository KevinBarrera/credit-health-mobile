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

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSendCode = () => {
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
          <CustomInput
            placeholder="Correo"
            textContentType="emailAddress"
            onChangeText={setEmail}
            value={email}
          />
          <Text style={styles.infoText}>
            Enviaremos a tu correo electrónico un código para que puedas
            restablecer tu contraseña.
          </Text>
          <CustomButton
            type="Primary"
            text="Enviar código"
            onPress={handleSendCode}
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
  infoText: { ...theme.fonts.t6, color: theme.colors.glacier[700] },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  }
});
