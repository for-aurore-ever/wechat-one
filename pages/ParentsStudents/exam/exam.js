import config from '../../../utils/config'
import request from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储图片路径的数组
    imgs: [],
    studentId:'',
    growthKey:'',
    remark:''
  },
  goNext(){
    let growthKey=6
    wx.navigateTo({
      url: "/pages/ParentsStudents/active/active?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+growthKey
    })
  },
  goStart(){
    var that=this
    wx.uploadFile({
      filePath:that.data.imgs[0],
      name: 'file',
      url: config.host+`/business/growthItem/upload/${that.data.studentId}/${that.data.growthKey}/${that.data.remark}`,
      header: {
        Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'','content-type': 'multipart/form-data'
      },
      success(res) {
        console.log(res.data)
        if(res.data.code==200){
          wx.showToast({
            title: '上传成功!',
          })
        }else{
          let jingao=JSON.parse(res.data)
          console.log(jingao)
          wx.showToast({
            icon:"none",
            title: jingao.msg,
          })
        }
      },
      fail(err){
      }
    })
  },
  // 上传图片
  chooseImg: function (e) {
    this.setData({
      remark:e.currentTarget.dataset.remark
    })
    console.log(this.data)
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
  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    console.log(imgs)
    // var index = e.currentTarget.dataset.index;
    // console.log(e.currentTarget.dataset)
    // imgs.splice(index, 1);
    this.setData({
      imgs: []
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async  function (options) {
    this.setData({
      studentId:options.studentId,
      growthKey:options.growthKey,
      growthId:options.growthId
    })
    console.log(this.data)


    let {growthId,studentId}=this.data
    let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    console.log(getGrowReport)
    this.setData({
      growthItem:getGrowReport.data
    })
    console.log()
    this.setData({
      imgObj:this.data.growthItem[this.data.growthKey]
    })
    if(this.data.imgObj.status==1){
      // console.log(1111111111)
      // let imgs=this.data.imgObj.img1
      let imgs=config.host+'/getFile?name='+this.data.imgObj.img1
      this.setData({
        imgs:imgs
      })
    }
    console.log(this.data.imgs)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  goMeeting(){
    let remark=1
    wx.navigateTo({
      url: "/pages/ParentsStudents/tuku2/tuku2?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'$remark='+remark
    })
  },
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