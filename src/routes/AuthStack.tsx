import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthFlowsContextProvider } from "../contexts/AuthFlowsContextProvider";
import { ForgotPasswordScreen } from "../screens/Auth/ForgotPasswordScreen";
import { ResetPasswordScreen } from "../screens/Auth/ResetPasswordScreen";
import { SignInScreen } from "../screens/Auth/SignInScreen";
import { SignUpConfirmScreen } from "../screens/Auth/SignUpConfirmScreen";
import { SignUpEmailScreen } from "../screens/Auth/SignUpEmailScreen";
import { SignUpInfoScreen } from "../screens/Auth/SignUpInfoScreen";
import { AuthStackParamList } from "./params";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <AuthFlowsContextProvider>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignInScreen"
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpEmailScreen" component={SignUpEmailScreen} />
      <Stack.Screen name="SignUpInfoScreen" component={SignUpInfoScreen} />
      <Stack.Screen
        name="SignUpConfirmScreen"
        component={SignUpConfirmScreen}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  </AuthFlowsContextProvider>
);

export { AuthStack };
