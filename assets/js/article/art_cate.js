$(() => {
    artCateList();
    var layerIndex = null;
    var reviseCateInfo = null;
    //删除文章分类
    $('tbody').on('click', '[name="deleteButton"]', e => {
        let id = e.target.attributes['data-index'].value;
        $.ajax({
            method: 'delete',
            url: '/my/cates/' + id,
            success: response => {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                artCateList();
                layui.layer.msg(response.message);
            }
        })
    })
    //修改文章分类
    $('tbody').on('click', '[name="reviseButton"]', e => {
        let id = e.target.attributes['data-index'].value;
        layerIndex = layui.layer.open({
            type: 1,
            title: '修改分类',
            area: ['500px', '300px'],
            shade: 0.3,
            resize: false,
            content: $('#tpl-revise').html(),
        });
        $.ajax({
            method: "get",
            url: "/my/cates/" + id,
            success: function (response) {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                reviseCateInfo = response.data;
                layui.form.val('reviseCateForms', response.data);
            }
        });
    })
    // 修改文章类别
    $('body').on('submit', '#reviseCateForm', e => {
        e.preventDefault();
        let CateInfo = layui.form.val('reviseCateForms');
        if (reviseCateInfo.name == CateInfo.name &&
            reviseCateInfo.alias == CateInfo.alias)
            return layui.layer.msg('请修改分类名称或别名后提交');
        $.ajax({
            method: 'put',
            url: '/my/cates',
            data: CateInfo,
            success: response => {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                layui.layer.close(layerIndex);
                artCateList();
                layui.layer.msg(response.message);
            }
        })
    })
    //新增文章分类模态框
    $('#addCate').on('click', () => {
        layerIndex = layui.layer.open({
            type: 1,
            title: '添加类别',
            area: ['500px', '300px'],
            shade: 0.3,
            resize: false,
            content: $('#tpl-open').html(),
            end: artCateList()
        });
    })

    //新增文章分类列表
    $('body').on('submit', '#addCateForm', e => {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/cates",
            data: layui.form.val('cateForm'),
            success: (response) => {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                artCateList();
                layui.layer.close(layerIndex);
                return layui.layer.msg(response.message);
            }
        });
    })

    ///加载文章分类列表
    function artCateList() {
        $.ajax({
            type: "get",
            url: "/my/cates",
            success: function (response) {
                $('tbody').html(template('tpl-table', response));
            }
        });
    }
})