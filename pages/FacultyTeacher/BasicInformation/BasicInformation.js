// pages/FacultyTeacher/BasicInformation/BasicInformation.js
Page({
  data: {
    stuMessage:{},
    grade:''
  },
  onLoad(options) {
    console.log('测试9.10')
    this.setData({
      stuMessage:JSON.parse(options.stuMessage) ,
    })
  },
})