// pages/HeadTeacher/myself/myself.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var app = getApp();
    app.editTabBar2()


    let getTeacherMessage= await request('/business/gradeTeacher/myInfo')
    this.setData({
      teacherMessage:Object.values(getTeacherMessage.data)[0]
    })
    console.log(this.data.teacherMessage)
    this.setData({
      img:this.data.teacherMessage[2]
    })
  },
  goTeacherMyMessage(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/teacher-my-message/teacher-my',
    })
  },
  async toseal(){
    let getseals= await request ('/business/seal/seals')
    console.log(getseals.data)
    if(getseals.data['个人印章']){
        wx.navigateTo({
          url: '/pages/FacultyTeacher/seal2/seal2',
        })
    }else{
      wx.navigateTo({
        url: '/pages/FacultyTeacher/seal1/seal1',
      })
    }
  },
  goSetup(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/setup/setup',
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