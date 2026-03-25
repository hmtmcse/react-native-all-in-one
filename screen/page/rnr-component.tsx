import React from "react";
import { FlashList } from "@shopify/flash-list";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { Text } from '@/components/ui/text';
import {Icon} from "@/components/ui/icon";
import {ChevronRight} from "lucide-react-native";
import {View} from "react-native";

const componentList = [
    {name: "Card"},
];

export default function RnrComponent() {
  return (
    <View className="flex-1 bg-background px-4 pt-3">
      <Text className="text-lg font-bold pb-4">
        Component List
      </Text>

        <FlashList
            data={componentList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Button
                    variant="outline"
                    size="lg"
                    unstable_pressDelay={100}
                    className={cn(
                        'dark:bg-background border-border flex-row justify-between rounded-none border-b-0 pl-4 pr-3.5',
                        index === 0 && 'rounded-t-lg',
                        index === componentList.length - 1 && 'rounded-b-lg border-b'
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