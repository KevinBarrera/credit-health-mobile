import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View
} from "react-native";

import { theme } from "../common/theme";

interface FormInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
}

function FormInput<T extends FieldValues>({
  control,
  name,
  ...textInputProps
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid }
      }) => (
        <View>
          <TextInput
            style={[styles.input, invalid && styles.invalid]}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            {...textInputProps}
          />
          {!!error?.message && (
            <Text style={styles.errorMessage}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
}

export default FormInput;

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.glacier[300],
    borderRadius: 8
  },
  invalid: {
    borderColor: theme.colors.danger
  },
  errorMessage: {
    ...theme.fonts.helperText,
    color: theme.colors.danger,
    marginTop: 4
  }
});
