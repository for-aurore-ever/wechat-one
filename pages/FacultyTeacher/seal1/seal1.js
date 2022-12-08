// pages/FacultyTeacher/seal1/seal1.js
import config from '../../../utils/config'
import request from '../../../utils/request'
//个人印章初始页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],
    image:true,
    imgFile:'',
    res:{}

  },
  yincang(){
    this.setData({
     
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  picseal() {
    console.log(111)
    var that = this
    this.setData({
      image: false
    }),
      wx.chooseImage({
        count: 10,
        type: 'image',
        success (res) {
          that.setData({ 
            tempFilePaths: res.tempFiles[0].path,
           })
        }
      })
  },
 async took() {
  let {tempFilePaths}=this.data
  console.log(tempFilePaths)
  wx.uploadFile({
    url: config.host+'/business/seal/upload', //真实的接口地址
    filePath:tempFilePaths,
    name: "imgFile",
    header: {
      Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
      'content-type': 'multipart/form-data'
    },
    formData: {
      'user': 'test'
    },
    success (res){
      
    }
  })
    wx.redirectTo({
      url: '/pages/FacultyTeacher/seal2/seal2'
    })
  },
})
