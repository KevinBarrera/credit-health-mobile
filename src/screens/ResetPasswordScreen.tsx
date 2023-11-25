import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { theme } from "../common/theme";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ScrollKeyboardAvoidingView from "../components/ScrollKeyboardAvoidingView";
import { useState } from "react";
import ArrowLeft from "../../assets/svg/icons/ArrowLeft";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../routes/params";

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [otp, setOtp] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleResetPassword = () => {
    // TODO: we need to send the email, otp code and new password
    // if all good we tell user the password was reset and send him to SignInScreen
    navigation.navigate("SignInScreen");
  };

  const handleGoToSignIn = () => {
    navigation.navigate("SignInScreen");
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
        <Text style={styles.title}>Restablecer contraseña</Text>
        <View style={styles.formContainer}>
          <CustomInput
            placeholder="Nueva contraseña"
            textContentType="password"
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <CustomInput
            placeholder="Confirmar nueva contraseña"
            textContentType="password"
            onChangeText={setConfirmNewPassword}
            value={confirmNewPassword}
          />
          <Text style={styles.infoText}>
            Enviamos a tu correo un código de 6 dígitos de verificación.
          </Text>
          <CustomInput
            placeholder="00-00-00"
            textContentType="oneTimeCode"
            onChangeText={setOtp}
            keyboardType="numeric"
            value={otp}
          />
          <CustomButton
            type="Primary"
            text="Restablecer contraseña"
            onPress={handleResetPassword}
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
