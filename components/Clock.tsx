import { View, Text } from 'react-native';

export default function Clock() {
    const time = { hour: "numeric", minute: "numeric", second: "numeric", hour12: true}
    const date = { weekday: "long", month: "long", day: "numeric" }

    return (
        <View className="flex flex-col items-center justify-center">
            <Text className="text-textSecondary text-date font-light">{new Date().toLocaleDateString([], date)}</Text>
            <Text className="text-textSecondary text-clock font-light">{new Date().toLocaleTimeString([], time)}</Text>
        </View>
    )
}