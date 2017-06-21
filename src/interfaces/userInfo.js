import wepy from 'wepy'

const interfaces = {
  userInfo: {},
  async getUserInfo () {
    var value = this.userInfo
    if (Object.keys(value).length !== 0) {
      return value
    } else {
      const authorizeList = await wepy.getSetting()
      if (!authorizeList['scope.userInfo']) {
        try {
          const isAuthorize = await wepy.authorize({scope: 'scope.userInfo'})
          const loginData = await wepy.login()
          const userinfo = await wepy.getUserInfo()
          userinfo.code = loginData.code
          this.userInfo = userinfo
          return userinfo
        } catch(e) {
          console.log('授权获取用户信息失败')
        }
      }
    }
  },
  async login () {
    let userinfoRaw = {}
    let userinfo = {}

    try {
      userinfoRaw = await interfaces.getUserInfo()
      userinfo = await wepy.request({
        url: api.user.login.url,
        method: api.user.login.method,
        header: {
          'x-wechat-code': userinfoRaw.code,
          'x-wechat-encrypted': userinfoRaw.encryptedData,
          'x-wechat-iv': userinfoRaw.iv
        },
        dataType: 'json',
        data: {}
      })

      await wepy.setStorage({
        key: '_session',
        data: userinfo.data.data.session
      })
    } catch (e) {
      wepy.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })
    }
  }
}

export default interfaces
