// pages/HeadTeacher/cpass/cpass.js
import request from '../../../utils/request'
//修改密码
Page({
  /**
   * 页面的初始数据
   */
  data: {
    defaultType: true,
    passwordType: true,
    passwordTypeTwo: true,
    password:'',
    password1:''
  },
  eyeStatus: function () {
    this.data.defaultType = !this.data.defaultType
    this.data.passwordType = !this.data.passwordType
    this.setData({
      defaultType: this.data.defaultType,
      passwordType: this.data.passwordType
    })
  },
  eyeStatusTwo: function () {
    this.data.defaultType = !this.data.defaultType
    this.data.passwordTypeTwo = !this.data.passwordTypeTwo
    this.setData({
      defaultType: this.data.defaultType,
      passwordTypeTwo: this.data.passwordTypeTwo
    })
  },
  //发送修改用户密码的请求
  async haveUpdate(){
    let {password,password1}=this.data
    console.log(password,password1)
    if(password==password1){
      let putResetPwd=await request('/system/user/resetPwd',{password},'PUT')
      if(putResetPwd.code==200){
        wx.showToast({
          title: '修改成功',
        })
        this.setData({
          password:"",
          password1:""
        })
      }
    }else{
      wx.showModal({
        title: '修改失败，两次输入密码不一致!',
      })
    }
  },
})

