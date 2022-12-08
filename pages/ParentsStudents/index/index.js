Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /*我的*/
  my(){
    wx.navigateTo({
      url: '/pages/my/my',
    })
  },
  /*我的信息*/
  myInfo(){
    wx.navigateTo({
      url:"/pages/myInfo/myInfo",
    })
  },
  /*我的孩子*/
  myChild(){
    wx.navigateTo({
      url: '/pages/myChild/myChild',
    })
  },
  /*身份验证*/
  id(){
    wx.navigateTo({
      url: '/pages/id/id',
    })
  },
  /*核实信息*/
  check(){
    wx.navigateTo({
      url: '/pages/check/check',
    })
  },
  /*添加孩子审核中*/
  addPass(){
    wx.navigateTo({
      url: '/pages/addPass/addPass',
   })  
  },
  /*添加孩子审核未通过*/
  addNoPass(){
    wx.navigateTo({
      url: '/pages/addNopass/addNopass',
    })
  },
  /*孩子信息*/
  childInfo(){
    wx.navigateTo({
      url: '/pages/childInfo/childInfo',
    })
  },
  /*成长报告-模块一*/
  report1(){
    wx.navigateTo({
      url: '/pages/report1/report1',
    })
  },
  /*成长报告-模块二*/
  report2() {
    wx.navigateTo({
      url: '/pages/report2/report2',
    })
  },
  /*形式一-制作中*/
  make1(){
     wx.navigateTo({
       url: '/pages/make1/make1',
     })
  },
  /*形式二-制作中*/
  make2() {
    wx.navigateTo({
      url: '/pages/make2/make2',
    })
  },
  /*添加音乐*/
  music(){
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },
  /*分享*/
  share() {
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },
  /*形式一-以定稿*/
  define1(){
    wx.navigateTo({
      url: '/pages/define1/define1',
    })
  },
  /*形式二-以定稿*/
  define2() {
    wx.navigateTo({
      url: '/pages/define2/define2',
    })
  },
  /*形式一-这就是我*/
  isMe1(){
    wx.navigateTo({
      url: '/pages/isMe1/isMe1',
    })
  },
  /*形式二-这就是我*/
  isMe2() {
    wx.navigateTo({
      url: '/pages/isMe2/isMe2',
    })
  },
  /*book*/
  book() {
    wx.navigateTo({
      url: '/pages/book-mode/book-mode',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
