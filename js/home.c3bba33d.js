(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"28dc":function(t,e,a){"use strict";e["a"]={questionary:{part:0,askIndex:0,questions:[{id:"base",answare:null,ask:null},{id:"work",answare:null,ask:null}]},healthTips:{active:!1,tips:[]},lastQuestion:"fim"}},5161:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"",primary:""}},[s("v-layout",{staticClass:"mx-auto white--text flex-row-reverse",attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[s("v-flex",{staticClass:"border",attrs:{xs8:"",sm4:""}},[s("v-img",{attrs:{contain:"","min-height":"150px","max-height":"360px",src:a("98e3")}})],1),s("v-flex",{staticClass:"mx-4",attrs:{id:"textoAqui",xs12:"",sm12:"",md6:""}},[s("p",{staticClass:"border mb-md-10 text-h5 text-sm-h3 text-md-h3 font-weight-bold",staticStyle:{"text-align":"center"},attrs:{id:"titulo"}},[t._v(" "+t._s(t.headLine)+" ")]),s("p",{staticClass:"border mx-2 text-body-1 text-sm-h5 font-weight-regular",staticStyle:{"text-align":"center"},attrs:{id:"texto"}},[t._v(t._s(t.startText))])]),s("v-flex",{staticClass:"border mx-4 mb-2",attrs:{xs12:"",sm12:"",md6:""}},[s("v-btn",{staticClass:"button",attrs:{block:"",dark:"",height:"56px",outlined:"",rounded:"",router:"",to:t.startFormPage}},[t._v(" Clique aqui para começar ")])],1)],1)],1)},i=[],r=a("28dc"),o={components:{},data:()=>({menu:"mdi-menu",teste:[],startFormPage:"/ds",startText:"Cansaço, irritabilidade, insônia. Podem ser sintomas de stress.Visando o seu bem estar, nós preparamos um questionário de saúde mental, que tal começarmos? Não tomará muito tempo.",headLine:"Bem Vindo ao ProMental"}),methods:{},mounted(){this.$firebase.firestore().collection("boas-vindas").get().then(t=>{t.docs.forEach(t=>{this.headLine=t.data().titulo,document.getElementById("titulo").innerHTML=this.headLine,this.startText=t.data().texto,document.getElementById("texto").innerHTML=this.startText})})},created(){this.$firebase.firestore().collection("dicas-de-saude").get().then(t=>{t.docs.forEach(t=>{r["a"].healthTips.active=t.data().ativo,r["a"].healthTips.tips=t.data().dicas})}),this.$firebase.firestore().collection("questionario").get().then(t=>{var e=0;t.docs.forEach(t=>{r["a"].questionary.questions[e].ask=t.data().perguntas,r["a"].questionary.questions[e].answare=t.data().respostas,e++})})}},n=o,d=(a("789e"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),m=a("a523"),h=(a("20f6"),a("e8f2")),x=Object(h["a"])("flex"),f=a("adda"),p=Object(h["a"])("layout"),b=Object(d["a"])(n,s,i,!1,null,"7e866fe4",null);e["default"]=b.exports;c()(b,{VBtn:u["a"],VContainer:m["a"],VFlex:x,VImg:f["a"],VLayout:p})},"789e":function(t,e,a){"use strict";var s=a("9443"),i=a.n(s);i.a},9443:function(t,e,a){}}]);
//# sourceMappingURL=home.c3bba33d.js.map