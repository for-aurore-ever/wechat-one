import request from '../../../utils/request'
import config from '../../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储图片路径的数组
    //这就是我页面的图片
    imgs: [],
    /*我的字页面的图片*/
    imgs1: [],
    /*我和我的伙伴页面第一张拍照 */
    imgs2: [],
    /*我和我的伙伴页面 第二张照片*/
    imgs3:[],
    /*我的作业页面图片 */
    imgs4:[],
    /*我的作文页面图片 */
    imgs5:[],
    /*我的试卷页面图片 */
    imgs6:[],
    /*我参加的活动 第一张照片 */
    imgs7:[],
    /*我参加的活动 第二张照片 */
    imgs8:[],
    /*我的学期小结 第一张照片*/
    imgs9:[],
    /*我的学期小结 第二张照片*/
    imgs10:[],
    /*我的学期小结 第二张照片*/
    imgs11:[],
    /*我的十能成长目录页面照片 */
    imgs12:[],
    imgs13:[],
    growMessageThis:{},
    suzhiReport:{},
    wordimg1:'',
    wordimg2:'',
    wordimg3:'',
    honorimg1:'',
    honorimg2:'',
    honorimg3:'',
    list:[]
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
    this.data.imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
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
    this.data.imgs1.splice(index1, 1);
    this.setData({
      imgs1: imgs1
    });
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
    this.data.imgs2.splice(index2, 1);
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
    this.data.imgs3.splice(index3, 1);
    this.setData({
      imgs3: imgs3
    });
  },



   /*我的作业页面 */
   //上传图片
   chooseImg4: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs4 = this.data.imgs4;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs4: that.data.imgs4.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs4)
      }
    });
  },
  // 删除图片1
  deleteImg4: function (e) {
    var imgs4 = this.data.imgs4;
    console.log(e.currentTarget.dataset)
    var index4 = e.currentTarget.dataset.index4;
    this.data.imgs4.splice(index4, 1);
    this.setData({
      imgs4: imgs4
    });
  },



   /*我的作文页面 */
   //上传图片
   chooseImg5: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs5 = this.data.imgs5;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs5: that.data.imgs5.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs5)
      }
    });
  },
  // 删除图片1
  deleteImg5: function (e) {
    var imgs5 = this.data.imgs5;
    console.log(e.currentTarget.dataset)
    var index5 = e.currentTarget.dataset.index5;
    this.data.imgs5.splice(index5, 1);
    this.setData({
      imgs5: imgs5
    });
  },
  

  /*我的试卷页面 */
   //上传图片
   chooseImg6: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs6 = this.data.imgs6;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs6: that.data.imgs6.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs6)
      }
    });
  },
  // 删除图片1
  deleteImg6: function (e) {
    var imgs6 = this.data.imgs6;
    console.log(e.currentTarget.dataset)
    var index6 = e.currentTarget.dataset.index6;
    this.data.imgs6.splice(index6, 1);
    this.setData({
      imgs6: imgs6
    });
  },


  
  /*我参加的活动 */
   //有两个上传图片的页面
   // 上传图片1
   chooseImg7: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs7 = this.data.imgs7;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs7: that.data.imgs7.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs7)
      }
    });
  },
  // 删除图片1
  deleteImg7: function (e) {
    var imgs7 = this.data.imgs7;
    console.log(e.currentTarget.dataset)
    var index7 = e.currentTarget.dataset.index7;
    this.data.imgs7.splice(index7, 1);
    this.setData({
      imgs7: imgs7
    });
  },
  // 上传图片2
  chooseImg8: function (e) {
    var that = this;
    var imgs8 = this.data.imgs8;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs8: that.data.imgs8.concat(res.tempFilePaths)
        });
      }
    });
  },
  // 删除图片2
  deleteImg8: function (e) {
    var imgs8 = this.data.imgs8;
    var index8 = e.currentTarget.dataset.index8;
    this.data.imgs8.splice(index8, 1);
    this.setData({
      imgs8: imgs8
    });
  },


  /*我的学期小结 */
  //有三个上传图片的页面
  // 上传图片1
  chooseImg9: function (e) {
    console.log(e.currentTarget.dataset)
    var that = this;
    var imgs9 = this.data.imgs9;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs9: that.data.imgs9.concat(res.tempFilePaths)
        });
        console.log(that.data.imgs9)
      }
    });
  },
  // 删除图片1
  deleteImg9: function (e) {
    var imgs9 = this.data.imgs9;
    console.log(e.currentTarget.dataset)
    var index9 = e.currentTarget.dataset.index;
    this.data.imgs9.splice(index9, 1);
    this.setData({
      imgs9: imgs9
    });
  },
  // 上传图片2
  chooseImg10: function (e) {
    var that = this;
    var imgs10 = this.data.imgs10;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs10: that.data.imgs10.concat(res.tempFilePaths)
        });
      }
    });
  },
  // 删除图片2
  deleteImg10: function (e) {
    var imgs10 = this.data.imgs10;
    var index10 = e.currentTarget.dataset.index10;
    this.data.imgs10.splice(index10, 1);
    this.setData({
      imgs10: imgs10
    });
  },
  // 上传图片3
  chooseImg11: function (e) {
    var that = this;
    var imgs11 = this.data.imgs11;
    wx.chooseImage({
      count: 1, //只能选择一个图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //concat将两个数组连接起来,imgs和获取的图片列表
          imgs11: that.data.imgs11.concat(res.tempFilePaths)
        });
      }
    });
  },
  // 删除图片3
  deleteImg11: function (e) {
    var imgs11 = this.data.imgs11;
    var index11 = e.currentTarget.dataset.index11;
    this.data.imgs11.splice(index11, 1);
    this.setData({
      imgs11: imgs11
    });
  },
  



  /*我的十能成长目录页面 */
 //上传图片
 chooseImg12: function (e) {
  console.log(e.currentTarget.dataset)
  var that = this;
  var imgs12 = this.data.imgs12;
  wx.chooseImage({
    count: 1, //只能选择一个图片
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      that.setData({
        //concat将两个数组连接起来,imgs和获取的图片列表
        imgs12: that.data.imgs12.concat(res.tempFilePaths)
      });
      console.log(that.data.imgs12)
    }
  });
},
// 删除图片1
deleteImg12: function (e) {
  var imgs12 = this.data.imgs12;
  console.log(e.currentTarget.dataset)
  var index12 = e.currentTarget.dataset.index12;
  this.data.imgs12.splice(index12, 1);
  this.setData({
    imgs12: imgs12
  });
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    console.log(options)
    //接受路由跳转传过来的值
    this.setData({
      growMessageThis:JSON.parse(options.growMessageThis)
    })
    console.log(this.data.growMessageThis)
    this.setData({
      growthId:this.data.growMessageThis.growthId,
      studentId:this.data.growMessageThis.studentId
    })
    console.log(this.data)
    //发送获取学生成长报告的请求
    let {growthId,studentId}=this.data
    let getGrowReport=await request('/business/growthItem/getItems',{growthId,studentId})
    console.log(getGrowReport)
    this.setData({
      growthItem:getGrowReport.data,
      seals:getGrowReport.data.seals
    })
    console.log(this.data.growthItem)
    console.log(this.data.seals)
    this.setData({
      growseal:this.data.seals['成长报告专用章']
    })
    console.log(this.data.growseal)
    //根据返回的数据进行处理后完成页面的铺设
    /*
    1.先判断状态是否是已完成的(1为已完成，0为未完成)。
    2.拿出其中的img。
    3.对img进行处理，为了能使拿到的图片能够渲染到页面上。
    4.重新对处理后的图片进行赋值。
    */
    if(this.data.growthItem[0]['status']==1){
      let imgsSrc=this.data.growthItem[0]['img1']
      let getfile=config.host+'/getFile?name='+imgsSrc
      this.setData({
        imgs:this.data.imgs.concat(getfile),
      })
    }
    if(this.data.growthItem[1]['status']==1){
      let imgsSrc2=this.data.growthItem[1]['img1']
      let imgsSrc3=this.data.growthItem[1]['img2']
      let getfile2=config.host+'/getFile?name='+imgsSrc2
      let getfile3=config.host+'/getFile?name='+imgsSrc3
      this.setData({
        imgs2:this.data.imgs2.concat(getfile2),
        imgs3:this.data.imgs3.concat(getfile3),
      })
    }
    if(this.data.growthItem[12]['status']==1){
      
      let imgsSrc1=this.data.growthItem[12]['img1']
      let getfile1=config.host+'/getFile?name='+imgsSrc1
      this.setData({
        imgs1:this.data.imgs1.concat(getfile1),
      })
    }
    if(this.data.growthItem[3]['status']==1){
      let imgsSrc4=this.data.growthItem[3]['img1']
      let getfile4=config.host+'/getFile?name='+imgsSrc4
      this.setData({
        imgs4:this.data.imgs4.concat(getfile4),
      })
    }
    console.log(this.data.imgs4)
    if(this.data.growthItem[4]['status']==1){
      let imgsSrc5=this.data.growthItem[4]['img1']
      let getfile5=config.host+'/getFile?name='+imgsSrc5
      this.setData({
        imgs5:this.data.imgs5.concat(getfile5),
      })
    }
    if(this.data.growthItem[5]['status']==1){
      let imgsSrc6=this.data.growthItem[5]['img1']
      let getfile6=config.host+'/getFile?name='+imgsSrc6
      this.setData({
        imgs6:this.data.imgs6.concat(getfile6),
      })
    }
    if(this.data.growthItem[6]['status']==1){
      let imgsSrc7=this.data.growthItem[6]['img1']
      let imgsSrc8=this.data.growthItem[6]['img2']
      let getfile7=config.host+'/getFile?name='+imgsSrc7   
      let getfile8=config.host+'/getFile?name='+imgsSrc8      

      this.setData({
        imgs7:this.data.imgs7.concat(getfile7),
        imgs8:this.data.imgs8.concat(getfile8),
      })
    }

      this.setData({
        suzhiReport:this.data.growthItem[13]
      })
      console.log(this.data.suzhiReport)
      if(this.data.growthItem[2]['status']==1){
        this.setData({
          headteacherWord:this.data.growthItem[2]['班主任寄语'],
          teacherWord:this.data.growthItem[2]['任课教师寄语']
        })
      }
      console.log(this.data.growthItem[2])
      if(this.data.growthItem[9]['status']==1){
        let imgsSrc9=this.data.growthItem[9]['img1']
        let imgsSrc10=this.data.growthItem[9]['img2']
        let imgsSrc11=this.data.growthItem[9]['img3']
        let getfile9=config.host+'/getFile?name='+imgsSrc9 
        let getfile10=config.host+'/getFile?name='+imgsSrc10   
        let getfile11=config.host+'/getFile?name='+imgsSrc11   
        this.setData({
          imgs9:this.data.imgs9.concat(getfile9),
          imgs10:this.data.imgs10.concat(getfile10),
          imgs11:this.data.imgs11.concat(getfile11),
        })
      }
      if(this.data.growthItem[10]['status']==1){
        let imgsSrc12=this.data.growthItem[10]['img1']
        this.setData({
          imgs12:this.data.imgs12.concat(imgsSrc12),
        })
      }
      if(this.data.growthItem[7]['status']==1){
        this.setData({
          wordimg1:config.host+'/getFile?name='+(this.data.growthItem[7]['img1']),
          wordimg2:config.host+'/getFile?name='+(this.data.growthItem[7]['img2']),
          wordimg3:config.host+'/getFile?name='+(this.data.growthItem[7]['img3']),
        })
        console.log(this.data.wordimg1)
      }
      console.log(this.data.growthItem[8])
      console.log(this.data.list[0])
      if(this.data.growthItem[8]['honor1']==1){
        this.setData({
          show:true
        })
        this.data.list.push(this.data.seals['卓越少年专用章'])
        this.setData({
          list:this.data.list
        })
        console.log(this.data.list)
      }
      if(this.data.growthItem[8]['honor2']==1){
        this.setData({
          show:true
        })
        console.log('励志少年')
        this.data.list.push(this.data.seals['励志少年专用章'])
        this.setData({
          list:this.data.list
        })
      }
      if(this.data.growthItem[8]['honor3']==1){
        this.setData({
          show:true
        })
        console.log('模范少年')
        this.data.list.push(this.data.seals['模范学生专用章'])
        this.setData({
          list:this.data.list
        })
      }
      if(this.data.growthItem[8]['honor4']==1){
        this.setData({
          show:true
        })
        console.log('梦想领袖')
        this.data.list.push(this.data.seals['梦想领袖专用章'])
        this.setData({
          list:this.data.list
        })
      }
      if(this.data.growthItem[8]['honor5']==1){
        this.setData({
          show:true
        })
        console.log('文明学生')
        this.data.list.push(this.data.seals['文明学生专用章'])
        this.setData({
          list:this.data.list
        })
      }
      if(this.data.growthItem[8]['status']==1){
        this.setData({
          honorimg1:config.host+'/getFile?name='+(this.data.growthItem[8]['img1']),
          honorimg2:config.host+'/getFile?name='+(this.data.growthItem[8]['img2']),
          honorimg3:config.host+'/getFile?name='+(this.data.growthItem[8]['img3']),
        })
      }
      console.log(this.data.teacherWord)
    console.log(this.data)
    if(this.data.growthItem[11]['status']==1){
      let imgsSrc13=this.data.growthItem[11]['img1']
      this.setData({
        imgs13:imgsSrc13,
      })
    }
  },
  ceshi(e){
    console.log(e)
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

