// pages/HeadTeacher/gallery/gallery.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    galleryName:'',
    gradeId:[],
    galleryNamer:[],
  },
  // 弹框
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {
  },
  go: function () {
    this.setData({
      showModal: false
    })
  },


  // 跳转换到班级图库中更多
  morefn() {
    wx.navigateTo({
      url: "/pages/HeadTeacher/more/more"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
 onLoad:async function (options) {
  let getGradeId=await request(`/business/gradeTeacher/getGrade/`)
  //将返回的班级列表保存
  this.setData({
    gradeId:getGradeId.data[0]
  })
  console.log(this.data.gradeId[0])
  let getold= await request('/business/gradegallery')
  console.log(getold)
  this.setData({
    galleryName:getold.data.galleryName
  })
  let galleryNamer=[]
  for (var i=0;i<getold.data.length;i++){
    galleryNamer.push(getold.data[i].galleryName)
  }
  this.setData({
    galleryNamer:galleryNamer
  })
  console.log(galleryNamer)
  },
ceshi(e){
  console.log(e)
},
  async tophotos(){
    
    // 新建图库
    let  {galleryName}=this.data
    let {gradeId} =this.data
    let getnewclass= await request('/business/gradegallery',{gradeId, galleryName},'POST')
    console.log(getnewclass)
    let getold= await request('/business/gradegallery')
    console.log(getold)
    this.setData({
      showModal: false
    })

  },

  tomeeting() {
    wx.navigateTo({
      url: "/pages/HeadTeacher/meeting/meeting"
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
