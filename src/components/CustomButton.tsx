import {
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from "react-native";

import { theme } from "../common/theme";

interface CustomButtonProps {
  type: "Primary" | "Secondary" | "Tertiary";
  text: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({
  type,
  text,
  onPress,
  buttonStyle,
  textStyle
}: CustomButtonProps) => (
  <TouchableOpacity
    style={[styles.button, styles[`button${type}`], buttonStyle ?? {}]}
    onPress={onPress}
  >
    <Text style={[styles.text, styles[`text${type}`], textStyle ?? {}]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonPrimary: {
    backgroundColor: theme.colors.glacier[400]
  },
  buttonSecondary: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.glacier[400]
  },
  buttonTertiary: {},
  text: { ...theme.fonts.h6 },
  textPrimary: { color: theme.colors.white },
  textSecondary: { color: theme.colors.glacier[700] },
  textTertiary: { color: theme.colors.glacier[700] }
});
