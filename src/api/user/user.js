/**
 * @module 用户模块
 */

 const UserAPI = {
    /**
     * @desc 图片验证码
     * @data  返回数据
      {
        @String  captcha  验证码
      }
    */
    getCaptcha: function(callback) {
      return {
        url: '/user/getCaptcha?time=' + (new Date()).getTime(),
        method: 'post',
        callback: callback,
        rules: {
          type: 3
        }
      };
    },
    /**
     * @desc 用户登录
     * @param {String}  username   账号
     * @param {String}  password   密码
     * @param {String}  captcha    验证码
    */
    login: function(username, password, captcha, callback) {
      return {
        url: '/user/login',
        method: 'post',
        data: {
          username: username,
          password: password,
          captcha: captcha
        },
        callback: callback,
        rules: {
          type: 1,
          redirectUrl: '/teacher',
          isThrowError: false
        }
      };
    },
    /**
     * @desc 用户退出
    */
    logout: function() {
      return {
        url: '/user/logout',
        method: 'post',
        rules: {
          type: 1,
          redirectUrl: '/user/login'
        }
      };
    }
  };
  
  export default UserAPI;
  