// pages/ParentsStudents/tuku2/tuku2.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options)
    //发送获取我的孩子的列表的请求
    let getChildMessage=await request('/business/busParentStudent/getMyChild')
    this.setData({
        childMessage:getChildMessage.data
    })
    console.log(this.data.childMessage)
    this.setData({
      studentId:options.studentId,
      growthKey:options.growthKey,
      growthId:options.growthId,
      remark:options.remark,
      show:options.show
    })
    console.log(options)
  },
  goStudentpic(e){
    console.log(e.currentTarget.dataset.item)
    this.setData({
      stuId:e.currentTarget.dataset.item.stuId
    })
    wx.navigateTo({
      url: '/pages/ParentsStudents/tuku/tuku?stuId='+this.data.stuId+'&growthId='+this.data.growthId+'&growthKey='+this.data.growthKey+'&growthKey='+this.data.growthKey+'&remark='+this.data.remark+'&show='+this.data.show
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