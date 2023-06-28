import { createContext } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const ThemeContext = createContext("light");

export const main = StyleSheet.create({
	container: { flex: 1, backgroundColor: Colors.light, alignItems: "center", justifyContent: "flex-start" },
});

const s: any = { width: 72, height: 72, borderRadius: 24, justifyContent: "center", alignItems: "center", margin: 8 };

export const btn = StyleSheet.create({
	blue: { ...s, backgroundColor: Colors.blue },
	dark: { ...s, backgroundColor: Colors.btnDark },
	light: { ...s, backgroundColor: Colors.white },
	gray: { ...s, backgroundColor: Colors.btnGray },
	textLight: { fontSize: 32, color: Colors.white },
	textDark: { fontSize: 32, color: Colors.black },
});

const num: any = { color: Colors.gray, fontWeight: "200", alignSelf: "flex-end" };

export const key = StyleSheet.create({
	row: { maxWidth: "100%", flexDirection: "row" },
	btmView: { position: "absolute", bottom: 50 },
	firstNum: { fontSize: 96, ...num },
	secondNum: { fontSize: 40, ...num },
});
