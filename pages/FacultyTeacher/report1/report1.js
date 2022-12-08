// pages/report1/report1.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],//保存选择的头像文件
    image: true,//显示图标
    childMessage:[],
    studentId:'',
    growMessage:[],
    growMessageOne:[],
    growMessageLast:[],
    currentIndex:0
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  yincang() {
    this.setData({

    })
  },
  goReport2(){
    wx.navigateTo({
      url: '/pages/ParentsStudents/report3/report3?childMessage='+JSON.stringify(this.data.childMessage),
    })
  },
  goMade1(e){
    this.setData({
      growMessageThis:e.currentTarget.dataset.growmessagethis
    })
    console.log(this.data.growMessageThis)
    wx.navigateTo({
      url: '/pages/ParentsStudents/make1/make1?growMessageThis='+JSON.stringify(this.data.growMessageThis) ,
    })
  },
  goDefine1(e){
    this.setData({
      growMessageThis:e.currentTarget.dataset.growmessagethis
    })
    wx.navigateTo({
      url: '/pages/ParentsStudents/define1/define1?growMessageThis='+JSON.stringify(this.data.growMessageThis)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async cChildMessage(e){
    //点击实现学生id的切换
    let item =e.currentTarget.dataset.item
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })

    this.setData({
      studentId:item.stuId
    })

    let {studentId}=this.data
    let getGrowthItem=await request(`/business/growth/${studentId}`)
    console.log(getGrowthItem.data)
        let list1=[]
        let list2=[]
            for(var i=0;i<getGrowthItem.data.length;i++){
                if(getGrowthItem.data[i]['status']==2){
                  list2.push(getGrowthItem.data[i])
                }else{
                  list1.push(getGrowthItem.data[i])
                }
              }
      this.setData({
        growMessageOne:list1,
        growMessageLast:list2,
      })
      console.log(list1,list2)
      console.log(this.data.growMessageOne,this.data.growMessageLast)
  },

  
  onLoad:async function (options) {
    var app = getApp()
    app.editTabBar();  
    //发送获取我的孩子的请求
    let getChildMessage=await request('/business/busParentStudent/getMyChild')
    this.setData({
      childMessage:getChildMessage.data
    })
    //某人先获取第一个孩子的id
    this.setData({
      studentId:this.data.childMessage.stuId
    })
    let {studentId}=this.data
    //发送获取该孩子的成长报告的列表
    let getGrowthItem=await request(`/business/growth/${studentId}`)
    console.log(getGrowthItem.data)
        let list1=[]
        let list2=[]
        for(var i=0;i<getGrowthItem.data.length;i++){
            if(getGrowthItem.data[i]['status']==2){
              list2.push(getGrowthItem.data[i])
            }else{
              list1.push(getGrowthItem.data[i])
            }
          }
      this.setData({
        growMessageOne:list1,
        growMessageLast:list2,
      })
      console.log(this.data.growMessageOne,this.data.growMessageLast)
  },
  picseal() {
    var that = this
    this.setData({
      image: false
    }),
      wx.chooseImage({
        count: 10,
        type: 'image',
        success (res) {
          const tempFilePaths = res.tempFiles[0]//规定只能选择一个文件
          that.setData({ tempFilePaths })//修改文件路径
        }
      })
  },
  took() {
    wx.redirectTo({
      url: '/pages/seal2/seal2'
    })
  },
})
