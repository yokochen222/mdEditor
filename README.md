# mdeditor

> markdown文本编辑器

windows 开发体验版：[http://storage.yqchen.cn/mdeditor%20Setup%200.0.1.exe](http://storage.yqchen.cn/mdeditor%20Setup%200.0.1.exe)

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
### 一、编辑器快捷键使用

- 1、选择类

|快捷键|功能|备注|
|-|-|-|
|Ctrl+D|选中光标所占的文本，继续操作则会选中下一个相同的文本|-|
|Alt+F3| 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑|-|
|Ctrl+L| 选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样|-|
|Ctrl+Shift+L | 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行|-|
|Ctrl+Shift+M | 选择括号内的内容（继续选择父括号）|-|
|Ctrl+M|光标移动至括号内结束或开始的位置|-|
|Ctrl+Enter| 在下一行插入新行。举个栗子：即使光标不在行尾，也能快速向下插入一行|-|
|Ctrl+Shift+Enter| 在上一行插入新行。举个栗子：即使光标不在行首，也能快速向上插入一行|-|
|Ctrl+← |向左单位性地移动光标，快速移动光标。|-|
|Ctrl+→ |向右单位性地移动光标，快速移动光标。|-|
|shift+↑| 向上选中多行。|-|
|shift+↓| 向下选中多行。|-|
|Shift+← |向左选中文本。|-|
|Shift+→| 向右选中文本。|-|
|Ctrl+Shift+← |向左单位性地选中文本。|-|
|Ctrl+Shift+→ |向右单位性地选中文本。|-|
|Ctrl+Shift+↑ |将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。|-|
|Ctrl+Shift+↓ |将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。|-|
|Ctrl+Alt+↑ |向上添加多行光标，可同时编辑多行。|-|
|Ctrl+Alt+↓ |向下添加多行光标，可同时编辑多行。|-|

- 2、编辑类

|快捷键|功能|备注|
|-|-|-|
|Ctrl+Shift+D | 复制光标所在整行，插入到下一行。|-|
|Tab |向右缩进。|-|
|Shift+Tab |向左缩进。|-|
|Ctrl+K+K| 从光标处开始删除代码至行尾。|-|
|Ctrl+Shift+K |删除整行。|-|
|Ctrl+/ |注释单行。|-|
|Ctrl+Shift+/ |注释多行。|-|
|Ctrl+K+U| 转换大写。|-|
|Ctrl+K+L |转换小写。|-|
|Ctrl+Z| 撤销。|-|
|Ctrl+Y| 恢复撤销。|-|
|Ctrl+U| 软撤销，感觉和 Gtrl+Z 一样。|-|
|Ctrl+F2 |设置书签|-|
|Ctrl+T| 左右字母互换|-|

- 3、操作类

|快捷键|功能|备注|
|-|-|-|
|Ctrl+P| 预览切换|-|
|F11| 全屏切换|-|
|Ctrl+O| 打开markdown文件|-|
|Ctrl+N| 新建markdown文件|-|
|Ctrl+S| 保存markdown文件|-|

- 4、基础功能
> - 1、文件拖拽上传 文件类型识别生成图片插入/附件插入
> - 2、插入流程图 echarts图 数学公式（具体使用请查看标准markdown语法）


-------
### 二、七牛云存储设置
> 七牛云对象存储地址：[http://https://www.qiniu.com/products/kodo](http://https://www.qiniu.com/products/kodo)

![image.png](http://storage.yqchen.cn/Fg0FKwqzuMJPutwwhnROk5Sh_Qzb)

- 1、注册七牛云账号
- 2、添加对象存储
![image.png](http://storage.yqchen.cn/FigptAfYkhzR_RiGdc78jdbqXFqL)

- 3、BUCKET_NAME
![image.png](http://storage.yqchen.cn/FgSPi4TTmZ2mZbS1xU7xaE6Ilm7b)
- 4、域名绑定 DOMAIN
![image.png](http://storage.yqchen.cn/FgE2f3_zq8VG4BKQcxo0lZpETFyt)
- 5、获取AccessKey 和 SecretKey
![image.png](http://storage.yqchen.cn/Flluz4hwhBworF-0dVzZOevw-iEX)
![image.png](http://storage.yqchen.cn/FvZ6tLXNR_0rbvLoBRjzFZ6LrDAR)
- 6、将对应参数填入编辑器即可使用云存储
![image.png](http://storage.yqchen.cn/FreLJyeWkL3Dm6Tj-UrH9avwRUQj)

### 三、开发依赖（鸣谢）
- 1、 [markdown-it-vue](https://www.npmjs.com/package/markdown-it-vue)
- 2、 [axios](https://www.npmjs.com/package/axios)
- 3、 [iview](https://www.npmjs.com/package/iview)
- 4、 [qiniu](https://www.npmjs.com/package/qiniu)
- 5、 [vue-electron](https://www.npmjs.com/package/vue-electron)
- 6、 [vue-codemirror-lite](https://www.npmjs.com/package/vue-codemirror-lite)


