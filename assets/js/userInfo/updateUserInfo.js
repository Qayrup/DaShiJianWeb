$(() => {
    let form = layui.form;
    getUserInfo()
    $('#updateSubmit').on('click', function (e) {
        e.preventDefault()
        $.ajax({
            type: "post",
            url: "/my/userInfo",
            data: form.val('formUserInfo'),
            success: function (response) {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                layui.layer.msg('修改用户数据成功')
                getUserInfo();
                window.parent.userInfo();
            }
        });
    });
    $('#userInfoReset').on('click', (e) => {
        e.preventDefault();
        getUserInfo();
    })
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userInfo",
            success: function (response) {
                form.val('formUserInfo', response.data)
            }
        });
    }
})