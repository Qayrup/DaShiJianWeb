$(() => {
    let imgArr = ['bmp', 'jpg', 'png', 'tif', 'gif', 'pcx', 'tga', 'exif', 'fpx', 'svg', 'psd', 'cdr', 'pcd', 'dxf', 'ufo', 'eps', 'ai', 'raw', 'WMF', 'webp', 'avif', 'apng'];
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)
    $('#chooseYourAvatar').on('click', () => {
        $('#chooseAvatar').click();
    });
    $('#chooseAvatar').on('change', e => {
        let files = e.target.files
        let filename = files[0].name.split('.')
        if (files.length != 1)
            return layui.layer.msg('请选择一张图片作为头像')
        else if (!imgArr.some(v => {

            return v == filename[filename.length - 1]
        }))
            return layui.layer.msg('请选择一张图片作为头像')
        var newImgURL = URL.createObjectURL(files[0])
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
    })
    $('#uploadAvatar').on('click', () => {
        var dataURL = $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
        $.ajax({
            type: "put",
            url: "/my/avatar",
            data: { avatar: dataURL },
            success: function (response) {
                if (response.status != 0)
                    return layui.layer.msg(response.message)
                window.parent.userInfo();
                return layui.layer.msg(response.message)
            }
        });
    })
})