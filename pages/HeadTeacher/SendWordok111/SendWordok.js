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
    this.setData({
      studentId:options.studentId,
      stuName:JSON.parse(options.stuName) ,
      sex:JSON.parse(options.sex),
      comments:options.comments,
      stuMessage:options.stuMessage,
      avatar:JSON.parse(options.avatar)
    })
    console.log(this.data)
    let {studentId}=this.data
    let getSendWordMessage=await request('/business/comments/chooseStudent',{studentId})
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
      url: '/pages/HeadTeacher/BasicInformation/BasicInformation?stuMessage='+JSON.stringify(this.data.stuMessage),
    })
  },
  goSendWork(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/SendWord/SendWord?studentId='+JSON.stringify(this.data.studentId)+'&stuName='+JSON.stringify(this.data.stuName)+'&sex='+JSON.stringify(this.data.sex)
    })
  },
})
