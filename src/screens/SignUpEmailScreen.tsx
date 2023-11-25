import { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../common/theme";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ScrollKeyboardAvoidingView from "../components/ScrollKeyboardAvoidingView";
import ArrowLeft from "../../assets/svg/icons/ArrowLeft";
import { AuthStackParamList } from "../routes/params";

const SignUpEmailScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleContinue = () => {
    // TODO: we validate email and pass
    // Check if we save info on device store or provider
    navigation.navigate("SignUpInfoScreen");
  };

  const handleAlreadyHasAccount = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollKeyboardAvoidingView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <SafeAreaView style={styles.safeContainer}>
        <TouchableOpacity onPress={handleAlreadyHasAccount}>
          <ArrowLeft color={theme.colors.glacier[900]} width={32} height={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Crear cuenta</Text>
        <View style={styles.formContainer}>
          <CustomInput
            placeholder="Correo"
            textContentType="emailAddress"
            onChangeText={setEmail}
            value={email}
          />
          <CustomInput
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
          />
          <CustomInput
            placeholder="Confirmar contraseña"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <CustomButton
            type="Primary"
            text="Continuar"
            onPress={handleContinue}
          />
          <CustomButton
            type="Tertiary"
            text="¿Ya tienes una cuenta?"
            onPress={handleAlreadyHasAccount}
          />
        </View>
      </SafeAreaView>
    </ScrollKeyboardAvoidingView>
  );
};

export { SignUpEmailScreen };

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
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  }
});
