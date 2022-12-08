// pages/teacher-my-message/teacher-my.js
import config from '../../../utils/config'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getTeacherMessage:'',
    getfile:''
  },
  goChangePassword(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/cpass/cpass',
    })
  },
  hpic(){
    var that = this
      wx.chooseImage({
        count: 10,
        type: 'image',
        success (res) {
          // tempFilePath可以作为 img 标签的 src 属性显示图片
          const tempFilePaths = res.tempFiles[0]
          console.log(res.tempFiles)
          console.log(res.tempFiles[0].path)
          that.setData({ 
            tempFilePaths: tempFilePaths,
            res:res
           })
          console.log("11111111")
        wx.uploadFile({
            url: config.host+'/system/user/profile/avatar', //真实的接口地址
            filePath:res.tempFiles[0].path ,
            name: "avatarfile",
            header: {
              Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
              'content-type': 'multipart/form-data'
            },
            formData: {
              'user': 'test'
            },
            async success (res){
              let getTeacherMessage= await request('/business/gradeTeacher/myInfo')
              that.setData({
                teacherMessage:Object.values(getTeacherMessage.data)[0]
              })
              console.log(that.data.teacherMessage[2])

              // let getfile=config.host+'/getFile?name='+that.data.teacherMessage[2]
              console.log(getfile1)
              that.setData({
                getfile1:that.data.teacherMessage[2]
              })
              console.log(this.data.getfile1)
            }
          })
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async goLogot(){
    let postLogout =await request('/logout',{},'POST')
    console.log(postLogout)
    wx.navigateTo({
      url: '/pages/FacultyTeacher/login/login',
    })
  },
 async onLoad(options) {
    let getTeacherMessage= await request('/business/gradeTeacher/myInfo')
    this.setData({
      teacherMessage:Object.values(getTeacherMessage.data)[0]
    })
    console.log(this.data.teacherMessage[2])

    // let getfile=config.host+'/getFile?name='+this.data.teacherMessage[2]
    // console.log(getfile)
    this.setData({
      getfile1:this.data.teacherMessage[2]
    })
    console.log(this.data.getfile1)
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
