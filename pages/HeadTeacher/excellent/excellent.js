// pages/HeadTeacher/excellent/excellent.js
// import { SIGCHLD } from 'constants'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeId:'',
    module:'',
    name:'',
    candidate:[],
    id:'',
    newList: '',
    honorModule:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  async onLoad(options) {

    this.setData({
      gradeId:JSON.parse(options.gradeId) ,
      honorModule:JSON.parse(options.honorModule) 
    })
    console.log(this.data.gradeId)
   

    let {honorModule,gradeId}=this.data
    // for(var i =0;i<this.data.gradeId.length;i++){
      // let gradeId=this.data.gradeId[i]
      // let gradeId=202201
      let getHonor=await request('/business/honor/adjust',{gradeId,honorModule})
      console.log(getHonor)
      this.setData({
        name:getHonor.rows
      })
      let {name}=this.data 
      console.log(name)
     
      
  },
  
  excellent(e){
    // console.log(e.currentTarget.dataset.item)
    // this.data.candidate.push(e.currentTarget.dataset.item.split(":")[0])
    // console.log(this.data.candidate)
    //     this.setData({
    //   detail:detail,
    // })


  },
  choose(e) {
    this.data.newList = e.detail.value;
    console.log("group事件：",this.data.newList);
},
async toexcellent2(){
  let{honorModule,newList,candidate,module}=this.data
this.setData({
module:honorModule,
candidate:newList
})
console.log(this.data.module,this.data.candidate)
  let postHonor=await request('/business/honor/confirm/adjust',{module:this.data.module,candidate:this.data.candidate},'POST')
  console.log(postHonor)
  wx.redirectTo({
    url: '/pages/HeadTeacher/Studentshonor/Studentshonor',
  })

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