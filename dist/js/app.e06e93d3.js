(function(){"use strict";var t={2520:function(t,e,n){var a=n(9242),o=n(3396);function r(t,e,n,a,r,s){const l=(0,o.up)("Header");return(0,o.wg)(),(0,o.j4)(l)}var s=n(7139);const l={class:"contain"},i={class:"container"},c={class:"row"},d={class:"col-lg-6 offset-lg-3 mb-5"},u={class:"card p-4 w-100"},h=(0,o._)("h3",{style:{"text-align":"center"}},"To do List",-1),p={class:"input"},f={key:0,style:{height:"10rem","overflow-y":"scroll",padding:"0 .5rem"}},g=(0,o._)("p",{class:"text-center"},"Data Kosong",-1),v=[g],b={key:1,style:{height:"10rem","overflow-y":"scroll",padding:"0 .5rem"}},m=["onClick"],w=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-check-lg",viewBox:"0 0 16 16"},[(0,o._)("path",{d:"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"})],-1),y=[w],_={class:"col-lg-6 offset-lg-3"},k={class:"accordion",id:"accordionExample"},x={class:"accordion-item"},O=(0,o._)("h2",{class:"accordion-header"},[(0,o._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},[(0,o._)("span",{class:"fw-semibold fs-5"},"Trash")])],-1),D={id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},C={class:"accordion-body"},j={key:0,style:{height:"10rem","overflow-y":"scroll",padding:"0 .5rem"}},T=(0,o._)("p",{class:"text-center"},"Data Kosong",-1),A=[T],H={key:1,style:{height:"10rem","overflow-y":"scroll",padding:"0 .5rem"}},P={style:{"text-decoration":"line-through",color:"grey"}},S=["onClick"],I=["onClick"];function K(t,e,n,r,g,w){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",i,[(0,o._)("div",c,[(0,o._)("div",d,[(0,o._)("div",u,[h,(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"New Task",onInput:e[0]||(e[0]=(...t)=>w.cekInput&&w.cekInput(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>g.text=t)},null,544),[[a.nr,g.text]]),(0,o._)("button",{onClick:e[2]||(e[2]=(...t)=>w.addData&&w.addData(...t))},"+")]),g.datas.length?((0,o.wg)(),(0,o.iD)("div",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.datas,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o._)("div",null,[(0,o._)("span",null,(0,s.zw)(t.nama),1)]),(0,o._)("button",{class:"btn btn-success btn-sm",onClick:t=>w.btn(e)},y,8,m)])))),128))])):((0,o.wg)(),(0,o.iD)("div",f,v))])]),(0,o._)("div",_,[(0,o._)("div",k,[(0,o._)("div",x,[O,(0,o._)("div",D,[(0,o._)("div",C,[g.trash.length?((0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.trash,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o._)("span",P,(0,s.zw)(t.nama),1),(0,o._)("div",null,[(0,o._)("button",{class:"btn btn-primary btn-sm",onClick:t=>w.restore(e)},"Restore",8,S),(0,o._)("button",{class:"btn btn-danger btn-sm",onClick:t=>w.remove(e)},"X",8,I)])])))),128))])):((0,o.wg)(),(0,o.iD)("div",j,A)),(0,o._)("button",{class:"btn btn-danger btn-sm mt-3",onClick:e[3]||(e[3]=(...t)=>w.deleteAll&&w.deleteAll(...t))},"Delete All")])])])])])])])])}n(7658);var M={name:"Header",data(){return{datas:[],trash:[],text:"",checklist:""}},methods:{cekInput(t){t.target.value.length>20&&(alert("Teks Terlalu Panjang"),this.text="")},addData(){this.text&&(this.datas.push({nama:this.text}),this.text="")},remove(t){this.trash.splice(t,1)},btn(t){const e=this.datas[t];this.trash.push({nama:e.nama}),this.datas.splice(t,1)},deleteAll(){this.trash=[]},restore(t){const e=this.trash[t];this.datas.push({nama:e.nama}),this.trash.splice(t,1)}}},E=n(89);const L=(0,E.Z)(M,[["render",K]]);var Z=L,z={name:"App",components:{Header:Z}};const Y=(0,E.Z)(z,[["render",r]]);var B=Y;n(5654);(0,a.ri)(B).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],r=t[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(l=!1,r<s&&(s=r));if(l){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],l=a[1],i=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(i)var d=i(n)}for(e&&e(a);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},a=self["webpackChunklatihan"]=self["webpackChunklatihan"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2520)}));a=n.O(a)})();
//# sourceMappingURL=app.e06e93d3.js.map