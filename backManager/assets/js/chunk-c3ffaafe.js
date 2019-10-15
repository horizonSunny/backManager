(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3ffaafe"],{"64c8":function(e,t,r){},e257:function(e,t,r){"use strict";var a=r("64c8"),l=r.n(a);l.a},ef8c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("order-table")],1)},l=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"choose"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:8,gutter:20}},[r("el-form-item",{attrs:{label:"订单号"}},[r("el-input",{model:{value:e.form.orderNumber,callback:function(t){e.$set(e.form,"orderNumber",t)},expression:"form.orderNumber"}})],1)],1),r("el-col",{attrs:{span:8,gutter:20}},[r("el-form-item",{attrs:{label:"下单时间"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.dateChange},model:{value:e.tempTime,callback:function(t){e.tempTime=t},expression:"tempTime"}})],1)],1),r("el-col",{attrs:{span:8,gutter:20}},[r("el-form-item",{attrs:{label:"商品名称"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.productName,callback:function(t){e.$set(e.form,"productName",t)},expression:"form.productName"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:8,gutter:20}},[r("el-form-item",{attrs:{label:"订单状态"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[r("el-option",{attrs:{value:"1",label:"已经接单"}}),r("el-option",{attrs:{value:"2",label:"待取药"}}),r("el-option",{attrs:{value:"3",label:"待配送"}}),r("el-option",{attrs:{value:"4",label:"已取消"}})],1)],1)],1),r("el-col",{attrs:{span:8,gutter:20}},[r("el-form-item",{attrs:{label:"接单状态"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.receiveStatus,callback:function(t){e.$set(e.form,"receiveStatus",t)},expression:"form.receiveStatus"}},[r("el-option",{attrs:{value:"3",label:"全部"}}),r("el-option",{attrs:{value:"0",label:"新订单"}}),r("el-option",{attrs:{value:"1",label:"待取药"}}),r("el-option",{attrs:{value:"2",label:"待配送"}})],1)],1)],1),r("el-col",{attrs:{span:8,gutter:20}},[r("el-button",{staticStyle:{"margin-left":"30px",width:"100px"},attrs:{size:"small",type:"primary"},on:{click:function(t){return e.getList()}}},[e._v("查询订单")]),r("el-button",{staticStyle:{"margin-left":"50px",width:"100px"},attrs:{size:"small"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1),r("el-row")],1)],1),r("div",{staticClass:"showTable"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableSale}},[r("el-table-column",{attrs:{label:"订单",width:"280px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"shopping"},[r("div",[e._v("系统订单号: "+e._s(t.row.orderNo))]),e._l(t.row.orderShops,(function(t){return r("div",{key:t.id},[r("img",{attrs:{src:t.productImage,alt:"",height:"50px",width:"50px"}}),e._v("\n              "+e._s(t.productName)+"\n            ")])}))],2)]}}])}),r("el-table-column",{attrs:{label:"订单价格",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.totalPrice?"¥"+t.row.totalPrice:0))])]}}])}),r("el-table-column",{attrs:{label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[e._v(e._s(e._f("statusFilter")(t.row.status)))])]}}])}),r("el-table-column",{attrs:{prop:"totalNum",label:"商品件数"}}),r("el-table-column",{attrs:{prop:"totalNum",label:"买家"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("div",[e._v("ID:"+e._s(t.row.userId))]),r("div",[e._v("昵称:"+e._s(t.row.userName))])])]}}])}),r("el-table-column",{attrs:{prop:"address",label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[e._v(e._s(t.row.createTime))])]}}])}),r("el-table-column",{attrs:{label:"接单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[e._v(e._s(e._f("receiveStatusFilter")(t.row.receiveStatus)))])]}}])})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.totalSaleNumber>0,expression:"totalSaleNumber > 0"}],staticStyle:{"margin-top":"20px","margin-bottom":"20px","text-align":"center"}},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, total",total:e.totalSaleNumber,"current-page.sync":"page.pageNumber"},on:{"current-change":e.currentChange}})],1)])},s=[],n=r("365c");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={receiveStatus:"3",orderNo:"",productName:"",startTime:"",endTime:""},p={data:function(){return{pageSaleNumber:0,pageSoldoutNumber:0,totalSaleNumber:0,totalSoldoutNumber:0,pageSize:10,tableSale:null,tableSoldout:null,page:{pageNumber:0,pageSize:10},tempTime:"",form:m}},methods:{getList:function(){var e=this,t=u({},this.page,{},this.form);console.log("查询参数:",t),Object(n["c"])(t).then((function(t){1===t.code?(e.tableSale=t.data.pageList,e.totalSaleNumber=t.data.totalElements):e.$message({message:t.msg,type:"error"})}))},reset:function(){this.page.pageNumber=0,this.form={receiveStatus:"3",orderNo:"",productName:"",startTime:"",endTime:""},console.log(this.form),this.getList()},currentChange:function(e){this.page.pageNumber=e-1,this.getList()},dateChange:function(e){e?(this.form.startTime=new Date(e[0]).getTime()/100,this.form.endTime=new Date(e[1]).getTime()/100):(this.form.startTime="",this.form.endTime="")}},filters:{productType:function(e){return 0===e?"处方药":"非处方药"},statusFilter:function(e){return 1===e?"已接单":2===e?"待取药":3===e?"待配送":4===e?"已取消":""},receiveStatusFilter:function(e){return 0===e?"新订单":1===e?"待取药":2===e?"待配送":""}},mounted:function(){this.getList()}},f=p,d=(r("e257"),r("2877")),b=Object(d["a"])(f,o,s,!1,null,"79470d50",null),g=b.exports,v={data:function(){return{activeName:"allOrder"}},components:{orderTable:g}},h=v,w=Object(d["a"])(h,a,l,!1,null,"fbdadf9e",null);t["default"]=w.exports}}]);