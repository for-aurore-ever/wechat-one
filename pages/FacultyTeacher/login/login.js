import request from '../../../utils/request'
Page({
  data: {
  is:'',
    openId:'',
    code:'',
    username: '', //用户名
    password: '', // 用户密码
    stuId:'',
    gradeId:[],
    type:'102',
    show:true,
    radioChange: [{
      id:'102',
      name: "家长",
      checked: 'true'
    },
    {
      id:'100',
      name: "班主任",
    },
    {
      id:'101',
      name: "任课老师",
    }
    ]
  },
radioChange: function (e) {
  console.log(e)
  console.log(e)
  console.log(e.detail.value)
  this.setData({
  type:e.detail.value
  })
},
  async onLoad(){
    let res=await request('/logout','POST')  
},
  // 登录的回调
  async login(){
    let {username, password,openId,type} =this.data;
    //发送登录的请求
    let result = await request('/login', {username,type, password, isLogin: true,openId},'POST')
    //状态码为200提示登录成功
    console.log(result)
    if(result.code === 200){ // 登录成功
      wx.showToast({
        title: '登录成功'
      })
    console.log(this.data.type)
    let type=this.data.type
    if(type==102){
      wx.reLaunch({
        url: '/pages/ParentsStudents/my/my',
      })
    }else if(type==101){
      wx.reLaunch({
        url: "/pages/FacultyTeacher/class/class",
      })
    }else{
      wx.reLaunch({
        url: "/pages/HeadTeacher/class/class",
      })
    }
   }else{
    wx.showToast({
      icon:"none",
      title: result.msg+'!',
    })
  }
  }
})
