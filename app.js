// app.js

App({

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //底部导航版本1  
  editTabBar: function() {
    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
    var curPageArr = getCurrentPages(); //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1]; //获取当前页面的对象
    var pagePath = curPage.route; //当前页面url
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }

    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true; //根据页面地址设置当前页面状态    
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  //底部导航版本2
  editTabBar1: function() {
    var curPageArr = getCurrentPages();
    var curPage = curPageArr[curPageArr.length - 1];
    var pagePath = curPage.route;
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }
    var tabBar = this.globalData.tabBar1;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  //底部导航版本3
  editTabBar2: function() {
    var curPageArr = getCurrentPages();
    var curPage = curPageArr[curPageArr.length - 1];
    var pagePath = curPage.route;
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }
    var tabBar = this.globalData.tabBar2;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  globalData: {
    userInfo: null,
     //版本1底部导航栏显示
     tabBar: {
      // "color": "#9E9E9E",
      "list": [
        {   
          "pagePath":"/pages/ParentsStudents/report1/report1",
          "text": "成长报告",
          "iconPath": "/static/images/photo1.png",
          "selectedIconPath": "/static/images/photo.png",
          "clas": "tab-item",
          // "selectedColor": "#4EDF80",
          active: true
        },
        {
          "pagePath": "/pages/ParentsStudents/make/make",
          // "text": "我的1",
          "iconPath": "/static/images/zu2.png",
          "selectedIconPath": "/static/images/zu1.png",
          // "selectedColor": "#4EDF80",
          "clas": "tab-item",
          active: false
        },
        {
          "pagePath": "/pages/ParentsStudents/my/my",
          "text": "我的",
          "iconPath": "/static/images/mine.png",
          "selectedIconPath": "/static/images/mine2.png",
          // "selectedColor": "#4EDF80",
          "clas": "tab-item",
          active: false
        }
      ],
      "position": "bottom"
    },
    //版本2底部导航栏显示
    tabBar1: {
      // "color": "#9E9E9E",
      "list": [   
        {
          "pagePath": "/pages/HeadTeacher/class/class",
          "text": "班级",
          "iconPath": "/static/images/xing.png",
          "selectedIconPath": "/static/images/xing1.png",
          "clas": "tab-item",
          // "selectedColor": "#2180ed",
          active: true
        },
        {
          "pagePath": "/pages/HeadTeacher/Statistics1/Statistics1",
          "text": "统计",
          "iconPath": "/static/images/tongji.png",
          "selectedIconPath": "/static/images/tojing1.png",
          // "selectedColor": "#2180ed",
          "clas": "tab-item",
          active: false
        },
        {
          "pagePath": "/pages/HeadTeacher/SendWordStart/SendWordStart",
          "text": "寄语",
          "iconPath": "/static/images/list1.png",
          "selectedIconPath": "/static/images/list.png",
          // "selectedColor": "#2180ed",
          "clas": "tab-item",
          active: false
        },
        {
          "pagePath": "/pages/HeadTeacher/myself/myself",
          "text": "我的",
          "iconPath": "/static/images/person1.png",
          "selectedIconPath": "/static/images/person.png",
          // "selectedColor": "#2180ed",
          "clas": "tab-item",
          active: false
        }
      ],
      "position": "bottom"
    },
    //版本2底部导航栏显示
    tabBar2: {
      // "color": "#9E9E9E",
      "list": [   
        {
          "pagePath": "/pages/FacultyTeacher/class/class",
          "text": "班级",
          "iconPath": "/static/images/xing.png",
          "selectedIconPath": "/static/images/xing1.png",
          "clas": "tab-item",
          // "selectedColor": "#2180ed",
          active: true
        },
        {
          "pagePath": "/pages/FacultyTeacher/SendWordStart/SendWordStart",
          "text": "寄语",
          "iconPath": "/static/images/list1.png",
          "selectedIconPath": "/static/images/list.png",
          // "selectedColor": "#2180ed",
          "clas": "tab-item",
          active: false
        },
        {
          "pagePath": "/pages/FacultyTeacher/myself/myself",
          "text": "我的",
          "iconPath": "/static/images/person1.png",
          "selectedIconPath": "/static/images/person.png",
          // "selectedColor": "#2180ed",
          "clas": "tab-item",
          active: false
        }
      ],
      "position": "bottom"
    }
  }
})
