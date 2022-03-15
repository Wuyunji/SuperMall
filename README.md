<<<<<<< HEAD
﻿# First
=======
 # First
>>>>>>> 3fbabe1ee04513669e84afcfb9c85a642e5adf98
### you need to run server.js in SuperMall-Server

# Second
### you need to use `npm install` to install modules listed in package.json

# Then
### you should open /src/network/urls.js and change the address of the localhost

# Finally 
### Getting Started with `yarn start` and open [http://xxx.xxx.xxx.xxx:3000](http://xxx.xxx.xxx.xxx:3000) to view it in your browser.(NOT http://localhost:3000)

## Make sure you put it in mobile mode !!! (iPhone 6/7/8)

项目描述：
	该项目是基于React hooks+redux+react-router开发的移动端SPA单页面应用。前端通过axios请求特定接口来获取数据，使用react-router来实现不同页面间的切换，并使用redux实现了购物车、点击收藏等功能。后端通过node.js+express+MongoDB实现了简单的登录注册功能并通过session进行身份验证。

该项目分六大模块：首页、购物车、我的、详情页、登录、注册

1.首页：
  首屏展示轮播图和本周流行，下拉后可以展示[流行、新款、精选]三个子列表，通过点击对应按钮可以实现切换展示。子列表中的每张图片都可以通过点击跳转到对应的详情页。在首页中，使用‘react-awesome-swiper’库实现轮播图。实现了下拉加载更多、回到顶部、刷新页面、导航栏切换、导航栏吸顶等功能

2.购物车：
	在详情页点击添加至购物车后会将商品展示在购物车页面，可以对添加如购物车的商品进行相关操作。在购物车页面中，实现了点击按钮全选/全不选功能、自动计算选择的商品总数目、总价格。

3.我的：
	在我的页面中，展示了登录后的个人信息。展示了在详情页点击收藏的总个数。

4.详情页：
	详情页展示了商品的图片、描述、参数、买家评论、以及相关商品推荐。实现了回到顶部、刷新、回到首页的功能。实现了点击顶部导航栏跳转到对应内容、滑动至某内容导航高亮。实现了点击收藏、取消收藏。实现了添加至购物车的功能，在未登录的情况下，点击收藏或点击添加至购物车会跳转到登录页面。

<<<<<<< HEAD
5.登录：
	通过axios发送请求验证账号密码，如果输入不正确会有相应提示。
=======
### `npm start`
Runs the app in the development mode.
### important: you must Open [http://xxx.xxx.xxx.xxx:3000](http://xxx.xxx.xxx.xxx:3000) to view it in your browser.(NOT http://localhost:3000)
>>>>>>> 3fbabe1ee04513669e84afcfb9c85a642e5adf98

6.注册：
  通过axios发送请求验证账号密码，如果输入不正确会有相应提示。
