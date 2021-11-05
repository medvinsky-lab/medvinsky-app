/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{373:function(t,e,n){"use strict";var r,o,l;l=function(t){var e=t?t._modules:{};function n(t,path,e,n){t.hasOwnProperty(path)||(t[path]=n.apply(null,e))}n(e,"Series/Tilemap/TilemapPoint.js",[e["Core/Axis/Color/ColorAxisComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,n){var r,o=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=e.series.prototype.pointClass,h=e.seriesTypes.heatmap.prototype.pointClass,d=n.extend,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options=void 0,e.radius=void 0,e.series=void 0,e.tileEdges=void 0,e}return o(e,t),e.prototype.haloPath=function(){return this.series.tileShape.haloPath.apply(this,arguments)},e}(h);return d(c.prototype,{setState:l.prototype.setState,setVisible:t.pointSetVisible}),c})),n(e,"Series/Tilemap/TilemapShapes.js",[e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,n){var r=t.noop,o=e.seriesTypes,l=o.heatmap,h=o.scatter,d=n.clamp,c=n.pick;function y(t,e,n){var r=t.options;return{xPad:(r.colsize||1)/-e,yPad:(r.rowsize||1)/-n}}return{hexagon:{alignDataLabel:h.prototype.alignDataLabel,getSeriesPadding:function(t){return y(t,3,2)},haloPath:function(t){if(!t)return[];var e=this.tileEdges;return[["M",e.x2-t,e.y1+t],["L",e.x3+t,e.y1+t],["L",e.x4+1.5*t,e.y2],["L",e.x3+t,e.y3-t],["L",e.x2-t,e.y3-t],["L",e.x1-1.5*t,e.y2],["Z"]]},translate:function(){var t,e=this,n=e.options,r=e.xAxis,o=e.yAxis,l=n.pointPadding||0,h=(n.colsize||1)/3,y=(n.rowsize||1)/2;e.generatePoints(),e.points.forEach((function(e){var n=d(Math.floor(r.len-r.translate(e.x-2*h,0,1,0,1)),-r.len,2*r.len),f=d(Math.floor(r.len-r.translate(e.x-h,0,1,0,1)),-r.len,2*r.len),x=d(Math.floor(r.len-r.translate(e.x+h,0,1,0,1)),-r.len,2*r.len),P=d(Math.floor(r.len-r.translate(e.x+2*h,0,1,0,1)),-r.len,2*r.len),v=d(Math.floor(o.translate(e.y-y,0,1,0,1)),-o.len,2*o.len),m=d(Math.floor(o.translate(e.y,0,1,0,1)),-o.len,2*o.len),M=d(Math.floor(o.translate(e.y+y,0,1,0,1)),-o.len,2*o.len),S=c(e.pointPadding,l),L=S*Math.abs(f-n)/Math.abs(M-m),A=r.reversed?-L:L,T=r.reversed?-S:S,C=o.reversed?-S:S;e.x%2&&(v+=t=t||Math.round(Math.abs(M-v)/2)*(o.reversed?-1:1),m+=t,M+=t),e.plotX=e.clientX=(f+x)/2,e.plotY=m,n+=A+T,f+=T,x-=T,P-=A+T,v-=C,M+=C,e.tileEdges={x1:n,x2:f,x3:x,x4:P,y1:v,y2:m,y3:M},e.shapeType="path",e.shapeArgs={d:[["M",f,v],["L",x,v],["L",P,m],["L",x,M],["L",f,M],["L",n,m],["Z"]]}})),e.translateColors()}},diamond:{alignDataLabel:h.prototype.alignDataLabel,getSeriesPadding:function(t){return y(t,2,2)},haloPath:function(t){if(!t)return[];var e=this.tileEdges;return[["M",e.x2,e.y1+t],["L",e.x3+t,e.y2],["L",e.x2,e.y3-t],["L",e.x1-t,e.y2],["Z"]]},translate:function(){var t,e=this,n=e.options,r=e.xAxis,o=e.yAxis,l=n.pointPadding||0,h=n.colsize||1,y=(n.rowsize||1)/2;e.generatePoints(),e.points.forEach((function(e){var n=d(Math.round(r.len-r.translate(e.x-h,0,1,0,0)),-r.len,2*r.len),f=d(Math.round(r.len-r.translate(e.x,0,1,0,0)),-r.len,2*r.len),x=d(Math.round(r.len-r.translate(e.x+h,0,1,0,0)),-r.len,2*r.len),P=d(Math.round(o.translate(e.y-y,0,1,0,0)),-o.len,2*o.len),v=d(Math.round(o.translate(e.y,0,1,0,0)),-o.len,2*o.len),m=d(Math.round(o.translate(e.y+y,0,1,0,0)),-o.len,2*o.len),M=c(e.pointPadding,l),S=M*Math.abs(f-n)/Math.abs(m-v),L=r.reversed?-S:S,A=o.reversed?-M:M;e.x%2&&(P+=t=Math.abs(m-P)/2*(o.reversed?-1:1),v+=t,m+=t),e.plotX=e.clientX=f,e.plotY=v,n+=L,x-=L,P-=A,m+=A,e.tileEdges={x1:n,x2:f,x3:x,y1:P,y2:v,y3:m},e.shapeType="path",e.shapeArgs={d:[["M",f,P],["L",x,v],["L",f,m],["L",n,v],["Z"]]}})),e.translateColors()}},circle:{alignDataLabel:h.prototype.alignDataLabel,getSeriesPadding:function(t){return y(t,2,2)},haloPath:function(t){return h.prototype.pointClass.prototype.haloPath.call(this,t+(t&&this.radius))},translate:function(){var t,e,n,r,o=this,l=o.options,h=o.xAxis,c=o.yAxis,y=l.pointPadding||0,f=(l.rowsize||1)/2,x=l.colsize||1,P=!1;o.generatePoints(),o.points.forEach((function(o){var l=d(Math.round(h.len-h.translate(o.x,0,1,0,0)),-h.len,2*h.len),v=d(Math.round(c.translate(o.y,0,1,0,0)),-c.len,2*c.len),m=y,M=!1;void 0!==o.pointPadding&&(m=o.pointPadding,M=!0,P=!0),r&&!P||(t=Math.abs(d(Math.floor(h.len-h.translate(o.x+x,0,1,0,0)),-h.len,2*h.len)-l),e=Math.abs(d(Math.floor(c.translate(o.y+f,0,1,0,0)),-c.len,2*c.len)-v),n=Math.floor(Math.sqrt(t*t+e*e)/2),r=Math.min(t,n,e)-m,P&&!M&&(P=!1)),o.x%2&&(v+=e*(c.reversed?-1:1)),o.plotX=o.clientX=l,o.plotY=v,o.radius=r,o.shapeType="circle",o.shapeArgs={x:l,y:v,r:r}})),o.translateColors()}},square:{alignDataLabel:l.prototype.alignDataLabel,translate:l.prototype.translate,getSeriesPadding:r,haloPath:l.prototype.pointClass.prototype.haloPath}}})),n(e,"Series/Tilemap/TilemapComposition.js",[e["Core/Axis/Axis.js"],e["Core/Utilities.js"]],(function(t,e){(0,e.addEvent)(t,"afterSetAxisTranslation",(function(){if(!this.recomputingForTilemap&&"colorAxis"!==this.coll){var t=this,e=t.series.map((function(e){return e.getSeriesPixelPadding&&e.getSeriesPixelPadding(t)})).reduce((function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b}),void 0)||{padding:0,axisLengthFactor:1},n=Math.round(e.padding*e.axisLengthFactor);e.padding&&(t.len-=n,t.recomputingForTilemap=!0,t.setAxisTranslation(),delete t.recomputingForTilemap,t.minPixelPadding+=e.padding,t.len+=n)}}))})),n(e,"Series/Tilemap/TilemapSeries.js",[e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Series/Tilemap/TilemapPoint.js"],e["Series/Tilemap/TilemapShapes.js"],e["Core/Utilities.js"]],(function(t,e,n,r,o){var l,h=this&&this.__extends||(l=function(t,b){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},l(t,b)},function(t,b){function e(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=t.noop,c=e.seriesTypes,y=c.column,f=c.heatmap,x=c.scatter,P=o.extend,v=o.merge,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e.tileShape=void 0,e}return h(e,t),e.prototype.alignDataLabel=function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},e.prototype.drawPoints=function(){var t=this;y.prototype.drawPoints.call(this),this.points.forEach((function(e){e.graphic&&e.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(e))}))},e.prototype.getSeriesPixelPadding=function(t){var e,n,r=t.isXAxis,o=this.tileShape.getSeriesPadding(this);return o?(e=Math.round(t.translate(r?2*o.xPad:o.yPad,0,1,0,1)),n=Math.round(t.translate(r?o.xPad:0,0,1,0,1)),{padding:Math.abs(e-n)||0,axisLengthFactor:r?2:1.1}):{padding:0,axisLengthFactor:1}},e.prototype.setOptions=function(){var e=t.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));return this.tileShape=r[e.tileShape],e},e.prototype.translate=function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))},e.defaultOptions=v(f.defaultOptions,{marker:null,states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"}),e}(f);return P(m.prototype,{getSymbol:d,markerAttribs:x.prototype.markerAttribs,pointAttribs:y.prototype.pointAttribs,pointClass:n}),e.registerSeriesType("tilemap",m),m})),n(e,"masters/modules/tilemap.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(r=[n(137),n(263)],void 0===(o=function(t){return l(t),l.Highcharts=t,l}.apply(e,r))||(t.exports=o))}}]);