// pages/childInfo/childInfo.js
import config from '../../../utils/config'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:{},
    messageSrc:"",
    path:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.message)
    this.setData({
      message:JSON.parse(options.message)
    })
    console.log(this.data.message)
    // let messageSrc=config.host+'/getFile?name='+this.data.message['avatar']
    this.setData({
      messageSrc:this.data.message['avatar'],
      studentId:this.data.message.stuId
    })
    console.log(this.data.message)
  },

  hpic(){
        var that = this
          wx.chooseImage({
            count: 10,
            type: 'image',
            success (res) {
                that.setData({ 
                    tempFilePaths:res.tempFiles[0].path,
                   })
                console.log(that.data.studentId)
            wx.uploadFile({
                url: config.host+`/business/students/avatar/${that.data.studentId}`, //真实的接口地址
                filePath:that.data.tempFilePaths,
                name: "file",
                header: {
                  Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
                  'content-type': 'multipart/form-data'
                },
                async success (res){
                    wx.redirectTo({
                      url: '/pages/ParentsStudents/my/my',
                    })
                    let getChildMessage=await request('/business/busParentStudent/getMyChild')
                    that.setData({
                      childMessage1:getChildMessage.data
                    })
                    console.log(that.data.childMessage1)
                    for(var i=0;i<that.data.childMessage1.length;i++){
                      if(that.data.childMessage1[0]['stuId']==that.data.message.stuId){
                        let path=that.data.childMessage1[0]['avatar']
                        let messageSrc=config.host+'/getFile?name='+path
                          that.setData({
                            messageSrc:messageSrc,
                          })
                      }
                    }
                }
              })
          }} 
   )
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