import axios from 'axios'
// axios请求库封装类（简洁版）
class HYRequest {
    constructor(baseURL, timeout=10000){
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }
    // 封装request实例
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    // 封装get实例
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    // 封装post实例
    post(config) {
        return this.request({ ...config, method: "post " })
    }
}

// const hyRequest1 = new HYRequest("http://123.207.32.32:9001")
// const hyRequest2 = new HYRequest("http://123.207.32.32:8000")
//...

export default new HYRequest("http://123.207.32.32:9001")