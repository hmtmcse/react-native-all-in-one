import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {componentMapping} from "@/screen/rnr-component/component-mapping";

const Stack = createNativeStackNavigator();

export default function RnrComponent() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            {componentMapping.map(component => (
                <Stack.Screen
                    key={component.url}
                    name={component.url}
                    component={component.component}
                    options={{ title: component.name }}
                />
            ))}
        </Stack.Navigator>
    );
}