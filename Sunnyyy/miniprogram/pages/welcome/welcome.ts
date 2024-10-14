// pages/welcome/welcome.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
		dateTime: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
		this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
	},
	
	updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dateTimeStr = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    this.setData({
      dateTime: dateTimeStr,
    });
    return dateTimeStr;
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

	},
	goHome() {
		wx.switchTab({
			url: '/pages/home/home' // 确保这里的路径是你的首页路径
		});
	},
})