$(() => {
    initCate()
    // 初始化富文本编辑器
    initEditor()
    let imgArr = ['bmp', 'jpg', 'png', 'tif', 'gif', 'pcx', 'tga', 'exif', 'fpx', 'svg', 'psd', 'cdr', 'pcd', 'dxf', 'ufo', 'eps', 'ai', 'raw', 'WMF', 'webp', 'avif', 'apng'];

    // 定义文章分类下拉框加载方法
    function initCate() {
        $.ajax({
            method: 'get',
            url: '/my/cates',
            success: response => {
                //动态加载模板引擎生成的option的内容
                $('select[name="cate_id"]').html(template('tpl-cate', response));
                // 调用layui的render方法加载动态加载的下拉框
                layui.form.render();
            }
        })
    };
    // 1. 初始化图片裁剪器
    var $image = $('#image');
    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    };
    // 3. 初始化裁剪区域
    $image.cropper(options);
    // 定义点击选择封面按钮选择图片
    $('#chooseArticleCover').on('click', () => {
        $('#articleCoverFile').click();
    });
    // 为文件选择框绑定事件
    $('#articleCoverFile').on('change', e => {
        // 获得选择的图片
        let files = e.target.files
        // 获得选择图片的格式名称并根据.将名称分隔为数组
        let filenameArr = files[0].name.split('.')
        if (files.length != 1)
            return layui.layer.msg('请选择一张图片作为头像')
        else if (!imgArr.some(v => {
            // 使用some循环判断文件格式是否正确
            return v == filenameArr[filenameArr.length - 1]
        }))
            return layui.layer.msg('请选择一张图片作为头像')
        // 获得文件url
        var newImgURL = URL.createObjectURL(files[0]);
        // 重新初始化文件裁剪框
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options);      // 重新初始化裁剪区域
    });
    // 定义文章的发布状态
    var art_state = '已发布';
    // 为存为草稿按钮，绑定点击事件处理函数
    $('#submitDraft').on('click', () => {
        art_state = '草稿';
    });
    $('#submitPublish').on('click', () => {
        art_state = '已发布';
    });

    // 为表单绑定submit事件
    $('#art_put_form').on('submit', e => {
        // 1. 阻止表单的默认提交行为
        e.preventDefault();

        // 2. 将封面裁剪过后的图片，输出为一个文件对象
        $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) {
                // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                // 3. 基于 form 表单，快速创建一个 FormData 对象
                let fd = new FormData($('#art_put_form')[0]);
                // 4. 将文章的发布状态，存到 fd 中
                fd.append('state', art_state);
                // // 5. 将文件对象，存储到 fd 中
                // fd.append('cover_img', blob);
                fd.set('cover_img', blob);
                publishArticle(fd);
            });
    });
    function publishArticle(fd) {
        $.ajax({
            method: 'post',
            url: '/my/article',
            data: fd,
            contentType: false,
            processData: false,
            success: response => {
                if (response.status) {
                    layui.layer.msg(response.message);
                }
                // $('#art_put_form')[0].reset();
                layui.layer.msg(response.message);
                // 发布文章成功后，跳转到文章列表页面
                return location.href = '/home/article/art_list.html';
            }
        });
    };
})