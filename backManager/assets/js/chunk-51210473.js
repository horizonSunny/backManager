(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51210473"],{"333e":function(e,t,a){"use strict";var l=a("a0db"),o=a.n(l);o.a},a0db:function(e,t,a){},a662:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"choose"},[a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"请选择"},model:{value:e.productType,callback:function(t){e.productType=t},expression:"productType"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-input",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.productName,callback:function(t){e.productName=t},expression:"productName"}}),a("el-button",{staticStyle:{"margin-left":"20px"},on:{click:e.confirmSelect}},[e._v("搜索")])],1),a("el-tabs",{staticStyle:{width:"100%",flex:"1",display:"flex","flex-direction":"column"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{staticClass:"sale",attrs:{label:"出售中",name:"sale"}},[a("div",{staticClass:"showTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableSale}},[a("el-table-column",{attrs:{label:"商品",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"shopping"},[a("img",{staticStyle:{width:"70px",height:"70px"},attrs:{src:t.row.image}}),a("div",{staticClass:"shoppingInfo"},[a("div",[e._v(e._s(t.row.productName))]),a("div",[e._v("¥"+e._s(t.row.price))])])])]}}])}),a("el-table-column",{attrs:{label:"分组",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{},[e._v(e._s(e._f("productType")(t.row.productType)))])]}}])}),a("el-table-column",{attrs:{label:"访问统计"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n                总流量次数: "+e._s(t.row.browse?t.row.browse:0)+"\n              ")]),a("div",[e._v("\n                独立用户: "+e._s(t.row.browse?t.row.browse:0)+"\n              ")]),a("div",[e._v("新用户: "+e._s(t.row.browse?t.row.browse:0))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"销售统计"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("库存:"+e._s(t.row.stock?t.row.stock:0))]),a("div",[e._v("已接单:"+e._s(t.row.sales?t.row.sales:0))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate",on:{click:function(a){return e.operate(a,t.row)}}},[a("span",[e._v("编辑")]),e._v(" | "),a("span",[e._v("下架")])])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalSaleNumber,"current-page":e.pageSaleNumber},on:{"update:currentPage":function(t){e.pageSaleNumber=t},"update:current-page":function(t){e.pageSaleNumber=t},"current-change":e.confirmSelect}})],1)]),a("el-tab-pane",{staticClass:"sale",attrs:{label:"已下架",name:"soldOut"}},[a("div",{staticClass:"showTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableSoldout}},[a("el-table-column",{attrs:{label:"商品",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"shopping"},[a("img",{staticStyle:{width:"70px",height:"70px"},attrs:{src:t.row.image}}),a("div",{staticClass:"shoppingInfo"},[a("div",[e._v(e._s(t.row.productName))]),a("div",[e._v("¥"+e._s(t.row.price))])])])]}}])}),a("el-table-column",{attrs:{label:"分组",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{},[e._v(e._s(e._f("productType")(t.row.productType)))])]}}])}),a("el-table-column",{attrs:{label:"访问统计"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n                总流量次数: "+e._s(t.row.browse?t.row.browse:0)+"\n              ")]),a("div",[e._v("\n                独立用户: "+e._s(t.row.browse?t.row.browse:0)+"\n              ")]),a("div",[e._v("新用户: "+e._s(t.row.browse?t.row.browse:0))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"销售统计"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("库存:"+e._s(t.row.stock?t.row.stock:0))]),a("div",[e._v("已接单:"+e._s(t.row.sales?t.row.sales:0))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate",on:{click:function(a){return e.operate(a,t.row)}}},[a("span",[e._v("编辑")])])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalSoldoutNumber,"current-page":e.pageSoldoutNumber},on:{"update:currentPage":function(t){e.pageSoldoutNumber=t},"update:current-page":function(t){e.pageSoldoutNumber=t},"current-change":e.confirmSelect}})],1)])],1)],1)},o=[],r=a("365c"),s={data:function(){return{activeName:"sale",options:[{value:"",label:"全部"},{value:0,label:"处方药"},{value:1,label:"非处方药"}],productName:"",productType:"",pageSaleNumber:0,pageSoldoutNumber:0,totalSaleNumber:0,totalSoldoutNumber:0,pageSize:10,tableSale:null,tableSoldout:null}},methods:{confirmSelect:function(){var e=this,t={pageNumber:"sale"===this.activeName?this.pageSaleNumber-1:this.pageSoldoutNumber-1,pageSize:10,productName:this.productName,productType:this.productType,status:"sale"===this.activeName?"":2};return Object(r["e"])(t).then((function(a){0===a.data.pageList.length&&0!==t.pageNumber&&(console.log("lalsaldalsdasldal"),"sale"===e.activeName?e.pageSaleNumber-=1:e.pageSoldoutNumber-=1,e.confirmSelect()),"sale"===e.activeName?(e.tableSale=a.data.pageList,e.totalSaleNumber=a.data.totalElements):(e.tableSoldout=a.data.pageList,e.totalSoldoutNumber=a.data.totalElements),e.pageNumber=a.data.pageNumber}))},operate:function(e,t){var a=this;if(console.log("e_",e.target.innerText),"编辑"===e.target.innerText)console.log("编辑啊"),this.$router.push({name:"commodity",params:t});else if("下架"===e.target.innerText){console.log("下架啊",t);var l={productId:t.id,status:0},o=new FormData;for(var s in l)o.append(s,l[s]);Object(r["i"])(o).then((function(){a.confirmSelect()}))}},handleClick:function(e){console.log(e.label),"已下架"===e.label?this.activeName="soldOut":"出售中"===e.label&&(this.activeName="sale"),this.confirmSelect()}},filters:{productType:function(e){return 0===e?"处方药":"非处方药"}},created:function(){var e=this,t={pageNumber:0,pageSize:10,productName:this.productName,productType:this.productType,status:""};Object(r["e"])(t).then((function(t){e.tableSale=t.data.pageList,e.pageNumber=t.data.pageNumber,e.totalSaleNumber=t.data.totalElements}))}},n=s,u=(a("333e"),a("2877")),c=Object(u["a"])(n,l,o,!1,null,"6352d61c",null);t["default"]=c.exports}}]);