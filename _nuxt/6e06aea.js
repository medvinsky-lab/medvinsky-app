(window.webpackJsonp=window.webpackJsonp||[]).push([[21,23,54],{258:function(t,e,r){"use strict";var n,o,a;a=function(a){function t(a,t,e,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,e))}t(a=a?a._modules:{},"Series/Cylinder/CylinderPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t){var e=this&&this.__extends||function(){var a=function(b,g){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])},a(b,g)};return function(b,g){function t(){this.constructor=b}a(b,g),b.prototype=null===g?Object.create(g):(t.prototype=g.prototype,new t)}}();return t=t.extend,a=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.options=void 0,b.series=void 0,b}return e(b,a),b}(a.seriesTypes.column.prototype.pointClass),t(a.prototype,{shapeType:"cylinder"}),a})),t(a,"Series/Cylinder/CylinderComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e,b,r){var g=a.parse,n=t.charts,u=t.deg2rad,o=e.perspective;a=r.merge;var d=r.pick,h=(b=b.getRendererType().prototype).cuboidPath,p=function(t){return!t.some((function(t){return"C"===t[0]}))};r=a(b.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(t){return this.singleSetterForParts("fill",null,{front:t,back:t,top:g(t).brighten(.1).get(),bottom:g(t).brighten(-.1).get()}),this.color=this.fill=t,this}}),b.elements3d.cylinder=r,b.cylinder=function(t){return this.element3d("cylinder",t)},b.cylinderPath=function(t){var a=n[this.chartIndex],e=h.call(this,t),r=!e.isTop,b=!e.isFront,o=this.getCylinderEnd(a,t);return t=this.getCylinderEnd(a,t,!0),{front:this.getCylinderFront(o,t),back:this.getCylinderBack(o,t),top:o,bottom:t,zIndexes:{top:r?3:0,bottom:r?0:3,front:b?2:1,back:b?1:2,group:e.zIndexes.group}}},b.getCylinderFront=function(t,a){if(t=t.slice(0,3),p(a)){var e=a[0];"M"===e[0]&&(t.push(a[2]),t.push(a[1]),t.push(["L",e[1],e[2]]))}else{e=a[0];var r=a[1];a=a[2],"M"===e[0]&&"C"===r[0]&&"C"===a[0]&&(t.push(["L",a[5],a[6]]),t.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),t.push(["C",r[3],r[4],r[1],r[2],e[1],e[2]]))}return t.push(["Z"]),t},b.getCylinderBack=function(t,a){var e=[];if(p(t)){var r=t[0],b=t[2];"M"===r[0]&&"L"===b[0]&&(e.push(["M",b[1],b[2]]),e.push(t[3]),e.push(["L",r[1],r[2]]))}else"C"===t[2][0]&&e.push(["M",t[2][5],t[2][6]]),e.push(t[3],t[4]);return p(a)?"M"===(r=a[0])[0]&&(e.push(["L",r[1],r[2]]),e.push(a[3]),e.push(a[2])):(t=a[2],r=a[3],a=a[4],"C"===t[0]&&"C"===r[0]&&"C"===a[0]&&(e.push(["L",a[5],a[6]]),e.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),e.push(["C",r[3],r[4],r[1],r[2],t[5],t[6]]))),e.push(["Z"]),e},b.getCylinderEnd=function(a,b,t){var e=b.width;e=void 0===e?0:e;var r=b.height,g=void 0===r?0:r,n=void 0===(r=b.alphaCorrection)?0:r;r=d(b.depth,e,0);var h=Math.min(e,r)/2;n=u*(a.options.chart.options3d.beta-90+n),t=(b.y||0)+(t?g:0),g=.5519*h;var q,l,c=e/2+(b.x||0),p=r/2+(b.z||0),f=[{x:0,y:t,z:h},{x:g,y:t,z:h},{x:h,y:t,z:g},{x:h,y:t,z:0},{x:h,y:t,z:-g},{x:g,y:t,z:-h},{x:0,y:t,z:-h},{x:-g,y:t,z:-h},{x:-h,y:t,z:-g},{x:-h,y:t,z:0},{x:-h,y:t,z:g},{x:-g,y:t,z:h},{x:0,y:t,z:h}],y=Math.cos(n),x=Math.sin(n);return f.forEach((function(a,t){q=a.x,l=a.z,f[t].x=q*y-l*x+c,f[t].z=l*y+q*x+p})),a=o(f,a,!0),2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?this.toLinePath([a[0],a[3],a[6],a[9]],!0):this.getCurvedPath(a)},b.getCurvedPath=function(a){var t,e=[["M",a[0].x,a[0].y]],b=a.length-2;for(t=1;t<b;t+=3)e.push(["C",a[t].x,a[t].y,a[t+1].x,a[t+1].y,a[t+2].x,a[t+2].y]);return e}})),t(a,"Series/Cylinder/CylinderSeries.js",[a["Series/Cylinder/CylinderPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e){var b=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function g(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(g.prototype=t.prototype,new g)}}(),r=t.seriesTypes.column,g=e.extend,n=e.merge;return e=function(a){function t(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return b(t,a),t.defaultOptions=n(r.defaultOptions),t}(r),g(e.prototype,{pointClass:a}),t.registerSeriesType("cylinder",e),e})),t(a,"masters/modules/cylinder.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[r(137),r(398)],void 0===(o=function(t){return a(t),a.Highcharts=t,a}.apply(e,n))||(t.exports=o))},262:function(t,e,r){"use strict";var n,o,a;a=function(a){function q(a,t,e,r){a.hasOwnProperty(t)||(a[t]=r.apply(null,e))}q(a=a?a._modules:{},"Series/Funnel3D/Funnel3DComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Renderer/SVG/SVGRenderer3D.js"],a["Core/Utilities.js"]],(function(a,t,e,r){var n,o=a.parse,d=t.charts,h=r.error,l=r.extend,c=r.merge;return function(a){a.compose=function(a){e.compose(a),function(a){a.funnel3d=c(a.cuboid,{parts:"top bottom frontUpper backUpper frontLower backLower rightUpper rightLower".split(" "),mainParts:["top","bottom"],sideGroups:["upperGroup","lowerGroup"],sideParts:{upperGroup:["frontUpper","backUpper","rightUpper"],lowerGroup:["frontLower","backLower","rightLower"]},pathType:"funnel3d",opacitySetter:function(a){var b=this,e=b.parts,r=t.charts[b.renderer.chartIndex],n="group-opacity-"+a+"-"+r.index;return b.parts=b.mainParts,b.singleSetterForParts("opacity",a),b.parts=e,r.renderer.filterId||(r.renderer.definition({tagName:"filter",attributes:{id:n},children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"table",tableValues:"0 "+a}}]}]}),b.sideGroups.forEach((function(t){b[t].attr({filter:"url(#"+n+")"})})),b.renderer.styledMode&&(r.renderer.definition({tagName:"style",textContent:".highcharts-"+n+" {filter:url(#"+n+")}"}),b.sideGroups.forEach((function(b){b.addClass("highcharts-"+n)})))),b},fillSetter:function(a){var b=this,t=o(a),e=t.rgba[3],r={top:o(a).brighten(.1).get(),bottom:o(a).brighten(-.2).get()};return 1>e?(t.rgba[3]=1,t=t.get("rgb"),b.attr({opacity:e})):t=a,t.linearGradient||t.radialGradient||!b.gradientForSides||(t={linearGradient:{x1:0,x2:1,y1:1,y2:1},stops:[[0,o(a).brighten(-.2).get()],[.5,a],[1,o(a).brighten(-.2).get()]]}),t.linearGradient?b.sideGroups.forEach((function(a){var e=b[a].gradientBox,n=t.linearGradient,o=c(t,{linearGradient:{x1:e.x+n.x1*e.width,y1:e.y+n.y1*e.height,x2:e.x+n.x2*e.width,y2:e.y+n.y2*e.height}});b.sideParts[a].forEach((function(b){r[b]=o}))})):(c(!0,r,{frontUpper:t,backUpper:t,rightUpper:t,frontLower:t,backLower:t,rightLower:t}),t.radialGradient&&b.sideGroups.forEach((function(t){var a=b[t].gradientBox,e=a.x+a.width/2,r=a.y+a.height/2,n=Math.min(a.width,a.height);b.sideParts[t].forEach((function(t){b[t].setRadialReference([e,r,n])}))}))),b.singleSetterForParts("fill",null,r),b.color=b.fill=a,t.linearGradient&&[b.frontLower,b.frontUpper].forEach((function(t){(t=(t=t.element)&&b.renderer.gradients[t.gradient])&&"userSpaceOnUse"!==t.attr("gradientUnits")&&t.attr({gradientUnits:"userSpaceOnUse"})})),b},adjustForGradient:function(){var b,a=this;a.sideGroups.forEach((function(t){var e={x:Number.MAX_VALUE,y:Number.MAX_VALUE},r={x:-Number.MAX_VALUE,y:-Number.MAX_VALUE};a.sideParts[t].forEach((function(t){b=a[t].getBBox(!0),e={x:Math.min(e.x,b.x),y:Math.min(e.y,b.y)},r={x:Math.max(r.x,b.x+b.width),y:Math.max(r.y,b.y+b.height)}})),a[t].gradientBox={x:e.x,width:r.x-e.x,y:e.y,height:r.y-e.y}}))},zIndexSetter:function(){return this.finishedOnAdd&&this.adjustForGradient(),this.renderer.Element.prototype.zIndexSetter.apply(this,arguments)},onAdd:function(){this.adjustForGradient(),this.finishedOnAdd=!0}})}(a.prototype.elements3d),function(a){var t=a.prototype;l(t,{funnel3d:function(b){var t=this.element3d("funnel3d",b),a=this.styledMode,e={"stroke-width":1,stroke:"none"};return t.upperGroup=this.g("funnel3d-upper-group").attr({zIndex:t.frontUpper.zIndex}).add(t),[t.frontUpper,t.backUpper,t.rightUpper].forEach((function(b){a||b.attr(e),b.add(t.upperGroup)})),t.lowerGroup=this.g("funnel3d-lower-group").attr({zIndex:t.frontLower.zIndex}).add(t),[t.frontLower,t.backLower,t.rightLower].forEach((function(b){a||b.attr(e),b.add(t.lowerGroup)})),t.gradientForSides=b.gradientForSides,t},funnel3dPath:function(b){this.getCylinderEnd||h("A required Highcharts module is missing: cylinder.js",!0,d[this.chartIndex]);var e=d[this.chartIndex],a=b.alphaCorrection=90-Math.abs(e.options.chart.options3d.alpha%180-90),r=t.cuboidPath.call(this,c(b,{depth:b.width,width:(b.width+b.bottom.width)/2})),n=r.isTop,o=!r.isFront,l=!!b.middle,f=this.getCylinderEnd(e,c(b,{x:b.x-b.width/2,z:b.z-b.width/2,alphaCorrection:a})),g=b.bottom.width,y=c(b,{width:g,x:b.x-g/2,z:b.z-g/2,alphaCorrection:a}),x=this.getCylinderEnd(e,y,!0),w=g,u=y,v=x,m=x;return l&&(w=b.middle.width,u=c(b,{y:b.y+b.middle.fraction*b.height,width:w,x:b.x-w/2,z:b.z-w/2}),v=this.getCylinderEnd(e,u,!1),m=this.getCylinderEnd(e,u,!1)),(r={top:f,bottom:x,frontUpper:this.getCylinderFront(f,v),zIndexes:{group:r.zIndexes.group,top:0!==n?0:3,bottom:1!==n?0:3,frontUpper:o?2:1,backUpper:o?1:2,rightUpper:o?2:1}}).backUpper=this.getCylinderBack(f,v),f=1!=Math.min(w,b.width)/Math.max(w,b.width),r.rightUpper=this.getCylinderFront(this.getCylinderEnd(e,c(b,{x:b.x-b.width/2,z:b.z-b.width/2,alphaCorrection:f?-a:0}),!1),this.getCylinderEnd(e,c(u,{alphaCorrection:f?-a:0}),!l)),l&&(f=1!=Math.min(w,g)/Math.max(w,g),c(!0,r,{frontLower:this.getCylinderFront(m,x),backLower:this.getCylinderBack(m,x),rightLower:this.getCylinderFront(this.getCylinderEnd(e,c(y,{alphaCorrection:f?-a:0}),!0),this.getCylinderEnd(e,c(u,{alphaCorrection:f?-a:0}),!1)),zIndexes:{frontLower:o?2:1,backLower:o?1:2,rightLower:o?1:2}})),r}})}(a)}}(n||(n={})),n})),q(a,"Series/Funnel3D/Funnel3DPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t){var e=this&&this.__extends||function(){var a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var e in t)t.hasOwnProperty(e)&&(a[e]=t[e])},a(t,e)};return function(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();return t=t.extend,a=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.dlBoxRaw=void 0,t.options=void 0,t.series=void 0,t.y=void 0,t}return e(t,a),t}(a.seriesTypes.column.prototype.pointClass),t(a.prototype,{shapeType:"funnel3d"}),a})),q(a,"Series/Funnel3D/Funnel3DSeries.js",[a["Series/Funnel3D/Funnel3DComposition.js"],a["Series/Funnel3D/Funnel3DPoint.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,q,e,r,n){var o=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function e(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}();q=q.noop;var d=e.perspective,h=r.series,l=r.seriesTypes.column,c=n.extend,f=n.merge,y=n.pick,u=n.relativeLength;return e=function(t){function b(){var a=null!==t&&t.apply(this,arguments)||this;return a.center=void 0,a.data=void 0,a.options=void 0,a.points=void 0,a}return o(b,t),b.prototype.alignDataLabel=function(a,b,t){var e=a.dlBoxRaw,r=this.chart.inverted,n=a.plotY>y(this.translatedThreshold,this.yAxis.len),o=y(t.inside,!!this.options.stacking),g={x:e.x,y:e.y,height:0};t.align=y(t.align,!r||o?"center":n?"right":"left"),t.verticalAlign=y(t.verticalAlign,r||o?"middle":n?"top":"bottom"),"top"!==t.verticalAlign&&(g.y+=e.bottom/("bottom"===t.verticalAlign?1:2)),g.width=this.getWidthAt(g.y),this.options.reversed&&(g.width=e.fullWidth-g.width),o?g.x-=g.width/2:"left"===t.align?(t.align="right",g.x-=1.5*g.width):"right"===t.align?(t.align="left",g.x+=g.width/2):g.x-=g.width/2,a.dlBox=g,l.prototype.alignDataLabel.apply(this,arguments)},b.prototype.bindAxes=function(){h.prototype.bindAxes.apply(this,arguments),c(this.xAxis.options,{gridLineWidth:0,lineWidth:0,title:void 0,tickPositions:[]}),f(!0,this.yAxis.options,{gridLineWidth:0,title:void 0,labels:{enabled:!1}})},b.prototype.translate=function(){h.prototype.translate.apply(this,arguments);var t,e,r,n,o,l,f,x,p,a=0,b=this.chart,w=this.options,v=w.reversed,m=w.ignoreHiddenPoint,C=b.plotWidth,_=b.plotHeight,g=0,q=w.center,j=u(q[0],C),S=u(q[1],_),L=u(w.width,C),P=u(w.height,_),z=u(w.neckWidth,C),U=u(w.neckHeight,_),k=S-P/2+P-U;C=this.data,this.getWidthAt=e=function(a){return a>k||P===U?z:z+(L-z)*(1-(a-(S-P/2))/(P-U))},this.center=[j,S,P],this.centerX=j,C.forEach((function(b){m&&!1===b.visible||(a+=b.y)})),C.forEach((function(h){f=null,r=a?h.y/a:0,l=(o=S-P/2+g*P)+r*P,t=e(o),x=l-o,p={gradientForSides:y(h.options.gradientForSides,w.gradientForSides),x:j,y:o,height:x,width:t,z:1,top:{width:t}},t=e(l),p.bottom={fraction:r,width:t},o>=k?p.isCylinder=!0:l>k&&(f=l,t=e(k),l=k,p.bottom.width=t,p.middle={fraction:x?(k-o)/x:0,width:t}),v&&(p.y=o=S+P/2-(g+r)*P,p.middle&&(p.middle.fraction=1-(x?p.middle.fraction:0)),t=p.width,p.width=p.bottom.width,p.bottom.width=t),h.shapeArgs=c(h.shapeArgs,p),h.percentage=100*r,h.plotX=j,h.plotY=v?S+P/2-(g+r/2)*P:(o+(f||l))/2,n=d([{x:j,y:h.plotY,z:v?-(L-e(h.plotY))/2:-e(h.plotY)/2}],b,!0)[0],h.tooltipPos=[n.x,n.y],h.dlBoxRaw={x:j,width:e(h.plotY),y:o,bottom:p.height||0,fullWidth:L},m&&!1===h.visible||(g+=r)}))},b.compose=a.compose,b.defaultOptions=f(l.defaultOptions,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,gradientForSides:!0,animation:!1,edgeWidth:0,colorByPoint:!0,showInLegend:!1,dataLabels:{align:"right",crop:!1,inside:!1,overflow:"allow"}}),b}(l),c(e.prototype,{pointClass:t,translate3dShapes:q}),r.registerSeriesType("funnel3d",e),e})),q(a,"masters/modules/funnel3d.src.js",[a["Core/Renderer/RendererRegistry.js"],a["Series/Funnel3D/Funnel3DSeries.js"]],(function(a,t){return t.compose(a.getRendererType()),t}))},t.exports?(a.default=a,t.exports=a):(n=[r(137),r(398),r(258)],void 0===(o=function(q){return a(q),a.Highcharts=q,a}.apply(e,n))||(t.exports=o))},354:function(t,e,r){"use strict";var n,o,a;a=function(a){function b(a,t,b,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,b))}b(a=a?a._modules:{},"Series/Pyramid3D/Pyramid3DSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,b){var t=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function e(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),e=a.seriesTypes.funnel3d,r=b.merge;return b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return t(b,a),b.defaultOptions=r(e.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),b}(e),a.registerSeriesType("pyramid3d",b),b})),b(a,"masters/modules/pyramid3d.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[r(137),r(398),r(258),r(262)],void 0===(o=function(b){return a(b),a.Highcharts=b,a}.apply(e,n))||(t.exports=o))}}]);