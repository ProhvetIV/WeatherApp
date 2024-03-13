import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
	const renderItem = ({ item }) => (
		<ListItem
			key={item.dt_text}
			condition={item.weather[0].main}
			dt_text={item.dt_text}
			min={item.main.temp_min}
			max={item.main.temp_max}
		/>
	);
	//
	const { container, image } = styles;

	return (
		<SafeAreaView style={container}>
			<ImageBackground source={require("../../assets/thunderstorm-3625405_1920.jpg")} style={image}>
				<FlatList data={weatherData} renderItem={renderItem} _keyExtractor={(item) => item.dt_text} />
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "royalblue",
	},
	image: {
		flex: 1,
	},
});

export default UpcomingWeather;
