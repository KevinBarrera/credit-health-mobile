import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme } from "../common/theme";
import { IonCard } from "../../assets/svg/icons/IonCard";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ScrollKeyboardAvoidingView from "../components/ScrollKeyboardAvoidingView";
import { AuthStackParamList } from "../routes/params";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSignIn = () => {
    // TODO: call backend to do sign in process
    // If all good we should redirect user to HomeScreen
  };

  const handleSignUp = () => {
    navigation.navigate("SignUpEmailScreen");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <ScrollKeyboardAvoidingView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Credit</Text>
        <View style={styles.mainAndIconContainer}>
          <Text style={styles.title2}>health</Text>
          <IonCard color={theme.colors.glacier[900]} width={64} height={64} />
        </View>
      </View>
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
        <CustomButton type="Primary" text="Entrar" onPress={handleSignIn} />
        <CustomButton
          type="Secondary"
          text="¿Aún no tienes cuenta? Regístrate"
          onPress={handleSignUp}
        />
        <CustomButton
          type="Tertiary"
          text="¿Olvidaste tu contraseña?"
          onPress={handleForgetPassword}
        />
      </View>
    </ScrollKeyboardAvoidingView>
  );
};

export { SignInScreen };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: theme.colors.glacier[50],
    paddingHorizontal: 16,
    paddingTop: 80,
    paddingBottom: 16
  },
  headerContainer: {
    justifyContent: "center",
    marginBottom: 48
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: theme.colors.glacier[900]
  },
  title2: {
    fontSize: 58,
    fontWeight: "bold",
    color: theme.colors.black
  },
  mainAndIconContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
