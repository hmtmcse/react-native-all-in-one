import { View, Text } from 'react-native';
import {useColorScheme} from "nativewind";
import {AccordionPreview} from "./accordion-preview";

export default function Home() {
    const {colorScheme} = useColorScheme();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Home Page {colorScheme}
            </Text>
            <AccordionPreview/>
        </View>
    );
}