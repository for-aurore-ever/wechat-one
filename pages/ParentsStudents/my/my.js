// pages/my/my.js
import request from '../../../utils/request'
import config from '../../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myMeaasge:[],
    myMessageSrc:''
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  goMyInfo(){
    wx.navigateTo({
      url: '/pages/ParentsStudents/myInfo/myInfo',
    })
  },
  goMyChild(){
    wx.navigateTo({
      url: '/pages/ParentsStudents/myChild/myChild',
    })
  },
  goMyPics(){
    wx.navigateTo({
      url: `/pages/ParentsStudents/tuku2/tuku2?show=`+false,
    })
  },
  goSetup(){
    wx.navigateTo({
      url: '/pages/ParentsStudents/setup/setup',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var app = getApp()
    app.editTabBar();  
    let getMyMeaasge=await request('/business/gradeTeacher/myInfo')
    this.setData({
      myMeaasge:Object.values(getMyMeaasge.data)[0]
    })
    console.log(this.data.myMeaasge)
    // let myMessageSrc=config.host+'/getFile?name='+this.data.myMeaasge[2]
    this.setData({
      myMessageSrc:this.data.myMeaasge[2]
    })
    
  },
  submit1: function () {
        this.setData({
          showModal3: true,
        })
      },
      preventTouchMove: function () {
      },
      go: function () {
        this.setData({
          showModal3: false
        })
      },
      async deletePic(e){
        var list =this.data.list
        let index=e.currentTarget.dataset.index
        list.splice(index,1)
        this.setData({
          list:list
        })
        this.setData({
          showModal3: false
        })},
})