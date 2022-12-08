
const app = getApp()

Component({
	data: {
    active: 3,
    list: [{
            url: "/pages/HeadTeacher/class/class",
            text: "班级",
            normal: "../static/images/xing.png",
            active: "../static/images/xing1.png"
          }, {
            url: "/pages/HeadTeacher/Statistics1/Statistics1",
            text: "统计",
            normal: "../static/images/tongji.png",
            active: "../static/images/tojing1.png"
          }, {
            url: "/pages/HeadTeacher/SendWordStart/SendWordStart",
            text: "寄语",
            normal: "../static/images/list1.png",
            active: "../static/images/list.png"
          },
          {
            url: "/pages/HeadTeacher/myself/myself",
            text: "我的",
            normal: "../static/images/person1.png",
            active: "../static/images/person.png"
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