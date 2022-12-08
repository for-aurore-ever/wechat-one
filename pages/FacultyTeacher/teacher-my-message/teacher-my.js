// pages/teacher-my-message/teacher-my.js
import request from '../../../utils/request'
import config from '../../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherMessage:[]//我的详细信息
  },
  async goLogot(){
    let postLogout =await request('/logout',{},'POST')
    console.log(postLogout)
    wx.navigateTo({
      url: '/pages/FacultyTeacher/login/login',
    })
  },
  goChangePassword(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/cpass/cpass',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    //发送获取我的信息的请求
    let getTeacherMessage= await request('/business/gradeTeacher/myInfo')
    this.setData({
      teacherMessage:Object.values(getTeacherMessage.data)[0]
    })
    console.log(this.data.teacherMessage)
    this.setData({
      shenfen:this.data.teacherMessage.slice(3)
    })
    console.log(this.data.shenfen)
    let getUserId= await request('/getRoles')
    console.log(getUserId)
    this.setData({
      userId:getUserId.data.userId
    })
    console.log(this.data.userId)
  },
  hpic(){
        var that = this
          wx.chooseImage({
            count: 10,
            type: 'image',
            success (res) {
              // tempFilePath可以作为 img 标签的 src 属性显示图片
              const tempFilePaths = res.tempFiles[0]
              that.setData({ 
                tempFilePaths:res.tempFiles[0].path,
               })
            wx.uploadFile({
                url: config.host+`/system/user/profile/editAvatar/${that.data.userId}`, //真实的接口地址
                filePath:that.data.tempFilePaths,
                name: "avatarfile",
                header: {
                  Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
                  'content-type': 'multipart/form-data'
                },
                async success (res){
                  wx.reLaunch({
                    url: '/pages/FacultyTeacher/myself/myself',
                  })
                    //发送获取我的信息的请求
                  let getTeacherMessage= await request('/business/gradeTeacher/myInfo')

                  that.setData({
                    teacherMessage:Object.values(getTeacherMessage.data)[0]
                  })
                  console.log(that.data.teacherMessage)
                }
        })
   }} )
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