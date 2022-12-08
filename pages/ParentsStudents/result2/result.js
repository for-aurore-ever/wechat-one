// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let suzhiReport = options.suzhiReport ? JSON.parse(options.suzhiReport) : []
    console.log(suzhiReport)
    if(suzhiReport){
      let list=[]
      for(var i=0;i<suzhiReport.length;i++){
        if(suzhiReport[i]!==''){
          list.push(suzhiReport[i])
        }
      }
      this.setData({
        suzhiReportList:list
      })
    }
    console.log(this.data.suzhiReportList.length)
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