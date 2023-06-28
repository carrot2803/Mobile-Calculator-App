import { useState } from "react";
import { SafeAreaView, Switch } from "react-native";
import Board from "./components/Board";
import { ThemeContext, main } from "./constants/Styles";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [theme, setTheme] = useState("light");
	return (
		<ThemeContext.Provider value={theme}>
			<SafeAreaView style={theme === "light" ? main.container : [main.container, { backgroundColor: "black" }]}>
				<Switch
					value={theme === "dark"}
					onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
					trackColor={{ true: "#4B5EFC" }}
				/>
				<Board />
			</SafeAreaView>
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</ThemeContext.Provider>
	);
}
