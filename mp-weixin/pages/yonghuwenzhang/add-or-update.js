(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghuwenzhang/add-or-update"],{"0ede":function(n,e,i){"use strict";(function(n){i("b69f"),i("921b");t(i("66fd"));var e=t(i("7ea0"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"20c1":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,o){try{var u=n[r](o),s=u.value}catch(h){return void i(h)}u.done?e(s):Promise.resolve(s).then(t,a)}function o(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var o=n.apply(e,i);function u(n){r(o,t,a,u,s,"next",n)}function s(n){r(o,t,a,u,s,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("cce5"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{biaoti:"",wenzhangfenlei:"",neirong:"",bianjishijian:"",fengmian:"",zhanghao:"",xingming:"",bianjizhanghao:"",bianjixingming:"",sfsh:"",shhf:"",userid:""},wenzhangfenleiOptions:[],wenzhangfenleiIndex:0,bianjizhanghaoOptions:[],bianjizhanghaoIndex:0,user:{},ro:{biaoti:!1,wenzhangfenlei:!1,neirong:!1,bianjishijian:!1,fengmian:!1,zhanghao:!1,xingming:!1,bianjizhanghao:!1,bianjixingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=o(t.default.mark((function e(i){var a,r,o,u;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.bianjishijian=this.$utils.getCurDate(),a=n.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:return r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,e.next=10,this.$api.option("wenzhangfenlei","wenzhangfenlei",{});case 10:return r=e.sent,this.wenzhangfenleiOptions=r.data,e.next=14,this.$api.option("bianji","bianjizhanghao",{});case 14:if(r=e.sent,this.bianjizhanghaoOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=24;break}return this.ruleForm.id=i.id,e.next=22,this.$api.info("yonghuwenzhang",this.ruleForm.id);case 22:r=e.sent,this.ruleForm=r.data;case 24:if(!i.cross){e.next=71;break}o=n.getStorageSync("crossObj"),e.t0=t.default.keys(o);case 27:if((e.t1=e.t0()).done){e.next=71;break}if(u=e.t1.value,"biaoti"!=u){e.next=33;break}return this.ruleForm.biaoti=o[u],this.ro.biaoti=!0,e.abrupt("continue",27);case 33:if("wenzhangfenlei"!=u){e.next=37;break}return this.ruleForm.wenzhangfenlei=o[u],this.ro.wenzhangfenlei=!0,e.abrupt("continue",27);case 37:if("neirong"!=u){e.next=41;break}return this.ruleForm.neirong=o[u],this.ro.neirong=!0,e.abrupt("continue",27);case 41:if("bianjishijian"!=u){e.next=45;break}return this.ruleForm.bianjishijian=o[u],this.ro.bianjishijian=!0,e.abrupt("continue",27);case 45:if("fengmian"!=u){e.next=49;break}return this.ruleForm.fengmian=o[u],this.ro.fengmian=!0,e.abrupt("continue",27);case 49:if("zhanghao"!=u){e.next=53;break}return this.ruleForm.zhanghao=o[u],this.ro.zhanghao=!0,e.abrupt("continue",27);case 53:if("xingming"!=u){e.next=57;break}return this.ruleForm.xingming=o[u],this.ro.xingming=!0,e.abrupt("continue",27);case 57:if("bianjizhanghao"!=u){e.next=61;break}return this.ruleForm.bianjizhanghao=o[u],this.ro.bianjizhanghao=!0,e.abrupt("continue",27);case 61:if("bianjixingming"!=u){e.next=65;break}return this.ruleForm.bianjixingming=o[u],this.ro.bianjixingming=!0,e.abrupt("continue",27);case 65:if("userid"!=u){e.next=69;break}return this.ruleForm.userid=o[u],this.ro.userid=!0,e.abrupt("continue",27);case 69:e.next=27;break;case 71:this.styleChange();case 72:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},bianjizhanghaoChange:function(){var n=o(t.default.mark((function n(e){var i;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.bianjizhanghaoIndex=e.target.value,this.ruleForm.bianjizhanghao=this.bianjizhanghaoOptions[this.bianjizhanghaoIndex],n.next=4,this.$api.follow("bianji","bianjizhanghao",{columnValue:this.ruleForm.bianjizhanghao});case 4:i=n.sent,i.data.bianjixingming&&(this.ruleForm.bianjixingming=i.data.bianjixingming);case 6:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),bianjishijianChange:function(n){this.ruleForm.bianjishijian=n.target.value,this.$forceUpdate()},wenzhangfenleiChange:function(n){this.wenzhangfenleiIndex=n.target.value,this.ruleForm.wenzhangfenlei=this.wenzhangfenleiOptions[this.wenzhangfenleiIndex]},fengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=o(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("yonghuwenzhang",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("yonghuwenzhang",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},"70f0":function(n,e,i){"use strict";var t,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}))},"7ea0":function(n,e,i){"use strict";i.r(e);var t=i("70f0"),a=i("f39e");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("98bc");var o,u=i("f0c5"),s=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"364a783e",null,!1,t["a"],o);e["default"]=s.exports},"92ba":function(n,e,i){},"98bc":function(n,e,i){"use strict";var t=i("92ba"),a=i.n(t);a.a},f39e:function(n,e,i){"use strict";i.r(e);var t=i("20c1"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a}},[["0ede","common/runtime","common/vendor"]]]);