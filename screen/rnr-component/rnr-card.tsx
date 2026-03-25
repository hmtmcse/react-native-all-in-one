import { View, Text } from 'react-native';
import {useColorScheme} from "nativewind";

export default function RnrCard() {
    const {colorScheme} = useColorScheme();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} className={"m-3"}>
            <Text>
                Card
            </Text>
        </View>
    );
}