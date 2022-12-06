import Taro from "@tarojs/taro";

export const useRequest = {};

// 请求域名
const apiRoot = () => {
  if (process.env.NODE_ENV == "development") {
    return "https://test1.sdzk-sz.com/v4/admin/"; //  测试路径
  } else {
    return "https://sdzk-sz.com/v4/admin/"; // 正式路径
  }
};

// 请求
export function apiRequest(
  api: string,
  params?: any,
  method: Types.methods = "GET"
): Types.RequestResult {
  let baseUrl = apiRoot();

  return new Promise(function (resolve, reject) {
    Taro.request({
      url: baseUrl + api, //仅为示例，并非真实的接口地址
      data: params,
      method: method,
      header: {
        "content-type": "application/json", // 默认值
      },
      success: function (res: any) {
        console.log("请求到的数据", res.data);
        if (res.data.code == 0) {
          resolve(res.data.data);
        } else {
          reject(res.data.msg);
        }
      },
      fail: function (res: any) {
        reject(res);
      },
    });
  });
}
