(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{287:function(t,o,e){"use strict";var r,n,l;l=function(t){function o(t,o,e,r){t.hasOwnProperty(o)||(t[o]=r.apply(null,e))}o(t=t?t._modules:{},"Extensions/DataGrouping.js",[t["Core/Axis/Axis.js"],t["Core/Axis/DateTimeAxis.js"],t["Core/FormatUtilities.js"],t["Core/Globals.js"],t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Tooltip.js"],t["Core/DefaultOptions.js"],t["Core/Utilities.js"]],(function(t,o,e,r,n,l,h,d,c){var f=e.format,m=l.prototype;e=c.addEvent;var x=c.arrayMax,D=c.arrayMin,G=c.correctFloat,v=c.defined,y=c.error,M=c.extend,p=c.isNumber,A=c.merge,P=c.pick,g=r.approximations={sum:function(a){var b=a.length;if(!b&&a.hasNulls)var t=null;else if(b)for(t=0;b--;)t+=a[b];return t},average:function(a){var b=a.length;return a=g.sum(a),p(a)&&b&&(a=G(a/b)),a},averages:function(){var a=[];return[].forEach.call(arguments,(function(b){a.push(g.average(b))})),void 0===a[0]?void 0:a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?x(a):a.hasNulls?null:void 0},low:function(a){return a.length?D(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},hlc:function(a,b,t){if(a=g.high(a),b=g.low(b),t=g.close(t),p(a)||p(b)||p(t))return[a,b,t]},ohlc:function(a,b,t,o){if(a=g.open(a),b=g.high(b),t=g.low(t),o=g.close(o),p(a)||p(b)||p(t)||p(o))return[a,b,t,o]},range:function(a,b){return a=g.low(a),b=g.high(b),p(a)||p(b)?[a,b]:null===a&&null===b?null:void 0}};c=function(a,b,t,o){var e,r=this,n=r.data,l=r.options&&r.options.data,h=[],d=[],c=[],f=a.length,m=!!b,x=[],u=r.pointArrayMap,D=u&&u.length,G=["x"].concat(u||["y"]),y=this.options.dataGrouping&&this.options.dataGrouping.groupAll,M=0,P=0;o="function"==typeof o?o:g[o]?g[o]:g[r.getDGApproximation&&r.getDGApproximation()||"average"],D?u.forEach((function(){x.push([])})):x.push([]);var S=D||1;for(e=0;e<=f&&!(a[e]>=t[0]);e++);for(;e<=f;e++){for(;void 0!==t[M+1]&&a[e]>=t[M+1]||e===f;){var q=t[M];r.dataGroupInfo={start:y?P:r.cropStart+P,length:x[0].length};var W=o.apply(r,x);for(r.pointClass&&!v(r.dataGroupInfo.options)&&(r.dataGroupInfo.options=A(r.pointClass.prototype.optionsToObject.call({series:r},r.options.data[r.cropStart+P])),G.forEach((function(a){delete r.dataGroupInfo.options[a]}))),void 0!==W&&(h.push(q),d.push(W),c.push(r.dataGroupInfo)),P=e,q=0;q<S;q++)x[q].length=0,x[q].hasNulls=!1;if(M+=1,e===f)break}if(e===f)break;if(u){q=r.options.dataGrouping&&r.options.dataGrouping.groupAll?e:r.cropStart+e,W=n&&n[q]||r.pointClass.prototype.applyOptions.apply({series:r},[l[q]]);var k=void 0;for(q=0;q<D;q++)k=W[u[q]],p(k)?x[q].push(k):null===k&&(x[q].hasNulls=!0)}else q=m?b[e]:null,p(q)?x[0].push(q):null===q&&(x[0].hasNulls=!0)}return{groupedXData:h,groupedYData:d,groupMap:c}};var S={approximations:g,groupData:c},W=m.generatePoints,k={groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},C={line:{},spline:{},area:{},areaspline:{},arearange:{},column:{groupPixelWidth:10},columnrange:{groupPixelWidth:10},candlestick:{groupPixelWidth:10},ohlc:{groupPixelWidth:5},hlc:{groupPixelWidth:5},heikinashi:{groupPixelWidth:10}},F=r.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]];return m.getDGApproximation=function(){return this.is("arearange")?"range":this.is("ohlc")?"ohlc":this.is("hlc")?"hlc":this.is("column")?"sum":"average"},m.groupData=c,m.applyGrouping=function(a){var t,b=this.chart,e=this.options.dataGrouping,r=!1!==this.allowDG&&e&&P(e.enabled,b.options.isStock),n=this.visible||!b.options.chart.ignoreHiddenSeries,l=this.currentDataGrouping,h=!1;if(r&&!this.requireSorting&&(this.requireSorting=h=!0),a=0==!(this.isCartesian&&!this.isDirty&&!this.xAxis.isDirty&&!this.yAxis.isDirty&&!a)||!r,h&&(this.requireSorting=!1),!a){this.destroyGroupedData(),r=e.groupAll?this.xData:this.processedXData;var g=e.groupAll?this.yData:this.processedYData;a=b.plotSizeX;var d=(h=this.xAxis).options.ordinal,c=this.groupPixelWidth;if(c&&r&&r.length){this.isDirty=t=!0,this.points=null;var f=h.getExtremes(),x=f.min;f=f.max,d=d&&h.ordinal&&h.ordinal.getGroupIntervalFactor(x,f,this)||1,a=h.getTimeTicks(o.Additions.prototype.normalizeTimeTickInterval(c*(f-x)/a*d,e.units||F),Math.min(x,r[0]),Math.max(f,r[r.length-1]),h.options.startOfWeek,r,this.closestPointRange),r=(c=m.groupData.apply(this,[r,g,a,e.approximation])).groupedXData,g=c.groupedYData,d=0,e&&e.smoothed&&r.length&&(e.firstAnchor="firstPoint",e.anchor="middle",e.lastAnchor="lastPoint",y(32,!1,b,{"dataGrouping.smoothed":"use dataGrouping.anchor"})),b=r;var u=this.options.dataGrouping;if(x=this.currentDataGrouping&&this.currentDataGrouping.gapSize,u&&this.xData&&x&&this.groupMap){var D=b.length-1,G=u.anchor,M=P(u.firstAnchor,G);if(u=P(u.lastAnchor,G),G&&"start"!==G){var A=x*{middle:.5,end:1}[G];for(G=b.length-1;G--&&0<G;)b[G]+=A}if(M&&"start"!==M&&this.xData[0]>=b[0]){G=this.groupMap[0].start,A=this.groupMap[0].length;var S=void 0;p(G)&&p(A)&&(S=G+(A-1)),b[0]={middle:b[0]+.5*x,end:b[0]+x,firstPoint:this.xData[0],lastPoint:S&&this.xData[S]}[M]}u&&"start"!==u&&x&&b[D]>=f-x&&(f=this.groupMap[this.groupMap.length-1].start,b[D]={middle:b[D]+.5*x,end:b[D]+x,firstPoint:f&&this.xData[f],lastPoint:this.xData[this.xData.length-1]}[u])}for(f=1;f<a.length;f++)a.info.segmentStarts&&-1!==a.info.segmentStarts.indexOf(f)||(d=Math.max(a[f]-a[f-1],d));(f=a.info).gapSize=d,this.closestPointRange=a.info.totalRange,this.groupMap=c.groupMap,n&&(v((n=r)[0])&&p(h.min)&&p(h.dataMin)&&n[0]<h.min&&((!v(h.options.min)&&h.min<=h.dataMin||h.min===h.dataMin)&&(h.min=Math.min(n[0],h.min)),h.dataMin=Math.min(n[0],h.dataMin)),v(n[n.length-1])&&p(h.max)&&p(h.dataMax)&&n[n.length-1]>h.max&&((!v(h.options.max)&&p(h.dataMax)&&h.max>=h.dataMax||h.max===h.dataMax)&&(h.max=Math.max(n[n.length-1],h.max)),h.dataMax=Math.max(n[n.length-1],h.dataMax))),e.groupAll&&(this.allGroupedData=g,r=(e=this.cropData(r,g,h.min,h.max,1)).xData,g=e.yData,this.cropStart=e.start),this.processedXData=r,this.processedYData=g}else this.groupMap=null;this.hasGroupedData=t,this.currentDataGrouping=f,this.preventGraphAnimation=(l&&l.totalRange)!==(f&&f.totalRange)}},m.destroyGroupedData=function(){this.groupedData&&(this.groupedData.forEach((function(a,b){a&&(this.groupedData[b]=a.destroy?a.destroy():null)}),this),this.groupedData.length=0)},m.generatePoints=function(){W.apply(this),this.destroyGroupedData(),this.groupedData=this.hasGroupedData?this.points:null},t.prototype.applyGrouping=function(a){var b=this;b.series.forEach((function(t){t.groupPixelWidth=void 0,t.groupPixelWidth=b.getGroupPixelWidth&&b.getGroupPixelWidth(),t.groupPixelWidth&&(t.hasProcessed=!0),t.applyGrouping(!!a.hasExtemesChanged)}))},t.prototype.getGroupPixelWidth=function(){var t,o,a=this.series,b=a.length,e=0,r=!1;for(t=b;t--;)(o=a[t].options.dataGrouping)&&(e=Math.max(e,P(o.groupPixelWidth,k.groupPixelWidth)));for(t=b;t--;)(o=a[t].options.dataGrouping)&&(b=(a[t].processedXData||a[t].data).length,(a[t].groupPixelWidth||b>this.chart.plotSizeX/e||b&&o.forced)&&(r=!0));return r?e:0},t.prototype.setDataGrouping=function(a,b){var o;if(b=P(b,!0),a||(a={forced:!1,units:null}),this instanceof t)for(o=this.series.length;o--;)this.series[o].update({dataGrouping:a},!1);else this.chart.options.series.forEach((function(b){b.dataGrouping=a}),!1);this.ordinal&&(this.ordinal.slope=void 0),b&&this.chart.redraw()},e(t,"postProcessData",t.prototype.applyGrouping),e(n,"update",(function(){if(this.dataGroup)return y(24,!1,this.series.chart),!1})),e(h,"headerFormatter",(function(a){var b=this.chart,t=b.time,o=a.labelConfig,e=o.series,g=e.tooltipOptions,r=e.options.dataGrouping,n=g.xDateFormat,l=e.xAxis,h=g[a.isFooter?"footerFormat":"headerFormat"];if(l&&"datetime"===l.options.type&&r&&p(o.key)){var d=e.currentDataGrouping;if(r=r.dateTimeLabelFormats||k.dateTimeLabelFormats,d)if(g=r[d.unitName],1===d.count)n=g[0];else{n=g[1];var c=g[2]}else!n&&r&&l.dateTime&&(n=l.dateTime.getXDateFormat(o.x,g.dateTimeLabelFormats));n=t.dateFormat(n,o.key),c&&(n+=t.dateFormat(c,o.key+d.totalRange-1)),e.chart.styledMode&&(h=this.styledModeFormat(h)),a.text=f(h,{point:M(o.point,{key:n}),series:e},b),a.preventDefault()}})),e(l,"destroy",m.destroyGroupedData),e(l,"afterSetOptions",(function(a){a=a.options;var b=this.type,t=this.chart.options.plotOptions,o=d.defaultOptions.plotOptions[b].dataGrouping,e=this.useCommonDataGrouping&&k;if(C[b]||e){o||(o=A(k,C[b]));var g=this.chart.rangeSelector;a.dataGrouping=A(e,o,t.series&&t.series.dataGrouping,t[b].dataGrouping,this.userOptions.dataGrouping,!a.isInternal&&g&&p(g.selected)&&g.buttonOptions[g.selected].dataGrouping)}})),e(t,"afterSetScale",(function(){this.series.forEach((function(a){a.hasProcessed=!1}))})),r.dataGrouping=S,S})),o(t,"masters/modules/datagrouping.src.js",[t["Extensions/DataGrouping.js"]],(function(t){return t}))},t.exports?(l.default=l,t.exports=l):(r=[e(137)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);