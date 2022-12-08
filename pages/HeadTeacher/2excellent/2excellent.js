// pages/HeadTeacher/2excellent/2excellent.js
import request from '../../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gradeId:[],
    honorModule:'',
    details:[],
    name1:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // let getgrade=await request('/business/gradeTeacher/getGrade')
    // console.log(getgrade)
    this.setData({
      //接受路由跳转传递的数据
      gradeId:JSON.parse(options.gradeId) ,
      honorModule:JSON.parse(options.honorModule) 
    })
    console.log(options)
    if(this.data.honorModule=='honor1'){
      console.log(11111)
      this.setData({
        name1:'卓越少年'
      })
    }
    else if(this.data.honorModule=='honor2'){
      this.setData({
        name1:'励志少年'
      })
    }
    else if(this.data.honorModule=='honor3'){
      this.setData({
        name1:'模范学生'
      })
    }
    else if(this.data.honorModule=='honor4'){
      this.setData({
        name1:'梦想领袖'
      })
    }
    else{
      this.setData({
        name1:'文明学生'
      })
    }
    let {honorModule}=this.data
    //遍历班级列表
      let {gradeId}=this.data
      console.log(gradeId)
      //发送获取荣誉的请求
      let getHonor=await request('/business/honor/pointModuleHonor',{gradeId,honorModule})
      console.log(getHonor)
      this.setData({
        name:getHonor.rows
      })
      let {name}=this.data 
      console.log(name)
      let detail=[]
      //处理请求成功后获取到的数据
      for(var i =0;i<this.data.name.length;i++){
             let name=this.data.name[i]
             var a = name.split(":")[1]
             console.log(a)
             detail.push(a)
             console.log(detail)
         this.setData({
           details:detail
         })
      }
  },
      //点击按钮后完成跳转并携带参数
      goExcellent(){
        wx.redirectTo({
          url: '/pages/HeadTeacher/excellent/excellent?gradeId='+JSON.stringify(this.data.gradeId)+'&honorModule='+JSON.stringify(this.data.honorModule),
        })
      },
})