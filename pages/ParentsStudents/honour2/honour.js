// pages/honour/honour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    honorList:[]
  },
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
    console.log(options)
    let honorImg = options.honorImg ? JSON.parse(options.honorImg) : []
    console.log(honorImg)
    if(honorImg){
      let list=[]
      for(var i=0;i<honorImg.length;i++){
        if(honorImg[i]!==''){
          list.push(Object.values(honorImg[i]))
        }
      }
      this.setData({
        imgList:list
      })
    }
    console.log(this.data.imgList)
    if(honorImg){
      for(var i=0;i<honorImg.length;i++){
        this.data.honorList.push([])
        this.setData({
          honorList:this.data.honorList
        })
        if(honorImg[i]==''){
          if(honorImg[i]['honor1']==0){
            this.data.honorList[i].push(['/profile/static/images/zhuo.png'])
            this.setData({
              honorList:this.data.honorList
            })
            console.log(this.data.honorList)
          }
          if(honorImg[i]['honor2']==1){
            this.data.honorList[i].push('/profile/static/images/lizhiMan.png')
            this.setData({
              honorList:this.data.honorList
            })
          }
          if(honorImg[i]['honor2']==1){
            console.log('模范少年')
            this.data.honorList[i].push('/profile/static/images/moStudent.png')
            this.setData({
              honorList:this.data.honorList
            })
          }
          if(honorImg[i]['honor3']==1){
            console.log('梦想领袖')
            console.log(this.data.honorList)
            
            this.data.honorList[i].push('/profile/static/images/memg.png')
            this.setData({
              honorList:this.data.honorList
            })
          }
          if(honorImg[i]['honor4']==1){
            this.setData({
              show:true
            })
            console.log('文明学生')
            this.data.honorList[i].push('/profile/static/images/wenStudent.png')
            this.setData({
              honorList:this.data.honorList
            })
          }
        }
      }
    }
    console.log(this.data.honorList)
  },
})