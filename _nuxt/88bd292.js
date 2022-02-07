(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{395:function(t,e,o){"use strict";var n,r,l;l=function(t){function e(t,e,o,g){t.hasOwnProperty(e)||(t[e]=g.apply(null,o))}e(t=t?t._modules:{},"Series/DrawPointComposition.js",[],(function(){var t;return function(t){function e(t){var e=this,o=t.animatableAttribs,g=t.onComplete,n=t.css,r=t.renderer,l=this.series&&this.series.chart.hasRendered?void 0:this.series&&this.series.options.animation,c=this.graphic;if(t.attribs=t.attribs||{},t.attribs.class=this.getClassName(),this.shouldDraw())c||(this.graphic=c=r[t.shapeType](t.shapeArgs).add(t.group)),c.css(n).attr(t.attribs).animate(o,!t.isNew&&l,g);else if(c){var h=function(){e.graphic=c=c&&c.destroy(),"function"==typeof g&&g()};Object.keys(o).length?c.animate(o,void 0,(function(){h()})):h()}}function g(){return!this.isNull}var o=[];t.compose=function(t){if(-1===o.indexOf(t)){o.push(t);var n=t.prototype;n.draw=e,n.shouldDraw||(n.shouldDraw=g)}return t}}(t||(t={})),t})),e(t,"Series/Wordcloud/WordcloudPoint.js",[t["Series/DrawPointComposition.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,e,o){var g=this&&this.__extends||function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},t(e,o)};return function(e,o){function g(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(g.prototype=o.prototype,new g)}}();return o=o.extend,e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dimensions=void 0,e.options=void 0,e.polygon=void 0,e.rect=void 0,e.series=void 0,e}return g(e,t),e.prototype.isValid=function(){return!0},e}(e.seriesTypes.column.prototype.pointClass),o(e.prototype,{weight:1}),t.compose(e),e})),e(t,"Series/Wordcloud/WordcloudUtils.js",[t["Core/Globals.js"],t["Core/Utilities.js"]],(function(t,e){function o(b,a){return!(a.left>b.right||a.right<b.left||a.top>b.bottom||a.bottom<b.top)}function n(b){var a=b.axes||[];if(!a.length){a=[];var t=t=b.concat([b[0]]);t.reduce((function(b,t){var e=function(b,a){var t=a[0]-b[0];return[[-(b=a[1]-b[1]),t],[b,-t]]}(b,t)[0];return S(a,(function(a){return a[0]===e[0]&&a[1]===e[1]}))||a.push(e),t})),b.axes=a}return a}function r(b,a){return b=b.map((function(b){return b[0]*a[0]+b[1]*a[1]})),{min:Math.min.apply(this,b),max:Math.max.apply(this,b)}}function l(b,a){var t=n(b),e=n(a);return t=t.concat(e),!S(t,(function(t){var e=r(b,t);return!!((t=r(a,t)).min>e.max||t.max<e.min)}))}function c(b,a){var t=!1,e=b.rect,n=b.polygon,r=b.lastCollidedWith,g=function(a){var t=o(e,a.rect);return t&&(b.rotation%90||a.rotation%90)&&(t=l(n,a.polygon)),t};return r&&((t=g(r))||delete b.lastCollidedWith),t||(t=!!S(a,(function(a){var t=g(a);return t&&(b.lastCollidedWith=a),t}))),t}function h(b,a){a=4*b;var t=Math.ceil((Math.sqrt(a)-1)/2),e=2*t+1,o=Math.pow(e,2),n=!1;return--e,1e4>=b&&("boolean"==typeof n&&a>=o-e&&(n={x:t-(o-a),y:-t}),o-=e,"boolean"==typeof n&&a>=o-e&&(n={x:-t,y:o-a-t}),o-=e,"boolean"==typeof n&&(n=a>=o-e?{x:o-a-t,y:t}:{x:t,y:t-(o-a-e)}),n.x*=5,n.y*=5),n}function d(b,a){var t=a.width/2,e=-a.height/2,o=a.height/2;return!(-a.width/2<b.left&&t>b.right&&e<b.top&&o>b.bottom)}function f(b,a,t){return t.map((function(t){return[t[0]+b,t[1]+a]}))}function m(b,a){return a=p(a)?a:14,a=Math.pow(10,a),Math.round(b*a)/a}function y(b,a){var t=b[0];b=b[1];var e=v*-a;return[m(t*(a=Math.cos(e))-b*(e=Math.sin(e))),m(t*e+b*a)]}function x(b,a,t){return[(b=y([b[0]-a[0],b[1]-a[1]],t))[0]+a[0],b[1]+a[1]]}var v=t.deg2rad,w=e.extend,S=e.find,p=e.isNumber,q=e.isObject,M=e.merge;return{archimedeanSpiral:function(b,a){var t=a.field;a=!1,t=t.width*t.width+t.height*t.height;var e=.8*b;return 1e4>=b&&(a={x:e*Math.cos(e),y:e*Math.sin(e)},Math.min(Math.abs(a.x),Math.abs(a.y))<t||(a=!1)),a},extendPlayingField:function(b,a){if(q(b)&&q(a)){var t=a.bottom-a.top,e=a.right-a.left;a=b.ratioX;var o=b.ratioY;t=e*a>t*o?e:t,b=M(b,{width:b.width+t*a*2,height:b.height+t*o*2})}return b},getBoundingBoxFromPolygon:function(b){return b.reduce((function(a,b){var t=b[0];return b=b[1],a.left=Math.min(t,a.left),a.right=Math.max(t,a.right),a.bottom=Math.max(b,a.bottom),a.top=Math.min(b,a.top),a}),{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(b,a,t){t=t.reduce((function(a,b){b=b.dimensions;var t=Math.max(b.width,b.height);return a.maxHeight=Math.max(a.maxHeight,b.height),a.maxWidth=Math.max(a.maxWidth,b.width),a.area+=t*t,a}),{maxHeight:0,maxWidth:0,area:0});var e=b>a?b/a:1;return{width:(t=Math.max(t.maxHeight,t.maxWidth,.85*Math.sqrt(t.area)))*e,height:t*(b=a>b?a/b:1),ratioX:e,ratioY:b}},getPolygon:function(b,a,t,e,o){var n=[b,a],g=b-t/2;return b+=t/2,[[g,t=a-e/2],[b,t],[b,a+=e/2],[g,a]].map((function(a){return x(a,n,-o)}))},getRandomPosition:function(b){return Math.round(b*(Math.random()+.5)/2)},getRotation:function(b,a,t,e){var o=!1;return p(b)&&p(a)&&p(t)&&p(e)&&0<b&&-1<a&&e>t&&(o=t+a%b*((e-t)/(b-1||1))),o},getScale:function(b,a,t){var e=2*Math.max(Math.abs(t.top),Math.abs(t.bottom));return t=2*Math.max(Math.abs(t.left),Math.abs(t.right)),Math.min(0<t?1/t*b:1,0<e?1/e*a:1)},getSpiral:function(b,a){var t,e=[];for(t=1;1e4>t;t++)e.push(b(t,a));return function(a){return 1e4>=a&&e[a-1]}},intersectionTesting:function(b,a){var t=a.placed,e=a.field,o=a.rectangle,g=a.polygon,n=a.spiral,r=1,l={x:0,y:0},h=b.rect=w({},o);for(b.polygon=g,b.rotation=a.rotation;!1!==l&&(c(b,t)||d(h,e));)l=n(r),q(l)&&(h.left=o.left+l.x,h.right=o.right+l.x,h.top=o.top+l.y,h.bottom=o.bottom+l.y,b.polygon=f(l.x,l.y,g)),r++;return l},isPolygonsColliding:l,isRectanglesIntersecting:o,rectangularSpiral:function(b,a){return b=h(b,a),a=a.field,b&&(b.x*=a.ratioX,b.y*=a.ratioY),b},rotate2DToOrigin:y,rotate2DToPoint:x,squareSpiral:h,updateFieldBoundaries:function(b,a){return(!p(b.left)||b.left>a.left)&&(b.left=a.left),(!p(b.right)||b.right<a.right)&&(b.right=a.right),(!p(b.top)||b.top>a.top)&&(b.top=a.top),(!p(b.bottom)||b.bottom<a.bottom)&&(b.bottom=a.bottom),b}}})),e(t,"Series/Wordcloud/WordcloudSeries.js",[t["Core/Globals.js"],t["Core/Series/Series.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"],t["Series/Wordcloud/WordcloudPoint.js"],t["Series/Wordcloud/WordcloudUtils.js"]],(function(t,e,o,g,n,r){var l=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function e(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),c=t.noop,h=o.seriesTypes.column,d=g.extend,f=g.isArray,m=g.isNumber,y=g.isObject,x=g.merge;g=r.archimedeanSpiral;var v=r.extendPlayingField,w=r.getBoundingBoxFromPolygon,S=r.getPlayingField,p=r.getPolygon,q=r.getRandomPosition,M=r.getRotation,b=r.getScale,a=r.getSpiral,P=r.intersectionTesting,A=r.isPolygonsColliding,_=r.rectangularSpiral,j=r.rotate2DToOrigin,F=r.rotate2DToPoint,W=r.squareSpiral,C=r.updateFieldBoundaries;return r=function(o){function g(){var a=null!==o&&o.apply(this,arguments)||this;return a.data=void 0,a.options=void 0,a.points=void 0,a}return l(g,o),g.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};e.prototype.bindAxes.call(this),d(this.yAxis.options,a),d(this.xAxis.options,a)},g.prototype.pointAttribs=function(a,b){return delete(a=t.seriesTypes.column.prototype.pointAttribs.call(this,a,b)).stroke,delete a["stroke-width"],a},g.prototype.deriveFontSize=function(a,b,t){return a=m(a)?a:0,b=m(b)?b:1,t=m(t)?t:1,Math.floor(Math.max(t,a*b))},g.prototype.drawPoints=function(){var t=this,e=t.hasRendered,o=t.xAxis,g=t.yAxis,n=t.group,r=t.options,l=r.animation,c=r.allowExtendPlayingField,h=t.chart.renderer,f=h.text().add(n),q=[],x=t.placementStrategy[r.placementStrategy],M=r.rotation,A=t.points.map((function(a){return a.weight})),_=Math.max.apply(null,A),j=t.points.concat().sort((function(a,b){return b.weight-a.weight}));t.group.attr({scaleX:1,scaleY:1}),j.forEach((function(a){var b=t.deriveFontSize(1/_*a.weight,r.maxFontSize,r.minFontSize);b=d({fontSize:b+"px"},r.style),f.css(b).attr({x:0,y:0,text:a.name}),b=f.getBBox(!0),a.dimensions={height:b.height,width:b.width}}));var F=S(o.len,g.len,j),W=a(t.spirals[r.spiral],{field:F});j.forEach((function(a){var b=t.deriveFontSize(1/_*a.weight,r.maxFontSize,r.minFontSize);b=d({fontSize:b+"px"},r.style);var o=x(a,{data:j,field:F,placed:q,rotation:M}),g=d(t.pointAttribs(a,a.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:o.x,y:o.y,text:a.name,rotation:m(o.rotation)?o.rotation:void 0}),f=p(o.x,o.y,a.dimensions.width,a.dimensions.height,o.rotation),S=w(f),u=P(a,{rectangle:S,polygon:f,field:F,placed:q,spiral:W,rotation:o.rotation});if(!u&&c&&(F=v(F,S),u=P(a,{rectangle:S,polygon:f,field:F,placed:q,spiral:W,rotation:o.rotation})),y(u)?(g.x=(g.x||0)+u.x,g.y=(g.y||0)+u.y,S.left+=u.x,S.right+=u.x,S.top+=u.y,S.bottom+=u.y,F=C(F,S),q.push(a),a.isNull=!1,a.isInside=!0):a.isNull=!0,l){var A={x:g.x,y:g.y};e?(delete g.x,delete g.y):(g.x=0,g.y=0)}a.draw({animatableAttribs:A,attribs:g,css:b,group:n,renderer:h,shapeArgs:void 0,shapeType:"text"})})),f=f.destroy(),o=b(o.len,g.len,F),t.group.attr({scaleX:o,scaleY:o})},g.prototype.hasData=function(){return y(this)&&!0===this.visible&&f(this.points)&&0<this.points.length},g.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,t=this[b?"yAxis":"xAxis"];return b=this[b?"xAxis":"yAxis"],{translateX:(t?t.left:a.plotLeft)+(t?t.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}},g.defaultOptions=x(h.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>'}}),g}(h),d(r.prototype,{animate:c,animateDrilldown:c,animateDrillupFrom:c,pointClass:n,setClip:c,placementStrategy:{random:function(a,b){var t=b.field;return b=b.rotation,{x:q(t.width)-t.width/2,y:q(t.height)-t.height/2,rotation:M(b.orientations,a.index,b.from,b.to)}},center:function(a,b){return b=b.rotation,{x:0,y:0,rotation:M(b.orientations,a.index,b.from,b.to)}}},pointArrayMap:["weight"],spirals:{archimedean:g,rectangular:_,square:W},utils:{extendPlayingField:v,getRotation:M,isPolygonsColliding:A,rotate2DToOrigin:j,rotate2DToPoint:F}}),o.registerSeriesType("wordcloud",r),r})),e(t,"masters/modules/wordcloud.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[o(140)],void 0===(r=function(t){return l(t),l.Highcharts=t,l}.apply(e,n))||(t.exports=r))}}]);