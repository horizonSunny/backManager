(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30d6a02f"],{"60e4":function(e,r,t){"use strict";var s=t("8faf"),i=t.n(s);i.a},"8faf":function(e,r,t){},ac02:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"text-box"},[t("el-tabs",{model:{value:e.activeName,callback:function(r){e.activeName=r},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"填写商品信息",name:"first"}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"商品名称",prop:"productName"}},[t("el-col",{attrs:{span:11}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.ruleForm.productName,callback:function(r){e.$set(e.ruleForm,"productName",r)},expression:"ruleForm.productName"}})],1)],1),t("el-form-item",{attrs:{label:"商品封面",prop:"image"}},[t("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-change":e.handlePictureCard,"auto-upload":!1,limit:1,"file-list":e.fileList}},[t("i",{staticClass:"el-icon-plus"})])],1),t("el-form-item",{attrs:{label:"生产厂家",prop:"manufacturer"}},[t("el-col",{attrs:{span:11}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.ruleForm.manufacturer,callback:function(r){e.$set(e.ruleForm,"manufacturer",r)},expression:"ruleForm.manufacturer"}})],1)],1),t("el-form-item",{attrs:{label:"描述",prop:"describe"}},[t("el-col",{attrs:{span:11}},[t("el-input",{attrs:{maxlength:"80"},model:{value:e.ruleForm.describe,callback:function(r){e.$set(e.ruleForm,"describe",r)},expression:"ruleForm.describe"}})],1)],1),t("el-form-item",{attrs:{label:"商品分组",prop:"productType"}},[t("el-col",{attrs:{span:11}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.productType,callback:function(r){e.$set(e.ruleForm,"productType",r)},expression:"ruleForm.productType"}},[t("el-option",{attrs:{label:"处方药",value:0}}),t("el-option",{attrs:{label:"非处方药",value:1}})],1)],1)],1),t("el-form-item",{attrs:{label:"价格",prop:"price"}},[t("el-col",{attrs:{span:11}},[t("el-input",{model:{value:e.ruleForm.price,callback:function(r){e.$set(e.ruleForm,"price",e._n(r))},expression:"ruleForm.price"}})],1)],1),t("el-form-item",{attrs:{label:"删除线价格",prop:"vipPrice"}},[t("el-col",{attrs:{span:11}},[t("el-input",{model:{value:e.ruleForm.vipPrice,callback:function(r){e.$set(e.ruleForm,"vipPrice",e._n(r))},expression:"ruleForm.vipPrice"}})],1)],1),t("el-form-item",{attrs:{label:"产品规格",prop:"productSpecif"}},[t("el-col",{attrs:{span:11}},[t("el-input",{model:{value:e.ruleForm.productSpecif,callback:function(r){e.$set(e.ruleForm,"productSpecif",r)},expression:"ruleForm.productSpecif"}})],1)],1),t("el-form-item",{attrs:{label:"库存",prop:"stock"}},[t("el-col",{attrs:{span:11}},[t("el-input",{model:{value:e.ruleForm.stock,callback:function(r){e.$set(e.ruleForm,"stock",e._n(r))},expression:"ruleForm.stock"}})],1)],1),t("el-form-item",{attrs:{label:"上架时间",prop:"isShow"}},[t("el-col",{attrs:{span:11}},[t("el-radio-group",{model:{value:e.ruleForm.isShow,callback:function(r){e.$set(e.ruleForm,"isShow",r)},expression:"ruleForm.isShow"}},[t("div",[t("el-radio",{attrs:{label:1}},[e._v("立即上架")])],1),t("div",{staticStyle:{display:"flex","align-items":"center"}},[t("el-radio",{attrs:{label:2}},[e._v("定时上架")]),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("默认")]),t("el-date-picker",{attrs:{disabled:2!==e.ruleForm.isShow,type:"datetime",size:"small",placeholder:"选择日期时间","picker-options":e.pickerOptions},model:{value:e.ruleForm.shelfTime,callback:function(r){e.$set(e.ruleForm,"shelfTime",r)},expression:"ruleForm.shelfTime"}})],1)],1),t("div",[t("el-radio",{attrs:{label:0}},[e._v("暂不上架")])],1)])],1)],1),t("el-form-item",{attrs:{label:"商品详情",prop:"producInfo"}},[t("el-col",{attrs:{span:11}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.producInfo,callback:function(r){e.$set(e.ruleForm,"producInfo",r)},expression:"ruleForm.producInfo"}})],1)],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(r){return e.onSubmit("ruleForm")}}},[e._v("下一步")]),t("el-button",{staticStyle:{width:"100px"},on:{click:function(r){return e.resetruleForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)],1)},i=[],l=/^-?[1-9][0-9]?.?[0-9]*$/,a=/^-?[1-9][0-9]*$/,o=/^1[0-9]{10,10}$/,u=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,m=/^.{6,16}$/,n=/^[a-zA-Z0-9]{6,16}$/,c={isNumber:function(e){return l.test(e)},isInt:function(e){return a.test(e)},isPhone:function(e){return o.test(e)},isEmail:function(e){return u.test(e)},isPwd:function(e){return m.test(e)},isInviteCode:function(e){return n.test(e)},validate:function(e,r){var t={isOk:!0,errmsg:""};if(!r||!r.length)return t;var s=!0,i=!1,c=void 0;try{for(var p,d=r[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){var f=p.value;if(f&&f.name&&f.type)if(e[f.name]){switch(f.type){case"equals":case"eq":e[f.name]!==e[f.eqName]&&(t={isOk:!1,errmsg:f.errmsg});break;case"number":l.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"int":a.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"phone":o.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"email":u.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"pwd":m.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"inviteCode":n.test(e[f.name])||(t={isOk:!1,errmsg:f.errmsg});break;case"range":var g=e[f.name];g&&(l.test(g)?f.min&&g<f.min?t={isOk:!1,errmsg:f.errmsg}:f.max&&g>f.max&&(t={isOk:!1,errmsg:f.errmsg}):t={isOk:!1,errmsg:f.errmsg});break;case"lengthRange":var h=e[f.name]?e[f.name].length:0;f.min&&h<f.min?t={isOk:!1,errmsg:f.errmsg}:f.max&&h>f.max&&(t={isOk:!1,errmsg:f.errmsg});break;case"regex":f.regex&&!f.regex.test(e[f.name])&&(t={isOk:!1,errmsg:f.errmsg});break}if(!t.isOk)return t.errmsg||(t.errmsg="请正确输入所有数据"),t}else if("required"===f.type||f.required)return t={isOk:!1,errmsg:f.errmsg},t.errmsg||(t.errmsg="请正确输入所有数据"),t}}catch(b){i=!0,c=b}finally{try{s||null==d.return||d.return()}finally{if(i)throw c}}return t}},p=t("365c"),d={data:function(){return{activeName:"first",ruleForm:{productName:"",image:"",manufacturer:"",describe:"",productType:0,price:"",vipPrice:"",productSpecif:"",stock:"",isShow:1,shelfTime:"",producInfo:""},id:"",fileList:[],rules:{productName:[{required:!0,message:"请输入商品名称",trigger:"blur"},{min:1,max:30,message:"长度在 1 到 30 个字符",trigger:"blur"}],manufacturer:[{required:!0,message:"请填写生产厂家",trigger:"blur"}],describe:[{required:!0,message:"请填写商品描述",trigger:"blur"}],productType:[{required:!0,message:"请选择商品类别",trigger:"blur"}],price:[{required:!0,message:"请填写商品价格",trigger:"blur"},{type:"number",message:"商品价格为数字"}],productSpecif:[{required:!0,message:"请填写商品规格",trigger:"blur"}],stock:[{required:!0,message:"请填写商品库存",trigger:"blur"},{type:"number",message:"库存为数字"}],producInfo:[{required:!0,message:"请填写商品详情",trigger:"blur"}]},type:"new",pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()}}}},methods:{onSubmit:function(e){var r=this,t=!0;if(this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),t=!1,!1;console.log("success")})),!t)return!1;var s=[{name:"shelfTime",type:"required",errmsg:"请选择商品上架时间"}],i=c.validate(this.ruleForm,s);if(!i.isOk&&2===this.ruleForm.isShow)return this.$message.error("请选择商品上架时间"),!1;if("edit"!==this.type&&""===this.ruleForm.image)return this.$message.error("请选择商品封面"),!1;if(this.ruleForm.vipPrice<0||this.ruleForm.vipPrice>=this.ruleForm.price)return this.$message.error("商品折扣价格不应小于0或者大于商品价格"),!1;var l=this.ruleForm;(2===this.ruleForm.isShow||this.ruleForm.shelfTime)&&(l.shelfTime=new Date(this.ruleForm.shelfTime).getTime()),l.file=l.image;var a=new FormData;for(var o in l)"undefined"!=typeof l[o]&&null!==l[o]||(l[o]=""),a.append(o,l[o]);"new"===this.type?Object(p["h"])(a).then((function(){r.$router.push("shoppingMall"),console.log("发送成功")})):(a.append("id",this.id),Object(p["a"])(a).then((function(){r.$router.push("shoppingMall"),console.log("发送成功")})))},handlePictureCard:function(e){this.ruleForm.image=e.raw,console.log("file.url_",this.ruleForm.image)},resetruleForm:function(e){console.log(this.$refs[e]),this.$refs[e].resetFields()}},created:function(){console.log("this.$route.params_",this.$route.params);var e=this.$route.params;"{}"!==JSON.stringify(e)&&(this.type="edit",this.id=e.id,this.ruleForm.productName=e.productName,this.ruleForm.manufacturer=e.manufacturer,this.ruleForm.describe=e.describe,this.ruleForm.productType=e.productType,this.ruleForm.price=e.price,this.ruleForm.otPrice=e.otPrice,this.ruleForm.productSpecif=e.productSpecif,this.ruleForm.vipPrice=e.vipPrice,this.ruleForm.stock=e.stock,this.ruleForm.isShow=e.isShow,this.ruleForm.shelfTime=e.shelfTime,this.ruleForm.producInfo=e.producInfo,this.fileList.push({url:e.image}))}},f=d,g=(t("60e4"),t("2877")),h=Object(g["a"])(f,s,i,!1,null,"03326a3c",null);r["default"]=h.exports}}]);