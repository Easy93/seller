define({ "api": [
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"code\": 1,\n      \"data\": {\n          \"role\": \"0\",\n          \"avatar\": \"/avatar/default.jpg\",\n          \"username\": \"admin\",\n          \"id\": \"5c4445b4975a0b56e0e462dc\",\n          \"token\": \"xxx\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   code: 0,\n   errMsg: '登录失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "name": "reg",
    "group": "User",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "params",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>用户角色(0 -&gt; 超级管理员； 1 -&gt; 普通)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 1,\n        \"data\": \"注册成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"code\": 0,\n        \"data\": \"注册失败\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "用户信息查询",
    "name": "userinfo",
    "group": "User",
    "description": "<p>用户信息查询需要用户登录</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n   \"Authorition\": \"xxxxxxxxxxxx\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"code\": 1,\n        \"data\": {\n            \"role\": \"0\",\n            \"avatar\": \"/avatar/default.jpg\",\n            \"username\": \"xiaoqiang\",\n            \"id\": \"5c4b2e2bfae6477ad8cfb41e\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user.js",
    "groupTitle": "User"
  }
] });
