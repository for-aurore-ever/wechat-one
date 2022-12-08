// SendWordStart/SendWordStart.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,//表示状态，0为未填写，1为已填写；默认状态是未填写
    statusMessage:[],//发送请求成功获取到的各个班级的名单
    gradeList:[],//班级列表
    gradeStudentList:[],//每个班级的学生列表
    studentId:'',//学生id
    stuName:'',
    sex:'',
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  ceshi(e){
     console.log(e) 
  },
  async onLoad(options) {
    var app = getApp();
    app.editTabBar1();    //显示自定义的底部导航
    let {status} =this.data
    // 发送获取已填写或者未填写的名单的请求
    let getSendWordStatus=await request('/business/comments/FillOutStatus',{status})
    console.log(getSendWordStatus.rows, 'getSendWordStatus')
    this.setData({
      statusMessage:getSendWordStatus.rows[0]
    })
    // 将获取到的数据的班级循环遍历放到一个数组中
    for(var i =0;i<this.data.statusMessage.length;i++){
      let gradeList=[]
      let gradeStudentList=[]
      gradeList.push(Object.keys(this.data.statusMessage[i]))
      gradeStudentList.push(Object.values(this.data.statusMessage[i]))
      this.setData({
        gradeList:gradeList[0],
        gradeStudentList:gradeStudentList
      })
      
    }

    console.log(this.data.gradeList, 'gradeList')
    console.log(this.data.gradeStudentList, 'gradeStudentList')
  },
  //点击完成学生信息的切换
  getStudentId(e){
    console.log(e.currentTarget.dataset)
    this.setData({
      studentId:e.currentTarget.dataset.item.stuId,
      stuName: e.currentTarget.dataset.item.stuName,
      sex:e.currentTarget.dataset.item.sex,
      avatar:e.currentTarget.dataset.item.avatar
    })
    console.log(this.data.studentId)
    //判断当前的状态是已填写还是未填写来跳转到不同的页面
    if(this.data.status==1){
      console.log(111)
      wx.navigateTo({
        url: '/pages/HeadTeacher/SendWordok/SendWordok?studentId='+JSON.stringify(this.data.studentId)+'&stuName='+JSON.stringify(this.data.stuName)+'&sex='+JSON.stringify(this.data.sex)+'&avatar='+JSON.stringify(this.data.avatar)
      })
    }else{
      wx.navigateTo({
        url: '/pages/HeadTeacher/SendWord/SendWord?studentId='+JSON.stringify(this.data.studentId)+'&stuName='+JSON.stringify(this.data.stuName)+'&sex='+JSON.stringify(this.data.sex)+'&avatar='+JSON.stringify(this.data.avatar)
      })
    }

  },
  //当点击时触发切换已填写或者未填写时触发这个函数
  async getStatus(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })
    //改变发送名单的请求时的状态
    this.setData({
      status:e.currentTarget.dataset.status
    })
    console.log(this.data.status)

     //发送获取已填写或者未填写的名单的请求
    let {status} =this.data
    let getSendWordStatus=await request('/business/comments/FillOutStatus',{status})
    console.log(getSendWordStatus.rows, 'getSendWordStatus')
    this.setData({
      statusMessage:getSendWordStatus.rows[0]
    })
    console.log(this.data.statusMessage[0])

    //将获取到的数据的班级循环遍历放到一个数组中
    for(var i =0;i<this.data.statusMessage.length;i++){
      let gradeList=[]
      let gradeStudentList=[]
      gradeList.push(Object.keys(this.data.statusMessage[i]))
      gradeStudentList.push(Object.values(this.data.statusMessage[i]))
      this.setData({
        gradeList:gradeList[0],
        gradeStudentList:gradeStudentList
      })

    }
    console.log(this.data.gradeList)
    console.log(this.data.statusMessage)
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