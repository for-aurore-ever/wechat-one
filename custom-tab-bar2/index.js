
const app = getApp()
 
Component({
	data: {
    active: 0,
    list: [{
            url: "/pages/ParentsStudents/report1/report1",
            text: "成长报告",
            normal: "../static/images/photo1.png",
            active: "../static/images/photo.png"
          }, {
            url: "/pages/ParentsStudents/make/make",
            normal: "../static/images/zu2.png",
            active: "../static/images/zu1.png"
          }, {
            url: "/pages/ParentsStudents/my/my",
            text: "我的",
            normal: "../static/images/mine.png",
            active: "../static/images/mine2.png"
          }
        ],
		
	},
 
	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
      });
      console.log(event)
		},
 
		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
    },
	}
});