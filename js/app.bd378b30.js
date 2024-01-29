(function(){"use strict";var t={1380:function(t,e,o){var n=o(9242),i=o(3396),u=o(7139);const r=(0,i._)("h4",null,"BlueTune",-1),a=["id"],s=["id","onClick"],l={class:"mtext m_num"},m={class:"mtext m_title"},c={class:"mtext m_artist"},p=["href"],y=["id"],d={key:0,class:"dtcategory"},f={class:"detailtt"},w={class:"detailcontent"};function v(t,e,o,n,v,h){return(0,i.wg)(),(0,i.iD)("body",null,[r,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.musicname,((e,o)=>((0,i.wg)(),(0,i.iD)("div",{class:"mfit",key:o,id:[`mf${o}`]},[(0,i._)("div",{class:"mbox titlebox",id:[`mbx${o}`],onClick:e=>h.dtopen(t.e,o)},[(0,i._)("div",l,(0,u.zw)(e.num),1),(0,i._)("div",m,(0,u.zw)(e.title),1),(0,i._)("div",c,(0,u.zw)(e.artist),1),(0,i._)("a",{class:"mtext m_playlink",href:[`${e.link.youtube}`]},"▶",8,p)],8,s),(0,i._)("div",{class:"mbox detail",id:[`mdt${o}`]},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.detailtagname,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:(0,u.C_)([`ct${e}`])},[v.musicname[o][t.tagname].length>0?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",f,(0,u.zw)(t.ctgrname),1),(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.musicname[o][t.tagname],((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},(0,u.zw)(t),1)))),128))])])):(0,i.kq)("",!0)],2)))),128))],8,y)],8,a)))),128))])}var h={name:"App",data(){return{detailtagname:[{ctgrname:"용도",tagname:"purpose"},{ctgrname:"메모리얼 로비",tagname:"memorial"},{ctgrname:"비고",tagname:"note"}],musicname:{1:{num:1,title:"Constant Moderato",artist:"Mitsukiyo",purpose:["타이틀 스크린"],memorial:[],note:["DJMAX RESPECT V 콜라보 수록"],link:{youtube:"https://www.youtube.com/watch?v=SHkF48SgiSA"}},2:{num:2,title:"Luminous Memory",artist:"Mitsukiyo",purpose:["메모리얼 로비"],memorial:["이오리","하스미","우타하","아즈사(수영복)","미네"],note:["1주년 기념 3rd PV OST"],link:{youtube:"https://www.youtube.com/watch?v=D3boxTP-ZG8"}},3:{num:3,title:"Mischievous Step",artist:"Mitsukiyo",purpose:["임무 스테이지"],memorial:[],note:[],link:{youtube:"https://www.youtube.com/watch?v=FHW2fNPaHU4"}},4:{num:4,title:"Lovely Picnic",artist:"Mitsukiyo",purpose:["스토리 범용"],memorial:[],note:[],link:{youtube:"https://www.youtube.com/watch?v=dEfXiVI1Euo"}},5:{num:5,title:"Colorful Mess",artist:"KARUT",purpose:["스토리 범용"],memorial:[],note:[],link:{youtube:"https://www.youtube.com/watch?v=OF9cu3cutj0"}},6:{num:6,title:"Funky Road",artist:"KARUT",purpose:["스토리 범용"],memorial:[],note:[],link:{youtube:"https://www.youtube.com/watch?v=8h458BG1-Bo"}},7:{num:7,title:"Unwelcome School",artist:"Mitsukiyo",purpose:["스토리 범용"],memorial:[],note:["일명 '아루 브금'"],link:{youtube:"https://youtu.be/pEg_d2f6myw"}},8:{num:8,title:"Shady Girls",artist:"Mitsukiyo",purpose:["스토리 범용"],memorial:["카스미"],note:[],link:{youtube:"https://youtu.be/v7s-gHSs-YM"}},9:{num:9,title:"Midsummer cat",artist:"Mitsukiyo",purpose:["메모리얼 로비"],memorial:["시로코","슌","노노미","시즈코","아카네","요시미","츠바키","하나코","미모리","유우카/체육복","주리","하루나(새해)","토키(바니걸)","미야코(수영복)","하나코(수영복)"],note:[],link:{youtube:"https://youtu.be/v7s-gHSs-YM"}},10:{num:10,title:"Romantic Smile",artist:"Mitsukiyo",purpose:["스토리 범용"],memorial:[],note:[],link:{youtube:"https://youtu.be/EBnOCXXg91o"}}}}},methods:{dtopen(t,e){let o=document.getElementById("mdt"+e);o.style.display&&"none"!=o.style.display?o.style.display="none":o.style.display="block"}},components:{}},b=o(89);const g=(0,b.Z)(h,[["render",v]]);var k=g;(0,n.ri)(k).mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var u=e[n]={exports:{}};return t[n].call(u.exports,u,u.exports,o),u.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,u){if(!n){var r=1/0;for(m=0;m<t.length;m++){n=t[m][0],i=t[m][1],u=t[m][2];for(var a=!0,s=0;s<n.length;s++)(!1&u||r>=u)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(a=!1,u<r&&(r=u));if(a){t.splice(m--,1);var l=i();void 0!==l&&(e=l)}}return e}u=u||0;for(var m=t.length;m>0&&t[m-1][2]>u;m--)t[m]=t[m-1];t[m]=[n,i,u]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,u,r=n[0],a=n[1],s=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var m=s(o)}for(e&&e(n);l<r.length;l++)u=r[l],o.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return o.O(m)},n=self["webpackChunkproject_aoharu"]=self["webpackChunkproject_aoharu"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1380)}));n=o.O(n)})();
//# sourceMappingURL=app.bd378b30.js.map