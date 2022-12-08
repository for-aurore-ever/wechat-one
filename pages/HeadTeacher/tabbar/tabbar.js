Page({
  data: {
    active: 0,
    icon: {
      normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
      active: 'https://img.yzcdn.cn/vant/user-active.png',
    },
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
});