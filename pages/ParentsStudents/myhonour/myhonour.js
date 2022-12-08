// pages/myhonour/myhonour.js
import request from '../../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // list:[1,2,3]
    list:[],
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async  function (options) {
    console.log(options)
    this.setData({
      studentId:options.studentId,
      growthKey:options.growthKey,
      growthId:options.growthId
    })
    console.log(this.data)
    let {growthId,studentId}=this.data
    let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    console.log(getGrowReport)
    console.log(getGrowReport.data[8])
    this.setData({
      honors:getGrowReport.data[8]
    })
    console.log(this.data.list)
    if(this.data.honors['honor1']==1){
      this.setData({
        show:true
      })
      this.data.list.push(['/profile/static/images/zhuo.png'])
      this.setData({
        list:this.data.list
      })
      console.log(this.data.list)
    }
    if(this.data.honors['honor2']==1){
      this.setData({
        show:true
      })
      console.log('励志少年')
      this.data.list.push('/profile/static/images/lizhiMan.png')
      this.setData({
        list:this.data.list
      })
    }
    if(this.data.honors['honor3']==1){
      this.setData({
        show:true
      })
      console.log('模范少年')
      this.data.list.push('/profile/static/images/moStudent.png')
      this.setData({
        list:this.data.list
      })
    }
    if(this.data.honors['honor4']==1){
      this.setData({
        show:true
      })
      console.log('梦想领袖')
      this.data.list.push('/profile/static/images/memg.png')
      this.setData({
        list:this.data.list
      })
    }
    if(this.data.honors['honor5']==1){
      this.setData({
        show:true
      })
      console.log('文明学生')
      this.data.list.push('/profile/static/images/wenStudent.png')
      this.setData({
        list:this.data.list
      })
    }
  },
  goNext(){
    wx.navigateTo({
      url: '/pages/ParentsStudents/semester/semester',
    })
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