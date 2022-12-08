// pages/define1/define1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储图片路径的数组
    //这就是我页面的图片
    imgs: [],
    /*我的字页面的图片*/
    imgs2: [],
    imgs3: [],
    // imgList:[]
  },
  

  //这就是我页面
  //只有一个上传图片的页面
  //上传图片
  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs: that.data.imgs.concat(res.tempFilePaths)
        });
      }
    });
  },
  //删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },



  //这就是我页面2
  //只有一个上传图片的页面
  //上传图片
  chooseImg2: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs2 = this.data.imgs2;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs2: that.data.imgs2.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs2)
      }
    });
  },
  // 删除图片1
  deleteImg2: function (e) {
    var imgs2 = this.data.imgs2;
    console.log(e.currentTarget.dataset)
    var index2 = e.currentTarget.dataset.index2;
    imgs2.splice(index2, 1);
    this.setData({
      imgs2: imgs2
    });
  },



//这就是我页面3
  //只有一个上传图片的页面
  //上传图片
  chooseImg3: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs3 = this.data.imgs3;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs3: that.data.imgs3.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs3)
      }
    });
  },
  // 删除图片1
  deleteImg3: function (e) {
    var imgs3 = this.data.imgs3;
    console.log(e.currentTarget.dataset)
    var index3 = e.currentTarget.dataset.index3;
    imgs3.splice(index3, 1);
    this.setData({
      imgs3: imgs3
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let ismeImg = options.ismeImg ? JSON.parse(options.ismeImg) : []
    console.log(ismeImg[0]=='')
    if(ismeImg){
      let list=[]
      for(var i=0;i<ismeImg.length;i++){
        if(ismeImg[i]!==''){
          list.push(Object.values(ismeImg[i]))
        }
      }
      this.setData({
        imgList:list
      })
    }
    console.log(this.data.imgList)
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

