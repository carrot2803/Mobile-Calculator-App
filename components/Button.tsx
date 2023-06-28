import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { btn, ThemeContext } from "../constants/Styles";

interface BtnProps {
	onPress: () => void;
	title: string;
	blue: boolean;
	gray: boolean;
}

export default function Btn({ title, onPress, blue, gray }: BtnProps) {
	const theme = useContext(ThemeContext);
	return (
		<TouchableOpacity
			style={blue ? btn.blue : gray ? btn.gray : theme === "light" ? btn.light : btn.dark}
			onPress={onPress}
		>
			<Text style={blue || gray ? btn.textLight : theme === "dark" ? btn.textLight : btn.textDark}>{title}</Text>
		</TouchableOpacity>
	);
}
