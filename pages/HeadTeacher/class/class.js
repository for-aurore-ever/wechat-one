// pages/HeadTeacher/class/class.js

import request from '../../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    gradeId:[],
    stuMessage:[],
    stu1:[],
    grade:'',
    currentIndex:0
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  goStudent(e){
    console.log(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/pages/HeadTeacher/student/student?stuMessage='+JSON.stringify(e.currentTarget.dataset.item)
    })
  },
  async changegrade (e){
    console.log(e.currentTarget.dataset)
    //接收传入的参数，将获取当前点击的班级tab的标识，并且获取其中的班级信息。
    let grade=e.currentTarget.dataset.grade
    console.log(grade)
    this.setData({
      grade:grade,
      currentIndex:e.currentTarget.dataset.index
    })
    //循环遍历班级列表，如果班级列表中有与当前点击的班级匹配，则显示改班级的学生列表
    let getStuId=await request(`/business/students/list/${grade}`)
    console.log(getStuId)
    this.setData({
      stu1:getStuId.data,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var app = getApp()
    app.editTabBar1()
    let getGradeId=await request(`/business/gradeTeacher/getGrade`)
    //将返回的班级列表保存
    this.setData({
      gradeId:getGradeId.data
    })
    console.log(this.data.gradeId)
    //发送获取学生列表的请求
    let {gradeId}=this.data
    var i=0
    //由于拿到的班级是一个列表形式，然而传参不能传一个列表所以要循环遍历传参。
    for (i=0;i<gradeId.length;i++){
      let gradeIdthis=gradeId[i]
      let getStuId=await request(`/business/students/list/${gradeIdthis}`)
      //遍历一次后在一个新的数组中放入每个班级的学生数组
      this.data.stuMessage.push(getStuId.data)
    }
    //stu1表示当前显示的学生列表，默认为第一个，动态展示。
    this.setData({
      stu1:this.data.stuMessage[0],
    })
    console.log(this.data.stu1)
    if(this.data.stu1.length!==0){
      let grade=this.data.stu1[0].gradeId
      this.setData({
        grade:grade
      })
    }
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
    this.getTabBar().init()
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