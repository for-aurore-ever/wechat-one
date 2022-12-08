// pages/HeadTeacher/student/student.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuName:'',
    stuId:'',
    grade:'',
    stuMessage:{}
  },
  goBasicInformation(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/BasicInformation/BasicInformation?stuMessage='+JSON.stringify(this.data.stuMessage)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options)
    //接收传入的指定学生的参数
    // console.log(options.stuId)
    this.setData({
      stuId:options.stuId,
      stuName:JSON.parse(options.stuName)
    })
    console.log(this.data.stuId)
    let {stuId} =this.data
    //发送指定学生基本信息的请求
    let getStudentMessage=await request(`/business/students/${stuId}`)
    console.log(getStudentMessage)
    console.log(getStudentMessage.data)
    this.setData({
      stuMessage:getStudentMessage.data
    })


    let getGrowthItem=await request(`/business/growth/${stuId}`)
    console.log(getGrowthItem)

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
