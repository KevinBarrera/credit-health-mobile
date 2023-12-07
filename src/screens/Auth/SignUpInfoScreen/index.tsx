import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from "../../../../assets/svg/icons/ArrowLeft";
import { SignUpData } from "../../../common/interfaces";
import { theme } from "../../../common/theme";
import CustomButton from "../../../components/CustomButton";
import FormInput from "../../../components/FormInput";
import ScrollKeyboardAvoidingView from "../../../components/ScrollKeyboardAvoidingView";
import { useAuthFlowsContext } from "../../../contexts/AuthFlowsContextProvider";
import { AuthStackParamList } from "../../../routes/params";
import {
  SignUpInfoSchema,
  SignUpInfoType
} from "../../../schemas/auth.schemas";
import { styles } from "./elements";

const SignUpInfoScreen = () => {
  const { control, handleSubmit } = useForm<SignUpInfoType>({
    resolver: zodResolver(SignUpInfoSchema)
  });

  const { saveUserInfo, signUpData } = useAuthFlowsContext();

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const registerUser = (data: SignUpData) => {
    console.log("Lets register our new user", data);
    // If all good we look for email and password info and register a new user
    // If all good we move to SignUpEmailScreen
    navigation.navigate("SignUpConfirmScreen");
  };

  const handleAlreadyHasAccount = () => {
    navigation.navigate("SignInScreen");
  };

  useEffect(() => {
    const { email, password, name, lastName, phone, birthDate } = signUpData;
    if (email && password && name && lastName && phone && birthDate) {
      registerUser(signUpData);
    }
  }, [signUpData]);

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
          <FormInput<SignUpInfoType>
            control={control}
            name="name"
            placeholder="Nombre(s)"
          />
          <FormInput<SignUpInfoType>
            control={control}
            name="lastName"
            placeholder="Apellido(s)"
          />
          <FormInput<SignUpInfoType>
            control={control}
            name="phone"
            placeholder="Teléfono"
          />
          <FormInput<SignUpInfoType>
            control={control}
            name="birthDate"
            placeholder="Fecha de nacimiento"
          />
          <CustomButton
            type="Primary"
            text="Regístrate"
            onPress={handleSubmit(saveUserInfo)}
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
