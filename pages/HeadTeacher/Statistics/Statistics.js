import * as echarts from '../../../utils/ec-canvas/echarts'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:[],
    eachpartCompletion:{},//各个模块的完成人名单
    overallCompletion:{},//总的完成人名单
    finish:[],
    start:[],
    doing:[],
    ring: [
      { name: '已完成', data: 0, color: "#811c1d", },
      { name: '进行中', data: 0, color: "#E4C477" }, 
      { name: '未开始', data: 0, color: "#d97559" }, 
    ],
    ec: {
      lazyLoad: true // 延迟加载
    },
    
    show: false,
    showone: false,
    showthree: false,
    Option: true,
    name: [
      { name: '李昊'}, { name: '丁一昊'}, { name: '王婷婷'}, { name: '王名示'}, { name: '张晓军'}, { name: '王婧'}, { name: '陈美云'}, { name: '丁鸿'}, { name: '杨米倩'}, 
    ]

  },
  click() {
    this.setData({
      show: true,
      showone: true,
    })
  },
  all() {
    this.setData({
      Option: true
    })
  },
  one() {
    this.setData({
      Option: false
    })
  },
  share(){
    wx.showShareMenu({
      withShareTicket:true,
      menus:['shareAppMessage','shareTimeline']
    })
  },
  // 确定分享类型
  clickme() {
    // 关闭分享类型标签
    this.setData({
      showone: false,
    })
    // 判断分享类型 进行相应操作
    if (this.data.Option) {
      this.setData({
        showtwo: true,
      })
    } else {
      this.setData({
        showthree: true
      })
    }
  },
  // 单选通知确定
  clickname() {
    this.setData({
      showtwo: true,
      showthree: false
    })
  },

  // 取消分享类型
  noshowModalTwo(){
    this.setData({
      show: false,
      showtwo: false,
      showthree: false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    //接受传入的gradeId
    this.setData({
      gradeId:options.gradeId
    })
    console.log(this.data.gradeId)
    let {gradeId}=this.data
    //发送获取各个模块完成人的请求
    let getEachpart=await request('/business/growthItem/data',{gradeId})
    if(getEachpart.code==200){
      console.log(getEachpart)
      this.setData({
        eachpartCompletion:getEachpart.rows[0],
        overallCompletion:getEachpart.rows[1]
      })
      //修改图表中的数据
      this.setData({
        'ring[0].data':this.data.overallCompletion['已完成'].length,
        'ring[1].data':this.data.overallCompletion['进行中'].length,
        'ring[2].data':this.data.overallCompletion['未开始'].length,
        finish:this.data.overallCompletion['已完成'],
        nostart:this.data.overallCompletion['未开始'],
        doing:this.data.overallCompletion['进行中']
      })
      console.log(this.data.overallCompletion)
      //遍历会出现的各个情况（已完成、未完成、进行中等）
      for (var i=0;i<this.data.ring.length;i++){
        let {status}=this.data
        console.log(this.data.ring[i])
        let statuslist=this.data.ring[i]['name'] 
        status.push(statuslist)
        this.setData({
          status:status
        })                          
        console.log(this.data.status)
      }
    }
    
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {


    this.echartsComponnet = this.selectComponent('#ringchart');
    this.getRingData(this.data.ring);
  },
  getRingData: function(Data) {
    this.init_Ringecharts(Data) // 初始化图表
  },

  // 初始化环图图表
  init_Ringecharts: function(Data) {
    this.echartsComponnet.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
      });
      chart.setOption(this.getRingOption(Data));
      return chart;
    });
  },

  getRingOption: function(Data) {
    const ringdata = Data.map(item => {
      return {
        name: item.name,
        value: item.data
      }
    })
    const ringcolor = Data.map(item => {
      return item.color
    })
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}",
      },
      series: 
      [
        {
          type: 'pie',
          radius: [64, 44],
          data: ringdata, 
          emphasis: {
            scale: false
          },
          tooltip: {
          },
          label: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: function (params) {
                return ringcolor[params.dataIndex]
              },
            },
          }
        },
      ]
    };
    return option
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
