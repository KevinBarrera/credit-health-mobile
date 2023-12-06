import { StyleSheet } from "react-native";

import { theme } from "../../../common/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: theme.colors.glacier[50],
    paddingHorizontal: 16,
    paddingTop: 80,
    paddingBottom: 16
  },
  headerContainer: {
    justifyContent: "center",
    marginBottom: 48
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 16
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: theme.colors.glacier[900]
  },
  title2: {
    fontSize: 58,
    fontWeight: "bold",
    color: theme.colors.black
  },
  mainAndIconContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
