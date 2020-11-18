//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (option) {
    console.log(option.query)
    const eventChanel = this.getOpenerEventChannel()
    eventChanel.on('toData', function(data) {
      console.log(data)
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
