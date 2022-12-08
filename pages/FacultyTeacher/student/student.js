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
      url: '/pages/FacultyTeacher/BasicInformation/BasicInformation?stuMessage='+JSON.stringify(this.data.stuMessage)
    })
  },
  goMade1(e){
    console.log(e.currentTarget.dataset.growmessagethis)
    this.setData({
      growMessageThis:e.currentTarget.dataset.growmessagethis
    })
    console.log(this.data.growMessageThis)
    wx.navigateTo({
      url: '/pages/ParentsStudents/make1/make1?growMessageThis='+JSON.stringify(this.data.growMessageThis) ,
    })
  },
  goDefine1(e){
    this.setData({
      growMessageThis:e.currentTarget.dataset.growmessagethis
    })
    console.log(this.data.growMessageThis)
    wx.navigateTo({
      url: '/pages/ParentsStudents/define1/define1?growMessageThis='+JSON.stringify(this.data.growMessageThis)
    })
  },
  goreport2(){
    this.setData({
      childMessage:this.data.stuMessage1
    })
    wx.redirectTo({
      url: '/pages/FacultyTeacher/report2/report2?childMessage='+this.data.childMessage,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options)
    let stuMessage1=JSON.parse(options.stuMessage)
    //接收传入的指定学生的参数
    console.log(stuMessage1)
    this.setData({
      stuMessage1:options.stuMessage,
      stuId:stuMessage1.stuId,
      stuName:stuMessage1.stuName,
      avatar:stuMessage1.avatar,
      sex:stuMessage1.sex
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

    console.log(getGrowthItem.data)
    let list1=[]
    let list2=[]
        for(var i=0;i<getGrowthItem.data.length;i++){
            if(getGrowthItem.data[i]['status']==2){
              list2.push(getGrowthItem.data[i])
            }else{
              list1.push(getGrowthItem.data[i])
            }
          }
  this.setData({
    growMessageOne:list1,
    growMessageLast:list2,
  })
  console.log(list1,list2)
    // this.setData({
    //   growMessage:getGrowthItem.data.reverse()
    // })
    // this.setData({
    //   growMessageOne:this.data.growMessage[0],
    //   growMessageLast:this.data.growMessage.slice(1)
    // })
    // console.log(this.data.growMessageLast)


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
