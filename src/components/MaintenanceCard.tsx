import { Image, Text, View } from "react-native";
import tw from "twrnc";
import moment from "moment";

const pests = require("../../assets/pests.png");
const prune = require("../../assets/prune.png");

export default function MaintenanceCard(props: MaintenanceCardProps) {
    const getIconFromType = () => {
        switch (props.type) {
            case "pests":
                return pests;
            case "prune":
                return prune;
        }
    };

    return (
        <View style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 border border-[#DEDEDE]`}>
            <Image source={getIconFromType()} style={tw`w-16 h-full`} />
            <View>
                <Text style={tw`font-bold text-lg`}>{props.title}</Text>
                <Text style={tw`text-sm font-semibold text-gray-700`}>
                    {moment(props.startDateTime).format("DD MMM YYYY, hh:mm A")}
                </Text>
            </View>
        </View>
    )
}

interface MaintenanceCardProps {
    title: string;
    startDateTime: number;
    type: "pests" | "prune";
}
