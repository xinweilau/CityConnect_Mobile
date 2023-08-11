import { Image, Text, View } from "react-native";
import tw from "twrnc";

const air = require('../../assets/air-quality.png');

export default function WeatherCard() {
    return (
        <View style={tw`border border-[#2F6297] border-2 rounded-2xl`}>
            <View style={tw`absolute left-0 top-0 px-4 py-2 rounded-xl bg-[#2F6297] uppercase`}>
                <Text style={tw`font-bold text-white`}>Air Quality</Text>
            </View>
            <View style={tw`flex flex-row flex-nowrap items-center px-8 mt-6 gap-4`}>
                <Image source={air} style={tw`w-24 h-24 my-2`} />
                <View>
                    <Text style={tw`font-bold text-xl`}>Moderate</Text>

                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-lg font-semibold text-gray-700`}>PSI</Text>
                        <Text style={tw`text-lg font-semibold text-gray-700`}>25</Text>
                    </View>

                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-lg font-semibold text-gray-700`}>PM2.5</Text>
                        <Text style={tw`text-lg font-semibold text-gray-700`}>10</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
