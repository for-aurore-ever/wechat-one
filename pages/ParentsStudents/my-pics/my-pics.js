// pages/my-pics/my-pics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
  picclick(){
    var that=this
    wx.chooseImage({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        const tempFilePaths = res.tempFiles[0]
        console.log(res.tempFiles)
        console.log(tempFilePaths.path)
        that.setData({tempFilePaths})
      }
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