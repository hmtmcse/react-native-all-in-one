import React from "react";
import { FlashList } from "@shopify/flash-list";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { Text } from '@/components/ui/text';
import {Icon} from "@/components/ui/icon";
import {ChevronRight} from "lucide-react-native";
import {View} from "react-native";
import {ComponentItem, componentMapping, RootStackParamList} from "./component-mapping";
import {NavigationProp, useNavigation} from "@react-navigation/native";


export default function ComponentList() {
    const visibleItems: ComponentItem[] = componentMapping.filter(item => item.isShow !== false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1 bg-background px-4 pt-3">
      <Text className="text-lg font-bold pb-4">
        Component List
      </Text>

        <FlashList
            data={visibleItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Button
                    variant="outline"
                    size="lg"
                    unstable_pressDelay={100}
                    onPress={() => navigation.navigate(item.url)}
                    className={cn(
                        'dark:bg-background border-border flex-row justify-between rounded-none border-b-0 pl-4 pr-3.5',
                        index === 0 && 'rounded-t-lg',
                        index === visibleItems.length - 1 && 'rounded-b-lg border-b'
                    )}>
                    <View>
                        <Text className="text-base font-normal">{item.name}</Text>
                    </View>
                    <Icon as={ChevronRight} className="text-muted-foreground size-4 stroke-[1.5px]"/>
                </Button>
            )}
            ListFooterComponent={<View className="android:pb-safe"/>}
        />
    </View>
  );
}