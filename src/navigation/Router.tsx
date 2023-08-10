import { NavigationContainer } from "@react-navigation/native";
import AuthSection from "./AuthSection";

export default function Router() {
    return (
        <NavigationContainer>
            <AuthSection />
        </NavigationContainer>
    )
}
