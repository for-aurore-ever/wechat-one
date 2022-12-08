// pages/myChild/myChild.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    childMessage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: async function (options) {
    //发送获取我的孩子的列表的请求
    let getChildMessage=await request('/business/busParentStudent/getMyChild')
    this.setData({
      childMessage:getChildMessage.data
    })
    console.log(getChildMessage.data)
  },
  //点击获取当前选择的孩子的信息，并读出他的详细信息。
  //并带着这个信息跳转到详细信息的页面
  goChildInfo(e){
    // console.log(e.currentTarget.dataset.message)
    this.setData({
      message:e.currentTarget.dataset.message
    })
    console.log(this.data.message)
    wx.navigateTo({
      url: '/pages/ParentsStudents/childInfo/childInfo?message='+JSON.stringify(this.data.message) ,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})