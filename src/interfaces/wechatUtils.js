import wepy from 'wepy'

const utils = {
  async scanCode () {
    try {
      let scanInfo = await wepy.scanCode()
      return scanInfo;
    } catch(e) {
      console.log(e.errMsg)
    }

  }
}
export default utils
