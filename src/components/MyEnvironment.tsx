import { FlatList, Text, View } from "react-native";
import tw from "twrnc";
import WeatherCard from "./WeatherCard";
import AirQualityCard from "./AirQualityCard";
import DengueCard from "./DengueCard";

export default function MyEnvironment() {
    const environments = [
        <WeatherCard />,
        <AirQualityCard />,
        <DengueCard />
    ];

    return (
        <View style={tw`flex flex-col gap-4`}>
            <Text style={tw`uppercase text-[#ACB1BF] font-bold`}>MY ENVIRONMENT • CLEMENTI</Text>
            <FlatList
                horizontal
                data={environments}
                renderItem={({ item }) => item}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
