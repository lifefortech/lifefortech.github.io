var posts=["2024/10/10/hello-world/","2024/10/11/vscode常用快捷键/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };