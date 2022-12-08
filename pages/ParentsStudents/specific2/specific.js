// pages/specific/specific.js
Page({
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let personImg = options.personImg ? JSON.parse(options.personImg) : []
    if(personImg){
      let list=[]
      for(var i=0;i<personImg.length;i++){
        if(personImg[i]!==''){
          list.push(Object.values(personImg[i]))
        }
      }
      this.setData({
        personList:list
      })
    }
    console.log(this.data.personList)
  },
})