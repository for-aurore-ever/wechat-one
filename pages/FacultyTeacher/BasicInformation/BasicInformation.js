// pages/FacultyTeacher/BasicInformation/BasicInformation.js
Page({
  data: {
    stuMessage:{},
    grade:''
  },
  onLoad(options) {
<<<<<<< Updated upstream
=======
    console.log("20:15的测试内容")
    console.log("20:18的测试内容")
>>>>>>> Stashed changes
    this.setData({
      stuMessage:JSON.parse(options.stuMessage) ,
    })
  },
})