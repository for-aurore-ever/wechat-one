// pages/friendWords/friendWords.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // list:['../../../static/images/用户头像-男.png','../../../static/images/群蜂头像选择.png']
  },
  ceshi(e){
    console.log(e)
  },
//由于将一个数组进行分组的函数
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
    let friendWordImg = options.friendWordImg ? JSON.parse(options.friendWordImg) : []
    if(friendWordImg){
      let list=[]
      for(var i=0;i<friendWordImg.length;i++){
        if(friendWordImg[i]!==''){
          list.push(friendWordImg[i])
        }
      }
      this.setData({
        friendWordList:list
      })
    }
    console.log(this.data.friendWordList)
    
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