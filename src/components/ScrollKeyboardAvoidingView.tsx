import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet
} from "react-native";

interface ScrollKeyboardAvoidingViewProps extends ScrollViewProps {
  children: ReactNode;
}

const ScrollKeyboardAvoidingView = ({
  children,
  ...scrollViewProps
}: ScrollKeyboardAvoidingViewProps) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView {...scrollViewProps}>{children}</ScrollView>
  </KeyboardAvoidingView>
);

export default ScrollKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
