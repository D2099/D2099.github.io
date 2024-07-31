var posts=["2023/10/06/hexo博客文章页面加密/","2023/10/06/hexo博客butterfly主题图库创建/","2024/07/30/安知鱼主题中的关于本人界面的生涯模块魔改成恋爱计时/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };