// pages/FacultyTeacher/seal/seal.js
// 我的印章
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },
  // 弹框
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {
  },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  goGrowth(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/growth/growth',
    })
  },
  goHonor1(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/honor1/honor1',
    })
  },
  goHonor2(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/honor2/honor2',
    })
  },
  goHonor3(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/honor3/honor3',
    })
  },
  goHonor4(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/honor4/honor4',
    })
  },
  goHonor5(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/honor5/honor5',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: async function (options) {
    let getseals= await request ('/business/seal/seals')
    console.log(getseals)

  },
  toseal1(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/seal2/seal2',
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

