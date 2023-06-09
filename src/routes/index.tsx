import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="home" component={Home} />
                <Screen name="register" component={Register} />
            </Navigator>
        </NavigationContainer>
    );
}