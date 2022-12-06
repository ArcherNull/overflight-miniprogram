export default {
  pages: [
    "pages/index/index",
    "pages/home/home"
  ],
  tabBar: {
    color: "#C1C2C5",
    selectedColor: "#1575F6",
    backgroundColor: "#F7F7F7",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "pages/index/index",
        text: "我的",
        iconPath: "./assets/tab_home.png",
        selectedIconPath: "./assets/tab_home_active.png",
      },
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "./assets/tab_my.png",
        selectedIconPath: "./assets/tab_my_active.png",
      },
    ],
  },
  subPackages: [
    {
      root: "pages/login",
      pages: ["login", "register/register", "forgetPwd/forgetPwd"],
    }
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#F5F6F7",
    backgroundColorTop: "#F5F6F7",
    backgroundColorBottom: "#F5F6F7",
    navigationBarTitleText: "自由之翼",
    navigationBarTextStyle: "black",
  },
};
