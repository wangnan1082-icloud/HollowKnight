//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '《空洞骑士》最早于 Steam 上推出，并在2018年登陆了 Switch 平台。本作是一款「银河恶魔城」类的平台动作冒险游戏，主角将在巨大的地下王国中探索冒险。凭借着丰富的内容，精妙的关卡设计和接连不断的免费更新，获得了玩家们的好评和喜爱。',
    userGuide: '新手指南',
    map: '地图',
    mapGuide: '地图攻略',
    dlcGuide: 'DLC攻略',
    collectGuide: '收集攻略',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    time:(new Date().toString())
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  timeTap: function () {
    console.log("111 time")
    wx.showToast({
      title: '已清除',
      icon: 'success'
    })
  },
})