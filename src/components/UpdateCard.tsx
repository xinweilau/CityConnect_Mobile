import { Text, View } from "react-native";
import moment from "moment";
import tw from "twrnc";
import { formatTimePeriod } from "../utils/datetime";

export default function UpdateCard(props: UpdateCardProps) {
    return (
        <View style={tw`flex flex-col  gap-2 rounded-lg px-4 py-2 border border-[#DEDEDE]`}>
            <Text style={tw`text-lg font-bold`}>
                {props.title}
            </Text>
            <View style={tw`font-[#4B4B4B]`}>
                <Text style={tw`text-sm font-semibold text-gray-700`}>
                    {moment(props.startDateTime).format("DD MMMM YYYY")}
                </Text>
                <Text style={tw`text-sm font-semibold text-gray-700`}>
                    {`From ${formatTimePeriod(props.startDateTime, props.duration)}`}
                </Text>
            </View>
        </View>
    )
}

interface UpdateCardProps {
    title: string;
    startDateTime: number;
    duration: number;
}
