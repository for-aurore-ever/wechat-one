//import config from '../../../utils/config'
import request from '../../../utils/request'
// pages/ceshi2/ceshi2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    stuId:'',
    SubjectTeacherList:{},
    gradeId:'',
    subjectName:'',
    getSubjectTeacherlLst:{},
    userId:"",
    submit:{},
    currentIndex: false
  },
  // 弹框
  submit: function () {
    this.setData({
      showModal: true,
      showModalStatus:false 
    })
  },
  //取消弹框
  noSubmit:function(){
    this.setData({
      showModal: false
    })
  },

  // 底部下拉弹框的显示
  showModalTwo() {
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    //隐藏对话框
    hideModal () {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false
        })
      }.bind(this), 200)
    },
  async  clickme(e){
      this.showModalTwo()
// console.log(e.currentTarget.dataset.item.subjectName)
this.setData({
  subjectName:e.currentTarget.dataset.item.subjectName
})
console.log(this.data.subjectName)
let {subjectName}=this.data
let getSubjectTeacher = await request("/business/teacherManage/getSubjectTeacher",{subjectName})
console.log( getSubjectTeacher)
this.setData({
  getSubjectTeacherlLst:getSubjectTeacher.data
})
let {getSubjectTeacherlLst}=this.data
console.log(getSubjectTeacherlLst)
    },



  async noshowModalTwo(){
    this.setData({
      showModalStatus: false
    })
    // let submit=this.data.submit
    // console.log(submit)
// console.log(this.data.submit)
let {gradeId,subjectName,userId}=this.data
let changeGradeTeacher= await request ('/business/teacherManage/changeGradeTeacher',{gradeId: gradeId, teacher: { [subjectName]:userId} },'PUT') 
console.log(changeGradeTeacher)

  },




  async getSubjectT(e){

    
console.log(e.currentTarget.dataset.item.userId)
 this.setData({
  userId:e.currentTarget.dataset.item.userId
 })
 let {userId}=this.data
//  let {subjectName,submit}=this.data
//  console.log(submit)

// this.setData({
  
  
//   submit: {
//     gradeId: this.data.gradeId,
//     teacher: {
//       [subjectName]:userId
//     }
//   }
// })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let getLeadGrade=await request('/business/gradeTeacher/getLeadGrade')
     console.log( getLeadGrade.data[0])
     this.setData({
      gradeId:getLeadGrade.data[0]
     })
     console.log(this.data. gradeId)
     let { gradeId}=this.data 
    let getSubjectTeacher=await request (`/business/gradeTeacher/getGradeTeacher/${gradeId}`,{})
    console.log(getSubjectTeacher.data)
    this.setData({
      SubjectTeacherList:getSubjectTeacher.data
    })
    console.log( this.data.SubjectTeacherList)
    // let {SubjectTeacherList}=this.data 
  
  },
  subjectName(e){
    console.log(e)
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
  async ceshi(){
    let {stuId} = this.data;
    let result = await request('/business/students/',{stuId})
    if(result.code === 200){ // 登录成功
      wx.showToast({
        title: 'huoqucheng'
      })
  }
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