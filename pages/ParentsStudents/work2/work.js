// pages/word/word.js
Page({

  data: {
    //存储图片路径的数组
    //这就是我页面的图片
    imgs1: [],
  },
  //我写的字页面
  //只有一个上传图片的页面
  //上传图片
  chooseImg1: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs1 = this.data.imgs1;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs1: that.data.imgs1.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs1)
      }
    });
  },
  // 删除图片1
  deleteImg1: function (e) {
    var imgs1 = this.data.imgs1;
    console.log(e.currentTarget.dataset)
    var index1 = e.currentTarget.dataset.index;
    imgs1.splice(index1, 1);
    this.setData({
      imgs1: imgs1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let workImg = options.workImg ? JSON.parse(options.workImg) : []
    console.log(workImg[0]=='')
    if(workImg){
      let list=[]
      for(var i=0;i<workImg.length;i++){
        if(workImg[i]!==''){
          list.push(Object.values(workImg[i]))
        }
      }
      this.setData({
        workList:list
      })
    }
    console.log(this.data.workList)
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