// pages/HeadTeacher/Studentshonor/Studentshonor.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    honorModule:'',//荣誉
    gradeId:[],//班级id列表
    name:'',
    detail:[],
    Honor:'',

  },
  async changeHonor(e){
    console.log(e)
    console.log(e.currentTarget.dataset.honormodule)
    this.setData({
      honorModule:e.currentTarget.dataset.honormodule
    })
    console.log(this.data.honorModule)
    //点击完成后自动跳转
    wx.navigateTo({
      url: '/pages/HeadTeacher/2excellent/2excellent?gradeId='+JSON.stringify(this.data.gradeId)+'&honorModule='+JSON.stringify(this.data.honorModule),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    //发送获取荣誉的请求
    let getGradeId=await request(`/business/gradeTeacher/getGrade/`)
    //将返回的班级列表保存
    // this.setData({
    //   gradeId:getGradeId.data
    // })
    console.log(Object.keys(getGradeId.postId)[0])
    console.log(getGradeId.data)
    for(var i=0;i<getGradeId.data.length;i++){
      console.log(getGradeId.postId[getGradeId.data[i]])
      for(var j=0;j<getGradeId.postId[getGradeId.data[i]].length;j++){
        if(getGradeId.postId[getGradeId.data[i]][j]==1){
          this.setData({
            gradeId:getGradeId.data[i]
          })
        }
      }
    }

    console.log(this.data.gradeId)
    
    // let {honorModule}=this.data
    // for(var i =0;i<this.data.gradeId.length;i++){
    //   let gradeId=this.data.gradeId[i]
    //   let getHonor=await request('/business/honor/pointModuleHonor',{gradeId,honorModule})
    //   console.log(getHonor)
    // }
  },
   async Honor(){
    let {gradeId}=this.data
    let Honor=await request(`/business/honor/confirmList/${gradeId}`,{},'POST')
      console.log(Honor)
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
