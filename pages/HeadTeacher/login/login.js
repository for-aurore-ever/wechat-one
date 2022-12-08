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
  },
  async onLoad(){
    let res=await request('/logout','POST')  
    var that=this
    //调用接口获取登录凭证
    wx.login({
      success(res) {
      console.log(res)
      //当执行以下判断表示成功
      if (res.errMsg == 'login:ok') {
        that.setData({
          code:res.code
        })
        console.log(that.data.code);	
          //发去获得openid的网络请求
          wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + 'wx241ada03fe87b14b' + '&secret=' + '0796666efba5e3b03141f37faf26413c' + '&js_code=' + res.code + '&grant_type=authorization_code',
              data: {},
              success: function (res) {
                // console.log(res)
                var openid = res.data.openid 
                //将获得到的openid保存到data中
                that.setData({
                  openId:openid
                })
                // console.log(that.data.openId)
              }
            })
            }
        }
    })
  setTimeout(async function(){
    let {openId}=that.data 
    //使用openid登录，初次登录需要输入用户名和密码，不是首次登录则实现自动登录。
    let postOpenId = await request('/login', {openId,isLogin: true},'POST') 
    if(postOpenId.code===200){
      //自动登录后发送获取用户类型的请求
      wx.reLaunch({
        // url: '/pages/HeadTeacher/myself/myself',
      })
    }
  }, 1000);
},
  // 登录的回调
  async login(){
  console.log(this.data)
    let {username, password,openId} =this.data;
    //发送登录的请求
    let result = await request('/login', {username, password, isLogin: true,openId},'POST')
    //状态码为200提示登录成功
    if(result.code === 200){ // 登录成功
      wx.showToast({
        title: '登录成功'
      })
      wx.reLaunch({
        url: '/pages/HeadTeacher/myself/myself',
        })
    }
    //发送获取用户类型的回调
      
   }
})
