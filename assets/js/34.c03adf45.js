(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{453:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"流量统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量统计"}},[t._v("#")]),t._v(" 流量统计")]),t._v(" "),a("p",[t._v("V2Ray 内包含了流量记录器功能，但是默认并不启用。流量统计分三类："),a("code",[t._v("inbound")]),t._v("，"),a("code",[t._v("user")]),t._v("和"),a("code",[t._v("outbound")]),t._v("（4.26.0+）。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("inbound")]),t._v(" 即配置内各个 inbound 的入站的统计，需要根据 "),a("code",[t._v("tag")]),t._v(" 来记录入站流量。")]),t._v(" "),a("li",[a("code",[t._v("user")]),t._v(" 即 vmess 协议用户里面的统计，用户的 "),a("code",[t._v("email")]),t._v(" 既是统计和区分的依据。socks, shadowsocks, http 等其他协议内的用户不支持被统计。")]),t._v(" "),a("li",[a("code",[t._v("outbound")]),t._v(" 即配置内各个 outbound 的出站的统计，4.26.0 起新增，需要根据 "),a("code",[t._v("tag")]),t._v(" 来记录出站流量。")])]),t._v(" "),a("h2",{attrs:{id:"配置统计功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置统计功能"}},[t._v("#")]),t._v(" 配置统计功能")]),t._v(" "),a("p",[t._v("要实现流量统计功能，配置内需要确保存在以下配置：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('"stats":{}')]),t._v(" 对象的存在；")]),t._v(" "),a("li",[a("code",[t._v('"policy"')]),t._v(" 中的统计开关为 true。全局统计的开关在 "),a("code",[t._v('"system"')]),t._v(" 下，用户统计的开关在 "),a("code",[t._v('"levels"')]),t._v(" 下；")]),t._v(" "),a("li",[t._v("全局统计在相应的入站出站要有 tag；")]),t._v(" "),a("li",[t._v("用户统计在 "),a("code",[t._v('"clients"')]),t._v(" 里面要有 email；")])]),t._v(" "),a("p",[t._v("要使用 api 查询流量，配置内需要确保存在以下配置：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('"api"')]),t._v(" 配置对象里面有 "),a("code",[t._v("StatsService")]),t._v("；")]),t._v(" "),a("li",[t._v("专用的 "),a("code",[t._v("dokodemo-door")]),t._v(" 协议的入口，tag 为 api；")]),t._v(" "),a("li",[t._v("routing 里面有 inboundTag:api -> outboundTag:api 的规则；")])]),t._v(" "),a("p",[t._v("注意： 统计的 "),a("code",[t._v("email")]),t._v("/"),a("code",[t._v("tag")]),t._v(" 是当前的 V2Ray 进程实例的数据，比如在服务器上统计，客户端写的 email 对服务器没有意义；如果在客户端统计，输出的就是客户端本身的数据。")]),t._v(" "),a("h2",{attrs:{id:"配置实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置实例"}},[t._v("#")]),t._v(" 配置实例")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stats"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StatsService"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"levels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3307")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ef"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10085")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainStrategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AsIs"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"查看流量信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看流量信息"}},[t._v("#")]),t._v(" 查看流量信息")]),t._v(" "),a("p",[t._v("查看流量信息是 "),a("code",[t._v("v2ctl")]),t._v(" 的其中一个功能。使用 "),a("code",[t._v("v2ctl api -h")]),t._v(" 可见查询例子。 配置内设置的 api dokodemo-door 端口，即为 "),a("code",[t._v("--server")]),t._v(" 参数的端口。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("v2ctl api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085 StatsService.QueryStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pattern: \"\" reset: false'")]),t._v("\nv2ctl api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085 StatsService.GetStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name: \"inbound>>>statin>>>traffic>>>downlink\" reset: false'")]),t._v("\n")])])]),a("p",[t._v("注意如果在 Windows 的 CMD 内运行，里面的引号要特别处理：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('v2ctl.exe api --server="127.0.0.1:10085" StatsService.GetStats "name: """"inbound>>>statin>>>traffic>>>downlink"""" reset: false"\n')])])]),a("p",[t._v("可调用的 api 有两个：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("QueryStats")]),t._v("用来查询匹配的记录，可以使用参数"),a("code",[t._v("pattern")]),t._v("和"),a("code",[t._v("reset")]),t._v("；pattern 留空则是匹配所有记录；reset 使匹配的单元数值置零。")]),t._v(" "),a("li",[a("code",[t._v("GetStats")]),t._v("用来其中一个的记录，接受"),a("code",[t._v("name")]),t._v("和"),a("code",[t._v("reset")]),t._v("，name 可参考 QueryStats 的输出结果构建，reset 使该单元数值置零。")])]),t._v(" "),a("p",[t._v("输出例子：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ /usr/local/bin/v2ctl api --server=127.0.0.1:10085 StatsService.GetStats \'name:"inbound>>>ws>>>traffic>>>uplink"\'\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\n$\n$\n$ /usr/local/bin/v2ctl api --server=127.0.0.1:10085 StatsService.QueryStats \'\'\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\nstat: &lt;\n  name: "inbound>>>ss>>>traffic>>>downlink"\n  value: 1704\n>\nstat: &lt;\n  name: "user>>>u3@ws>>>traffic>>>uplink"\n  value: 2810759\n>\nstat: &lt;\n  name: "user>>>u9@ss>>>traffic>>>uplink"\n  value: 1776\n>\nstat: &lt;\n  name: "inbound>>>ss>>>traffic>>>uplink"\n  value: 2276\n>\nstat: &lt;\n  name: "inbound>>>api>>>traffic>>>uplink"\n  value: 318\n>\nstat: &lt;\n  name: "user>>>u9@ss>>>traffic>>>downlink"\n  value: 1368\n>\nstat: &lt;\n  name: "inbound>>>tcp>>>traffic>>>uplink"\n>\nstat: &lt;\n  name: "inbound>>>tcp>>>traffic>>>downlink"\n>\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>downlink"\n  value: 130637140\n>\nstat: &lt;\n  name: "inbound>>>api>>>traffic>>>downlink"\n  value: 759\n>\nstat: &lt;\n  name: "user>>>u3@ws>>>traffic>>>downlink"\n  value: 126944108\n>\n')])])]),a("p",[t._v("结果中的 "),a("code",[t._v("name")]),t._v(" 可作为 "),a("code",[t._v("GetStats")]),t._v(" API 查询单个计数单元的值，name 的组成规律请自行概括，这里不再详谈；value 的计数单位是字节。")]),t._v(" "),a("h2",{attrs:{id:"流量信息的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量信息的处理"}},[t._v("#")]),t._v(" 流量信息的处理")]),t._v(" "),a("p",[t._v("上述配置是让 v2ray 打开一个 "),a("code",[t._v("grpc")]),t._v(" 协议的查询接口，除了使用 v2ctl ，可以用各种支持 grpc 协议的程序查询上述数值并另外处理（如入库统计、用户计费、图表报告）。不过，本文不会深入探讨。既然有 "),a("code",[t._v("v2ctl")]),t._v(" 现成的命令行程序，我们可以用简单的 shell 脚本 awk 工具来处理，生成足够可读的报表。")]),t._v(" "),a("p",[t._v("尝试把以下脚本保存到 "),a("code",[t._v("traffic.sh")]),t._v("，注意使用 "),a("code",[t._v("chmod 755 traffic.sh")]),t._v(" 授予执行权限。注意调整修改 "),a("code",[t._v("_APISERVER")]),t._v(" 一行的连接具体的端口参数。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_APISERVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_V2CTL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin/v2ctl\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("apidata")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset: true"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_V2CTL")]),t._v(" api --server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_APISERVER")]),t._v(" StatsService.QueryStats "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ARGS}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        if (match($1, /name:/)) {\n            f=1; gsub(/^"|link"$/, "", $2);\n            split($2, p,  ">>>");\n            printf "%s:%s->%s\\t", p[1],p[2],p[4];\n        }\n        else if (match($1, /value:/) && f){ f = 0; printf "%.0f\\n", $2; }\n        else if (match($0, /^>$/) && f) { f = 0; print 0; }\n    }\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("print_sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SORTED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PREFIX}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SORTED")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n        /->up/{us+=$2}\n        /->down/{ds+=$2}\n        END{\n            printf \"SUM->up:\\t%.0f\\nSUM->down:\\t%.0f\\nSUM->TOTAL:\\t%.0f\\n\", us, ds, us+ds;\n        }'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SORTED}")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SUM}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" numfmt --field"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --suffix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("B --to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("iec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("column")]),t._v(" -t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("apidata $1"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"------------Inbound----------"')]),t._v("\nprint_sum "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inbound"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"------------Outbound----------"')]),t._v("\nprint_sum "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outbound"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-------------User------------"')]),t._v("\nprint_sum "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n")])])]),a("p",[t._v("运行效果：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ./traffic.sh\n------------Inbound----------\ninbound:ws->up      0B\ninbound:ws->down    0B\ninbound:tcp->up     47B\ninbound:tcp->down   0B\ninbound:kcp->up     259MB\ninbound:kcp->down   2.4GB\ninbound:api->up     2.0KB\ninbound:api->down   6.6KB\nSUM->up:            259MB\nSUM->down:          2.4GB\nSUM->TOTAL:         2.6GB\n-----------------------------\n\n-------------User------------\nuser:me@kcp->up    240MB\nuser:me@kcp->down  2.3GB\nSUM->up:           240MB\nSUM->down:         2.3GB\nSUM->TOTAL:        2.5GB\n-----------------------------\n")])])]),a("p",[t._v("脚本使用 "),a("code",[t._v("reset")]),t._v(" 参数让调用的计数单元置零，配合 watch 命令，即可查看流经 v2ray 的每秒实时流量速度：\n"),a("code",[t._v("watch ./traffic.sh reset")])]),t._v(" "),a("h4",{attrs:{id:"更新历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新历史"}},[t._v("#")]),t._v(" 更新历史")]),t._v(" "),a("ul",[a("li",[t._v("2019-08-07 统计脚本识别科学计数法的输出情况")]),t._v(" "),a("li",[t._v("2019-08-09 优化流量脚本，增加了 SUM->TOTAL 的累加项")]),t._v(" "),a("li",[t._v("2020-07-04 增加了 outbound 的流量统计")]),t._v(" "),a("li",[t._v("2020-12-13 修复 v2ctl 路径，脚本添加 outbound 统计")])])])}),[],!1,null,null,null);s.default=e.exports}}]);