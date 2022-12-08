
const app = getApp()
 
Component({
	data: {
    active: 0,
    list: [{
      url: "/pages/FacultyTeacher/class/class",
      text: "班级",
      normal: "../static/images/xing.png",
      active: "../static/images/xing1.png"
    }, {
      url: "/pages/FacultyTeacher/SendWordStart/SendWordStart",
      text: "寄语",
      normal: "../static/images/list1.png",
      active: "../static/images/list.png"
    }, {
      url: "/pages/FacultyTeacher/myself/myself",
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