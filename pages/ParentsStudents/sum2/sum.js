// pages/sum/sum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  chunk(arr, size) {
    var arr1=new Array();
  for (var i = 0; i < Math.ceil(arr.length/size); i++) {
     arr1[i]=new Array();
  }
  var j=0;
  var x=0;
  for (var i = 0; i < arr.length; i++) {
    if(!((i%size==0)&&(i!=0))){
      arr1[j][x]=arr[i];
      x++;
      console.log("j="+j+"  "+"x="+x);
    }else{
      j++;
      x=0;
      console.log("else:"+"j="+j+"  "+"x="+x);
      arr1[j][x]=arr[i];
      console.log(arr1);
      x++;
    }
  }
  return arr1;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let sumImg = options.sumImg ? JSON.parse(options.sumImg) : []
    console.log(sumImg[0]=='')
    if(sumImg){
      let list=[]
      for(var i=0;i<sumImg.length;i++){
        if(sumImg[i]!==''){
          list.push(Object.values(sumImg[i]))
        }
      }
      this.setData({
        sumList:list
      })
    }
    console.log(this.data.imgList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})