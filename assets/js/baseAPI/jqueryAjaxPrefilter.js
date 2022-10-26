// jquery每次调用ajax的时候会先调用ajaxPrefilter
$.ajaxPrefilter((options) => {
    options.url = 'http://127.0.0.1:80' + options.url;
    options.url.indexOf('/api') == -1 && (options.headers = { Authorization: localStorage.getItem('token') || '' });
    options.complete = function (response) {
        if (response.responseJSON.status === 1 && response.responseJSON.message == '用户信息获取失败') {
            localStorage.removeItem('token');
            location.href = '/login.html';
        }
    }

})