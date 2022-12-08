// pages/make/make.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    childMessage:[],
    studentId:'',
    growthId:'',
    currentIndex:0
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  myFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    console.log(item)
    console.log(this.data)
    wx.navigateTo({
      url: "/pages/ParentsStudents/mind/mind?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  friendFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/friend/friend?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  mywordFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/myword/myword?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  myhomeworkFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/myhomework/myhomework?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  essayFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/essay/essay?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  examFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/exam/exam?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  activeFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/active/active?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  attainmentFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/attainment/attainment?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  massageFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/massage/massage?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  friendwordFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/friendword/friendword?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  myhonourFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/myhonour/myhonour?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
 semesterFn(e) {
  let item=e.currentTarget.dataset
  this.setData({
    growthKey:item.growthkey
  })
    wx.navigateTo({
      url: "/pages/ParentsStudents/semester/semester?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  growFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/grow/grow?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },
  personalityFn(e) {
    let item=e.currentTarget.dataset
    this.setData({
      growthKey:item.growthkey
    })
    wx.navigateTo({
      url: "/pages/ParentsStudents/personality/personality?studentId="+this.data.studentId+'&growthKey='+this.data.growthKey+'&growthId='+this.data.growthId
    })
  },



  async cChildMessage(e){
    let item =e.currentTarget.dataset.item
    this.setData({
      studentId:item.stuId,
      currentIndex:e.currentTarget.dataset.index
    })
    console.log(this.data.currentIndex)

    let {studentId}=this.data
    let getGrowthItem=await request(`/business/growth/${studentId}`)
    console.log(getGrowthItem)
    // this.setData({
    //   growMessage:getGrowthItem.data.reverse()
    // })
    // this.setData({
    //   growMessageOne:this.data.growMessage[0],
    // })
    // console.log(this.data.growMessageOne.growthId)
    // this.setData({
    //   growthId:this.data.growMessageOne.growthId
    // })  
    // console.log(this.data.growthId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var app = getApp()
    app.editTabBar();  
    let getChildMessage=await request('/business/busParentStudent/getMyChild')
    this.setData({
      childMessage:getChildMessage.data
    })
    console.log(getChildMessage)

    this.setData({
      studentId:this.data.childMessage[0].stuId
    })
    console.log(this.data.studentId)
    let {studentId}=this.data
    let getGrowthItem=await request(`/business/growth/${studentId}`)
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
    console.log(this.data.growMessageOne[0].growthId)
    this.setData({
      growthId:this.data.growMessageOne[0].growthId
    })    
    console.log(this.data.growMessageOne)

    // let {growthId,studentId}=this.data
    // let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    // console.log(getGrowReport)
  },
})