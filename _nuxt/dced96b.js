(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{397:function(t,o,e){"use strict";var r,n,a;a=function(a){function t(a,t,g,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,g))}t(a=a?a._modules:{},"Series/XRange/XRangePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,g){var b=this&&this.__extends||function(){var a=function(t,o){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o])},a(t,o)};return function(t,o){function b(){this.constructor=t}a(t,o),t.prototype=null===o?Object.create(o):(b.prototype=o.prototype,new b)}}();return g=g.extend,t=function(t){function o(){var a=null!==t&&t.apply(this,arguments)||this;return a.options=void 0,a.series=void 0,a}return b(o,t),o.getColorByCategory=function(a,t){var o=a.options.colors||a.chart.options.colors;return{colorIndex:a=t.y%(o?o.length:a.chart.options.chart.colorCount),color:o&&o[a]}},o.prototype.resolveColor=function(){var a=this.series;if(a.options.colorByPoint&&!this.options.color){var b=o.getColorByCategory(a,this);a.chart.styledMode||(this.color=b.color),this.options.colorIndex||(this.colorIndex=b.colorIndex)}else this.color||(this.color=a.color)},o.prototype.init=function(){return a.prototype.init.apply(this,arguments),this.y||(this.y=0),this},o.prototype.setState=function(){a.prototype.setState.apply(this,arguments),this.series.drawPoint(this,this.series.getAnimationVerb())},o.prototype.getLabelConfig=function(){var t=a.prototype.getLabelConfig.call(this),o=this.series.yAxis.categories;return t.x2=this.x2,t.yCategory=this.yCategory=o&&o[this.y],t},o.prototype.isValid=function(){return"number"==typeof this.x&&"number"==typeof this.x2},o}(t.seriesTypes.column.prototype.pointClass),g(t.prototype,{ttBelow:!1,tooltipDateKeys:["x","x2"]}),t})),t(a,"Series/XRange/XRangeComposition.js",[a["Core/Axis/Axis.js"],a["Core/Utilities.js"]],(function(a,t){var g=t.addEvent,b=t.pick;g(a,"afterGetSeriesExtremes",(function(){var t,a=this.series;if(this.isXAxis){var o=b(this.dataMax,-Number.MAX_VALUE);a.forEach((function(a){a.x2Data&&a.x2Data.forEach((function(a){a>o&&(o=a,t=!0)}))})),t&&(this.dataMax=o)}}))})),t(a,"Series/XRange/XRangeSeries.js",[a["Core/Globals.js"],a["Core/Color/Color.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/XRange/XRangePoint.js"]],(function(a,t,g,b,o){var e=this&&this.__extends||function(){var a=function(t,o){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var q in a)a.hasOwnProperty(q)&&(t[q]=a[q])},a(t,o)};return function(t,o){function q(){this.constructor=t}a(t,o),t.prototype=null===o?Object.create(o):(q.prototype=o.prototype,new q)}}(),r=t.parse,n=g.series,l=g.seriesTypes.column,c=l.prototype,h=b.clamp,d=b.correctFloat,f=b.defined;t=b.extend;var y=b.find,u=b.isNumber,x=b.isObject,v=b.merge,m=b.pick;return b=function(a){function b(){var t=null!==a&&a.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return e(b,a),b.prototype.init=function(){l.prototype.init.apply(this,arguments),this.options.stacking=void 0},b.prototype.getColumnMetrics=function(){function t(){a.series.forEach((function(a){var t=a.xAxis;a.xAxis=a.yAxis,a.yAxis=t}))}var a=this.chart;t();var b=c.getColumnMetrics.call(this);return t(),b},b.prototype.cropData=function(a,b,t,o){return(b=n.prototype.cropData.call(this,this.x2Data,b,t,o)).xData=a.slice(b.start,b.end),b},b.prototype.findPointIndex=function(a){var t=this.cropped,b=this.cropStart,o=this.points,e=a.id;if(e)var r=(r=y(o,(function(a){return a.id===e})))?r.index:void 0;return void 0===r&&(r=(r=y(o,(function(t){return t.x===a.x&&t.x2===a.x2&&!t.touched})))?r.index:void 0),t&&u(r)&&u(b)&&r>=b&&(r-=b),r},b.prototype.translatePoint=function(a){var t=this.xAxis,b=this.yAxis,o=this.columnMetrics,e=this.options,r=e.minPointLength||0,n=(a.shapeArgs&&a.shapeArgs.width||0)/2,l=this.pointXOffset=o.offset,c=a.plotX,g=m(a.x2,a.x+(a.len||0)),d=t.translate(g,0,0,0,1);g=Math.abs(d-c);var p=this.chart.inverted,y=m(e.borderWidth,1)%2/2,C=o.offset,w=Math.round(o.width);r&&(0>(r-=g)&&(r=0),c-=r/2,d+=r/2),c=Math.max(c,-10),d=h(d,-10,t.len+10),f(a.options.pointWidth)&&(C-=(Math.ceil(a.options.pointWidth)-w)/2,w=Math.ceil(a.options.pointWidth)),e.pointPlacement&&u(a.plotY)&&b.categories&&(a.plotY=b.translate(a.y,0,1,0,1,e.pointPlacement)),e={x:e=Math.floor(Math.min(c,d))+y,y:Math.floor(a.plotY+C)+y,width:Math.floor(Math.max(c,d))+y-e,height:w,r:this.options.borderRadius},a.shapeArgs=e,p?a.tooltipPos[1]+=l+n:a.tooltipPos[0]-=n+l-e.width/2,l=(n=e.x)+e.width,0>n||l>t.len?(n=h(n,0,t.len),d=(l=h(l,0,t.len))-n,a.dlBox=v(e,{x:n,width:l-n,centerX:d?d/2:null})):a.dlBox=null,n=a.tooltipPos,l=p?1:0,d=p?0:1,o=this.columnMetrics?this.columnMetrics.offset:-o.width/2,n[l]=p?n[l]+e.width/2:n[l]+(t.reversed?-1:0)*e.width,n[d]=h(n[d]+(p?-1:1)*o,0,b.len-1),(b=a.partialFill)&&(x(b)&&(b=b.amount),u(b)||(b=0),a.partShapeArgs=v(e,{r:this.options.borderRadius}),c=Math.max(Math.round(g*b+a.plotX-c),0),a.clipRectArgs={x:t.reversed?e.x+g-c:e.x,y:e.y,width:c,height:e.height})},b.prototype.translate=function(){c.translate.apply(this,arguments),this.points.forEach((function(a){this.translatePoint(a)}),this)},b.prototype.drawPoint=function(a,b){var t=this.options,o=this.chart.renderer,e=a.graphic,g=a.shapeType,n=a.shapeArgs,l=a.partShapeArgs,c=a.clipRectArgs,h=a.partialFill,d=t.stacking&&!t.borderRadius,p=a.state,q=t.states[p||"normal"]||{},f=void 0===p?"attr":b;p=this.pointAttribs(a,p),q=m(this.chart.options.chart.animation,q.animation),a.isNull||!1===a.visible?e&&(a.graphic=e.destroy()):(e?e.rect[b](n):(a.graphic=e=o.g("point").addClass(a.getClassName()).add(a.group||this.group),e.rect=o[g](v(n)).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(e)),l&&(e.partRect?(e.partRect[b](v(l)),e.partialClipRect[b](v(c))):(e.partialClipRect=o.clipRect(c.x,c.y,c.width,c.height),e.partRect=o[g](l).addClass("highcharts-partfill-overlay").add(e).clip(e.partialClipRect))),this.chart.styledMode||(e.rect[b](p,q).shadow(t.shadow,null,d),l&&(x(h)||(h={}),x(t.partialFill)&&(h=v(t.partialFill,h)),a=h.fill||r(p.fill).brighten(-.3).get()||r(a.color||this.color).brighten(-.3).get(),p.fill=a,e.partRect[f](p,q).shadow(t.shadow,null,d))))},b.prototype.drawPoints=function(){var a=this,b=a.getAnimationVerb();a.points.forEach((function(t){a.drawPoint(t,b)}))},b.prototype.getAnimationVerb=function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"},b.prototype.isPointInside=function(b){var t=b.shapeArgs,o=b.plotX,e=b.plotY;return t?void 0!==o&&void 0!==e&&0<=e&&e<=this.yAxis.len&&0<=(t.x||0)+(t.width||0)&&o<=this.xAxis.len:a.prototype.isPointInside.apply(this,arguments)},b.defaultOptions=v(l.defaultOptions,{colorByPoint:!0,dataLabels:{formatter:function(){var a=this.point.partialFill;if(x(a)&&(a=a.amount),u(a)&&0<a)return d(100*a)+"%"},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:'<span style="font-size: 10px">{point.x} - {point.x2}</span><br/>',pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.yCategory}</b><br/>'},borderRadius:3,pointRange:0}),b}(l),t(b.prototype,{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:n.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,autoIncrement:a.noop,buildKDTree:a.noop,pointClass:o}),g.registerSeriesType("xrange",b),b})),t(a,"masters/modules/xrange.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(r=[e(140)],void 0===(n=function(t){return a(t),a.Highcharts=t,a}.apply(o,r))||(t.exports=n))}}]);