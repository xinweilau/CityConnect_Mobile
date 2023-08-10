import { Image, Text, View } from "react-native";
import tw from "twrnc";

const sunny = require('../../assets/sunny.png');

export default function WeatherCard() {
    return (
        <View style={tw`border border-black border-[#666BD0] border-2 rounded-2xl`}>
            <View style={tw`absolute left-0 top-0 px-4 py-2 rounded-xl bg-[#666BD0] uppercase`}>
                <Text style={tw`font-bold text-white`}>Weather</Text>
            </View>
            <View style={tw`flex flex-row nowrap items-center px-8 mt-6 gap-4`}>
                <Image source={sunny} style={tw`w-24 h-24 my-2`} />
                <View>
                    <Text style={tw`font-bold text-xl`}>Sunny</Text>
                    <Text style={tw`text-lg font-semibold text-gray-700`}>34°</Text>
                </View>
            </View>

        </View>
    )
}
