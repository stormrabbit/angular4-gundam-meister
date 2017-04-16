# A Gundam Angular Demo
你好，我是龙骑将杨影枫，欢迎来到我的城堡。

这是端午节假期在家里对着angular官网教程自己撸的一个小东西，用到了angular中compoent和service，以及http模块进行网络请求。

但有所不同的是用scss代替了css。在此基础上又添加了webpack打包。为了方便展示数据，又用nodejs制作了一个小型的服务器demo。

/angular目录下的是移动web文件，/server目录下的是服务器文件。

官网的文档：https://angular.io/

# 工具说明
基本框架：Anular4.0
IDE: Sublime Text 3
版本控制： git
运行环境：NodeJS v6.9.5


# 前端运行命令
- npm start  运行  
- npm run build 打包

# 服务器运行命令
- npm start 启动服务器

# 本机访问前端地址
- http://localhost:3000/

# 本机访问服务器地址
- http://localhost:4000

# 服务器接口
- /gundamlist 返回所有高达机体的json字符串
- /detail?id=xxx  根据id查询到的高达机体的json字符串，如果没有查询到会返回空

# 有关webpack打包
webpack打包后的文件保存在/angular/dist目录下，将该文件夹下的所有文件复制到/server/assets/目录下，启动服务器后访问http://localhost:4000/index.html即可。