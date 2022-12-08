// pages/change-password/change-password.js
Page({
  data: {
    defaultType: true,
    passwordType: true,
    passwordTypeTwo:true
  },
  eyeStatus: function(){
    this.data.defaultType= !this.data.defaultType
    this.data.passwordType= !this.data.passwordType
    this.setData({
      defaultType: this.data.defaultType,
      passwordType: this.data.passwordType
  })
  },
  eyeStatusTwo: function(){
    this.data.defaultType= !this.data.defaultType
    this.data.passwordTypeTwo= !this.data.passwordTypeTwo
    this.setData({
      defaultType: this.data.defaultType,
      passwordTypeTwo: this.data.passwordTypeTwo
  })
  },
})