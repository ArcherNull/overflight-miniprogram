import { useState } from "react";
import { View, Image } from "@tarojs/components";
import { AtForm, AtInput } from "taro-ui";

import Styles from "./loginCode.module.scss";

interface Iprops {
  onSubmit(): void;
  onReset(): void;
}

export default (props: Iprops) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { onSubmit, onReset } = props;
  return (
    <AtForm className={Styles.loginCode} onSubmit={onSubmit} onReset={onReset}>
      <AtInput
        name='value'
        title='账号'
        type='text'
        placeholder='请输入账号名或手机号'
        value={username}
        onChange={(ele: string) => setUsername(ele)}
      />
      <AtInput
        name='value3'
        title='密码'
        type='password'
        placeholder='密码不能少于10位数'
        value={password}
        onChange={(ele: string) => setPassword(ele)}
      />
    </AtForm>
  );
};
