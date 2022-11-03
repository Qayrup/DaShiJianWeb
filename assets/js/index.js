$(() => {
    // 调用userInfo获取用户信息
    userInfo();
    const layer = layui.layer
    $('#btnLogOut').on('click', () => {
        //eg1
        layer.confirm('确认退出吗', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token');
            location.href = '/login.html'
            layer.close(index);
        });
    });

})
// 获取用户信息
function userInfo() {

    $.ajax({
        type: 'get',
        url: '/my/userInfo',
        success: response => {
            //调用renderAvatar渲染用户头像
            renderAvatar(response.data)
        }
    })
}

///渲染用户头像
function renderAvatar(userInfo) {
    let userName = userInfo.nickname || userInfo.username
    $('.user-name').text(userName);
    if (userInfo.user_pic) {
        $('.user-img').attr('src', userInfo.user_pic).show();
        $('.user-avatar').hide();
    } else {
        $('.user-img').hide();
        $('.user-avatar').text(userName.slice(0, 1).toUpperCase()).show();
    }
}

