import ComponentList from "@/screen/rnr-component/component-list";
import React from "react";
import RnrCard from "@/screen/rnr-component/rnr-card";

export type ComponentItem = {
    name: string;
    url: string;
    component: React.ComponentType<any>;
    isShow?: boolean
};


export const componentMapping: ComponentItem[] = [
    {name: 'All Listing', url: "component-list", component: ComponentList, isShow: false},
    {name: 'Card', url: "rnr-card", component: RnrCard, isShow: true},
]