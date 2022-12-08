// pages/HeadTeacher/myself/myself.js
import config from '../../../utils/config'
import request from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    getfile:'',
    userId:'',
    
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  gosetup(){
    wx.navigateTo({
      url: '/pages/FacultyTeacher/setup/setup',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   async onLoad(options) {
    var app = getApp();
    app.editTabBar1();    //显示自定义的底部导航
    this.setData({
      userId:options.userId
    })
    console.log(this.data.userId)
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



  },
  goTeacherMyMessage(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/teacher-my-message/teacher-my',
    })
  },
  tostudent(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/stuManagement/stuManagement',
    })

  },
  tosendword(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/SendWord/SendWord',
    })
  },
  toseal(){
    wx.navigateTo({
      url: '/pages/HeadTeacher/seal/seal',
    })
  },
tostudenthonor2(){
  wx.navigateTo({
    url: '/pages/HeadTeacher/Studentshonor/Studentshonor',
  })
},
tophotos(){
  wx.navigateTo({
    url: "/pages/HeadTeacher/more/more"
  })
},
toadd_teachers_complete(){
  wx.navigateTo({
    url: '/pages/HeadTeacher/teacher-updata/teacher-updata',
  })
},
 togrow(){
  wx.navigateTo({
    url: '/pages/HeadTeacher/grow/grow',
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
    this.getTabBar().init()
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