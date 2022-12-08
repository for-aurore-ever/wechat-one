// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],//保存选择的头像文件
    image: true//显示图标

  },
  yincang() {
    this.setData({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  picseal() {
    var that = this
    this.setData({
      //将图标隐藏
      image: false
    }),
      wx.chooseImage({
        count: 10,
        type: 'image',
        success (res) {
          // tempFilePath可以作为 img 标签的 src 属性显示图片
          const tempFilePaths = res.tempFiles[0]//规定只能选择一个文件
          console.log(res.tempFiles)//输出这个文件
          console.log(tempFilePaths.path)//输出文件路径
          that.setData({ tempFilePaths })//修改文件路径
        }
      })
  },
  took() {
    wx.redirectTo({
      url: '/pages/seal2/seal2'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})


