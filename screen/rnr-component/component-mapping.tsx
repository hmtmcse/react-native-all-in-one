import ComponentList from "@/screen/rnr-component/component-list";
import React from "react";

export type ComponentItem = {
    name: string;
    url: string;
    component: React.ComponentType<any>;
    isShow?: boolean
};


export const componentMapping: ComponentItem[] = [
    {name: 'All Listing', url: "component-list", component: ComponentList, isShow: false},
]