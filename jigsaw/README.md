## 滑块拼图小游戏(AJIGSAW)


## 简介

一个微信拼图小游戏，移动拼图快来复原图片, 通过对剪纸，脸谱，功夫的三类图片进行拼图来了解中国的非物质文化。 


## 源码目录介绍


├── audio                 		// 存放小游戏所用到的音乐文件
├── images                      // 存放小游戏所用到的图片
├── js							// 小游戏的js代码文件
│   ├── base
│ 	│	├──button.js			// 按钮基类
│ 	│	└──eventUtil.js			// 点击与滑动基类
│   │
│   ├── libs
│  	│	├──bezier.js			// 贝塞尔曲线函数，用来进行拼图块移动的动画效果
│   │	├──symbol.js			// 小游戏对象
│   │ 	└──weapp-adapter.js		// 微信小游戏适配器
│   │
│   ├── models
│	│	└── piece.js				// 拼图切块类
│	│
│	├── runtime
│	│	├──	background.js		// 游戏背景
│	│	├──	gameinfo.js			// 游戏加载资源类	
│	│	├── gameMap.js         	// 拼图块映射地址map
│	│	└── music.js            // 游戏音乐类
│   │
│   ├── start
│	│	└── start.js 			// 游戏开始界面
│	│
│	├── databus.js 				// 存放全局变量
│	│
│	└── main.js					// 游戏主函数
│
├── game.json					// 加载游戏主函数
└── project.config.json			// 小游戏配置文件


