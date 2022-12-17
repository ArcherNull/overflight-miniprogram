import { useState, useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";

import MyTabs from "../../components/myTabs/myTabs";
import Styles from "./index.module.scss";

const tabItem = <View>123123</View>;

const tabList: Array<Types.tabItem> = [
  { title: "标签页1", children: tabItem },
  { title: "标签页2", children: tabItem },
  { title: "标签页3", children: tabItem },
];

export default () => {
  const [tabSelected, tsetTabSelected] = useState<number>(0);

  // 点击
  const tabsClick = (current: number) => {
    console.log("点击", current);
    tsetTabSelected(current);
  };

  return (
    <View className={Styles.index}>
      <MyTabs
        current={tabSelected}
        tabList={tabList}
        onClick={tabsClick}
      ></MyTabs>
    </View>
  );
};
