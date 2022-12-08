// pages/HeadTeacher/meeting/meeting.js
import config from '../../../utils/config'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    galleryId:'',
    list:[],
    name:'',
    imgName:'',
    showModal3: false

  },
 async submit(){
  var that = this;
    wx.chooseImage({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        const tempFilePaths = res.tempFiles[0]
        console.log(res.tempFiles)
        console.log(res.tempFiles[0].path)
        that.setData({ 
          tempFilePaths: tempFilePaths
         })
        console.log("11111111")
        let {galleryId}=that.data
         wx.uploadFile({
            url: config.host+`/business/gallery/upload/${galleryId}`, //真实的接口地址
            filePath:res.tempFiles[0].path ,
            name: "file",
            header: {
              Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
              'content-type': 'multipart/form-data'
            },
            formData: {
              'user': 'test'
            },
            async success (res){
              // const data = res.data
              let {galleryId}=that.data
      let getpico= await request(`/business/gallery/${galleryId}`)
       console.log(getpico)
      let name=getpico.data
      that.setData({
        name:name
      })
            }
          })
      }
    })  
      },
  /**
   * 生命周期函数--监听页面加载
   */
 async onLoad(options) {
   console.log(this.options)
     this.setData({
      galleryId:this.options.galleryId
    })
    // console.log(galleryId)
//获取galleryid传参
  let getold= await request('/business/gradegallery')
  this.setData({
    getold:getold.data
  })
  console.log(getold.data)
  
  let {galleryId}=this.data
  let getpico= await request(`/business/gallery/${galleryId}`)
   console.log(getpico)
  let name=getpico.data
  this.setData({
    name:name
  })
  },
  getGradeId(e){
    console.log(e.currentTarget)
  },
  //  删除-弹框
   submit1: function () {
    this.setData({
      showModal3: true,
    })
  },
  preventTouchMove: function () {
  },
  go: function () {
    this.setData({
      showModal3: false
    })
  },
  async deletePic(e){
    var list =this.data.list
    let index=e.currentTarget.dataset.index
    list.splice(index,1)
    this.setData({
      list:list
    })
    this.setData({
      showModal3: false
    })

    // let deletePic = await request ('/business/gallery/deleteImage',{},'DELETE')
let{imgName}=this.data

    // let deletePic=await request('/business/gallery/deleteImage'+'/getFile?imgName='+imgName,{},'DELETE')
    let deletePic=await request('/business/gallery/deleteImage?imgName='+imgName,{},'DELETE')
    
    if(deletePic.code==200){
      let {galleryId}=this.data
      let getpico= await request(`/business/gallery/${galleryId}`)
       console.log(getpico)
      let name=getpico.data
      this.setData({
        name:name
      })
    }
  },
  delPic(e){
    console.log(e.currentTarget.dataset.item)
    this.setData({
      imgName:e.currentTarget.dataset.item
    
    })
    // console.log(imgName)
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