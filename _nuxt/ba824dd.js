(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{260:function(o,t,e){"use strict";var n,r,l;l=function(o){function t(o,t,e,n){o.hasOwnProperty(t)||(o[t]=n.apply(null,e))}t(o=o?o._modules:{},"Series/NodesComposition.js",[o["Core/Series/Point.js"],o["Core/Series/Series.js"],o["Core/Utilities.js"]],(function(o,t,e){var a,n=e.defined,u=e.extend,r=e.find,l=e.pick;return function(a){function b(){return this.data=[].concat(this.points||[],this.nodes),t.prototype.destroy.apply(this,arguments)}function q(){this.nodes&&(this.nodes.forEach((function(b){b.destroy()})),this.nodes.length=0),t.prototype.setData.apply(this,arguments)}function e(b){var a=arguments,t=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==b&&t.forEach((function(b){b&&b.series&&(o.prototype.setState.apply(b,a),b.isNode||(b.fromNode.graphic&&o.prototype.setState.apply(b.fromNode,a),b.toNode&&b.toNode.graphic&&o.prototype.setState.apply(b.toNode,a)))})),o.prototype.setState.apply(this,a)}var d=[];a.compose=function(a,o){return-1===d.indexOf(a)&&(d.push(a),(a=a.prototype).setNodeState=e,a.setState=e),-1===d.indexOf(o)&&(d.push(o),(a=o.prototype).destroy=b,a.setData=q),o},a.createNode=function(b){var a=this.pointClass,o=function(b,a){return r(b,(function(b){return b.id===a}))},g=o(this.nodes,b);return g||(o=this.options.nodes&&o(this.options.nodes,b),(g=(new a).init(this,u({className:"highcharts-node",isNode:!0,id:b,y:1},o))).linksTo=[],g.linksFrom=[],g.formatPrefix="node",g.name=g.name||g.options.id||"",g.mass=l(g.options.mass,g.options.marker&&g.options.marker.radius,this.options.marker&&this.options.marker.radius,4),g.getSum=function(){var b=0,a=0;return g.linksTo.forEach((function(a){b+=a.weight})),g.linksFrom.forEach((function(b){a+=b.weight})),Math.max(b,a)},g.offset=function(b,a){for(var o=0,t=0;t<g[a].length;t++){if(g[a][t]===b)return o;o+=g[a][t].weight}},g.hasShape=function(){var b=0;return g.linksTo.forEach((function(a){a.outgoing&&b++})),!g.linksTo.length||b!==g.linksTo.length},this.nodes.push(g)),g},a.destroy=b,a.generatePoints=function(){var b=this.chart,a={};t.prototype.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(b){b.linksFrom.length=0,b.linksTo.length=0,b.level=b.options.level})),this.points.forEach((function(o){n(o.from)&&(a[o.from]||(a[o.from]=this.createNode(o.from)),a[o.from].linksFrom.push(o),o.fromNode=a[o.from],b.styledMode?o.colorIndex=l(o.options.colorIndex,a[o.from].colorIndex):o.color=o.options.color||a[o.from].color),n(o.to)&&(a[o.to]||(a[o.to]=this.createNode(o.to)),a[o.to].linksTo.push(o),o.toNode=a[o.to]),o.name=o.name||o.id}),this),this.nodeLookup=a},a.setNodeState=e}(a||(a={})),a})),t(o,"Series/Sankey/SankeyPoint.js",[o["Core/Series/Point.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(o,t,e){var n=this&&this.__extends||function(){var o=function(t,a){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var o in b)b.hasOwnProperty(o)&&(a[o]=b[o])},o(t,a)};return function(t,a){function e(){this.constructor=t}o(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}}(),u=e.defined;return function(t){function e(){var a=null!==t&&t.apply(this,arguments)||this;return a.className=void 0,a.fromNode=void 0,a.level=void 0,a.linkBase=void 0,a.linksFrom=void 0,a.linksTo=void 0,a.mass=void 0,a.nodeX=void 0,a.nodeY=void 0,a.options=void 0,a.series=void 0,a.toNode=void 0,a}return n(e,t),e.prototype.applyOptions=function(a,t){return o.prototype.applyOptions.call(this,a,t),u(this.options.level)&&(this.options.column=this.column=this.options.level),this},e.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+o.prototype.getClassName.call(this)},e.prototype.isValid=function(){return this.isNode||"number"==typeof this.weight},e}(t.seriesTypes.column.prototype.pointClass)})),t(o,"Series/TreeUtilities.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],(function(o,t){var e=t.extend,u=t.isArray,n=t.isNumber,r=t.isObject,a=t.merge,l=t.pick;return{getColor:function(b,a){var t,e=a.index,n=a.mapOptionsToLevel,q=a.parentColor,r=a.parentColorIndex,d=a.series,g=a.colors,h=a.siblings,c=d.points,f=d.chart.options.chart;if(b){if(c=c[b.i],b=n[b.level]||{},n=c&&b.colorByPoint)var v=c.index%(g?g.length:f.colorCount),m=g&&g[v];d.chart.styledMode||(g=c&&c.options.color,f=b&&b.color,(t=q)&&(t=(t=b&&b.colorVariation)&&"brightness"===t.key&&e&&h?o.parse(q).brighten(e/h*t.to).get():q),t=l(g,f,m,t,d.color));var y=l(c&&c.options.colorIndex,b&&b.colorIndex,v,r,a.colorIndex)}return{color:t,colorIndex:y}},getLevelOptions:function(b){var o=null;if(r(b)){o={};var t=n(b.from)?b.from:1,e=b.levels,d={},h=r(b.defaults)?b.defaults:{};for(u(e)&&(d=e.reduce((function(b,o){if(r(o)&&n(o.level)){var e=a({},o),g=l(e.levelIsConstant,h.levelIsConstant);delete e.levelIsConstant,delete e.level,o=o.level+(g?0:t-1),r(b[o])?a(!0,b[o],e):b[o]=e}return b}),{})),e=n(b.to)?b.to:1,b=0;b<=e;b++)o[b]=a({},h,r(d[b])?d[b]:{})}return o},setTreeValues:function o(b,a){var t=a.before,n=a.idRoot,r=a.mapIdToNode[n],q=a.points[b.i],d=q&&q.options||{},g=[],h=0;return b.levelDynamic=b.level-(!1!==a.levelIsConstant?0:r.level),b.name=l(q&&q.name,""),b.visible=n===b.id||!0===a.visible,"function"==typeof t&&(b=t(b,a)),b.children.forEach((function(t,n){var r=e({},a);e(r,{index:n,siblings:b.children.length,visible:b.visible}),t=o(t,r),g.push(t),t.visible&&(h+=t.val)})),t=l(d.value,h),b.visible=0<=t&&(0<h||b.visible),b.children=g,b.childrenTotal=h,b.isLeaf=b.visible&&!h,b.val=t,b},updateRootId:function(b){if(r(b)){var a=r(b.options)?b.options:{};a=l(b.rootNode,a.rootId,""),r(b.userOptions)&&(b.userOptions.rootId=a),b.rootNode=a}return a}}})),t(o,"Series/Sankey/SankeySeries.js",[o["Core/Color/Color.js"],o["Core/Globals.js"],o["Series/NodesComposition.js"],o["Series/Sankey/SankeyPoint.js"],o["Core/Series/SeriesRegistry.js"],o["Series/TreeUtilities.js"],o["Core/Utilities.js"]],(function(o,t,e,n,r,l,d){var a=this&&this.__extends||function(){var b=function(a,o){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,b){o.__proto__=b}||function(o,b){for(var a in b)b.hasOwnProperty(a)&&(o[a]=b[a])},b(a,o)};return function(a,o){function t(){this.constructor=a}b(a,o),a.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}(),h=r.series,b=r.seriesTypes.column,q=l.getLevelOptions,u=d.defined;l=d.extend;var c=d.find,f=d.isObject,v=d.merge,m=d.pick,g=d.relativeLength,y=d.stableSort;return d=function(t){function n(){var b=null!==t&&t.apply(this,arguments)||this;return b.colDistance=void 0,b.data=void 0,b.group=void 0,b.nodeLookup=void 0,b.nodePadding=void 0,b.nodes=void 0,b.nodeWidth=void 0,b.options=void 0,b.points=void 0,b.translationFactor=void 0,b}return a(n,t),n.getDLOptions=function(b){var a=f(b.optionsPoint)?b.optionsPoint.dataLabels:{};return b=f(b.level)?b.level.dataLabels:{},v({style:{}},b,a)},n.prototype.createNodeColumn=function(){var b=this,a=this.chart,o=[];return o.sum=function(){return this.reduce((function(b,a){return b+a.getSum()}),0)},o.offset=function(t,e){for(var n,r=0,l=b.nodePadding,p=0;p<o.length;p++){n=o[p].getSum();var d=Math.max(n*e,b.options.minLinkWidth),h=t.options[a.inverted?"offsetHorizontal":"offsetVertical"],c=t.options.offset||0;if(n=n?d+l:0,o[p]===t)return{relativeTop:r+(u(h)?g(h,d):g(c,n))};r+=n}},o.top=function(o){var t=b.nodePadding,e=this.reduce((function(a,e){return 0<a&&(a+=t),a+(e=Math.max(e.getSum()*o,b.options.minLinkWidth))}),0);return(a.plotSizeY-e)/2},o},n.prototype.createNodeColumns=function(){var b=[];this.nodes.forEach((function(a){var o=-1;if(!u(a.options.column))if(0===a.linksTo.length)a.column=0;else{for(var t=0;t<a.linksTo.length;t++){var e=a.linksTo[t];if(e.fromNode.column>o&&e.fromNode!==a){var n=e.fromNode;o=n.column}}if(a.column=o+1,n&&"hanging"===n.options.layout){a.hangsFrom=n;var r=-1;c(n.linksFrom,(function(b,o){return(b=b.toNode===a)&&(r=o),b})),a.column+=r}}b[a.column]||(b[a.column]=this.createNodeColumn()),b[a.column].push(a)}),this);for(var a=0;a<b.length;a++)void 0===b[a]&&(b[a]=this.createNodeColumn());return b},n.prototype.generatePoints=function(){function b(a,o){void 0===a.level&&(a.level=o,a.linksFrom.forEach((function(a){a.toNode&&b(a.toNode,o+1)})))}e.generatePoints.apply(this,arguments),this.orderNodes&&(this.nodes.filter((function(b){return 0===b.linksTo.length})).forEach((function(a){b(a,0)})),y(this.nodes,(function(b,a){return b.level-a.level})))},n.prototype.getNodePadding=function(){var b=this.options.nodePadding||0;if(this.nodeColumns){var a=this.nodeColumns.reduce((function(b,a){return Math.max(b,a.length)}),0);a*b>this.chart.plotSizeY&&(b=this.chart.plotSizeY/a)}return b},n.prototype.hasData=function(){return!!this.processedXData.length},n.prototype.pointAttribs=function(b,a){if(!b)return{};var t=this,e=t.mapOptionsToLevel[(b.isNode?b.level:b.fromNode.level)||0]||{},n=b.options,g=e.states&&e.states[a||""]||{};a=["colorByPoint","borderColor","borderWidth","linkOpacity"].reduce((function(b,a){return b[a]=m(g[a],n[a],e[a],t.options[a]),b}),{});var r=m(g.color,n.color,a.colorByPoint?b.color:e.color);return b.isNode?{fill:r,stroke:a.borderColor,"stroke-width":a.borderWidth}:{fill:o.parse(r).setOpacity(a.linkOpacity).get()}},n.prototype.render=function(){var a=this.points;this.points=this.points.concat(this.nodes||[]),b.prototype.render.call(this),this.points=a},n.prototype.translate=function(){var b=this,a=function(a){for(var g,n,r=a.slice(),l=b.options.minLinkWidth||0,d=0,h=t.plotSizeY-e.borderWidth-(a.length-1)*o.nodePadding;a.length;){for(d=h/a.sum(),g=!1,n=a.length;n--;)a[n].getSum()*d<l&&(a.splice(n,1),h-=l,g=!0);if(!g)break}return a.length=0,r.forEach((function(b){return a.push(b)})),d};this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=g(this.options.nodeWidth,this.chart.plotSizeX);var o=this,t=this.chart,e=this.options,n=this.nodeWidth,r=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=r.reduce((function(b,o){return Math.min(b,a(o))}),1/0),this.colDistance=(t.plotSizeX-n-e.borderWidth)/Math.max(1,r.length-1),o.mapOptionsToLevel=q({from:1,levels:e.levels,to:r.length-1,defaults:{borderColor:e.borderColor,borderRadius:e.borderRadius,borderWidth:e.borderWidth,color:o.color,colorByPoint:e.colorByPoint,levelIsConstant:!0,linkColor:e.linkColor,linkLineWidth:e.linkLineWidth,linkOpacity:e.linkOpacity,states:e.states}}),r.forEach((function(a){a.forEach((function(b){o.translateNode(b,a)}))}),this),this.nodes.forEach((function(a){a.linksFrom.forEach((function(a){(a.weight||a.isNull)&&a.to&&(o.translateLink(a),a.allowShadow=!1)}))}))},n.prototype.translateLink=function(a){var b=function(b,o){return o=b.offset(a,o)*n,Math.min(b.nodeY+o,b.nodeY+(b.shapeArgs&&b.shapeArgs.height||0)-r)},o=a.fromNode,t=a.toNode,e=this.chart,n=this.translationFactor,r=Math.max(a.weight*n,this.options.minLinkWidth),g=(e.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,p=b(o,"linksFrom");b=b(t,"linksTo");var l=o.nodeX,d=this.nodeWidth;t=t.nodeX;var h=a.outgoing,c=t>l+d;if(e.inverted&&(p=e.plotSizeY-p,b=(e.plotSizeY||0)-b,d=-d,r=-r,c=l>t),a.shapeType="path",a.linkBase=[p,p+r,b,b+r],c&&"number"==typeof b)a.shapeArgs={d:[["M",l+d,p],["C",l+d+g,p,t-g,b,t,b],["L",t+(h?d:0),b+r/2],["L",t,b+r],["C",t-g,b+r,l+d+g,p+r,l+d,p+r],["Z"]]};else if("number"==typeof b){g=t-20-r,h=t-20;var q=(c=l+d)+20,f=q+r,v=p,u=p+r,m=u+20,y=m+(e.plotHeight-p-r),k=y+20,C=k+r,N=b,S=N+r,x=S+20,O=k+.7*r,P=t-.7*r,L=c+.7*r;a.shapeArgs={d:[["M",c,v],["C",L,v,f,u-.7*r,f,m],["L",f,y],["C",f,O,L,C,c,C],["L",t,C],["C",P,C,g,O,g,y],["L",g,x],["C",g,S-.7*r,P,N,t,N],["L",t,S],["C",h,S,h,S,h,x],["L",h,y],["C",h,k,h,k,t,k],["L",c,k],["C",q,k,q,k,q,y],["L",q,m],["C",q,u,q,u,c,u],["Z"]]}}a.dlBox={x:l+(t-l+d)/2,y:p+(b-p)/2,height:r,width:0},a.tooltipPos=e.inverted?[e.plotSizeY-a.dlBox.y-r/2,e.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+r/2],a.y=a.plotY=1,a.color||(a.color=o.color)},n.prototype.translateNode=function(a,b){var o=this.translationFactor,t=this.chart,e=this.options,r=a.getSum(),l=Math.max(Math.round(r*o),this.options.minLinkWidth),d=Math.round(this.nodeWidth),p=Math.round(e.borderWidth)%2/2,h=b.offset(a,o);if(b=Math.floor(m(h.absoluteTop,b.top(o)+h.relativeTop))+p,p=Math.floor(this.colDistance*a.column+e.borderWidth/2)+g(a.options.offsetHorizontal||0,d)+p,p=t.inverted?t.plotSizeX-p:p,a.sum=r){a.shapeType="rect",a.nodeX=p,a.nodeY=b,r=p,o=b,h=a.options.width||e.width||d;var q=a.options.height||e.height||l;t.inverted&&(r=p-d,o=t.plotSizeY-b-l,h=a.options.height||e.height||d,q=a.options.width||e.width||l),a.dlOptions=n.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotX=1,a.plotY=1,a.tooltipPos=t.inverted?[t.plotSizeY-o-q/2,t.plotSizeX-r-h/2]:[r+h/2,o+q/2],a.shapeArgs={x:r,y:o,width:h,height:q,display:a.hasShape()?"":"none"}}else a.dlOptions={enabled:!1}},n.defaultOptions=v(b.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}),n}(b),e.compose(n,d),l(d.prototype,{animate:h.prototype.animate,createNode:e.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to"],pointClass:n,searchPoint:t.noop}),r.registerSeriesType("sankey",d),d})),t(o,"masters/modules/sankey.src.js",[],(function(){}))},o.exports?(l.default=l,o.exports=l):(n=[e(137)],void 0===(r=function(o){return l(o),l.Highcharts=o,l}.apply(t,n))||(o.exports=r))}}]);