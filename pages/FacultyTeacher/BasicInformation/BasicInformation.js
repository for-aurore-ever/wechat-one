// pages/FacultyTeacher/BasicInformation/BasicInformation.js
Page({
  data: {
    stuMessage:{},
    grade:''
  },
  onLoad(options) {
    console.log("20:15的测试内容")
    console.log("20:17的测试内容")
    this.setData({
      stuMessage:JSON.parse(options.stuMessage) ,
    })
  },
})