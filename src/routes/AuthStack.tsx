import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpEmailScreen } from "../screens/SignUpEmailScreen";
import { SignUpInfoScreen } from "../screens/SignUpInfoScreen";
import { SignUpConfirmScreen } from "../screens/SignUpConfirmScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import { ResetPasswordScreen } from "../screens/ResetPasswordScreen";
import { AuthStackParamList } from "./params";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SignInScreen"
  >
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
    <Stack.Screen name="SignUpEmailScreen" component={SignUpEmailScreen} />
    <Stack.Screen name="SignUpInfoScreen" component={SignUpInfoScreen} />
    <Stack.Screen name="SignUpConfirmScreen" component={SignUpConfirmScreen} />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export { AuthStack };
