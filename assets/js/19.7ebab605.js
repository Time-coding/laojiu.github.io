(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{53:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第一期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一期","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一期")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI3NDg3NjA3OA==&mid=2247485333&idx=1&sn=adc3e784ca018ed51c12097d006c9683&chksm=eb0c1454dc7b9d423e63c084280b0447f18f237c217ad0a826ac177181c287c8abb3aa783dec&token=1384790185&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号同步"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"构造函数与class的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数与class的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造函数与class的区别")]),t._v(" "),s("p",[t._v("如果碰到类似的题，最好细分一下区别，一般先从定义上做对比，再从行为上、功能上等等做比较。")]),t._v(" "),s("p",[t._v("首先，构造函数本质上是函数，而class本质是类，这是不同的两个概念；但是他们都可以通过new来创建实例，内部通过this来指向实例。")]),t._v(" "),s("p",[t._v("功能上区别：实现的继承的方式不同，构造函数常用原型连和call或apply等方式实现继承，而class的继承比较特殊，需要通过extends和super来实现。而且类内部定义的方法是不可枚举的。")]),t._v(" "),s("p",[t._v("使用上的区别：构造函数可以直接调用，而类必须通过new来调用；类的所以方法都定义在prototype上，所以调用其实例上的方法即调用其原型上的方法。")]),t._v(" "),s("h2",{attrs:{id:"怎么通过css来优雅的调节元素顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么通过css来优雅的调节元素顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎么通过css来优雅的调节元素顺序")]),t._v(" "),s("p",[t._v("例如一个大盒子里面有10个小盒子，怎么可以方便的通过css来回调顺序呢？")]),t._v(" "),s("p",[t._v("答案就是flex布局的order属性，order的定义就是设置或检索弹性盒模型对象的子元素出现的順序。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/laojiu.github.io/images/flexOrder.jpeg",alt:"order"}})]),t._v(" "),s("p",[t._v("所以我们很容易就可以实现如上效果：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#main div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 70px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 70px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#myGreenDIV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mymove 0.5s ease infinite forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" mymove")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lightgreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myGreenDIV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("coral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lightblue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("flex的概念是用于设置或检索弹性盒模型对象的子元素如何分配空间。简而言之，就是分配弹性空间的子元素；")]),t._v(" "),s("p",[t._v("flex的属性是flex-grow、flex-shrink 和 flex-basis 属性的简写属性。")]),t._v(" "),s("p",[t._v("flex的默认值是0 1 auto；")]),t._v(" "),s("p",[t._v("flex:1表示让所有弹性盒模型对象的子元素都有相同的长度，忽略它们内部的内容。")]),t._v(" "),s("p",[t._v("flex的取值有这么几种情况：")]),t._v(" "),s("p",[t._v("none：则计算值为 0 0 auto；")]),t._v(" "),s("p",[t._v("auto：则计算值为 1 1 auto；")]),t._v(" "),s("p",[t._v("具体的长度或百分比：表示 flex-basis 的值；")]),t._v(" "),s("p",[t._v("数字：表示flex-grow,后面的两个属性都取默认值；")]),t._v(" "),s("h2",{attrs:{id:"浏览器和服务器的缓存机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器和服务器的缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器和服务器的缓存机制")]),t._v(" "),s("p",[t._v("这道题主要想说的是通过HTTP实现的缓存，浏览器有浏览器缓存，服务器一般是指反向代理服务器和cdn缓存。")]),t._v(" "),s("p",[t._v("我们可以分成这么几步来记忆：")]),t._v(" "),s("ol",[s("li",[t._v("缓存位置")]),t._v(" "),s("li",[t._v("缓存过程")]),t._v(" "),s("li",[t._v("缓存机制")]),t._v(" "),s("li",[t._v("实际应用场景的缓存策略")]),t._v(" "),s("li",[t._v("用户行为对缓存的影响")])]),t._v(" "),s("h4",{attrs:{id:"先说缓存位置："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先说缓存位置：","aria-hidden":"true"}},[t._v("#")]),t._v(" 先说缓存位置：")]),t._v(" "),s("p",[t._v("Service Worker(HTTPS) >>> Memory Cache >>> Disk Cache >>>Push Cache(HTTP2) ;")]),t._v(" "),s("p",[s("strong",[t._v("Service Worker")]),t._v("：是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。而且协议必须是HTTPS。")]),t._v(" "),s("p",[s("strong",[t._v("Memory Cache")]),t._v("：也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。\nDisk Cache： 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。")]),t._v(" "),s("p",[s("strong",[t._v("Push Cache（推送缓存）")]),t._v("：是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。")]),t._v(" "),s("h4",{attrs:{id:"再看缓存过程：浏览器与服务器通信的方式为应答模式；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再看缓存过程：浏览器与服务器通信的方式为应答模式；","aria-hidden":"true"}},[t._v("#")]),t._v(" 再看缓存过程：浏览器与服务器通信的方式为应答模式；")]),t._v(" "),s("p",[s("img",{attrs:{src:"/laojiu.github.io/images/http.jpeg",alt:""}})]),t._v(" "),s("p",[t._v("第一次发起HTTP请求会先从缓存中读取，如果缓存中没有标识，就会从服务器请求，然后服务器返回结果以及缓存规则，浏览器再存在浏览器缓存中。")]),t._v(" "),s("h4",{attrs:{id:"浏览器的缓存机制有两种：强缓存和协商缓存；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存机制有两种：强缓存和协商缓存；","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器的缓存机制有两种：强缓存和协商缓存；")]),t._v(" "),s("p",[s("strong",[t._v("强缓存")]),t._v("：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示from disk cache或from memory cache。强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。")]),t._v(" "),s("p",[s("strong",[t._v("协商缓存")]),t._v("：就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：")]),t._v(" "),s("p",[t._v("1、协商缓存生效，返回304和Not Modifie；")]),t._v(" "),s("p",[t._v("2、协商缓存失效，返回200和请求结果；")]),t._v(" "),s("p",[t._v("协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。")]),t._v(" "),s("p",[t._v("强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/laojiu.github.io/images/http.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"对于实际应用场景中的缓存策略："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于实际应用场景中的缓存策略：","aria-hidden":"true"}},[t._v("#")]),t._v(" 对于实际应用场景中的缓存策略：")]),t._v(" "),s("p",[t._v("对于频繁变动的资源，我们可以设置Cache-Control: no-cache 使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified 来验证资源是否有效。")]),t._v(" "),s("p",[t._v("而对于不常变化的资源，我们可以给它们的 Cache-Control 配置一个很大的 max-age=31536000(一年)，这样浏览器之后请求相同的 URL 会命中强制缓存。但如果你想要更新的话，可以通过添加hash使强缓存失效。")]),t._v(" "),s("h4",{attrs:{id:"用户行为对缓存的影响：常见的有："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户行为对缓存的影响：常见的有：","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户行为对缓存的影响：常见的有：")]),t._v(" "),s("blockquote",[s("p",[t._v("打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求。"),s("br"),t._v("\n普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用(如果匹配的话)。其次才是 disk cache。"),s("br"),t._v("\n强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache(为了兼容，还带了 Pragma: no-cache),服务器直接返回 200 和最新内容。"),s("br"),t._v("\n作者：浪里行舟 来源：简书")])]),t._v(" "),s("h2",{attrs:{id:"transtion、animation都有哪些属性，颜色渐变怎么实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transtion、animation都有哪些属性，颜色渐变怎么实现","aria-hidden":"true"}},[t._v("#")]),t._v(" transtion、animation都有哪些属性，颜色渐变怎么实现")]),t._v(" "),s("h4",{attrs:{id:"transtion：偏向过度，侧重于起始状态与结束状态；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transtion：偏向过度，侧重于起始状态与结束状态；","aria-hidden":"true"}},[t._v("#")]),t._v(" transtion：偏向过度，侧重于起始状态与结束状态；")]),t._v(" "),s("p",[s("code",[t._v("transition")]),t._v("常见的有4个值：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("property")]),t._v(" css属性名称")]),t._v(" "),s("li",[s("code",[t._v("duration")]),t._v(" 指定过度时间")]),t._v(" "),s("li",[s("code",[t._v("timing-function")]),t._v(" 指定速度曲线")]),t._v(" "),s("li",[s("code",[t._v("delay")]),t._v(" 延迟时间")])]),t._v(" "),s("p",[t._v("常用在"),s("code",[t._v("hover")]),t._v("上，除了前两个属性必须以外，其他属性不规定顺序。")]),t._v(" "),s("h4",{attrs:{id:"animation：偏动画，侧重于流程的控制；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation：偏动画，侧重于流程的控制；","aria-hidden":"true"}},[t._v("#")]),t._v(" animation：偏动画，侧重于流程的控制；")]),t._v(" "),s("p",[t._v("常用的属性有：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("name")]),t._v("是通过@keyframes定义的名字，")]),t._v(" "),s("li",[s("code",[t._v("duration")]),t._v("执行时长")]),t._v(" "),s("li",[s("code",[t._v("Timing-f")]),t._v("  速度曲线 默认"),s("code",[t._v("ease")]),t._v(" ，常用的取值有"),s("code",[t._v("linear")]),t._v("(匀速)，"),s("code",[t._v("ease-in")]),t._v("，"),s("code",[t._v("ease-out")]),t._v("，"),s("code",[t._v("ease-in-out")]),t._v("，"),s("code",[t._v("cubic-bezier(n,n,n,n)")]),t._v("（贝塞尔曲线）")]),t._v(" "),s("li",[s("code",[t._v("delay")]),t._v(" 延迟时间")]),t._v(" "),s("li",[s("code",[t._v("iteration-count")]),t._v(" 播放次数 常用数字或"),s("code",[t._v("infinite")])]),t._v(" "),s("li",[s("code",[t._v("direction")]),t._v(" 方向")]),t._v(" "),s("li",[s("code",[t._v("fill-mode")]),t._v(" 动画不播放时的状态，常用"),s("code",[t._v("forwards")]),t._v("（停留在终点）")]),t._v(" "),s("li",[s("code",[t._v("play-state")]),t._v(" 指定动画运行状态 "),s("code",[t._v("paused/running")])])]),t._v(" "),s("p",[t._v("除了前两个属性必须以外，其他属性不规定顺序")]),t._v(" "),s("h4",{attrs:{id:"gradients：颜色渐变，分两种线性渐变和径向渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradients：颜色渐变，分两种线性渐变和径向渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" Gradients：颜色渐变，分两种线性渐变和径向渐变")]),t._v(" "),s("p",[t._v("线性渐变"),s("code",[t._v("linear-gradient")]),t._v(" 可以向上/向下/向右/向左/对角； 默认自上而下渐变")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("direction/angle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color-stop1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color-stop2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("径向渐变radial-gradient 由中心定义")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("center/shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("shape")]),t._v(" 参数定义了形状。它可以是值 "),s("code",[t._v("circle")]),t._v(" 或 "),s("code",[t._v("ellipse")]),t._v("。其中，"),s("code",[t._v("circle")]),t._v(" 表示圆形，"),s("code",[t._v("ellipse")]),t._v(" 表示椭圆形。默认值是 ellipse。")]),t._v(" "),s("h2",{attrs:{id:"聊一聊浏览器的事件循环机制和node的事件循环机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊一聊浏览器的事件循环机制和node的事件循环机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 聊一聊浏览器的事件循环机制和node的事件循环机制")]),t._v(" "),s("p",[t._v("这道题出现的概率是越来越多，而且还会有后续的宏任务与微任务。\n简单的说：\n浏览器的EventLoop是在程序中主线程的任务执行完之后，会一直循环查看存放在任务队列里的事件任务是否被触发。")]),t._v(" "),s("p",[t._v("Node中EventLoop有一个具体的流程：外部输入数据–>轮询阶段(poll)–>检查阶段(check)–>关闭事件回调阶段(close callback)–>定时器检测阶段(timer)–>I/O 事件回调阶段(I/O callbacks)–>闲置阶段(idle, prepare)–>轮询阶段（按照该顺序反复运行）…")]),t._v(" "),s("p",[s("code",[t._v("poll")]),t._v(" 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里；")]),t._v(" "),s("p",[s("code",[t._v("check")]),t._v(" 阶段：执行 setImmediate() 的回调；")]),t._v(" "),s("p",[s("code",[t._v("close callbacks")]),t._v(" 阶段：执行 socket 的 close 事件回调；")]),t._v(" "),s("p",[s("code",[t._v("timers")]),t._v(" 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调；")]),t._v(" "),s("p",[s("code",[t._v("I/O callbacks")]),t._v(" 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调；")]),t._v(" "),s("p",[t._v("idle, prepare 阶段：仅 node 内部使用；")]),t._v(" "),s("p",[t._v("详细的可以查看这里"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI3NDg3NjA3OA==&mid=2247485274&idx=1&sn=35b23e1d03c8dbee2be4f44a2bd111b7&chksm=eb0c149bdc7b9d8d2332e98f69e1145cca30a41ff247c16d05a225a2b72a9c1ce0687350b2f4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的事件循环机制和node的事件循环机制"),s("OutboundLink")],1),t._v("。")])])},[],!1,null,null,null);a.default=e.exports}}]);