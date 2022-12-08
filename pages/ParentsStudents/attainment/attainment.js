// pages/attainment/attainment.js
import config from '../../../utils/config'
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
  onLoad:async function (options) {
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
    console.log(this.data.growthItem)
    this.setData({
      suzhiReport:this.data.growthItem[13]
    })
    console.log(this.data.suzhiReport)
    if(this.data.suzhiReport.status==1){
      this.setData({
        show:true
      })
    }
    if(this.data.suzhiReport.status==1){
      
    }
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