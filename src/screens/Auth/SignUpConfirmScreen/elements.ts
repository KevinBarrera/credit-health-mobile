import { Platform, StatusBar, StyleSheet } from "react-native";

import { theme } from "../../../common/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: theme.colors.glacier[50],
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    paddingBottom: 16
  },
  safeContainer: {
    flex: 1,
    width: "100%",
    padding: 0
  },
  title: {
    ...theme.fonts.h1,
    textAlign: "center",
    color: theme.colors.glacier[950],
    marginVertical: 24
  },
  instructions: {
    ...theme.fonts.h6,
    color: theme.colors.glacier[700],
    paddingHorizontal: 32,
    textAlign: "center",
    marginBottom: 24
  },
  resendText: {
    paddingHorizontal: 56,
    textAlign: "center"
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  }
});
