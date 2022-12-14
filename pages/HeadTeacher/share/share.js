// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

//点击我显示底部弹出框
clickme: function () {
  this.showModal();
},

//显示对话框
showModal: function () {
  // 显示遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  this.animation = animation
  animation.translateY(300).step()
  this.setData({
    animationData: animation.export(),
    showModalStatus: true
  })
  setTimeout(function () {
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export()
    })
  }.bind(this), 200)
},
//隐藏对话框
hideModal: function () {
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  this.animation = animation
  animation.translateY(300).step()
  this.setData({
    animationData: animation.export(),
  })
  setTimeout(function () {
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: false
    })
  }.bind(this), 200)
},
noshowModalTwo(){
  this.setData({
    showModalStatus: false
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
    // wx.showShareMenu({
    //   menus: ['shareAppMessage', 'shareTimeline'],
    //   success(res) {
    //     console.log(res)
    //   },
    //   fail(e) {
    //     console.log(e)
    //   }
    // })
    
  },
  
  onShareAppMessage(){
    
  },
  onShareTimeline(){
    
  },
  sharemenu(){
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
      // success(res) {
      //   console.log(res)
      // },
      fail(e) {
        console.log(e)
      }
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