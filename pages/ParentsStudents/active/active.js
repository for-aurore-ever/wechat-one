// pages/mind/mind.js
import config from '../../../utils/config'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储图片路径的数组
    imgs1: [],
    imgs2: [],
    studentId:'',
    growthKey:'',
    remark:'',
    imgList:[]
  },
  goNext(){
    let growthKey=13
    wx.navigateTo({
      url: "/pages/ParentsStudents/attainment/attainment?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+growthKey
    })
  },
  goStart(){
    var that=this
    console.log(that.data.imgList)
    if(that.data.imgList.length!==2){
      wx.uploadFile({
        filePath:that.data.imgList[0][0],
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
          console.log(err.data)
        }
      })
    }else{
      for(var i=0;i<2;i++){
        that.setData({
          remark:i+1
        })
        wx.uploadFile({
          filePath:that.data.imgList[i][0],
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
            console.log(err.data)
          }
        })
      }
    }
  },
  
  goMeeting1(){
    let remark1=1
    wx.navigateTo({
      url: "/pages/ParentsStudents/tuku2/tuku2?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'&remark='+remark1
    })
  },
  goMeeting2(){
    let remark1=2
    wx.navigateTo({
      url: "/pages/ParentsStudents/tuku2/tuku2?studentId="+this.data.studentId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'&remark='+remark1
    })
  },
  // 上传图片
  chooseImg1: function (e) {
    this.setData({
      remark:e.currentTarget.dataset.remark
    })
    console.log(this.data)
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
        that.data.imgList.splice(0,1,res.tempFilePaths)
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs1: that.data.imgs1.concat(res.tempFilePaths)
        });
        console.log(that.data.imgList)
      }
    });
  },
  // 删除图片
  deleteImg1: function (e) {
    var imgs1 = this.data.imgs1;
    console.log(e.currentTarget.dataset)
    var index1 = e.currentTarget.dataset.index;
    imgs1.splice(index1, 1);
    this.data.imgList.splice(0,1)
    this.setData({
      imgs1: imgs1
    });
  },
  chooseImg2: function (e) {
    this.setData({
      remark:e.currentTarget.dataset.remark
    })
    console.log(this.data)
    var that = this;
    var imgs2 = this.data.imgs2;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.data.imgList.splice(1,1,res.tempFilePaths)
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs2: that.data.imgs2.concat(res.tempFilePaths)
        });
        console.log(that.data.imgList)
      }
    });
  },
  // 删除图片
  deleteImg2: function (e) {

    var imgs2 = this.data.imgs2;
    var index2 = e.currentTarget.dataset.index2;
    imgs2.splice(index2, 1);
    this.data.imgList.splice(1,1)
    this.setData({
      imgs2: imgs2
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.setData({
      studentId:options.studentId,
      growthKey:options.growthKey,
      growthId:options.growthId
    })
    console.log(options)



    let {growthId,studentId}=this.data
    let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    console.log(getGrowReport)
    this.setData({
      growthItem:getGrowReport.data
    })
    this.setData({
      imgObj:this.data.growthItem[this.data.growthKey]
    })
    console.log(this.data.imgObj)
     if(this.data.imgObj.status==1){
       // console.log(1111111111)
       // let imgs=this.data.imgObj.img1
       let imgs1=config.host+'/getFile?name='+this.data.imgObj.img1
       let imgs2=config.host+'/getFile?name='+this.data.imgObj.img2
       console.log(typeof this.data.imgs1)
      //  this.data.imgs1[0]=imgs1
       this.setData({
         "imgs1[0]":imgs1,
         "imgs2[0]":imgs2
       })
     }
     // console.log(1111111111)
       // let imgs=this.data.imgObj.img1
       let imgs1=config.host+'/getFile?name='+this.data.imgObj.img1
       let imgs2=config.host+'/getFile?name='+this.data.imgObj.img2
       console.log(typeof this.data.imgs1)
      //  this.data.imgs1[0]=imgs1
       this.setData({
         "imgs1[0]":imgs1,
         "imgs2[0]":imgs2
       })
     console.log(typeof this.data.imgs1)
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