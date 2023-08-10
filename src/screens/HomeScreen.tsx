import { SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { Entypo } from '@expo/vector-icons';

import tw from 'twrnc';
import EnvironmentSection from "../components/EnvironmentSection";
import MaintenanceSection from "../components/MaintenanceSection";
import UpdateSection from "../components/UpdateSection";

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`flex flex-col w-full h-full`}>
            <LinearGradient
                colors={['#6366F1', '#0EA5E9', '#10B981']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.3, 1]}
                style={tw`absolute w-full h-full`}
            />
            <View style={tw`flex flex-row pl-4 pr-8 py-8 gap-4 z-10`}>
                <Entypo name="location-pin" size={32} style={tw`text-red-400`} />
                <Text style={tw`text-2xl w-2/3 break-words font-bold text-white`}>367 Clementi Avenue 2</Text>
            </View>
            <View style={tw`flex-1 w-full bg-white left-0 bottom-0 right-0 rounded-t-3xl flex flex-col items-center p-5 justify-between`}>
                <View style={tw`flex flex-col gap-4 bg-white w-full px-2`}>
                    <EnvironmentSection />
                    <MaintenanceSection />
                    <UpdateSection type="renovation" />
                    <UpdateSection type="community" />
                </View>

            </View>
        </SafeAreaView>
    )
}
