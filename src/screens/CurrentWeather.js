import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({ weatherData }) => {
	const { wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description } = styles;

	const {
		main: { temp, feels_like, temp_max, temp_min },
		weather,
	} = weatherData;

	const weatherConditions = weather[0].main;

	return (
		<SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherConditions].backgroundColor }]}>
			<View style={container}>
				<Feather name={weatherType[weatherConditions].icon} size={100} color="white" />
				<Text style={tempStyle}>{temp}</Text>
				<Text style={feels}>{`Feels like ${feels_like}`}</Text>
				<RowText
					messageOne={`High: ${temp_max}`}
					messageTwo={`Low: ${temp_min}`}
					containerStyles={highLowWrapper}
					messageOneStyles={highLow}
					messageTwoStyles={highLow}
				/>
			</View>
			<RowText
				messageOne={weather[0].description}
				messageTwo={weatherType[weatherConditions].message}
				containerStyles={bodyWrapper}
				messageOneStyles={description}
				messageTwoStyles={styles.message}
			/>
		</SafeAreaView>
	);
};

const styles = {
	wrapper: {
		flex: 1,
		backgroundColor: "pink",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	tempStyle: {
		color: "black",
		fontSize: 48,
	},
	feels: {
		color: "black",
		fontSize: 30,
	},
	highLow: {
		color: "black",
		fontSize: 20,
	},
	highLowWrapper: {
		flexDirection: "row",
	},
	bodyWrapper: {
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingLeft: 25,
		marginBottom: 40,
	},
	description: {
		fontSize: 48,
	},
	message: {
		fontSize: 30,
	},
};

export default CurrentWeather;
