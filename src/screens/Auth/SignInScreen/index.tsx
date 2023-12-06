import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { Text, View } from "react-native";

import { IonCard } from "../../../../assets/svg/icons/IonCard";
import { theme } from "../../../common/theme";
import CustomButton from "../../../components/CustomButton";
import FormInput from "../../../components/FormInput";
import ScrollKeyboardAvoidingView from "../../../components/ScrollKeyboardAvoidingView";
import { AuthStackParamList } from "../../../routes/params";
import { SignInSchema, SignInType } from "../../../schemas/auth.schemas";
import { styles } from "./element";

const SignInScreen = () => {
  const { control, handleSubmit } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSignIn: SubmitHandler<SignInType> = (data) => {
    // TODO: call backend to do sign in process
    // If all good we should redirect user to HomeScreen
    console.log(data);
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
        <FormInput<SignInType>
          control={control}
          name="email"
          placeholder="Correo"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <FormInput<SignInType>
          control={control}
          name="password"
          placeholder="Contraseña"
          textContentType="password"
          secureTextEntry
        />
        <CustomButton
          type="Primary"
          text="Entrar"
          onPress={handleSubmit(handleSignIn)}
        />
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
