(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2123ecd5","chunk-0a970096"],{"2f34":function(t,e,l){},"4e8a":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"home"},[l("Tab",{staticStyle:{float:"left",width:"17%"}}),l("el-container",{staticStyle:{float:"right",width:"83%"}},[l("el-header",{staticStyle:{width:"100%","text-align":"right","font-size":"12px"}},[l("span",[t._v("admin")])]),l("el-main",{staticClass:"index_nr"},[l("div",{staticClass:"index_bj"},[l("div",[l("el-select",{staticClass:"xlk",attrs:{placeholder:"项目主管部门"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),l("el-select",{staticClass:"xlk",attrs:{placeholder:"项目级别"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),l("el-select",{staticClass:"xlk",attrs:{placeholder:"主管科室"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),l("el-select",{staticClass:"xlk",attrs:{placeholder:"项目下沉公司"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),l("el-select",{staticClass:"xlk",attrs:{placeholder:" 请选择日期范围"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),l("el-input",{staticClass:"slect-input",attrs:{placeholder:"模糊搜索"}}),l("el-button",{staticStyle:{"margin-left":"2%"},attrs:{type:"primary"}},[t._v("搜索")]),l("el-button",{staticStyle:{"margin-left":"1%"}},[t._v("重置")])],1),l("el-divider"),l("div",{staticClass:"index_bjt"},[l("el-button",{attrs:{type:"primary"}},[t._v("新增")]),l("el-button",{staticStyle:{"margin-left":"2%"},attrs:{type:"danger"}},[t._v("批量删除")]),l("el-button",{staticStyle:{"margin-left":"2%"}},[t._v("通过")]),l("el-button",{staticStyle:{"margin-left":"2%"}},[t._v("驳回")]),l("el-button",{staticStyle:{"margin-left":"2%"}},[t._v("提交")]),l("el-button",{staticStyle:{"margin-left":"2%"}},[t._v("导出")]),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%","text-align":"center","font-size":"10px","white-space":"nowrap","text-overflow":"ellipsis",overflow:"hidden"},attrs:{data:t.tableData,border:"","header-cell-style":{textAlign:"center",background:"rgba(238, 247, 254, 1)",color:"rgb(45, 169, 250)"},"cell-style":{textAlign:"center"}}},[l("el-table-column",{attrs:{type:"selection",width:"40"}}),l("el-table-column",{attrs:{prop:"id",label:"序号",width:"50"}}),l("el-table-column",{attrs:{prop:"name",label:"项目申报时间",width:"100"}}),l("el-table-column",{attrs:{prop:"times",label:"状态",width:"60"}}),l("el-table-column",{attrs:{prop:"func",label:"荣誉名称",width:"80"}}),l("el-table-column",{attrs:{prop:"mt",label:"项目主体",width:"120"}}),l("el-table-column",{attrs:{prop:"ms",label:"项目主管部门",width:"100"}}),l("el-table-column",{attrs:{prop:"ma",label:"国家级",width:"60"}}),l("el-table-column",{attrs:{prop:"mb",label:"主管科室",width:"80"}}),l("el-table-column",{attrs:{prop:"mc",label:"申报条件",width:"140"}}),l("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":""}},[[t.pd?l("el-button",{attrs:{size:"mini",type:"success"}},[t._v("详情")]):t._e(),l("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("删除")])]],2)],1),l("div",{staticStyle:{"margin-top":"20px"}},[l("div",{staticClass:"block"},[l("el-pagination",{attrs:{background:"","page-size":100,layout:"prev, pager, next, jumper",total:1e3}})],1)])],1)],1)])],1)],1)},i=[],s=l("9fdc"),n={components:{Tab:s["default"]},data:function(){return{pd:!0,radio1:"周",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"}],value:"",tableData:[{id:1,times:"待提交",name:"2020-08-08",func:"某某荣誉",mt:"某某主体描述",ms:"发改",ma:"国家级",mb:"科室一",mc:"条件1，条件2，条件3"},{},{},{},{},{},{},{},{},{}]}},methods:{}},r=n,u=(l("e778"),l("2877")),o=Object(u["a"])(r,a,i,!1,null,"17edbbb0",null);e["default"]=o.exports},"9fdc":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-container",{staticStyle:{height:"1040px",overflow:"hidden"}},[l("el-aside",{staticStyle:{"background-color":"rgba(47, 58, 79, 1)",width:"100%","overflow-y":"scroll"}},[l("div",{staticClass:"header"},[l("span",[t._v("企业项目管理平台")])]),l("el-menu",{staticStyle:{"text-align":"left"}},[l("router-link",{attrs:{to:"/index",tag:"li"}},[l("el-menu-item",{staticClass:"el-submenu",attrs:{index:"1-1"}},[l("i",{staticClass:"el-icon-s-home"}),t._v("首页")])],1),l("el-submenu",{attrs:{index:"2"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-setting"}),t._v("系统管理")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("router-link",{attrs:{to:"/systema",tag:"li"}},[l("el-menu-item",{attrs:{index:"2-1"}},[t._v("操作管理")])],1),l("router-link",{attrs:{to:"/systemb",tag:"li"}},[l("el-menu-item",{attrs:{index:"2-2"}},[t._v("角色日志")])],1),l("el-menu-item",{attrs:{index:"2-3"}},[t._v("权限管理")]),l("el-menu-item",{attrs:{index:"2-4"}},[t._v("企业管理")])],1),l("el-submenu",{attrs:{index:"2-5"}},[l("template",{slot:"title"},[t._v("基础维护")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("公司维护")]),l("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("科室维护")]),l("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("支持方式")]),l("el-menu-item",{attrs:{index:"2-4-4"}},[t._v("主管部门")])],1)],2)],2),l("el-submenu",{attrs:{index:"3"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-bell"}),t._v("公告发布")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("router-link",{attrs:{to:"/Noticea",tag:"li"}},[l("el-menu-item",{attrs:{index:"3-1"}},[t._v("项目发布")])],1),l("router-link",{attrs:{to:"/Noticeb",tag:"li"}},[l("el-menu-item",{attrs:{index:"3-2"}},[t._v("通知发布")])],1),l("router-link",{attrs:{to:"/Noticec",tag:"li"}},[l("el-menu-item",{attrs:{index:"3-3"}},[t._v("参考材料")])],1)],1)],2),l("el-submenu",{attrs:{index:"4"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-menu"}),t._v("项目填报")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("router-link",{attrs:{to:"/Projecta",tag:"li"}},[l("el-menu-item",{attrs:{index:"4-1"}},[t._v("资金类填报")])],1),l("router-link",{attrs:{to:"/Projectb",tag:"li"}},[l("el-menu-item",{attrs:{index:"4-2"}},[t._v("科技类填报")])],1),l("router-link",{attrs:{to:"/Projectc",tag:"li"}},[l("el-menu-item",{attrs:{index:"4-3"}},[t._v("荣誉类填报")])],1)],1)],2),l("el-submenu",{attrs:{index:"5"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-pie-chart"}),t._v("进度管理")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("router-link",{attrs:{to:"/Schedulea",tag:"li"}},[l("el-menu-item",{attrs:{index:"5-1"}},[t._v("资金类进度")])],1),l("router-link",{attrs:{to:"/Scheduleb",tag:"li"}},[l("el-menu-item",{attrs:{index:"5-2"}},[t._v("科技类进度")])],1)],1)],2),l("el-submenu",{attrs:{index:"6"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-circle-check"}),t._v("验收管理")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("router-link",{attrs:{to:"/Checka",tag:"li"}},[l("el-menu-item",{attrs:{index:"6-1"}},[t._v("资金类验收")])],1),l("router-link",{attrs:{to:"/Checkb",tag:"li"}},[l("el-menu-item",{attrs:{index:"6-2"}},[t._v("科技类验收")])],1)],1)],2),l("el-submenu",{attrs:{index:"7"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-folder"}),t._v("项目档案")]),l("el-menu-item-group",{staticClass:"el-submenu"},[l("el-menu-item",{attrs:{index:"7-1"}},[t._v("项目文件")]),l("el-menu-item",{attrs:{index:"7-2"}},[t._v("审计报告")])],1)],2),l("el-menu-item",{staticClass:"el-submenu",attrs:{index:"8-1"}},[l("i",{staticClass:"el-icon-s-grid"}),t._v("项目总览")]),l("el-menu-item",{staticClass:"el-submenu",attrs:{index:"9-1"}},[l("i",{staticClass:"el-icon-delete"}),t._v("回收站")])],1)],1)],1)],1)},i=[],s={name:"Tab"},n=s,r=(l("e604"),l("2877")),u=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=u.exports},bca5:function(t,e,l){},e604:function(t,e,l){"use strict";l("bca5")},e778:function(t,e,l){"use strict";l("2f34")}}]);
//# sourceMappingURL=chunk-2123ecd5.8f69e4a8.js.map