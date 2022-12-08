// pages/report2/report2.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    childMessage:[],
    ismeImg:{},
    friendImg:[],
    currentIndex:0,
    currentIndex1:0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.childMessage)
    this.setData({
      childMessage:JSON.parse(options.childMessage)
    })
    console.log(this.data.childMessage)
    this.setData({
      studentId:this.data.childMessage[0].stuId
    })
    console.log(this.data.studentId)
  },
  async cChildMessage(e){
    let item =e.currentTarget.dataset.item
    this.setData({
      studentId:item.stuId,
      currentIndex:e.currentTarget.dataset.index
    })
    console.log(this.data.studentId)
  },
  goReport1(){
    console.log(this.data.childMessage)
    wx.redirectTo({
      url: '/pages/ParentsStudents/report1/report1?childMessage='+JSON.stringify(this.data.childMessage)
    })
  },
  async goIsme1(e){
    // console.log(e.currentTarget.dataset.itemkey)
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      ismeImg:getHistoryItem.data
    })
    console.log(this.data.ismeImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/isMe1/isMe1?ismeImg='+JSON.stringify(this.data.ismeImg),
    })
  },
  async goFriend(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      friendImg:getHistoryItem.data
    })
    console.log(this.data.friendImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/friend2/friend?friendImg='+JSON.stringify(this.data.friendImg),
    })
  },
  async goWord(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      wordImg:getHistoryItem.data
    })
    console.log(this.data.wordImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/word2/word?wordImg='+JSON.stringify(this.data.wordImg),
    })
  },
  async goWork(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      workImg:getHistoryItem.data
    })
    console.log(this.data.workImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/work2/work?workImg='+JSON.stringify(this.data.workImg),
    })
  },
  async goThing(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      thingImg:getHistoryItem.data
    })
    console.log(this.data.thingImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/thing2/thing?thingImg='+JSON.stringify(this.data.thingImg),
    })
  },
  async goPeper(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      paperImg:getHistoryItem.data
    })
    console.log(this.data.paperImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/paper2/paper?paperImg='+JSON.stringify(this.data.paperImg),
    })
  },
  async goActive(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    this.setData({
      activeImg:getHistoryItem.data
    })
    console.log(this.data.activeImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/activity2/activity?activeImg='+JSON.stringify(this.data.activeImg),
    })
  },
  async goSuzhiReport(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    // this.setData({
    //   activeImg:getHistoryItem.data
    // })
    // console.log(this.data.activeImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/result2/result?suzhiReport='+getHistoryItem.data
    })
  },
  async goTeacherWord(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    // this.setData({
    //   activeImg:getHistoryItem.data
    // })
    // console.log(this.data.activeImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/send2/send?send='+getHistoryItem.data,
    })
  },
  async goFriendWord(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    this.setData({
      friendWordImg:getHistoryItem.data
    })
    console.log(this.data.friendWordImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/friendWords2/friendWords?friendWordImg='+JSON.stringify(this.data.friendWordImg),
    })
  },
  async goHonor(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    this.setData({
      honorImg:getHistoryItem.data
    })
    console.log(this.data.honorImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/honour2/honour?honorImg='+JSON.stringify(this.data.honorImg),
    })
  },
  async goXiaoJie(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    this.setData({
      sumImg:getHistoryItem.data
    })
    console.log(this.data.sumImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/sum2/sum?sumImg='+JSON.stringify(this.data.sumImg),
    })
  },
  async goGrow(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    this.setData({
      growImg:getHistoryItem.data
    })
    console.log(this.data.growImg)
    wx.navigateTo({
      url: '/pages/ParentsStudents/contents2/contents?growImg='+JSON.stringify(this.data.growImg),
    })
  },
  async goPerson(e){
    this.setData({
      itemKey:e.currentTarget.dataset.itemkey
    })
    console.log(this.data.itemKey)
    let {studentId,itemKey}=this.data
    let getHistoryItem=await request('/business/growthItem/getHistoryItems',{studentId,itemKey})
    console.log(getHistoryItem)
    this.setData({
      personImg:getHistoryItem.data
    })
    console.log(this.data.personImg)
    // console.log(this.data.personImg['img1'])
    wx.navigateTo({
      url: '/pages/ParentsStudents/specific2/specific?personImg='+JSON.stringify(this.data.personImg),
    })
  },
  goSmall(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      currentIndex1:e.currentTarget.dataset.index
    })
    console.log(this.data.currentIndex1)
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