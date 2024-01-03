import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home'
import { Passwords } from './pages/password'
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        if (focused) {
                            return <Ionicons size={size} color={'black'} name="home" />
                        }
                        return <Ionicons size={size} color={'black'} name="home-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Password"
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        if (focused) {
                            return <Ionicons size={size} color={'black'} name="lock-closed" />
                        }
                        return <Ionicons size={size} color={'black'} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}