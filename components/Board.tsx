import * as React from "react";
import { View, Text } from "react-native";
import Btn from "./Button";
import { key } from "../constants/Styles";
import { Display } from "./Display";

export default function Board() {
	const [fNum, setFirst] = React.useState("");
	const [secondNum, setSecond] = React.useState("");
	const [operation, setOperation] = React.useState("");
	const [result, setResult] = React.useState<number | null>(null);

	const handleNumberPress = (buttonValue: string) => {
		if (fNum.length < 10) setFirst(fNum + buttonValue);
	};

	const handleOperationPress = (buttonValue: string) => {
		setOperation(buttonValue), setSecond(fNum), setFirst("");
	};

	const clear = () => {
		setFirst(""), setSecond(""), setOperation(""), setResult(null);
	};

	const getResult = () => {
		clear();
		if (operation === "+") setResult(parseInt(secondNum) + parseInt(fNum));
		else if (operation === "-") setResult(parseInt(secondNum) - parseInt(fNum));
		else if (operation === "*") setResult(parseInt(secondNum) * parseInt(fNum));
		else if (operation === "/") setResult(parseInt(secondNum) / parseInt(fNum));
		else setResult(0);
	};

	return (
		<View style={key.btmView}>
			<View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center" }}>
				<Text style={key.secondNum}>
					{secondNum}
					<Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>{operation}</Text>
				</Text>
				{Display(result, fNum)}
			</View>
			<View style={key.row}>
				<Btn title="C" gray onPress={clear} blue={false} />
				<Btn title="+/-" gray onPress={() => handleOperationPress("+/-")} blue={false} />
				<Btn title="％" gray onPress={() => handleOperationPress("％")} blue={false} />
				<Btn title="÷" blue onPress={() => handleOperationPress("/")} gray={false} />
			</View>
			<View style={key.row}>
				<Btn title="7" onPress={() => handleNumberPress("7")} blue={false} gray={false} />
				<Btn title="8" onPress={() => handleNumberPress("8")} blue={false} gray={false} />
				<Btn title="9" onPress={() => handleNumberPress("9")} blue={false} gray={false} />
				<Btn title="×" blue onPress={() => handleOperationPress("*")} gray={false} />
			</View>
			<View style={key.row}>
				<Btn title="4" onPress={() => handleNumberPress("4")} blue={false} gray={false} />
				<Btn title="5" onPress={() => handleNumberPress("5")} blue={false} gray={false} />
				<Btn title="6" onPress={() => handleNumberPress("6")} blue={false} gray={false} />
				<Btn title="-" blue onPress={() => handleOperationPress("-")} gray={false} />
			</View>
			<View style={key.row}>
				<Btn title="1" onPress={() => handleNumberPress("1")} blue={false} gray={false} />
				<Btn title="2" onPress={() => handleNumberPress("2")} blue={false} gray={false} />
				<Btn title="3" onPress={() => handleNumberPress("3")} blue={false} gray={false} />
				<Btn title="+" blue onPress={() => handleOperationPress("+")} gray={false} />
			</View>
			<View style={key.row}>
				<Btn title="." onPress={() => handleNumberPress(".")} blue={false} gray={false} />
				<Btn title="0" onPress={() => handleNumberPress("0")} blue={false} gray={false} />
				<Btn title="⌫" onPress={() => setFirst(fNum.slice(0, -1))} blue={false} gray={false} />
				<Btn title="=" blue onPress={() => getResult()} gray={false} />
			</View>
		</View>
	);
}
