import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import Styles from "./myTabs.module.scss";

interface Iprops {
  current: number;
  tabList: Array<Types.tabItem>;
  onClick(current:number): void;
}

const myTabs = (props: Iprops) => {
  const { current, tabList, onClick } = props;
  return (
    <AtTabs
      className={Styles.myTabs}
      scroll
      current={current}
      tabList={tabList}
      onClick={onClick}
    >
      {tabList?.length &&
        tabList.map((item: Types.tabItem, index) => {
          return (
            <AtTabsPane  current={current} index={index}>
              <View className={Styles.myTabs_content}>{item.children}</View>
            </AtTabsPane>
          );
        })}
    </AtTabs>
  );
};

export default myTabs;
