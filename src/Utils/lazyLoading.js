import wepy from 'wepy'

const lazyLoading = {
  // 调用页面需要的data：
  // scrollData: {
  //   offetHeight: 40, // px滚动计算部分到顶部距离
  //   height: 194, // 每个模块的高度px
  //   colunm: 1 // 每行的列数
  // },
  // showIndex: 0 //当前显示的行数
  //
  // 调用页面需要的方法：
  // scrollHide(e) {
  //   let data = [
  //     this.data.scrollData.offetHeight,
  //     e.detail.scrollTop,
  //     this.data.scrollData.height,
  //     this.data.scrollData.colunm
  //   ]
  //   let index = lazyLoading.countIndex(...data)
  //   this.showIndex = index
  // }
  //
  // 调用页面需要的传入是否显示图片的条件
  // (showIndex + 3 > index) && (showIndex - 3 < index)

  countIndex: {},
  /**
   * offetHeight  滚动计算部分到顶部距离
   * scrollTop   滚动高度
   * height      每个模块的高度
   * colunm      列数
  **/
  countIndex (offetHight, scrollTop, height, colunm) {
    // 单例获取屏幕宽度比
    if (!this.countIndex.pix) {
        try {
          let res = wepy.getSystemInfoSync()
          this.countIndex.pix = res.windowWidth / 375
        } catch (e) {
          this.countIndex.pix = 1
        }
    }
    let scroll = scrollTop - offetHight * this.countIndex.pix
    let hei = height * this.countIndex.pix
    return scroll > 0 ? Math.floor(scroll / hei) * colunm : 0
  }
}
export default lazyLoading
