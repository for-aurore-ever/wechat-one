// pages/ParentsStudents/tuku/tuku.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gomeeting(){
    wx.navigateTo({
      url: "/pages/ParentsStudents/meeting/meeting?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'&remark='+this.data.remark+'&userGallery='+this.data.userGallery+'&show='+this.data.show
    })
    console.log(this.data.show)
  },
  gotuStu(){
    wx.navigateTo({
      url: "/pages/ParentsStudents/tukuStu/tukuStu?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'&remark='+this.data.remark+'&gradeGallery='+this.data.gradeGallery
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options)
    this.setData({
      studentId:options.stuId,
      growthKey:options.growthKey,
      growthId:options.growthId,
      remark:options.remark,
      show:options.show
    })
    console.log(options)
    console.log(this.data)
    let {studentId}=this.data
    let getpico= await request(`/business/gallery/getPhotos`,{studentId})
    console.log(getpico.data)
    this.setData({
      gradeGallery:getpico.data.gradeGallery,
      userGallery:getpico.data.userGallery
    })
    console.log(this.data.gradeGallery,this.data.userGallery)
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