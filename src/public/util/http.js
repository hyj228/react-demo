import axios from 'axios';
import {
    message
} from 'antd';

const Api = {};
const method = ['get', 'post', 'put', 'delete'];

const refreshCrsfToken = (item, url, data, options) => {
    // return Api.get('/api/global.json', null, {
    //     slient: true
    // }).then(res => {
    //     Object.assign(_global, res.data);
    //     return Api[item](url, data, options);
    // });
};

method.forEach(item => {
    Api[item] = (url = '', data, options = {}) => (
        new Promise((resolve, reject) => {
            // const headers = {
            //     'X-CSRF-TOKEN': _global && _global.csrf_token
            // };
            // const token = localStorage.getItem('token');
            // if (token) headers['Authorization'] = `Bearer ${token}`;

            // let _options = {
            //     headers
            // };
            // if (options && options.headers) {
            //     _options.headers = Object.assign({}, headers, options.headers);
            // }

            axios(Object.assign({
                url,
                method: item,
                params: item === 'get' ? data : null,
                data
            })).then(res => {
                console.log(res,'/////')
                if (res && res.data.code === 1202) {
                    console.log(res,'/////')
                    sessionStorage.clear()
                    // window.location.href = `/login?redirect_uri=${encodeURIComponent(window.location.href)}`;
                    window.location.href = '/login';
                    return;
                }
                resolve(res)
            }).catch(error => {
            // },)).then(res => resolve(res)).catch(error => {
                if (error.response && error.response.status === 1202) {
                    sessionStorage.clear()
                    // window.location.href = `/login?redirect_uri=${encodeURIComponent(window.location.href)}`;
                    window.location.href = '/login';
                    return;
                }
                if (error.response && error.response.status === 419) {
                    return refreshCrsfToken(item, url, data, options).then(r => resolve(r)).catch(err => reject(err.response));
                }
                if (error.response && error.response.data) {
                    if (!options.slient) {
                        switch (typeof error.response.data) {
                        case 'object':
                            message.error(error.response.data.message || error.response.data.error);
                            break;
                        default:
                            message.error(error.response.data);
                        }
                    }

                    reject(error.response);
                }
            });
        })
    );
});

export default Api;