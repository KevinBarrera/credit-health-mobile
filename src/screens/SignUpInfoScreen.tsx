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

const SignUpInfoScreen = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = () => {
    // TODO: we need to validate data
    // If all good we look for email and password info and register a new user
    // If all good we move to SignUpEmailScreen
    navigation.navigate("SignUpConfirmScreen");
  };

  const handleAlreadyHasAccount = () => {
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
        <Text style={styles.title}>Crear cuenta</Text>
        <View style={styles.formContainer}>
          <CustomInput
            placeholder="Nombre(s)"
            textContentType="name"
            onChangeText={setName}
            value={name}
          />
          <CustomInput
            placeholder="Apellido(s)"
            onChangeText={setLastName}
            value={lastName}
          />
          <CustomInput
            placeholder="Teléfono"
            onChangeText={setTel}
            value={tel}
          />
          <CustomInput
            placeholder="Fecha de nacimiento"
            onChangeText={setBirthDate}
            value={birthDate}
          />
          <CustomButton
            type="Primary"
            text="Regístrate"
            onPress={handleRegister}
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

export { SignUpInfoScreen };

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
