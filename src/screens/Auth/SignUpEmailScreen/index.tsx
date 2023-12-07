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
import { useAuthFlowsContext } from "../../../contexts/AuthFlowsContextProvider";
import { AuthStackParamList } from "../../../routes/params";
import {
  SignUpEmailSchema,
  SignUpEmailType
} from "../../../schemas/auth.schemas";
import { styles } from "./elements";

const SignUpEmailScreen = () => {
  const { control, handleSubmit } = useForm<SignUpEmailType>({
    resolver: zodResolver(SignUpEmailSchema)
  });

  const { saveEmailAndPassword } = useAuthFlowsContext();

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleContinue: SubmitHandler<SignUpEmailType> = (data) => {
    saveEmailAndPassword(data);
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
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeft color={theme.colors.glacier[900]} width={32} height={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Crear cuenta</Text>
        <View style={styles.formContainer}>
          <FormInput<SignUpEmailType>
            control={control}
            name="email"
            placeholder="Correo"
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <FormInput<SignUpEmailType>
            control={control}
            name="password"
            placeholder="Contraseña"
            textContentType="password"
            secureTextEntry
          />
          <FormInput<SignUpEmailType>
            control={control}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            textContentType="password"
            secureTextEntry
          />
          <CustomButton
            type="Primary"
            text="Continuar"
            onPress={handleSubmit(handleContinue)}
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
