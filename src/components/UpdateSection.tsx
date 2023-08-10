import { FlatList, Text, View } from "react-native";
import tw from "twrnc";
import UpdateCard from "./UpdateCard";

const MOCK_RENOVATION = [
    {
        title: "Home Renovation",
        startDateTime: 1691679087144,
        duration: 180, // in minutes
    },
    {
        title: "Home Renovation 2",
        startDateTime: 1691679087144,
        duration: 240, // in minutes
    }
]

const MOCK_COMMUNITY = [
    {
        title: "Community Event",
        startDateTime: 1691679087144,
        duration: 180, // in minutes
    },
    {
        title: "NDP Celebration",
        startDateTime: 1691679087144,
        duration: 180, // in minutes
    }
]

export default function UpdateSection(props: UpdateSection) {
    return (
        <View style={tw`flex flex-col gap-2 mb-6`}>
            <Text style={tw`uppercase text-[#ACB1BF] font-bold`}>{`${props.type} updates`}</Text>
            <FlatList
                horizontal
                data={MOCK_RENOVATION}
                renderItem={({ item }) => <UpdateCard {...item} />}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

interface UpdateSection {
    type: 'renovation' | 'community';
}