Page({
  data: {
    data: [],
    password: [1, 2, 3, 6, 9]
  },
  onEnd(data) {
    this.setData({
      data: data.detail
    });
  }
})