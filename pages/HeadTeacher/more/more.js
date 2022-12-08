// pages/more/more.js
import request from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showModal2: false,
    showModal3:false,
    showModal4: false,
    galleryName:'',
    gradeId:[],
    galleryId:[],
    galleryNamer:[],
    galleryName1:"",
    list:[],
    galleryId11:[],
    
  },
  // 重命名-弹框
  submit2: function () {
    this.setData({
      showModal2: true,
      showModal: false
    })
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
  preventTouchMove2: function () {
  },
  go2: function () {
    this.setData({
      
    })
  },
  // 删除-弹框
  submit1: function () {
    this.setData({
      showModal3: true,
      showModal: false
    })
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
  preventTouchMove: function () {
  },
  go: function () {
    this.setData({
      showModal3: false
    })
  },
  //点击我显示底部弹出框
  clickme: function (e) {
    let item=e.currentTarget.dataset.item
      this.setData({
        galleryName:item.galleryName,
        galleryId:item.galleryId
      })
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
  // 弹框
  submit: function () {
    this.setData({
      showModal4: true
    })
  },
  preventTouchMove: function () {
  },
  go3() {
    this.setData({
      showModal4: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getGradeId(e){
    console.log(e.currentTarget.dataset.item.galleryId)
    this.setData({
      galleryId11:e.currentTarget.dataset.item.galleryId
      
    })
    wx.navigateTo({
      url: "/pages/HeadTeacher/meeting/meeting?galleryId="+this.data.galleryId11
    })
    // console.log(this.data.galleryId11)
  },
  onLoad:async function (options) {
    let getGradeId=await request(`/business/gradeTeacher/getGrade`)
    //将返回的班级列表保存
    this.setData({
      gradeId:getGradeId.data[1]
    })
    // console.log(this.data.gradeId[0])
    let getold= await request('/business/gradegallery')
    this.setData({
      list:getold.data
    })
    console.log(getold)
    this.setData({
      galleryName:getold.data.galleryName,
    })
    let galleryNamer=[]
    for (var i=0;i<getold.length;i++){
      galleryNamer.push(getold.data[i].galleryName)
    }
    this.setData({
      galleryNamer:galleryNamer
    })
    console.log(galleryNamer)

    },
    async tophotos(){
      
      // 新建图库
      let  {galleryName}=this.data
      let {gradeId} =this.data
      let getnewclass= await request('/business/gradegallery',{gradeId, galleryName},'POST')
      console.log(getnewclass)
      let getold= await request('/business/gradegallery')
      this.setData({
        list:getold.data,
      })
      this.setData({
        showModal: false,
        showModal4: false
      })
      this.setData({
        hidden:true
      })
  
    },
    // getItem(e){
      // let item=e.currentTarget.dataset.item
      // this.setData({
      //   galleryName:item.galleryName,
      //   galleryId:item.galleryId
      // })
      // this.showModal();
     
      // this.setData({
      //   galleryName:''
      // })
    // },
    async chong(){
      let {galleryId,galleryName}=this.data
      
      let getnewname =await request('/business/gradegallery',{galleryId, galleryName},'PUT')
      console.log(getnewname)
      let getold= await request('/business/gradegallery')
      this.setData({
        list:getold.data
      })
      console.log(getold)
      this.setData({
        galleryName:''
      })
      this.setData({
        showModal2: false
      })
      console.log( typeof this.data.galleryId)
    },

    async deletePic(e){
      let {galleryId}=this.data
      console.log(this.data.galleryId)
      let deletePic=await request(`/business/gradegallery/${galleryId}`,{},'DELETE')
      console.log(deletePic)
      let getold= await request('/business/gradegallery')
      var list =this.data.list
      let index=e.currentTarget.dataset.index
      list.splice(index,1)
      this.setData({
        list:list
      })
      this.setData({
        list:getold.data,
      })
      this.setData({
        showModal3: false
      })
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




