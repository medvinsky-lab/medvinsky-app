(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{313:function(t,e,r){"use strict";var o,n,g;g=function(g){function t(g,t,e,r){g.hasOwnProperty(t)||(g[t]=r.apply(null,e))}t(g=g?g._modules:{},"Core/Axis/GridAxis.js",[g["Core/Axis/Axis.js"],g["Core/Axis/AxisDefaults.js"],g["Core/Globals.js"],g["Core/Utilities.js"]],(function(g,t,e,r){var o,n=e.dateFormats,h=r.addEvent,p=r.defined,d=r.erase,l=r.find,c=r.isArray,u=r.isNumber,f=r.merge,x=r.pick,m=r.timeUnits,k=r.wrap;return function(q){function o(a,b){var t={width:0,height:0};return b.forEach((function(b){if(b=a[b],r.isObject(b,!0)){var e=r.isObject(b.label,!0)?b.label:{};b=e.getBBox?e.getBBox().height:0,e.textStr&&!u(e.textPxLength)&&(e.textPxLength=e.getBBox().width);var o=u(e.textPxLength)?Math.round(e.textPxLength):0;e.textStr&&(o=Math.round(e.getBBox().width)),t.height=Math.max(b,t.height),t.width=Math.max(o,t.width)}})),"treegrid"===this.options.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode&&(t.width+=this.options.labels.indentation*((this.treeGrid.mapOfPosToGridNode[-1].height||0)-1)),t}function n(){var a=this.grid;(a&&a.columns||[]).forEach((function(b){b.getOffset()}))}function v(a){if(!0===(this.options.grid||{}).enabled){var b=this.axisTitle,t=this.height,e=this.horiz,r=this.left,o=this.offset,n=this.opposite,h=this.options,d=this.top,g=this.width,l=this.tickSize(),c=b&&b.getBBox().width,f=h.title.x,m=h.title.y,k=x(h.title.margin,e?5:10);b=this.chart.renderer.fontMetrics(h.title.style.fontSize,b).f,l=(e?d+t:r)+(e?1:-1)*(n?-1:1)*(l?l[0]/2:0)+(this.side===q.Side.bottom?b:0),a.titlePosition.x=e?r-(c||0)/2-k+f:l+(n?g:0)+o+f,a.titlePosition.y=e?l-(n?t:0)+(n?b:-b)/2+o+m:d-k+m}}function P(){var a=this.chart,b=this.options.grid;b=void 0===b?{}:b;var t=this.userOptions;if(b.enabled){var e=this.options;e.labels.align=x(e.labels.align,"center"),this.categories||(e.showLastLabel=!1),this.labelRotation=0,e.labels.rotation=0}if(b.columns){e=this.grid.columns=[];for(var r=this.grid.columnIndex=0;++r<b.columns.length;){var o=f(t,b.columns[b.columns.length-r-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete o.grid.columns,(o=new g(this.chart,o)).grid.isColumn=!0,o.grid.columnIndex=r,d(a.axes,o),d(a[this.coll],o),e.push(o)}}}function w(){var a=this.grid,b=this.options;if(!0===(b.grid||{}).enabled){var t=this.min||0,e=this.max||0;if(this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){var r=b.lineWidth;if(r){var o=(r=this.getLinePath(r))[0],n=r[1],h=((this.tickSize("tick")||[1])[0]-1)*(this.side===q.Side.top||this.side===q.Side.left?-1:1);"M"===o[0]&&"L"===n[0]&&(this.horiz?(o[2]+=h,n[2]+=h):(o[1]+=h,n[1]+=h)),!this.horiz&&this.chart.marginRight&&(o=[o,["L",this.left,o[2]||0]],h=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(e+this.tickmarkOffset)],n=[["M",n[1]||0,this.toPixels(e+this.tickmarkOffset)],h],this.grid.upperBorder||0==t%1||(this.grid.upperBorder=this.grid.renderBorder(o)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.upperBorder.animate({d:o})),this.grid.lowerBorder||0==e%1||(this.grid.lowerBorder=this.grid.renderBorder(n)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.lowerBorder.animate({d:n}))),this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.axisLineExtra.animate({d:r})):this.grid.axisLineExtra=this.grid.renderBorder(r),this.axisLine[this.showAxis?"show":"hide"](!0)}}if((a&&a.columns||[]).forEach((function(b){b.render()})),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)){for(a=this.tickmarkOffset,b=this.tickPositions[this.tickPositions.length-1],r=this.tickPositions[0],n=void 0;(n=this.hiddenLabels.pop())&&n.element;)n.show();(n=this.ticks[r].label)&&(t-r>a?this.hiddenLabels.push(n.hide()):n.show()),(n=this.ticks[b].label)&&(b-e>a?this.hiddenLabels.push(n.hide()):n.show()),(t=this.ticks[b].mark)&&(b-e<a&&0<b-e&&this.ticks[b].isLast?t.hide():this.ticks[b-1]&&t.show())}}}function y(){var a=this.tickPositions&&this.tickPositions.info,b=this.options,t=this.userOptions.labels||{};(b.grid||{}).enabled&&(this.horiz?(this.series.forEach((function(b){b.options.pointRange=0})),a&&b.dateTimeLabelFormats&&b.labels&&!p(t.align)&&(!1===b.dateTimeLabelFormats[a.unitName].range||1<a.count)&&(b.labels.align="left",p(t.x)||(b.labels.x=3))):"treegrid"!==this.options.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function L(a){var b=this.options;a=a.userOptions;var t=b&&r.isObject(b.grid,!0)?b.grid:{};if(!0===t.enabled){var e=f(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a);"xAxis"===this.coll&&(p(a.linkedTo)&&!p(a.tickPixelInterval)&&(e.tickPixelInterval=350),p(a.tickPixelInterval)||!p(a.linkedTo)||p(a.tickPositioner)||p(a.tickInterval)||(e.tickPositioner=function(b,a){var t=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(t){for(var r=e.units||[],o=void 0,g=void 0,n=void 0,q=0;q<r.length;q++)if(r[q][0]===t.unitName){o=q;break}return r[o+1]?(n=r[o+1][0],g=(r[o+1][1]||[1])[0]):"year"===t.unitName&&(n="year",g=10*t.count),t=m[n],this.tickInterval=t*g,this.getTimeTicks({unitRange:t,count:g,unitName:n},b,a,this.options.startOfWeek)}})),f(!0,this.options,e),this.horiz&&(b.minPadding=x(a.minPadding,0),b.maxPadding=x(a.maxPadding,0)),u(b.grid.borderWidth)&&(b.tickWidth=b.lineWidth=t.borderWidth)}}function O(a){var b=(a=(a=a.userOptions)&&a.grid||{}).columns;a.enabled&&b&&f(!0,this.options,b[b.length-1])}function B(){(this.grid.columns||[]).forEach((function(a){a.setScale()}))}function S(a){var b=t.defaultLeftAxisOptions,e=this.horiz,r=this.maxLabelDimensions,o=this.options.grid;(o=void 0===o?{}:o).enabled&&r&&(b=2*Math.abs(b.labels.x),e=e?o.cellHeight||b+r.height:b+r.width,c(a.tickSize)?a.tickSize[0]=e:a.tickSize=[e,0])}function A(){this.axes.forEach((function(a){(a.grid&&a.grid.columns||[]).forEach((function(b){b.setAxisSize(),b.setAxisTranslation()}))}))}function z(a){var b=this.grid;(b.columns||[]).forEach((function(b){b.destroy(a.keepEvents)})),b.columns=void 0}function T(a){var b=(a=a.userOptions||{}).grid||{};b.enabled&&p(b.borderColor)&&(a.tickColor=a.lineColor=b.borderColor),this.grid||(this.grid=new D(this)),this.hiddenLabels=[]}function W(a){var b=this.label,t=this.axis,e=t.reversed,r=t.chart,o=t.options.grid||{},n=t.options.labels,g=n.align,h=q.Side[t.side],d=a.tickmarkOffset,l=t.tickPositions,c=this.pos-d;l=u(l[a.index+1])?l[a.index+1]-d:(t.max||0)+d;var f=t.tickSize("tick");if(d=f?f[0]:0,f=f?f[1]/2:0,!0===o.enabled){if("top"===h)var p=(o=t.top+t.offset)-d;else"bottom"===h?o=(p=r.chartHeight-t.bottom+t.offset)+d:(o=t.top+t.len-(t.translate(e?l:c)||0),p=t.top+t.len-(t.translate(e?c:l)||0));"right"===h?e=(h=r.chartWidth-t.right+t.offset)+d:"left"===h?h=(e=t.left+t.offset)-d:(h=Math.round(t.left+(t.translate(e?l:c)||0))-f,e=Math.min(Math.round(t.left+(t.translate(e?c:l)||0))-f,t.left+t.len)),this.slotWidth=e-h,a.pos.x="left"===g?h:"right"===g?e:h+(e-h)/2,a.pos.y=p+(o-p)/2,r=r.renderer.fontMetrics(n.style.fontSize,b&&b.element),b=b?b.getBBox().height:0,n.useHTML?a.pos.y+=r.b+-b/2:(b=Math.round(b/r.h),a.pos.y+=(r.b-(r.h-r.f))/2+-(b-1)*r.h/2),a.pos.x+=t.horiz&&n.x||0}}function C(a){var b=a.axis,t=a.value;if(b.options.grid&&b.options.grid.enabled){var r=b.tickPositions,o=(b.linkedParent||b).series[0],n=t===r[0];r=t===r[r.length-1];var h=o&&l(o.options.data,(function(a){return a[b.isXAxis?"x":"y"]===t})),d=void 0;h&&o.is("gantt")&&(d=f(h),e.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(d)),a.isFirst=n,a.isLast=r,a.point=d}}function M(){var a=this.options,b=this.categories,t=this.tickPositions,e=t[0],r=t[t.length-1],o=this.linkedParent&&this.linkedParent.min||this.min,n=this.linkedParent&&this.linkedParent.max||this.max,g=this.tickInterval;!0!==(a.grid||{}).enabled||b||!this.horiz&&!this.isLinked||(e<o&&e+g>o&&!a.startOnTick&&(t[0]=o),r>n&&r-g<n&&!a.endOnTick&&(t[t.length-1]=n))}function E(a){var b=this.options.grid;return!0===(void 0===b?{}:b).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))}var a;(a=q.Side||(q.Side={}))[a.top=0]="top",a[a.right=1]="right",a[a.bottom=2]="bottom",a[a.left=3]="left",q.compose=function(a,b,t){return-1===a.keepProps.indexOf("grid")&&(a.keepProps.push("grid"),a.prototype.getMaxLabelDimensions=o,k(a.prototype,"unsquish",E),h(a,"init",T),h(a,"afterGetOffset",n),h(a,"afterGetTitlePosition",v),h(a,"afterInit",P),h(a,"afterRender",w),h(a,"afterSetAxisTranslation",y),h(a,"afterSetOptions",L),h(a,"afterSetOptions",O),h(a,"afterSetScale",B),h(a,"afterTickSize",S),h(a,"trimTicks",M),h(a,"destroy",z)),h(b,"afterSetChartSize",A),h(t,"afterGetLabelPosition",W),h(t,"labelFormat",C),a};var D=function(){function a(b){this.axis=b}return a.prototype.isOuterAxis=function(){var b=this.axis,a=b.grid.columnIndex,t=b.linkedParent&&b.linkedParent.grid.columns||b.grid.columns,e=a?b.linkedParent:b,r=-1,g=0;return b.chart[b.coll].forEach((function(a,t){a.side!==b.side||a.options.isInternal||(g=t,a===e&&(r=t))})),g===r&&(!u(a)||t.length===a)},a.prototype.renderBorder=function(b){var a=this.axis,t=a.chart.renderer,e=a.options;return b=t.path(b).addClass("highcharts-axis-line").add(a.axisBorder),t.styledMode||b.attr({stroke:e.lineColor,"stroke-width":e.lineWidth,zIndex:7}),b},a}();q.Additions=D}(o||(o={})),n.E=function(t){return this.dateFormat("%a",t,!0).charAt(0)},n.W=function(t){t=new this.Date(t);var g=(this.get("Day",t)+6)%7,e=new this.Date(t.valueOf());return this.set("Date",e,this.get("Date",t)-g+3),g=new this.Date(this.get("FullYear",e),0,1),4!==this.get("Day",g)&&(this.set("Month",t,0),this.set("Date",t,1+(11-this.get("Day",g))%7)),(1+Math.floor((e.valueOf()-g.valueOf())/6048e5)).toString()},o})),t(g,"masters/modules/grid-axis.src.js",[g["Core/Globals.js"],g["Core/Axis/GridAxis.js"]],(function(g,t){t.compose(g.Axis,g.Chart,g.Tick)}))},t.exports?(g.default=g,t.exports=g):(o=[r(137)],void 0===(n=function(t){return g(t),g.Highcharts=t,g}.apply(e,o))||(t.exports=n))}}]);