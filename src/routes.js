import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from './pages/home'
import { Passwords } from './pages/password'

const tab = createBottomTabNavigator();

export function Routes() {
    <Tab.Navigator>
        <Tab.Screen
        name="home"
        component={Home}
        />
        <Tab.Screen
        name="password"
        component={Passwords}
        />
    </Tab.Navigator>
}