import * as echarts from '../../../utils/ec-canvas/echarts'
import request from '.././../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DataSum: 0,
    radio: 109,
    chepaihao:'',
    checked:false,
    currentIndex:0,
    gradeId:'', // 班级id
    overallCompletion:[], // 总的完成情况
    eachpartCompletion:[], // 各个模块的完成情况
    Data: {},
    ring: [
      { name: '已完成', data: 0, color: "#811c1d", },
      { name: '进行中', data: 0, color: "#E4C477" }, 
      { name: '未开始', data: 0, color: "#d97559" },  
    ],
    one: [
      { name:'这就是我', value: 40, color: "#811c1d" },{ name:'我和我的伙伴', value: 10, color: "#d97559" },{ name:'我写的字', value: 30, color: "#e4c477"  },{ name:'我的作业', value: 45, color: "#daa67b"  },{ name:'我的作文', value: 20, color: "#4e9c8f"  },{ name:'我的试卷', value: 22, color: "#4786b4"  },{ name:'参与的活动', value: 18, color: "#a0eafd"  }
    ],
    two: [
      { name:'老师寄语', value: 20, color: "#5087EC" },{ name:'小伙伴的话', value: 18, color: "#68BBC4"  },{ name:'我的荣誉', value: 12, color: "#58A55C"  },{ name:'学期小结', value: 25, color: "#F2BD42"  },{ name:'十能成长目录', value: 16, color: "#A1DEED"  },{ name:'个性', value: 16, color: "#709B94"  } 
    ],

    ec: {
      lazyLoad: true // 延迟加载
    },
  },
  
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    console.log(name)
    this.setData({
      chepaihao: name,
    });
  }, 
  onChange({ detail }) {
  let _this = this
    if(detail) {
       app.globalData.userRank = 1
       console.log( app.globalData.userRank)
      _this.getTabBar().checkPermission()
    }else {
      app.globalData.userRank = 0
      _this.getTabBar().checkPermission()
    }

    this.setData({ checked: detail });
  },
  onShow() {
    console.log( this.getTabBar())
    this.getTabBar().init()
  },
  //跳转页面查看更多
  grow() {
    wx.navigateTo({
      url: '/pages/HeadTeacher/Statistics/Statistics?gradeId='+JSON.stringify(this.data.gradeId),
    })
  },
  //跳转页面查看更多
  details() {
    wx.navigateTo({
      url: '/pages/HeadTeacher/Details2/Details2?gradeId='+JSON.stringify(this.data.gradeId),
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
   async onLoad(options) {
    var app = getApp();
    app.editTabBar1();    //显示自定义的底部导航
  },
  //切换不同的班级
  async changegrade(e){
    console.log(e)
    let gradeId=e.currentTarget.dataset.grade
    this.setData({
      gradeId:gradeId,
      currentIndex:e.currentTarget.dataset.index
    })
    let getOverall=await request('/business/growth/pace',{gradeId})
    if(getOverall.code==200){
      console.log(getOverall)
      this.setData({
        eachpartCompletion:getOverall.rows[0],//各个模块的完成情况
        overallCompletion:getOverall.rows[1]//总的完成情况
      })
      console.log(this.data.eachpartCompletion)
      this.setData({//修改图表中的数据
        'ring[0].data':this.data.overallCompletion['已完成'],
        'ring[1].data':this.data.overallCompletion['进行中'],
        'ring[2].data':this.data.overallCompletion['未开始'],
        'one[0].value':this.data.eachpartCompletion['这就是我'],
        'one[1].value':this.data.eachpartCompletion['我和我的伙伴'],
        'one[2].value':this.data.eachpartCompletion['我写的字'],
        'one[3].value':this.data.eachpartCompletion['我的作业'],
        'one[4].value':this.data.eachpartCompletion['我的作文'],
        'one[5].value':this.data.eachpartCompletion['我的试卷'],
        'one[6].value':this.data.eachpartCompletion['参与的活动'],
        'two[0].value':this.data.eachpartCompletion['教师寄语'],
        'two[1].value':this.data.eachpartCompletion['小朋友的话'],
        'two[2].value':this.data.eachpartCompletion['我的荣誉'],
        'two[3].value':this.data.eachpartCompletion['学期小结'],
        'two[4].value':this.data.eachpartCompletion['十能成长目录'],
        'two[5].value':this.data.eachpartCompletion['个性'],
      })
      console.log(this.data.one)
      this.echartsComponnet = this.selectComponent('#ringchart');
      this.getRingData(this.data.ring);
      this.echartsComponnet = this.selectComponent('#onechart');
      this.getData(this.data.one);
      console.log(this.data.one)
      this.echartsComponnet = this.selectComponent('#twochart');
      this.getData(this.data.two);
    }

  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 async onReady() {
   //发送获取班级列表的请求
  let getGradeId=await request(`/business/gradeTeacher/getGrade`)
  //将返回的班级列表保存
  this.setData({
    gradeIdList:getGradeId.data
  })
  console.log(this.data.gradeIdList)
    //默认为第一个班级
    this.setData({
      gradeId:this.data.gradeIdList[0]
    })
    let {gradeId}=this.data
    
    console.log(this.data.gradeId)
    //发送获取各模块完成人数的请求
    let getStuId=await request('/business/growth/pace',{gradeId})
    console.log(getStuId)
    this.setData({
      eachpartCompletion:getStuId.rows[0],
      overallCompletion:getStuId.rows[1]
    })
    this.setData({
      'ring[0].data':this.data.overallCompletion['已完成'],
      'ring[1].data':this.data.overallCompletion['进行中'],
      'ring[2].data':this.data.overallCompletion['未开始'],
      'one[0].value':this.data.eachpartCompletion['这就是我'],
      'one[1].value':this.data.eachpartCompletion['我和我的伙伴'],
      'one[2].value':this.data.eachpartCompletion['我写的字'],
      'one[3].value':this.data.eachpartCompletion['我的作业'],
      'one[4].value':this.data.eachpartCompletion['我的作文'],
      'one[5].value':this.data.eachpartCompletion['我的试卷'],
      'one[6].value':this.data.eachpartCompletion['参与的活动'],
      'two[0].value':this.data.eachpartCompletion['教师寄语'],
      'two[1].value':this.data.eachpartCompletion['小朋友的话'],
      'two[2].value':this.data.eachpartCompletion['我的荣誉'],
      'two[3].value':this.data.eachpartCompletion['学期小结'],
      'two[4].value':this.data.eachpartCompletion['十能成长目录'],
      'two[5].value':this.data.eachpartCompletion['个性'],

    })
    console.log(this.data.two)
    console.log(this.data.eachpartCompletion)
    console.log(getStuId)
    console.log(getStuId.rows[1])
    this.echartsComponnet = this.selectComponent('#ringchart');
    this.getRingData(this.data.ring);
    this.echartsComponnet = this.selectComponent('#onechart');
    this.getData(this.data.one);
    console.log(this.data.one)
    this.echartsComponnet = this.selectComponent('#twochart');
    this.getData(this.data.two);
  },
    getRingData: function(Data) {
      this.init_Ringecharts(Data) // 初始化图表
    },
    getData: function(Data) {
      this.init_echarts(Data) // 初始化图表
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
    // 初始化柱状图表
    init_echarts: function(Data) {
      this.echartsComponnet.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
        });
        chart.setOption(this.getOption(Data));
        return chart;
      });
    },

    getRingOption: function(Data) {
      for (const key in Data) {
        this.data.DataSum += Data[key].data
      }
      this.data.Data = Data.map(item => {
        return {
          name: item.name,
          value: item.data,
          color: item.color,
          Percentage: item.data / this.data.DataSum * 100
        }
      })
      console.log(this.data.Data)
      this.data.Data.map(item => {
        console.log(item.name, 'item')
        this.setData({
          Data:this.data.Data
         })
      })
   

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

    getOption: function(Data) {
      // console.log(Data)
      const name = Data.map(item => {
        return item.name
      })
      const value = Data.map(item => {
        return item.value
      })
      const Color = Data.map(item => {
        return item.color
      })
      // console.log(twox)
      var option = {
        grid: {
          left: 20,
          right: 20,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: name,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              color: '#666',
              rotate: 40,
            }
          },
        ],
        yAxis: [
          {
            show: false,
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              color: '#666',
            }
          }
        ],
        series: 
        [
            {
              name: 'lastMonth',
              type: 'bar',
              barWidth: 30,//柱图宽度
              data: value, 
              label: {
                show: true,
                position: 'top',
                formatter:(params) => {
                  return params.data + '人'
                }
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    return Color[params.dataIndex]
                  },
                  borderRadius: [5, 5, 0, 0]
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
    // this.getTabBar().init()
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