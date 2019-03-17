import Axios from 'axios'
import urls from './URLs.js'
const api = {}
const size = 8;
const appkey = {
    // appkey: 'dlc3618_1551448104459'
    appkey: 'dongmeiqi_1547441744650'
}
api.findByPage = function (page) {
    return Axios.get(urls.baseURL + urls.findByPage, {
        params: {
            page,
            size,
            ...appkey
        }
    })
}
api.updateStu = function (data) {
    return Axios.get(urls.baseURL + urls.updateStudent, {
        params: {
            ...appkey,
            ...data
        }
    })
}   
api.delBySno = function (sNo) {
    return Axios.get(urls.baseURL + urls.delBySno, {
        params: {
            ...appkey,
            sNo
        }
    })
}
api.stuSearch = function (search, page=1) {
    return Axios.get(urls.baseURL + urls.searchStudent, {
        params: {
            ...appkey,
            search,
            sex: -1,
            page,
            size
        }
    })
}
api.addStu = function (data) {
    return Axios.get(urls.baseURL + urls.addStudent, {
        params: {
            ...appkey,
            ...data
        }
    })
}
export default api
  


