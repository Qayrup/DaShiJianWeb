$(() => {
    //查询分页函数参数对象
    let queryPageObj = {
        page: 1,//默认请求第一页
        pageSize: 5,//默认每页显示2条数据
        cate_id: null,//文章分类id
        state: null//文章发布状态
    };
    queryPage(queryPageObj);
    artSelect();
    $('#quartArtListForm').on('submit', function (e) {
        e.preventDefault();
        const data = layui.form.val('artListFormVal')
        queryPageObj.cate_id = data.cate_id
        queryPageObj.state = data.state
        queryPage(queryPageObj)
    })
    //编辑按钮绑定事件
    $('tbody').on('click', 'button[name="reviseButton"]', (e) => {
        window.parent.artId = e.target.attributes['data-index'].value;
        // parent.location.href = 
        location.href = '/home/article/art_put.htm'
    });
    //删除按钮绑定点击事件
    $('tbody').on('click', 'button[name="deleteButton"]', (e) => {
        layui.layer.confirm('是否确认删除?一旦删除则不可撤销', { icon: 3, title: '提示' }, function (index) {
            delArtId = {
                id: e.target.attributes['data-index'].value
            }
            $.ajax({
                method: 'delete',
                url: '/my/article',
                data: delArtId,
                success: response => {
                    if (response.status)
                        return layui.layer.msg(response.message)
                    queryPage(queryPageObj);
                    layui.layer.msg(response.message)
                }
            })
            layer.close(index);
        });
    })
    //分页加载事件
    function layPagination(total) {
        //执行一个laypage实例
        layui.laypage.render({
            elem: 'layPagination', //注意，这里的 test1 是 ID，不用加 # 号
            count: total,//数据总数，从服务端得到
            limit: queryPageObj.pageSize,
            limits: [5, 6, 7, 8, 9],
            curr: queryPageObj.page,
            layout: ['count', 'limit', 'prev', 'page', 'next', 'skip', 'refresh'],
            jump: function (obj, first) {
                //obj包含了当前分页的所有参数，比如：
                // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                // console.log(obj.limit); //得到每页显示的条数
                //首次不执行
                if (!first) {
                    queryPageObj.page = obj.curr
                    queryPageObj.pageSize = obj.limit
                    queryPage(queryPageObj);
                }
            }
        });
    }
    //select框加载事件
    function artSelect() {
        $.ajax({
            method: 'get',
            url: '/my/cates',
            success: response => {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                $('#cateSelect').html(template('temp_artCatSelect', response));
                layui.form.render();
            }
        })
    }
    //查询分页函数
    function queryPage(queryPageObj) {
        $.ajax({
            method: 'get',
            url: '/my/articlePage',
            data: queryPageObj,
            dataType: 'json',
            success: response => {
                if (response.status != 0)
                    return layui.layer.msg(response.message);
                $('#artListBody').html(template('temp_pagination', response));
                layPagination(response.data.total)
            }
        });
    };
})