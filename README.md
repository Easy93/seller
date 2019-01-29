# vue + koa2练手项目

项目地址: [https://github.com/zhanghaifeng213/seller](https://github.com/zhanghaifeng213/seller)

项目结构说明

```text
├── README.md
├── miniprogram  // 小程序客户端
├── mobile // 移动端
├── web // 后台管理(old)已废弃
└── web-new // 后台管理
```

## 一、 项目介绍

### 本项目是一款前后端分离全栈开发项目，本次项目做一个进店点餐系统，从一个真实的快餐店，饭店等角度出发。实现手机点餐的功能。前端采用 vue 框架构建,后台使用 Koa2 框架构建,MongoDB 数据库,开发过程为 git 分支管理多人协作开发。

## 二、项目结构

### 该项目总体分为三个模块。

1、前端客户端手机点餐系统(Vue 安卓 App)。
2、前端后台管理系统(Vue 网页版)。
3、后台接口系统(Koa2+mongoDB)。

## 三、项目功能

### 前端客户端手机点餐模块

顾客下载点餐 APP,从后台获取菜单,实现扫描桌子上的二维码点餐下单的功能。二维码的作用是确认桌号。

### 前端后台管理系统

该系统功能包括登录,权限管理(超级管理员和普通管理员两类)。
页面大概分为以下几个：
1、顾客端页面展示。如菜单分类管理维护,菜单管理维护,菜单图片上传。
2、下单消息管理维护。
3、桌号管理维护。
4、收入管理,该页面是超级管理员权限可见。
等等都是一些增删改查的操作,其中下单的消息管理需要用 socket 做实时通讯。

### 后台接口

后台接口用 postman 测试好之后部署到阿里云服务器，供大家调试。

## 四、项目架构

1. 使用 vue 框架，以及 vue-router 构建单页面应用。
2. 本项目通过 vue-cli 脚手架快速搭建开发环境,采用 vuex 管理登录后的用户信息,Axios 封装处理请求。
3. 前端 UI 框架使用 Element-UI 组件库中部分功能进行快速开发。
4. 后台用 Koa2+mongodb 搭建

## 五、预期达到的技术效果

1. 能够熟练运用 HTML5 语义化标签+CSS3 新特性进行页面布局。
2. 能够合理运用 sass 进行样式代码的编写。
3. 能熟悉运用 vue.js 开发，route+vuex 工具的使用。
4. 能熟悉运用 vue.js 中的指令和服务与后台服务进行数据交互 ，实现模块功能 。
5. 能了解运用 Koa2 + MongoDB 搭建后台
6. 能了解运用 git 多人协作的过程
7. 能了解阿里云服务器部署项目

## 六、开发人员要求

1. 适用人群：熟悉 Vue,Koa2,MongoDB。需带领来系统了解 Vue,Koa2,MongoDB 开发流程。

## 七、开发流程

1.待定。。。群里讨论
