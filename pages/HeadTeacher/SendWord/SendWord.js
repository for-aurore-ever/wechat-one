// pages/HeadTeacher/SendWord/SendWord.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId:'',
    stuName:'',
    sex:'',
    comments:'',//评语
    gradeList:[],
    postId:{},
    stuMessage:{},
    grade:'',
    remark:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
async onLoad(options) {
  console.log(options)
  //获取寄语首页跳转过来的传参
  this.setData({
    studentId:JSON.parse(options.studentId),
    stuName:JSON.parse(options.stuName) ,
    sex:JSON.parse(options.sex),
    avatar:JSON.parse(options.avatar)
  })
  console.log(this.data.studentId)
  let getPostid=await request('/business/gradeTeacher/getGrade')
  let gradeList=getPostid.data
  let postId=getPostid.postId
  this.setData({
    gradeList:gradeList,
    postId:postId
  })
  console.log(this.data)

  let stuId=this.data.studentId
  let getBasicMessage=await request( `/business/students/${stuId}`)
  console.log(getBasicMessage)
  this.setData({
    stuMessage:getBasicMessage.data,
    grade:getBasicMessage.data['班级']
  })
  console.log(this.data.grade)

  },
  //点击确定发送请求
  async took(){
    console.log(this.data.postId)
    console.log(this.data.grade)
    let thispostId= this.data.postId[this.data.grade]
    console.log(thispostId)
    for(var i=0;i<thispostId.length;i++){
      if(thispostId[i]==1){
        this.setData({
          remark:0
        })
      }else{
        this.setData({
          remark:1
        })
      }
    }
    let {studentId,comments,remark}=this.data
    let postSenWordok=await request('/business/comments/confirm/remark', {studentId,comments,remark},'POST')
    console.log(postSenWordok)
    wx.navigateTo({
      url: '/pages/HeadTeacher/SendWordStart/SendWordStart'
    })
    console.log(this.data.comments)
  },
  goBasicInformation(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/BasicInformation/BasicInformation?stuMessage='+JSON.stringify(this.data.stuMessage),
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