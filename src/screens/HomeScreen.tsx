import { SafeAreaView, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

import tw from 'twrnc';
import MyEnvironment from "../components/MyEnvironment";

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`flex flex-col w-full h-full `}>
            <View style={tw`flex flex-row pl-4 pr-8 py-8 gap-4`}>
                <Entypo name="location-pin" size={32} color="black" />
                <Text style={tw`text-3xl break-words`}>367 Clementi Avenue 2</Text>
            </View>
            <View style={tw`flex-1 w-full bg-white left-0 bottom-0 right-0 rounded-t-3xl flex flex-col items-center p-5 justify-between`}>
                <View style={tw`flex flex-col gap-4 bg-white w-full px-2 uppercase`}>
                    <MyEnvironment />
                </View>
            </View>
        </SafeAreaView>
    )
}
