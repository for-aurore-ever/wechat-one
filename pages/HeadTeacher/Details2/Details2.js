import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeId:'',
    finish:[],
    nofinsh:[],
    DataList: [ 
      { id: 1, name: "这就是我"}, 
      { id: 2, name: "我和我的伙伴"},
      { id: 3, name: "我写的字"}, 
      { id: 4, name: "我的作业"}, 
      { id: 5, name: "我的作文"}, 
      { id: 6, name: "我的试卷"}, 
      { id: 7, name: "参与的活动"}, 
      { id: 8, name: "报告单"}, 
      { id: 9, name: "老师寄语"}, 
      { id: 10, name: "小伙伴的话"}, 
      { id: 11, name: "我的荣誉"}, 
      { id: 12, name: "学期小结"}, 
      { id: 13, name: "十能成长目录"}, 
      { id: 14, name: "个性"} ],
    curIndex: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      gradeId:options.gradeId
    })

    let {gradeId}=this.data
    let getEachpart=await request('/business/growthItem/verifyModule',{gradeId})
    console.log(getEachpart)
      let getnotVerifyModule=await request('/business/growthItem/notVerifyModule',{gradeId})
    console.log(getnotVerifyModule)
    this.setData({
      eachpartCompletion:getEachpart.rows[0],
      overallCompletion:getEachpart.rows[1],
      Completion:getnotVerifyModule.rows[0]
    })
    this.setData({
      finish:this.data.eachpartCompletion['这就是我'],
      nofinsh:this.data.Completion['这就是我'],
    })
    console.log(this.data.finish)
    console.log(this.data.nofinsh)
    console.log(this.data.eachpartCompletion)
  

  },
  fnActive(e) {
    console.log(e)
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0
    })
    let mobilename =this.data.DataList[e.currentTarget.dataset.index]['name']
    console.log(mobilename)
    this.setData({
      finish:this.data.eachpartCompletion[mobilename],
      nofinsh:this.data.Completion[mobilename],
    })
    console.log(this.data.finish)
    console.log(this.data.nofinsh)
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
