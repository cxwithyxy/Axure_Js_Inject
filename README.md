# Axure_Js_Inject v2.0
可以在产品原型（RP）中加入你想要的js代码，这些js代码会用浏览器浏览产品原型的时候执行

---


## 支持

- Axure rp 9.0 
- Chrome 浏览器 73版 及以上

#### 更好的说明

[Axure_js_inject 的使用说明](https://cxwithyxy.gitee.io/axure_js_inject/axure_js_inject____.html)

#### 开始

- 在元件库中导入 Axure_Js_Inject.rplib

#### 使用{{}}占位符执行代码

- 从Axure_Js_Inject元件库中拖拽{{}}到你的页面上

- 在可以使用[[]]的地方，便可以使用{{}}

- 如“设置文本”成当前时间:

- 用[[]]方法时，输入的是[[Now]]

- 用{{}}方法时，输入的是{{new Date()}}

- 但是{{}}占位符可以实现更多的功能

- 如展示浏览器UA

- {{navigator.userAgent}}

#### 使用code_Box执行代码

- 从Axure_Js_Inject元件库中拖拽code_Box到你的页面上

- 把js代码粘贴到code_Box中

#### 使用case_Expose

case_Expose 用于把axure中的事件处理的case提取接口给外部js调用

- 从Axure_Js_Inject元件库中拖拽case_Expose到你的页面上

- case_Expose中设置文本为你想要的接口名称(如: 移动那个东西)

- 设置case_Expose的交互--鼠标单击时--case为: 移动另一个元件

- 在任意可以执行js代码的地方(如: code_Box)调用你想要的接口名称(如: 移动那个东西();)


