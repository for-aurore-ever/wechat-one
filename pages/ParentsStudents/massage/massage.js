// pages/massage/massage.js
import config from '../../../utils/config'

import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ischoose:false,
    list:['11','555','666'],
    headteacherWord:'',
    currentIndex:-1
  },
  //点击我显示底部弹出框
  clickme: function () {
    this.showModal();
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
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
  hideModal: function () {
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
  choose(e){
    console.log(e)
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })

    let item=e.currentTarget.dataset.item
    console.log(item)
    this.setData({
      userId:item.userId
    })
  },
  async postChoose(){
    let {studentId,userId}=this.data
    console.log(this.data)
    let postChoose=await request('/business/comments/invite',{studentId,userId},'POST')
    console.log(postChoose)
    if(postChoose.code==200){
      wx.showToast({
        title: '邀请成功!',
      })
    }else{
      if(postChoose.msg=='已邀请过教师'){
        wx.showToast({
          icon:"none",
          title: '已邀请过教师，请勿重复邀请!',
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.setData({
      studentId:options.studentId,
      growthId:options.growthId,
      growthKey:options.growthKey
    })
    console.log(options)
    let {growthId,studentId}=this.data
    let getCourseMessage=await request (`/business/comments/getTeacherOptions/${studentId}`)
    this.setData({
      CourseMessage:getCourseMessage.data
    })
    console.log(this.data.CourseMessage)


    // let {growthId,studentId}=this.data
    let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    console.log(getGrowReport)
    this.setData({
      growthItem:getGrowReport.data
    })
    console.log(this.data.growthItem)
    console.log(this.data.growthKey)
    this.setData({
      imgObj:this.data.growthItem[this.data.growthKey]
    })
    console.log(this.data.imgObj)
    if(this.data.imgObj.status==1){
      this.setData({
        headteacherWord:this.data.growthItem['教师寄语']['教师寄语'],
        // teacherWord:this.data.growthItem['教师寄语']['任课教师寄语']
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