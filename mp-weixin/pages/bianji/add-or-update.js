(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bianji/add-or-update"],{"07c8":function(n,t,e){"use strict";e.r(t);var i=e("c470"),r=e("d1b1");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("f7f7");var u,s=e("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"e4bb4f92",null,!1,i["a"],u);t["default"]=o.exports},3191:function(n,t,e){},"985d":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,i,r,a,u){try{var s=n[a](u),o=s.value}catch(c){return void e(c)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var u=n.apply(t,e);function s(n){a(u,i,r,s,o,"next",n)}function o(n){a(u,i,r,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("cce5"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{bianjizhanghao:"",mima:"",bianjixingming:"",nianling:"",xingbie:"",shouji:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{bianjizhanghao:!1,mima:!1,bianjixingming:!1,nianling:!1,xingbie:!1,shouji:!1,zhaopian:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var t=u(i.default.mark((function t(e){var r,a,u,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=14;break}return this.ruleForm.id=e.id,t.next=12,this.$api.info("bianji",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(!e.cross){t.next=49;break}u=n.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(s=t.t1.value,"bianjizhanghao"!=s){t.next=23;break}return this.ruleForm.bianjizhanghao=u[s],this.ro.bianjizhanghao=!0,t.abrupt("continue",17);case 23:if("mima"!=s){t.next=27;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,t.abrupt("continue",17);case 27:if("bianjixingming"!=s){t.next=31;break}return this.ruleForm.bianjixingming=u[s],this.ro.bianjixingming=!0,t.abrupt("continue",17);case 31:if("nianling"!=s){t.next=35;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,t.abrupt("continue",17);case 35:if("xingbie"!=s){t.next=39;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,t.abrupt("continue",17);case 39:if("shouji"!=s){t.next=43;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,t.abrupt("continue",17);case 43:if("zhaopian"!=s){t.next=47;break}return this.ruleForm.zhaopian=u[s],this.ro.zhaopian=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:this.styleChange();case 50:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.zhaopian=n.$base.url+"upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.bianjizhanghao){n.next=3;break}return this.$utils.msg("编辑账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(this.ruleForm.bianjixingming){n.next=9;break}return this.$utils.msg("编辑姓名不能为空"),n.abrupt("return");case 9:if(this.ruleForm.nianling){n.next=12;break}return this.$utils.msg("年龄不能为空"),n.abrupt("return");case 12:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){n.next=15;break}return this.$utils.msg("年龄应输入整数"),n.abrupt("return");case 15:if(this.ruleForm.shouji){n.next=18;break}return this.$utils.msg("手机不能为空"),n.abrupt("return");case 18:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){n.next=21;break}return this.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 21:if(!this.ruleForm.id){n.next=26;break}return n.next=24,this.$api.update("bianji",this.ruleForm);case 24:n.next=28;break;case 26:return n.next=28,this.$api.add("bianji",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(e,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};t.default=o}).call(this,e("543d")["default"])},b3a9:function(n,t,e){"use strict";(function(n){e("b69f"),e("921b");i(e("66fd"));var t=i(e("07c8"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},c470:function(n,t,e){"use strict";var i,r=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}))},d1b1:function(n,t,e){"use strict";e.r(t);var i=e("985d"),r=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=r.a},f7f7:function(n,t,e){"use strict";var i=e("3191"),r=e.n(i);r.a}},[["b3a9","common/runtime","common/vendor"]]]);