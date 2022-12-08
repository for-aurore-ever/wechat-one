// pages/HeadTeacher/SendWordok/SendWordok.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId:'',
    stuName:'',
    sex:'',
    comments:'',
    stuMessage:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options)
    this.setData({
      studentId:options.studentId,
      stuName:JSON.parse(options.stuName) ,
      sex:JSON.parse(options.sex),
      comments:options.comments,
      stuMessage:options.stuMessage,
      avatar:options.avatar
    })
    console.log(this.data.studentId)
    let {studentId}=this.data
    let getSendWordMessage=await request('/business/comments/chooseStudent',{studentId})
    console.log(777777777)
    console.log(getSendWordMessage)
    this.setData({
      comments:getSendWordMessage.comments
    })
    console.log(this.data.comments)


  let stuId=this.data.studentId
  let getBasicMessage=await request( `/business/students/${stuId}`)
  this.setData({
    stuMessage:getBasicMessage.data
  })
  },
  goBasicInformation(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/BasicInformation/BasicInformation?stuMessage='+JSON.stringify(this.data.stuMessage),
    })
  },
  goSendWork(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/SendWord/SendWord?studentId='+JSON.stringify(this.data.studentId)+'&stuName='+JSON.stringify(this.data.stuName)+'&sex='+JSON.stringify(this.data.sex)
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
