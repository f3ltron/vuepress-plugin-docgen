(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n="hello world"},113:function(t,e){},641:function(t,e,r){"use strict";var n=r(113),s=r.n(n);e.default=s.a},647:function(t,e,r){"use strict";r.r(e);r(145),r(61),r(55),r(39),r(60),r(47),r(146),r(147);var n=r(112),s={name:"fulljsdoc",props:{msg:{type:[String,Number],default:n.a},value:{type:String},data:[Array],columns:[Array],filterKey:{type:String,default:"example"}},data:function(){var t={};return this.columns.forEach(function(e){t[e]=1}),{sortKey:"",sortOrders:t}},computed:{filteredData:function(){var t=this.sortKey,e=this.filterKey&&this.filterKey.toLowerCase(),r=this.sortOrders[t]||1,n=this.data;return e&&(n=n.filter(function(t){return Object.keys(t).some(function(r){return String(t[r]).toLowerCase().indexOf(e)>-1})})),t&&(n=n.slice().sort(function(e,n){return((e=e[t])===(n=n[t])?0:e>n?1:-1)*r})),n}},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t],this.$emit("success",{demo:"example"})},hiddenMethod:function(){}}},i=r(0),o=r(641),u=Object(i.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("header"),t._v(" "),r("table",{staticClass:"grid"}),t._v("\n\n  "+t._s(t.msg)+"\n\n  "),t._l(t.columns,function(e){return r("div",{key:e},[t._v(t._s(e))])}),t._v(" "),t._t("footer")],2)},[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(u);e.default=u.exports}}]);