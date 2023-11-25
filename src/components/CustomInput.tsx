import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { theme } from "../common/theme";

interface CustomInputProps extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  ...otherProps
}: CustomInputProps) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    {...otherProps}
  />
);

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.glacier[300],
    borderRadius: 8
  }
});
