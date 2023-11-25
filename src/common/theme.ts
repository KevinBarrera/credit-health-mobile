import { TextStyle } from "react-native";

const theme = {
  colors: {
    glacier: {
      50: "#f2f7f9",
      100: "#dfebee",
      200: "#c2d8df",
      300: "#97bcc9",
      400: "#7aa6b6",
      500: "#4a7d90",
      600: "#40677a",
      700: "#395665",
      800: "#354955",
      900: "#2f3e4a",
      950: "#1c2730"
    },
    white: "#ffffff",
    black: "#000000",
    info: "#40677a",
    success: "#66b576",
    warning: "#e4a53e",
    danger: "#f44336"
  },
  fonts: {
    h1: {
      fontSize: 44,
      fontWeight: "bold"
    } as TextStyle,
    h2: {
      fontSize: 38,
      fontWeight: "bold"
    } as TextStyle,
    h3: {
      fontSize: 32,
      fontWeight: "bold"
    } as TextStyle,
    h4: {
      fontSize: 26,
      fontWeight: "bold"
    } as TextStyle,
    h5: {
      fontSize: 20,
      fontWeight: "bold"
    } as TextStyle,
    h6: {
      fontSize: 14,
      fontWeight: "bold"
    } as TextStyle,
    t1: {
      fontSize: 44,
      fontWeight: "normal"
    } as TextStyle,
    t2: {
      fontSize: 38,
      fontWeight: "normal"
    } as TextStyle,
    t3: {
      fontSize: 32,
      fontWeight: "normal"
    } as TextStyle,
    t4: {
      fontSize: 26,
      fontWeight: "normal"
    } as TextStyle,
    t5: {
      fontSize: 20,
      fontWeight: "normal"
    } as TextStyle,
    t6: {
      fontSize: 14,
      fontWeight: "normal"
    } as TextStyle
  }
};

export { theme };
