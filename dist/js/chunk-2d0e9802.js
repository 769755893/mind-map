(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9802"],{"8e98":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this;s._self._c;return s._m(0)},l=[function(){var s=this,t=s._self._c;return t("div",[t("h1",[s._v("基本使用")]),t("blockquote",[t("p",[s._v("重要说明：")]),t("p",[s._v("1.本教程中的在线编辑器中使用的是完整版的simple-mind-map，即包含所有插件，如果你是通过"),t("code",[s._v("npm")]),s._v("方式使用的话，需要自己手动注册相关插件。")]),t("p",[s._v("2.本教程的代码示例基于Vue3.x，但是您不必担心，因为simple-mind-map本身是框架无关的，所以即使某些Vue3的语法您看不懂也不会影响对于逻辑的理解。")])]),t("p",[t("code",[s._v("simple-mind-map")]),s._v("的使用非常简单，提供一个宽高不为0的元素，然后创建一个实例即可：")]),t("iframe",{staticStyle:{width:"100%",height:"455px",border:"none"},attrs:{src:"https://wanglin2.github.io/playground/#eNptUktu2zAQvcqARWG7sCUV6EqVjX7QRRc+QacLVZzYLKQRQdJxAkObLHuKXiMXanOMDEXZCJIIECS+mff4+Dgn9dna7PpAqlSVb5yxATyFg90gm872LsAJHF0toedtf+BAGga4cn0HM2HNLl1bw3pb21RC5QVuadUJuupqiwoZ+SIxny9gvYETMkDTsw8QGyN9DUzHs9h8bACgtgTdN4eOOGQ7Ct9air9fbr/r+Wxifu051IbJzRbLxNJ1qMu0R3xQRQDVEyjBgW5ChFH9+3v/8Ofu/919tJvKwyQWG5u9abUjjs0/fiZ8iJ9h8RF5WCBXeYpQwpNFIMmgDiQrgEqbazB6jeq5YVSbKpeqtFX5E44sfbhtE/3TFDOqLE/ZThll5Lus8R6VeBCX8r55vsP5xEejw76E90XxdmwG2JPZ7UMJH4rC3oyYHOh1jXdnla52O8MlFJOGrbU2vDsDIiAxjMbVUiXbcQSy375nmbJRBaeC2L7cByoZqHQRWS6/mZNZMR3FE65+uf7oyYkIqulKXhmyxH2ZT2RN3gY1PAJQKfo9"}}),t("p",[s._v("注意，我们还给容器元素设置了样式：")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-selector-id"},[s._v("#mindMapContainer")]),s._v(" * {\n    "),t("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n    "),t("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")])]),t("p",[s._v("这是为了避免节点内的文字因为默认样式而出现偏移。")]),t("p",[s._v("一个节点的基本数据结构如下所示：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n  "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 节点的文本，可以是富文本，也就是html格式的，此时richText要设为true")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("richText")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 节点的文本是否是富文本模式")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("expand")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 节点是否展开")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("uid")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(","),t("span",{staticClass:"hljs-comment"},[s._v("// 节点唯一的id，可不传，内部会生成")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v(": [], "),t("span",{staticClass:"hljs-comment"},[s._v("// 图标，格式可参考教程里的【插入和扩展节点图标】章节")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("image")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片的url")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("imageTitle")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片的标题，可为空")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("imageSize")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片的尺寸")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片的宽度，必传")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 图片的高度，必传")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("custom")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 如果设为true，图片的显示大小不受主题控制，以imageSize.width和imageSize.height为准")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("hyperlink")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 超链接地址")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("hyperlinkTitle")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 超链接的标题")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("note")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 备注的内容")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("attachmentUrl")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(","),t("span",{staticClass:"hljs-comment"},[s._v("// v0.9.10+，附件url")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("attachmentName")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(","),t("span",{staticClass:"hljs-comment"},[s._v("// v0.9.10+，附件名称")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("tag")]),s._v(": [], "),t("span",{staticClass:"hljs-comment"},[s._v("// 标签列表，v0.10.3以前的版本只支持字符串数组，即['标签']，v0.10.3+版本支持对象数组，即[{text: '标签', style: {}}]")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("generalization")]),s._v(": [{"),t("span",{staticClass:"hljs-comment"},[s._v("// （0.9.0以下版本不支持数组，只能设置单个概要数据）节点的概要，如果没有概要generalization设为null即可")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 概要的文本")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("richText")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 节点的文本是否是富文本模式")]),s._v("\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// ...其他普通节点的字段都支持，但是不支持children")]),s._v("\n    }],\n    "),t("span",{staticClass:"hljs-attr"},[s._v("associativeLineTargets")]),s._v(": ["),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("],"),t("span",{staticClass:"hljs-comment"},[s._v("// 如果存在关联线，那么为目标节点的uid列表")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("associativeLineText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(","),t("span",{staticClass:"hljs-comment"},[s._v("// 关联线文本")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// ...其他样式字段，可以参考主题")]),s._v("\n  },\n  children ["),t("span",{staticClass:"hljs-comment"},[s._v("// 子节点，结构和根节点一致")]),s._v("\n    {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {},\n      "),t("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": []\n    }\n  ]\n}\n")])]),t("p",[t("code",[s._v("icon")]),s._v("可以使用内置的图标，完整图标可以在"),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js"}},[s._v("icons.js")]),s._v("文件中查看。也可以扩展图标，参考"),t("a",{attrs:{href:"https://wanglin2.github.io/mind-map/#/doc/zh/course19/%E6%89%A9%E5%B1%95%E5%9B%BE%E6%A0%87"}},[s._v("扩展图标")]),s._v("。")]),t("p",[s._v("创建实例时还支持传递其他很多选项参数，完整选项列表可以在"),t("a",{attrs:{href:"https://wanglin2.github.io/mind-map/#/doc/zh/constructor/%E5%AE%9E%E4%BE%8B%E5%8C%96%E9%80%89%E9%A1%B9"}},[s._v("实例化选项")]),s._v("查看。")]),t("p",[s._v("这样得到的思维导图可以通过鼠标和快捷键进行操作，比如单击某个节点可以激活它，双击某个节点可以编辑节点文本，按下"),t("code",[s._v("Tab")]),s._v("键会给当前激活的节点添加一个子节点，按下"),t("code",[s._v("Enter")]),s._v("键会给当前激活的节点添加一个兄弟节点等等，完整的快捷键列表可以参考"),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/web/src/config/zh.js#L246"}},[s._v("快捷键列表")]),s._v("。")]),t("p",[s._v("当然有些功能还是需要UI界面的，比如图标列表、编辑超链接等等，需要注意的是"),t("code",[s._v("simple-mind-map")]),s._v("库并不包含UI界面，所以需要你自己开发，然后通过"),t("code",[s._v("simple-mind-map")]),s._v("提供的相关API来操作，本教程的其他章节会向你介绍如何使用。")])])}],v={},i=v,_=a("2877"),c=Object(_["a"])(i,n,l,!1,null,null,null);t["default"]=c.exports}}]);