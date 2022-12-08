// pages/FacultyTeacher/seal2/seal2.js
import config from '../../../utils/config'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    getfile:''

  },
  picseal(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */

  async  onLoad(options) {
    let getseals= await request ('/business/seal/seals')
    console.log(getseals)
    console.log(getseals.data.个人印章.sealUrl)
    // let ur=getseals.data.path
    let name=getseals.data.个人印章.sealUrl
    console.log(name)
    this.setData({
      name:name
    })
    let getfile=config.host+'/getFile?name='+name
    console.log(getfile)
    this.setData({
      getfile:getfile
    })
  },
   
 async took(){
  wx.redirectTo({
    url: '/pages/HeadTeacher/seal1/seal1'
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