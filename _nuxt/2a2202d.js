(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{296:function(t,e,o){"use strict";var n,r,a;a=function(a){function b(a,t,b,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,b))}b(a=a?a._modules:{},"Extensions/DragPanes.js",[a["Core/Globals.js"],a["Core/Axis/Axis.js"],a["Core/Axis/AxisDefaults.js"],a["Core/Pointer.js"],a["Core/Utilities.js"]],(function(a,b,t,e,o){var n=a.hasTouch,r=o.addEvent,h=o.clamp,c=o.isNumber,l=o.merge,d=o.objectEach,x=o.relativeLength;o=o.wrap;var u=function(){function a(t){this.options=this.lastPos=this.controlLine=this.axis=void 0,this.init(t)}return a.prototype.init=function(t,a){this.axis=t,this.options=t.options.resize,this.render(),a||this.addMouseEvents()},a.prototype.render=function(){var t=this.axis,a=t.chart,e=this.options,o=e.x||0,b=e.y,n=h(t.top+t.height+b,a.plotTop,a.plotTop+a.plotHeight),r={};a.styledMode||(r={cursor:e.cursor,stroke:e.lineColor,"stroke-width":e.lineWidth,dashstyle:e.lineDashStyle}),this.lastPos=n-b,this.controlLine||(this.controlLine=a.renderer.path().addClass("highcharts-axis-resizer")),this.controlLine.add(t.axisGroup),e=a.styledMode?this.controlLine.strokeWidth():e.lineWidth,r.d=a.renderer.crispLine([["M",t.left+o,n],["L",t.left+t.width+o,n]],e),this.controlLine.attr(r)},a.prototype.addMouseEvents=function(){var t,e,o,h=this,a=h.controlLine.element,c=h.axis.chart.container,b=[];h.mouseMoveHandler=t=function(a){h.onMouseMove(a)},h.mouseUpHandler=e=function(a){h.onMouseUp(a)},h.mouseDownHandler=o=function(a){h.onMouseDown(a)},b.push(r(c,"mousemove",t),r(c.ownerDocument,"mouseup",e),r(a,"mousedown",o)),n&&b.push(r(c,"touchmove",t),r(c.ownerDocument,"touchend",e),r(a,"touchstart",o)),h.eventsToUnbind=b},a.prototype.onMouseMove=function(a){a.touches&&0===a.touches[0].pageX||!this.grabbed||(this.hasDragged=!0,this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y))},a.prototype.onMouseUp=function(a){this.hasDragged&&this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=null},a.prototype.onMouseDown=function(a){this.axis.chart.pointer.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0},a.prototype.updateAxes=function(a){var t=this,e=t.axis.chart,b=t.options.controlledAxis,o=0===b.next.length?[e.yAxis.indexOf(t.axis)+1]:b.next;b=[t.axis].concat(b.prev);var n=[],r=!1,q=e.plotTop,l=e.plotHeight,d=q+l,f=(a=h(a,q,d))-t.lastPos;1>f*f||([b,o].forEach((function(b,o){b.forEach((function(b,y){var g=(b=c(b)?e.yAxis[b]:o||y?e.get(b):b)&&b.options;if(g&&"navigator-y-axis"!==g.id){y=b.top;var v=Math.round(x(g.minLength,l)),p=Math.round(x(g.maxLength,l));o?(f=a-t.lastPos,g=Math.round(h(b.len-f,v,p)),(y=b.top+f)+g>d&&(a+=p=d-g-y,y+=p),y<q&&(y=q)+g>d&&(g=l),g===v&&(r=!0),n.push({axis:b,options:{top:100*(y-q)/l+"%",height:100*g/l+"%"}})):((g=Math.round(h(a-y,v,p)))===p&&(r=!0),a=y+g,n.push({axis:b,options:{height:100*g/l+"%"}}))}}))})),r||(n.forEach((function(a){a.axis.update(a.options,!1)})),e.redraw(!1)))},a.prototype.destroy=function(){var a=this;delete a.axis.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach((function(a){a()})),a.controlLine.destroy(),d(a,(function(b,t){a[t]=null}))},a.resizerOptions={minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}},a}();return b.keepProps.push("resizer"),r(b,"afterRender",(function(){var a=this.resizer,b=this.options.resize;b&&(b=!1!==b.enabled,a?b?a.init(this,!0):a.destroy():b&&(this.resizer=new u(this)))})),r(b,"destroy",(function(a){!a.keepEvents&&this.resizer&&this.resizer.destroy()})),o(e.prototype,"runPointActions",(function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))})),o(e.prototype,"drag",(function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))})),l(!0,t.defaultYAxisOptions,u.resizerOptions),a.AxisResizer=u,a.AxisResizer})),b(a,"masters/modules/drag-panes.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[o(138),o(260)],void 0===(r=function(b){return a(b),a.Highcharts=b,a}.apply(e,n))||(t.exports=r))}}]);