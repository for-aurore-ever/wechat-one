import config from './config'
export default  (url, data={}, method='GET') => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.host + url,//路径
        data,//参数
        method,//请求的方式
          header: {
          Authorization: wx.getStorageSync('token')?'Bearer '+wx.getStorageSync('token'):'',
          },
        success: (res) => {
          console.log('请求成功: ', res);
          if(data.isLogin){
            //登录成功后拿到token进行存储
             wx.setStorageSync('token', res.data.token)
          }
          resolve(res.data);
        },
        fail: (err) => {
          reject(err); 
        }
      })
    })
  }
  