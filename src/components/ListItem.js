import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/WeatherType";
import moment from "moment/moment";

const ListItem = (props) => {
	const { dt_text, min, max, condition } = props;
	const { item, temp, date, dateTextWrapper } = styles;
	return (
		<View style={item}>
			<Feather name={weatherType[condition]?.icon} size={50} color={"white"} />
			<View style={dateTextWrapper}>
				<Text style={date}>{moment(dt_text).format("dddd")}</Text>
				<Text style={date}>{moment(dt_text).format("h:mm:ss a")}</Text>
			</View>
			<Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		borderWidth: 5,
		backgroundColor: "indianred",
	},
	temp: {
		color: "white",
		fontSize: 20,
	},
	date: {
		color: "white",
		fontSize: 15,
	},
	dateTextWrapper: {
		flexDirection: "column",
	},
});

export default ListItem;
