import { useState } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import Styles from "./login.module.scss";
import MyTabs from "../../components/myTabs/myTabs";
import LoginPwd from "./components/loginPwd/loginPwd";
import LoginCode from "./components/loginCode/loginCode";

import Logo from "../../assets/hook.png";

export default () => {
  const [tabSelected, setTabSelected] = useState<number>(0);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  const tabItem = <AtButton>登录</AtButton>

  const onSubmit = () => {};
  const onReset = () => {};

  const pwdForm = (
    <View>
      123
      <LoginPwd onSubmit={onSubmit} onReset={onReset}></LoginPwd>
    </View>
  );
  const codeForm = (
    <LoginCode onSubmit={onSubmit} onReset={onReset}></LoginCode>
  );

  const tabList: Array<Types.tabItem> = [
    { title: "密码", children: pwdForm },
    { title: "验证码", children: tabItem },
  ];

  // 点击
  const tabsClick = (current: number) => {
    console.log("点击", current);
    setTabSelected(current);
  };

  const loginFun = () => {
    setLoginLoading(true);
    console.log("登录");
    setTimeout(() => {
      setLoginLoading(false);
    }, 2000);
  };

  return (
    <View className={Styles.login}>
      {/* logo */}
      <Image src={Logo} className={Styles.login_logo} mode='widthFix'></Image>

      {/* 登录表单 */}
      <MyTabs
        current={tabSelected}
        tabList={tabList}
        onClick={tabsClick}
      ></MyTabs>

      {/* 记住密码和忘记密码 */}

      {/* 登录 */}
      <AtButton
        loading={loginLoading}
        size='small'
        type='primary'
        onClick={loginFun}
      >
        登录
      </AtButton>
      {/* 去注册 */}
    </View>
  );
};
