// pages/FacultyTeacher/BasicInformation/BasicInformation.js
Page({
  data: {
    stuMessage:{},
    grade:''
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      stuMessage:JSON.parse(options.stuMessage) ,
    })
  },
})