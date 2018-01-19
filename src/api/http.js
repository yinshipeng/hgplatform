/**
 * Created by yinshipeng on 2016/11/4.
 */
import Vue from 'vue'
import axios from 'axios'
import Promise from 'promise-polyfill'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8082/api'

if (!window.Promise) {
    window.Promise = Promise
}

axios.interceptors.request.use(function(config){
    config.headers['Token'] = ''
    return config;
},function(error){
    return Promise.reject(error);
});

const respSuccess = function (resp, resolve, reject) {
    if (resp.data.status != 'OK') {
        if(resp.data.code == '501'){
            clear(null, true)
            location.replace('/login')
        }else{
            new Vue().$notify({
                title: '提示',
                message: resp.data.msg,
                type: 'error'
            })
            reject(resp)
        }
    } else {
        resolve(resp.data.result)
    }
}

const respError = function (error, reject) {
    new Vue().$notify({
        title: '提示',
        message: '系统异常，请联系管理员',
        type: 'error'
    })
    reject(error)

}


export default {
  get: function (url, body) {
      body = body || {};
      return new Promise((resolve, reject) => {
      axios.get(url, body).then((resp) => {
          respSuccess(resp, resolve, reject)
      }).catch((error) => {
          respError(error, reject)
      })
    })
  },
  post: function (url, body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body).then((resp) => {
          respSuccess(resp, resolve, reject)
      }).catch((error) => {
          respError(error, reject)
      })
    })
  }
}
