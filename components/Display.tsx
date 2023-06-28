import React from "react";
import { key } from "../constants/Styles";
import { Text } from "react-native";
import { Colors } from "../constants/Colors";

export const Display = (result: number | null, fNum: string) => {
	if (result !== null) {
		const s = [key.firstNum, { color: Colors.result }];
		return <Text style={result < 99999 ? s : [s, { color: Colors.result }]}>{result?.toString()}</Text>;
	}
	if (fNum && fNum.length < 6) return <Text style={key.firstNum}>{fNum}</Text>;
	if (fNum === "") return <Text style={key.firstNum}>{"0"}</Text>;
	if (fNum.length > 5 && fNum.length < 8) return <Text style={[key.firstNum, { fontSize: 70 }]}>{fNum}</Text>;
	if (fNum.length > 7) return <Text style={[key.firstNum, { fontSize: 50 }]}>{fNum}</Text>;
};
