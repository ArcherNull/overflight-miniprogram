/// <reference types="@tarojs/taro" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}

declare namespace Types {
  export type methods =
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";

  export type Response<T> = {
    code: number;
    msg: string;
    data: T;
  };

  //请求得到或者请求失败都会采用promise封装
  export type RequestResult = {
    run(): Promise<void>;
  };

  export type tabItem = {
    title: string;
    children: JSX.Element;
  };

}
