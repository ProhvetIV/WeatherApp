import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState([]);
	const [lat, setLat] = useState([]);
	const [lon, setLon] = useState([]);

	const fetchWeatherData = async () => {
		try {
			console.log("I'm fetching weather data");
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
			);
			const data = await response.json();
			setWeather(data);
		} catch (error) {
			setError(`Could not fetch weather`);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setError("permission to access location was denied");
				return;
			} else {
				console.log("it should work");
			}
			let location = await Location.getCurrentPositionAsync({});
			setLat(location.coords.latitude);
			setLon(location.coords.longitude);
			await fetchWeatherData();
		})();
	}, [lat, lon]);

	return [loading, error, weather];
};
