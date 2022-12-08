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
    showModal3: false,
    imgName1:'',
    show:true
  },
 async submit(){
  var that = this;
    wx.chooseImage({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        that.setData({ 
          tempFilePaths: res.tempFiles[0].path
         })
         wx.uploadFile({
            url: config.host+`/business/gallery/upload`, //真实的接口地址
            filePath:that.data.tempFilePaths,
            name: "file",
            header: {
              Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
              'content-type': 'multipart/form-data'
            },
            formData: {
              'user': 'test'
            },
            async success (res){
              const data = res.data
              let {studentId}=that.data
              let getpico= await request(`/business/gallery/getPhotos`,{studentId})
              console.log(getpico)
             let name=getpico.data.userGallery
             that.setData({
               name:name
             })
             let getfile=[]
             for (var i=0;i<name.length;i++){
                 getfile.push(name[i])
                 that.setData({
                  userGallery:getfile
                 })
             }
            }
          })
      }
    })  
},
  /**
   * 生命周期函数--监听页面加载
   */
  async getImgName(e){
    console.log(e.currentTarget.dataset.item)
    this.setData({
      imgName1:e.currentTarget.dataset.item
    })
    let remark=1
    let {studentId,growthKey,imgName1}=this.data
    let path=imgName1
    let postPic=await request(`/business/growthItem/writeGrowthByGallery?studentId=`+studentId+'&growthKey='+growthKey+'&remark='+remark+'&path='+path,{studentId,growthKey,remark,path},'POST')
    console.log(postPic)
    if(postPic.code==200){
      wx.showToast({
        title: '上传成功',
      })
      setTimeout(() => {
        wx.reLaunch({
          url: '/pages/ParentsStudents/make/make',
        })
      }, 500);
      
    }else{
      wx.showToast({
        icon:"none",
        title:'上传失败,请重新上传！'
      })
    }
  },
 async onLoad(options) {
   console.log(options)
   this.setData({
    studentId:options.studentId,
    growthKey:options.growthKey,
    growthId:options.growthId,
    remark:options.remark,
    show:options.show
  })
  let {studentId}=this.data
  let getStudentPic=await request(`/business/gallery/getPhotos`,{studentId},'GET')
  if(getStudentPic.code==200){
    this.setData({
      stuPicList:getStudentPic.data
    })
  }
  this.setData({
    userGallery:this.data.stuPicList['userGallery'],
  })
  },
   // 删除-弹框
   submit1: function (e) {
    console.log(e.currentTarget.dataset.item)
    this.setData({
      imgName:e.currentTarget.dataset.item
    })
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
    console.log(e.currentTarget.dataset)
    let {imgName}=this.data
    let deletePic=await request('/business/gallery/deleteImage?imgName='+imgName,{},'DELETE')
    console.log(deletePic)
    if(deletePic.code==200){
      let {studentId}=this.data
      let getpico= await request(`/business/gallery/getPhotos`,{studentId})
      console.log(getpico)
      let userGallery=getpico.data.userGallery
      this.setData({
        userGallery:userGallery
      })
    }
    this.setData({
      showModal3: false
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
