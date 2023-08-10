import { FlatList, Text, View } from "react-native";
import tw from "twrnc";
import MaintenanceCard from "./MaintenanceCard";

const MOCK_DATA: MaintenanceCardProps[] = [
    {
        title: "Mosquito Spray",
        startDateTime: 1691679087144,
        type: "pests"
    },
    {
        title: "Tree Felling",
        startDateTime: 1691679087144,
        type: "prune",
    }
]


export default function MaintenanceSection() {

    return (
        <View style={tw`flex flex-col gap-2 mb-6`}>
            <Text style={tw`uppercase text-[#ACB1BF] font-bold`}>MAINTENANCES NEAR ME</Text>
            <FlatList
                horizontal
                data={MOCK_DATA}
                renderItem={({ item }) => <MaintenanceCard {...item} />}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

interface MaintenanceCardProps {
    title: string;
    startDateTime: number;
    type: "pests" | "prune";
}
