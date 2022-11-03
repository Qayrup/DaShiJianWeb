$(() => {
    $('#chancePassword').on('click', e => {
        e.preventDefault();
        let passwordObj = layui.form.val('chancePasswordForm');
        if (passwordObj.oldPassword == passwordObj.newPassword)
            return layui.layer.msg('新旧密码不能相同');
        if (passwordObj.newPassword != passwordObj.OKPassword)
            return layui.layer.msg('密码输入不一致');
        submitChancePassword(passwordObj);
    })
    function submitChancePassword(passwordObj) {
        console.log(passwordObj)
        $.ajax({
            type: "put",
            url: "/my/password",
            data: passwordObj,
            success: function (response) {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                layui.layer.msg(response.message);
                return $('.layui-form')[0].reset();
            }
        });
    }


})
