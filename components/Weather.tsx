import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default function Weather() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [weather, setWeather] = useState<any>(null);

    // Weather codes
    const weatherMap: Record<number, { status: string; icon: string }> = {
        0: { status: "Clear sky", icon: "☀️" },
        1: { status: "Mainly clear", icon: "🌤️" },
        2: { status: "Partly cloudy", icon: "⛅" },
        3: { status: "Overcast", icon: "☁️" },
        45: { status: "Fog", icon: "🌫️" },
        48: { status: "Depositing rime fog", icon: "🌫️" },
        51: { status: "Light drizzle", icon: "🌦️" },
        61: { status: "Slight rain", icon: "🌧️" },
        71: { status: "Slight snow fall", icon: "❄️" },
        95: { status: "Thunderstorm", icon: "⛈️" },
    };

    useEffect(() => {
        async function getCurrentWeather() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc);

            const { longitude, latitude } = loc.coords;
            console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);

            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const data = await res.json();
            setWeather(data.current_weather);
        }

        getCurrentWeather();
    }, []);


    if (!weather) {
        return <Text className="text-textSecondary">Loading weather...</Text>;
    }

    const temp = Math.round(weather.temperature);
    const code = weather.weathercode;
    const mapped = weatherMap[code] || { status: "Unknown", icon: "❔" };

    return (
        <View className='flex-row items-center space-x-2 mt-2'>
            <Text style={{ fontSize: 30, margin: 10 }}>{mapped.icon}</Text>
            <Text className='text-textSecondary text-2xl mt-4'>{temp}℃ {mapped.status}</Text>

        </View>
    );
}