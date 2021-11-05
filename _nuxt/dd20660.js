(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{319:function(t,e,n){"use strict";var r,o,a;a=function(a){function t(a,t,b,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,b))}t(a=a?a._modules:{},"Series/DerivedComposition.js",[a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],(function(a,t,b){var p,e=a.noop,g=b.addEvent,n=b.defined;return function(a){function b(){t.prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function r(){var t=this.chart,a=this.options.baseSeries;this.baseSeries=n(a)&&(t.series[a]||t.get(a))||null}function o(){var t=this;this.eventRemovers.push(g(this.chart,"afterLinkSeries",(function(){t.setBaseSeries(),t.baseSeries&&!t.initialised&&(t.setDerivedData(),t.addBaseSeriesEvents(),t.initialised=!0)})))}function h(){var t=this;this.eventRemovers.push(g(this.baseSeries,"updatedData",(function(){t.setDerivedData()})),g(this.baseSeries,"destroy",(function(){t.baseSeries=null,t.initialised=!1})))}function q(){this.eventRemovers.forEach((function(t){t()})),t.prototype.destroy.apply(this,arguments)}var c=[];a.hasDerivedData=!0,a.setDerivedData=e,a.compose=function(t){if(-1===c.indexOf(t)){c.push(t);var a=t.prototype;a.addBaseSeriesEvents=h,a.addEvents=o,a.destroy=q,a.init=b,a.setBaseSeries=r}return t},a.init=b,a.setBaseSeries=r,a.addEvents=o,a.addBaseSeriesEvents=h,a.destroy=q}(p||(p={})),p})),t(a,"Series/Histogram/HistogramSeries.js",[a["Series/DerivedComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,b){var g=this&&this.__extends||function(){var a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var e in t)t.hasOwnProperty(e)&&(a[e]=t[e])},a(t,e)};return function(t,e){function b(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(b.prototype=e.prototype,new b)}}(),e=t.seriesTypes.column,p=b.arrayMax,n=b.arrayMin,r=b.correctFloat,o=b.extend,h=b.isNumber,c=b.merge,q=b.objectEach,d={"square-root":function(a){return Math.ceil(Math.sqrt(a.options.data.length))},sturges:function(a){return Math.ceil(Math.log(a.options.data.length)*Math.LOG2E)},rice:function(a){return Math.ceil(2*Math.pow(a.options.data.length,1/3))}};return b=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t.userOptions=void 0,t}return g(t,a),t.prototype.binsNumber=function(){var a=this.options.binsNumber,t=d[a]||"function"==typeof a&&a;return Math.ceil(t&&t(this.baseSeries)||(h(a)?a:d["square-root"](this.baseSeries)))},t.prototype.derivedData=function(a,t,b){var e=r(p(a)),o=r(n(a)),c=[],d={},g=[];for(b=this.binWidth=r(h(b)?b||1:(e-o)/t),this.options.pointRange=Math.max(b,0),t=o;t<e&&(this.userOptions.binWidth||r(e-t)>=b||0>=r(r(o+c.length*b)-t));t=r(t+b))c.push(t),d[t]=0;0!==d[o]&&(c.push(o),d[o]=0);var f=function(a){return function(t){for(var e=1;a[e]<=t;)e++;return a[--e]}}(c.map((function(a){return parseFloat(a)})));return a.forEach((function(a){a=r(f(a)),d[a]++})),q(d,(function(a,t){g.push({x:Number(t),y:a,x2:r(Number(t)+b)})})),g.sort((function(a,t){return a.x-t.x})),g[g.length-1].x2=e,g},t.prototype.setDerivedData=function(){var a=this.baseSeries.yData;a.length?(a=this.derivedData(a,this.binsNumber(),this.options.binWidth),this.setData(a,!1)):this.setData([])},t.defaultOptions=c(e.defaultOptions,{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'<span style="font-size: 10px">{point.x} - {point.x2}</span><br/><span style="color:{point.color}">●</span> {series.name} <b>{point.y}</b><br/>'}}),t}(e),o(b.prototype,{hasDerivedData:a.hasDerivedData}),a.compose(b),t.registerSeriesType("histogram",b),b})),t(a,"Series/Bellcurve/BellcurveSeries.js",[a["Series/DerivedComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,b){var e=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var b in t)t.hasOwnProperty(b)&&(a[b]=t[b])},a(b,t)};return function(b,t){function e(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),g=t.seriesTypes.areaspline,n=b.correctFloat,p=b.isNumber,r=b.merge;return b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return e(b,a),b.mean=function(a){var b=a.length;return a=a.reduce((function(a,b){return a+b}),0),0<b&&a/b},b.standardDeviation=function(a,t){var e=a.length;return t=p(t)?t:b.mean(a),a=a.reduce((function(a,b){return a+(b-=t)*b}),0),1<e&&Math.sqrt(a/(e-1))},b.normalDensity=function(a,b,t){return a-=b,Math.exp(-a*a/(2*t*t))/(t*Math.sqrt(2*Math.PI))},b.prototype.derivedData=function(a,t){var e=this.options.intervals,n=this.options.pointsInInterval,r=a-e*t;e=e*n*2+1,n=t/n;var o,g=[];for(o=0;o<e;o++)g.push([r,b.normalDensity(r,a,t)]),r+=n;return g},b.prototype.setDerivedData=function(){1<this.baseSeries.yData.length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean,this.standardDeviation),!1))},b.prototype.setMean=function(){this.mean=n(b.mean(this.baseSeries.yData))},b.prototype.setStandardDeviation=function(){this.standardDeviation=n(b.standardDeviation(this.baseSeries.yData,this.mean))},b.defaultOptions=r(g.defaultOptions,{intervals:3,pointsInInterval:3,marker:{enabled:!1}}),b}(g),a.compose(b),t.registerSeriesType("bellcurve",b),b})),t(a,"masters/modules/histogram-bellcurve.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(r=[n(137)],void 0===(o=function(t){return a(t),a.Highcharts=t,a}.apply(e,r))||(t.exports=o))}}]);