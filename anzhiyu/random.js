var posts=["2024/10/10/hello-world/","2024/10/11/vscode常用快捷键/","2024/10/27/Dockerfile编写方法/","2024/10/27/Docker常用命令/","2024/10/27/Mac系统常用快捷键/","2024/10/27/Linux系统常用命令/","2024/10/27/Pandas常用语法/","2024/10/27/Visual-Studio快捷键/","2024/10/27/Windows系统常用命令/","2024/10/27/docker-compose编写方法/","2024/10/27/模型推理心得/","2024/10/27/Windows系统常用快捷键/","2024/11/21/hexo常用命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };