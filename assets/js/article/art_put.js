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
    dataBackfilling()
    function dataBackfilling() {
        $.ajax({
            method: 'get',
            url: '/my/article/' + parent.artId,
            success: response => {
                if (response.status)
                    layui.layer.msg(response.message);
                // 数据回填
                artDataBackfilling(response.data)
            }
        })
        // http://127.0.0.1/uploads/q.PNG
    }
    function artDataBackfilling(data) {
        // layer.form.val('artForm', data);

        // layui.form.val('artForm', data);
        layui.form.val("artForm", {
            "title": data.title
            , "cate_id": data.cate_id
            , "content": data.content
        });
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', data.cover_img)  // 重新设置图片路径
            .cropper(options);      // 重新初始化裁剪区域
        // console.log(data)
    }
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
    var art_state = '已发布';
    $('#submitDraft').on('click', () => {
        art_state = '草稿';
    });
    $('#submitPublish').on('click', () => {
        art_state = '已发布';
    });

    // 为表单绑定submit事件
    $('#art_put_form').on('submit', e => {
        e.preventDefault();
        let fd = new FormData($('#art_put_form')[0])
        fd.append('state', art_state)
        $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) { // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                fd.append('id', window.parent.artId);
                fd.set('cover_img', blob);
                publishArticle(fd);
            });
    });
    function publishArticle(fd) {
        $.ajax({
            method: 'put',
            url: '/my/article',
            data: fd,
            contentType: false,
            processData: false,
            success: response => {
                console.log(response)
                // if (response.status != 0) {
                //     layui.layer.msg(response.message);
                // }
                // $('#art_put_form')[0].reset();
                // return layui.layer.msg(response.message);
            }
        });
    };
})