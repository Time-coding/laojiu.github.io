(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{55:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"第七期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第七期","aria-hidden":"true"}},[a._v("#")]),a._v(" 第七期")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI3NDg3NjA3OA==&mid=2247485412&idx=1&sn=41a8ed1f6979cac960b88d2f3a1458fb&chksm=eb0c1425dc7b9d336d1600db78796d964fddb0b17ac798ffa8bba6fd017469158899c98d71a9&token=1384790185&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("公众号同步"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"react-中-setstate-为什么是异步的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-中-setstate-为什么是异步的","aria-hidden":"true"}},[a._v("#")]),a._v(" React 中 setState() 为什么是异步的")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("保证内部的一致性"),s("br"),a._v("\n在同步模型中，虽然 this.state 会立即更新，但是 this.props 并不会。而且在没有重渲染父组件的情况下，我们不能立即更新 this.props。如果要立即更新 this.props （也就是立即重渲染父组件），就必须放弃批处理（根据情况的不同，性能可能会有显著的下降）。")])]),a._v(" "),s("li",[s("p",[a._v("性能优化"),s("br"),a._v("\nReact 会依据不同的调用源，给不同的 setState() 调用分配不同的优先级。调用源包括事件处理、网络请求、动画等。")])]),a._v(" "),s("li",[s("p",[a._v("更多的可能性"),s("br"),a._v("\nReact 的生命周期和state的异步更新的设计思维会导致很多可能性。")])])]),a._v(" "),s("h2",{attrs:{id:"如果8081端口被占用，如何处理-杀死端口命令是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果8081端口被占用，如何处理-杀死端口命令是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" 如果8081端口被占用，如何处理?杀死端口命令是什么")]),a._v(" "),s("p",[a._v("如果端口被占用有两种处理方式：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("换端口号")])]),a._v(" "),s("li",[s("p",[a._v("杀死8081端口，重新启动项目")])])]),a._v(" "),s("p",[a._v("常用的两种开发环境，一种是mac系统，一种是widows；")]),a._v(" "),s("p",[a._v("在mac系统中，我们先查看8081端口占用信息，然后通过指令杀死8081端口：")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("sudo lsof "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("\n\nsudo kill "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("61342")]),a._v("（即pid）\n")])])]),s("p",[a._v("在windows系统中，")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("netstat "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ano "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" findstr "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8081"')]),a._v(" \ntaskkill "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("pid "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14396")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("f\n")])])]),s("h2",{attrs:{id:"强缓存和协商缓存的缓存的区别以及头部的关键属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存和协商缓存的缓存的区别以及头部的关键属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 强缓存和协商缓存的缓存的区别以及头部的关键属性")]),a._v(" "),s("h4",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),s("p",[s("code",[a._v("Expires")]),a._v("：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。")]),a._v(" "),s("p",[s("code",[a._v("Cache-Control")]),a._v("：当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。")]),a._v(" "),s("p",[a._v("cache-control除了该字段外，还有下面几个比较常用的设置值：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("-no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。")])]),a._v(" "),s("li",[s("p",[a._v("-no-store：直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。")])]),a._v(" "),s("li",[s("p",[a._v("-public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。")])]),a._v(" "),s("li",[s("p",[a._v("-private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。")])])]),a._v(" "),s("h4",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),s("p",[a._v("Last-Modify/If-Modify-Since：浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间；当浏览器再次请求该资源时，request的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存")]),a._v(" "),s("p",[s("code",[a._v("Etag")]),a._v("：web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。")]),a._v(" "),s("p",[s("code",[a._v("If-None-Match")]),a._v("：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Etage声明，则再次向web服务器请求时带上头If-None-Match （Etag的值）。web服务器收到请求后发现有头If-None-Match 则与被请求资源的相应校验串进行比对，决定是否命中协商缓存；")]),a._v(" "),s("p",[s("code",[a._v("ETag")]),a._v("和"),s("code",[a._v("Last-Modified")]),a._v("的作用和用法，他们的区别：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Etag要优于Last-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；")])]),a._v(" "),s("li",[s("p",[a._v("在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值；")])]),a._v(" "),s("li",[s("p",[a._v("在优先级上，服务器校验优先考虑Etag。")])])]),a._v(" "),s("h2",{attrs:{id:"href与src的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#href与src的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" href与src的区别")]),a._v(" "),s("p",[a._v("src 是指向物件的来源地址，是引入。在 img、script、iframe 等元素上使用。")]),a._v(" "),s("p",[a._v("href 是超文本引用，指向需要连结的地方，是与该页面有关联的，是引用。在 link和a 等元素上使用。")]),a._v(" "),s("h2",{attrs:{id:"https的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https的缺点","aria-hidden":"true"}},[a._v("#")]),a._v(" https的缺点")]),a._v(" "),s("h4",{attrs:{id:"技术方面："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术方面：","aria-hidden":"true"}},[a._v("#")]),a._v(" 技术方面：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器;")])]),a._v(" "),s("li",[s("p",[a._v("HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。")])]),a._v(" "),s("li",[s("p",[a._v("HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。")])])]),a._v(" "),s("h4",{attrs:{id:"成本方面："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成本方面：","aria-hidden":"true"}},[a._v("#")]),a._v(" 成本方面：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("相同网络环境下，HTTPS协议会使页面的加载时间延长近50%，增加10%到20%的耗电。此外，HTTPS协议还会影响缓存，增加数据开销和功耗。")])]),a._v(" "),s("li",[s("p",[a._v("HTTPS协议的安全是有范围的，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。")])]),a._v(" "),s("li",[s("p",[a._v("最关键的，SSL 证书的信用链体系并不安全。特别是在某些国家可以控制 CA 根证书的情况下，中间人攻击一样可行。")])])])])},[],!1,null,null,null);t.default=r.exports}}]);