(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{401:function(t,e,n){"use strict";n.r(e);var c={props:{label:{type:String,default:""},value:{type:String,default:""},active:{type:Boolean,default:!1}},emits:["click"],data:function(){return{hover:!1}},computed:{activated:function(){return!!(this.hover|this.active)}}},l=n(47),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"py-1 px-2 bg-gray-900 text-gray-50 rounded",class:{"bg-yellow-400":t.activated,"text-gray-900":t.activated},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports}}]);