(function (w) {
    let baseURL = 'http://localhost:8080/api/v1';
    let urlBody = {
        user_login:baseURL+'/admin/user/login', //用户登录
        user_info:baseURL+'/admin/user/info', //获取用户信息
        user_detail:baseURL+'/admin/user/detail', //获取用户详情
        user_edit:baseURL+'/admin/user/edit', //编辑用户信息

        category_list:baseURL+'/admin/category/list', //所有文章类别
        category_add:baseURL+'/admin/category/add', //新增文章类别
        category_search:baseURL+'/admin/category/search', //根据id查询指定文章类别
        category_edit:baseURL+'/admin/category/edit', //编辑文章类别
        category_delete:baseURL+'/admin/category/delete', //删除文章类别

        article_query:baseURL+'/admin/article/query', //文章搜索
        article_publish:baseURL+'/admin/article/publish', //发布文章
        article_search:baseURL+'/admin/article/search', //根据id获取文章信息
        article_edit:baseURL+'/admin/article/edit', //文章编辑
        article_delete:baseURL+'/admin/article/delete', //删除文章
        
        data_info:baseURL+'/admin/data/info', //获取统计数据
        data_article:baseURL+'/admin/data/article', //日新增文章数量统计
        data_category:baseURL+'/admin/data/category', //各类型文章数量统计
        data_visit:baseURL+'/admin/data/visit', //日文章访问量

        comment_search:baseURL+'/admin/comment/search', //文章评论搜索
        comment_pass:baseURL+'/admin/comment/pass', //评论审核通过
        comment_reject:baseURL+'/admin/comment/reject', //评论审核不通过
        comment_delete:baseURL+'/admin/comment/delete', //删除评论

    }
    window.$urlBody = urlBody;
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') == null && window.location.pathname != '/BigNews/admin/login.html') {
        // alert(window.location.pathname);
        window.location.href = 'http://127.0.0.1:5500/BigNews/admin/login.html';
    }else{
        $.ajaxSetup({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            }
        })
    }
})(window)