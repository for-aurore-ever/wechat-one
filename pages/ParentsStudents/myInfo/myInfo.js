// pages/myInfo/myInfo.js
import request from '../../../utils/request'
import config from '../../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myMeaasge:[],
    myMessageSrc:'',
    tempFilePaths:''
  },
  async goLogot(){
    let postLogout =await request('/logout',{},'POST')
    console.log(postLogout)
    wx.navigateTo({
      url: '/pages/FacultyTeacher/login/login',
    })
  },
  hpic(){
        var that = this
          wx.chooseImage({
            count: 10,
            type: 'image',
            success (res) {
              // tempFilePath可以作为 img 标签的 src 属性显示图片
              that.setData({ 
                tempFilePaths:res.tempFiles[0].path,
               })
            console.log(that.data.tempFilePaths)
            wx.uploadFile({
                url: config.host+`/system/user/profile/editAvatar/${that.data.userId}`, //真实的接口地址
                filePath:that.data.tempFilePaths ,
                name: "avatarfile",
                header: {
                  Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
                  'content-type': 'multipart/form-data'
                },
                async success (res){
                  that.onShow()
                  wx.reLaunch({
                    url: '/pages/ParentsStudents/my/my',
                  })
                  // //上传头像成功后，再次发送获取个人信息的请求

                }
        })
   }} )
},
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad:async function (options) {
     console.log('Bearer '+wx.getStorageSync('token'))
    //发送获取个人信息的请求
    let getMyMeaasge=await request('/business/gradeTeacher/myInfo')
    this.setData({
      myMeaasge:Object.values(getMyMeaasge.data)[0]
    })
    console.log(this.data.myMeaasge)
    //拼接使得可以将获取到的图片渲染到页面上
    // let myMessageSrc=config.host+'/getFile?name='+this.data.myMeaasge[2]
    this.setData({
      myMessageSrc:this.data.myMeaasge[2]
    })


    let getUserId= await request('/getRoles')
    console.log(getUserId)
    this.setData({
      userId:getUserId.data.userId
    })
    console.log(this.data.userId)
  },
  async onShow (){
    let getMyMeaasge=await request('/business/gradeTeacher/myInfo')
    this.setData({
      myMeaasge:Object.values(getMyMeaasge.data)[0]
    })
    this.setData({
      myMessageSrc:this.data.myMeaasge[2]
    })
  }
})