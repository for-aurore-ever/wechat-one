// pages/activity/activity.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    /*我和我的伙伴页面的图片*/
    imgs2: [],
    imgs3: [],
  
  },
  /*我和我的伙伴页面 */
   //有两个上传图片的页面
   // 上传图片1
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
  // 上传图片2
  chooseImg3: function (e) {
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
      }
    });
  },
  // 删除图片2
  deleteImg3: function (e) {
    var imgs3 = this.data.imgs3;
    var index3 = e.currentTarget.dataset.index3;
    imgs3.splice(index3, 1);
    this.setData({
      imgs3: imgs3
    });
  },
  chunk(arr, size) {
    var arr1=new Array();
    for (var i = 0; i < Math.ceil(arr.length/size); i++) {
      arr1[i]=new Array();
    }
    var j=0;
    var x=0;
    for (var i = 0; i < arr.length; i++) {
      if(!((i%size==0)&&(i!=0))){
        arr1[j][x]=arr[i];
        x++;
        console.log("j="+j+"  "+"x="+x);
      }else{
        j++;
        x=0;
        console.log("else:"+"j="+j+"  "+"x="+x);
        arr1[j][x]=arr[i];
        console.log(arr1);
        x++;
      }
    }
  return arr1;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let activeImg = options.activeImg ? JSON.parse(options.activeImg) : []
    console.log(activeImg)
    if(activeImg){
      let list=[]
      for(var i=0;i<activeImg.length;i++){
        if(activeImg[i]!==''){
          list.push(Object.values(activeImg[i]))
        }
      }
      this.setData({
        activeList:list
      })
    }
    console.log(this.data.activeList)


  },
})

