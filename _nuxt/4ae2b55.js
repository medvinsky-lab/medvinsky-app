/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{348:function(e,t,r){"use strict";var n,o,d;d=function(e){var t=e?e._modules:{};function r(e,path,t,r){e.hasOwnProperty(path)||(e[path]=r.apply(null,t))}r(t,"Series/DerivedComposition.js",[t["Core/Globals.js"],t["Core/Series/Series.js"],t["Core/Utilities.js"]],(function(e,t,r){var n,o=e.noop,d=r.addEvent,c=r.defined;return function(e){var r=[];function n(){t.prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function h(){var e=this.chart,t=this.options.baseSeries,r=c(t)&&(e.series[t]||e.get(t));this.baseSeries=r||null}function v(){var e=this;this.eventRemovers.push(d(this.chart,"afterLinkSeries",(function(){e.setBaseSeries(),e.baseSeries&&!e.initialised&&(e.setDerivedData(),e.addBaseSeriesEvents(),e.initialised=!0)})))}function f(){var e=this;this.eventRemovers.push(d(this.baseSeries,"updatedData",(function(){e.setDerivedData()})),d(this.baseSeries,"destroy",(function(){e.baseSeries=null,e.initialised=!1})))}function l(){this.eventRemovers.forEach((function(e){e()})),t.prototype.destroy.apply(this,arguments)}e.hasDerivedData=!0,e.setDerivedData=o,e.compose=function(e){if(-1===r.indexOf(e)){r.push(e);var t=e.prototype;t.addBaseSeriesEvents=f,t.addEvents=v,t.destroy=l,t.init=n,t.setBaseSeries=h}return e},e.init=n,e.setBaseSeries=h,e.addEvents=v,e.addBaseSeriesEvents=f,e.destroy=l}(n||(n={})),n})),r(t,"Series/ParetoSeries/ParetoSeries.js",[t["Series/DerivedComposition.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(e,t,r){var n,o=this&&this.__extends||(n=function(e,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},n(e,b)},function(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),d=t.seriesTypes.line,c=r.correctFloat,h=r.merge,v=r.extend,f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=void 0,t.points=void 0,t.options=void 0,t}return o(t,e),t.prototype.sumPointsPercents=function(e,t,r,n){var o,d=0,h=0,v=[];return e.forEach((function(e,i){null!==e&&(n?d+=e:(o=e/r*100,v.push([t[i],c(h+o)]),h+=o))})),n?d:v},t.prototype.setDerivedData=function(){var e=this.baseSeries.xData,t=this.baseSeries.yData,r=this.sumPointsPercents(t,e,null,!0);this.setData(this.sumPointsPercents(t,e,r,!1),!1)},t.defaultOptions=h(d.defaultOptions,{zIndex:3}),t}(d);return v(f.prototype,{hasDerivedData:e.hasDerivedData}),e.compose(f),t.registerSeriesType("pareto",f),f})),r(t,"masters/modules/pareto.src.js",[],(function(){}))},e.exports?(d.default=d,e.exports=d):(n=[r(138)],void 0===(o=function(e){return d(e),d.Highcharts=e,d}.apply(t,n))||(e.exports=o))}}]);