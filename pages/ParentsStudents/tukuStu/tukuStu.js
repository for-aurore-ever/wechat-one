// pages/ParentsStudents/tukuStu/tukuStu.js
import request from '../../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stuPicList:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options)
    //接收路由传参过来的参数
    this.setData({
      studentId:options.studentId,
      growthKey:options.growthKey,
      growthId:options.growthId,
      remark:options.remark
    })
    //发送获取莫格学生的图库的请求
    let {studentId}=this.data
    let getStudentPic=await request(`/business/gallery/getPhotos`,{studentId},'GET')
    if(getStudentPic.code==200){
      this.setData({
        stuPicList:getStudentPic.data
      })
    }
    //修改班级图库的列表
    this.setData({
      gradeGallery:this.data.stuPicList['gradeGallery'],
    })
  },
  //点击图库的图片列表，发送从图库中选择图片的请求
  async goStupic(e){
    console.log(e.currentTarget.dataset.item)
    let path=e.currentTarget.dataset.item
    let{studentId,growthKey,remark}=this.data
    let postPic=await request(`/business/growthItem/writeGrowthByGallery?studentId=`+studentId+'&growthKey='+growthKey+'&remark='+remark+'&path='+path,{studentId,growthKey,remark,path},'POST')
    console.log(postPic)
    if(postPic.code==200){
      wx.showToast({
        title: '上传成功',
      })
      setTimeout(() => {
        wx.reLaunch({
          url: '/pages/ParentsStudents/make/make',
        })
      }, 500);
    }else{
      wx.showToast({
        icon:"none",
        title:'上传失败,请重新上传！'
      })
    }
  },
})