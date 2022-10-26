$(() => {
    $('#link_reg').on('click', () => {
        $('.loginBox').hide();
        $('.regBox').show()
    });
    $('#link_login').on('click', () => {
        $('.regBox').hide();
        $('.loginBox').show();
    });
    const layer = layui.layer
    $('#form_reg').on('submit', e => {
        e.preventDefault();
        $.post('/api/signup',
            {
                userName: $('#form_reg [name=userName]').val(),
                password: $('#form_reg [name=password]').val()
            }, result => {
                if (result.status != 0)
                    return alert(result.message);
                layer.msg('注册成功');
                $('#link_login').click();
            })
    })
    //登入
    $('#form_login').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'post',
            url: "/api/signin",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status != 0) return layer.msg(response.message);
                layer.msg('登入成功');
                //将登入成功得到的token保存到localStorage中
                localStorage.setItem('token', response.token);
                location.href = '/index.htm'
            }
        });
    })
})

