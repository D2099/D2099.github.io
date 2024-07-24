var posts=["2023/10/06/hexo博客文章页面加密/","2023/10/06/hexo博客butterfly主题图库创建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };