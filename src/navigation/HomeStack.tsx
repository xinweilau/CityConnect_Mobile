import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const HomeStackNav = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <HomeStackNav.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <HomeStackNav.Screen name="Home" component={HomeScreen} />
        </HomeStackNav.Navigator>
    )
}
