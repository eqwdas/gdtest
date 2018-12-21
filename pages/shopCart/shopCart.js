// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items : [
      { name: '依依官方旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.2, checked: true, stock: 10, totalPrice: 118.2},
      { name: '哈哈旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.9, checked: true, stock: 10, totalPrice: 118.9 },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   *  点击选中复选框
   */
  selectCheckbox: function(e){
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    var item = this.data.items[index];
    if (item.checked){
      item.checked = false;
    }else{
      item.checked = true;
    }
    this.setData({
      items:this.data.items
    })
  },
  /**
   * 点击右符号 增 数量
   */
  add: function(e){
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    var item = this.data.items[index];
    if (item.num < item.stock) {
      item.num += 1;
      // Number(item.num)
    } else {
      item.num = item.stock;
    }
    item.totalPrice = Math.floor(item.price * item.num * 10) / 10;
    this.setData({
      items: this.data.items
    })
  },
  /**
   * 点击右符号 减 数量
   */
  reduce: function (e) {
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    var item = this.data.items[index];
    if (item.num > 1 ) {
      item.num -= 1;
    } else {
      item.num = 1;
    }
    item.totalPrice = Math.floor(item.price * item.num * 10) / 10;
    this.setData({
      items: this.data.items
    })
  },
  /**
   * 提交表单
   */
  bindsubmit: function(e){
    console.log(e.detail.value);
    
  }
})