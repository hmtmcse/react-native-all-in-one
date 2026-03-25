import { View, Text } from 'react-native';
import {useColorScheme} from "nativewind";

export default function Home() {
    const {colorScheme} = useColorScheme();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Home Page {colorScheme}
            </Text>
        </View>
    );
}