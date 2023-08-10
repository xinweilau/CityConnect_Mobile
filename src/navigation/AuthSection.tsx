import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function AuthSection() {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarLabelPosition: 'below-icon', headerShown: false }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeStack} />
        </Tab.Navigator>
    )
}