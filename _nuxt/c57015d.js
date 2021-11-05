(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{330:function(t,o,e){"use strict";var n,r,h;h=function(t){function o(t,a,o,e){t.hasOwnProperty(a)||(t[a]=e.apply(null,o))}o(t=t?t._modules:{},"Series/NodesComposition.js",[t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Utilities.js"]],(function(t,a,o){var e,n=o.defined,r=o.extend,h=o.find,p=o.pick;return function(o){function e(){return this.data=[].concat(this.points||[],this.nodes),a.prototype.destroy.apply(this,arguments)}function b(){this.nodes&&(this.nodes.forEach((function(b){b.destroy()})),this.nodes.length=0),a.prototype.setData.apply(this,arguments)}function d(b){var o=arguments,g=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==b&&g.forEach((function(b){b&&b.series&&(t.prototype.setState.apply(b,o),b.isNode||(b.fromNode.graphic&&t.prototype.setState.apply(b.fromNode,o),b.toNode&&b.toNode.graphic&&t.prototype.setState.apply(b.toNode,o)))})),t.prototype.setState.apply(this,o)}var u=[];o.compose=function(t,a){return-1===u.indexOf(t)&&(u.push(t),(t=t.prototype).setNodeState=d,t.setState=d),-1===u.indexOf(a)&&(u.push(a),(t=a.prototype).destroy=e,t.setData=b),a},o.createNode=function(b){var a=this.pointClass,g=function(b,g){return h(b,(function(b){return b.id===g}))},t=g(this.nodes,b);return t||(g=this.options.nodes&&g(this.options.nodes,b),(t=(new a).init(this,r({className:"highcharts-node",isNode:!0,id:b,y:1},g))).linksTo=[],t.linksFrom=[],t.formatPrefix="node",t.name=t.name||t.options.id||"",t.mass=p(t.options.mass,t.options.marker&&t.options.marker.radius,this.options.marker&&this.options.marker.radius,4),t.getSum=function(){var b=0,g=0;return t.linksTo.forEach((function(g){b+=g.weight})),t.linksFrom.forEach((function(b){g+=b.weight})),Math.max(b,g)},t.offset=function(b,g){for(var o=0,a=0;a<t[g].length;a++){if(t[g][a]===b)return o;o+=t[g][a].weight}},t.hasShape=function(){var b=0;return t.linksTo.forEach((function(g){g.outgoing&&b++})),!t.linksTo.length||b!==t.linksTo.length},this.nodes.push(t)),t},o.destroy=e,o.generatePoints=function(){var b=this.chart,t={};a.prototype.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(b){b.linksFrom.length=0,b.linksTo.length=0,b.level=b.options.level})),this.points.forEach((function(g){n(g.from)&&(t[g.from]||(t[g.from]=this.createNode(g.from)),t[g.from].linksFrom.push(g),g.fromNode=t[g.from],b.styledMode?g.colorIndex=p(g.options.colorIndex,t[g.from].colorIndex):g.color=g.options.color||t[g.from].color),n(g.to)&&(t[g.to]||(t[g.to]=this.createNode(g.to)),t[g.to].linksTo.push(g),g.toNode=t[g.to]),g.name=g.name||g.id}),this),this.nodeLookup=t},o.setNodeState=d}(e||(e={})),e})),o(t,"Series/Networkgraph/Integrations.js",[t["Core/Globals.js"]],(function(t){t.networkgraphIntegrations={verlet:{attractiveForceFunction:function(a,t){return(t-a)/a},repulsiveForceFunction:function(a,t){return(t-a)/a*(t>a?1:0)},barycenter:function(){var a=this.options.gravitationalConstant,t=this.barycenter.xFactor,o=this.barycenter.yFactor;t=(t-(this.box.left+this.box.width)/2)*a,o=(o-(this.box.top+this.box.height)/2)*a,this.nodes.forEach((function(e){e.fixedPosition||(e.plotX-=t/e.mass/e.degree,e.plotY-=o/e.mass/e.degree)}))},repulsive:function(a,t,o){t=t*this.diffTemperature/a.mass/a.degree,a.fixedPosition||(a.plotX+=o.x*t,a.plotY+=o.y*t)},attractive:function(a,t,o){var e=a.getMass(),n=-o.x*t*this.diffTemperature;t=-o.y*t*this.diffTemperature,a.fromNode.fixedPosition||(a.fromNode.plotX-=n*e.fromNode/a.fromNode.degree,a.fromNode.plotY-=t*e.fromNode/a.fromNode.degree),a.toNode.fixedPosition||(a.toNode.plotX+=n*e.toNode/a.toNode.degree,a.toNode.plotY+=t*e.toNode/a.toNode.degree)},integrate:function(a,t){var o=-a.options.friction,e=a.options.maxSpeed,n=(t.plotX+t.dispX-t.prevX)*o;o*=t.plotY+t.dispY-t.prevY;var r=Math.abs,h=r(n)/(n||1);r=r(o)/(o||1),n=h*Math.min(e,Math.abs(n)),o=r*Math.min(e,Math.abs(o)),t.prevX=t.plotX+t.dispX,t.prevY=t.plotY+t.dispY,t.plotX+=n,t.plotY+=o,t.temperature=a.vectorLength({x:n,y:o})},getK:function(a){return Math.pow(a.box.width*a.box.height/a.nodes.length,.5)}},euler:{attractiveForceFunction:function(a,t){return a*a/t},repulsiveForceFunction:function(a,t){return t*t/a},barycenter:function(){var a=this.options.gravitationalConstant,t=this.barycenter.xFactor,o=this.barycenter.yFactor;this.nodes.forEach((function(e){if(!e.fixedPosition){var n=e.getDegree();n*=1+n/2,e.dispX+=(t-e.plotX)*a*n/e.degree,e.dispY+=(o-e.plotY)*a*n/e.degree}}))},repulsive:function(a,t,o,e){a.dispX+=o.x/e*t/a.degree,a.dispY+=o.y/e*t/a.degree},attractive:function(a,t,o,e){var n=a.getMass(),r=o.x/e*t;t*=o.y/e,a.fromNode.fixedPosition||(a.fromNode.dispX-=r*n.fromNode/a.fromNode.degree,a.fromNode.dispY-=t*n.fromNode/a.fromNode.degree),a.toNode.fixedPosition||(a.toNode.dispX+=r*n.toNode/a.toNode.degree,a.toNode.dispY+=t*n.toNode/a.toNode.degree)},integrate:function(a,t){t.dispX+=t.dispX*a.options.friction,t.dispY+=t.dispY*a.options.friction;var o=t.temperature=a.vectorLength({x:t.dispX,y:t.dispY});0!==o&&(t.plotX+=t.dispX/o*Math.min(Math.abs(t.dispX),a.temperature),t.plotY+=t.dispY/o*Math.min(Math.abs(t.dispY),a.temperature))},getK:function(a){return Math.pow(a.box.width*a.box.height/a.nodes.length,.3)}}}})),o(t,"Series/Networkgraph/QuadTree.js",[t["Core/Globals.js"],t["Core/Utilities.js"]],(function(t,a){a=a.extend;var o=t.QuadTreeNode=function(a){this.box=a,this.boxSize=Math.min(a.width,a.height),this.nodes=[],this.body=this.isInternal=!1,this.isEmpty=!0};a(o.prototype,{insert:function(a,t){this.isInternal?this.nodes[this.getBoxPosition(a)].insert(a,t-1):(this.isEmpty=!1,this.body?t?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,t-1),this.body=!0),this.nodes[this.getBoxPosition(a)].insert(a,t-1)):((t=new o({top:a.plotX,left:a.plotY,width:.1,height:.1})).body=a,t.isInternal=!1,this.nodes.push(t)):(this.isInternal=!1,this.body=a))},updateMassAndCenter:function(){var a=0,t=0,o=0;this.isInternal?(this.nodes.forEach((function(e){e.isEmpty||(a+=e.mass,t+=e.plotX*e.mass,o+=e.plotY*e.mass)})),t/=a,o/=a):this.body&&(a=this.body.mass,t=this.body.plotX,o=this.body.plotY),this.mass=a,this.plotX=t,this.plotY=o},divideBox:function(){var a=this.box.width/2,t=this.box.height/2;this.nodes[0]=new o({left:this.box.left,top:this.box.top,width:a,height:t}),this.nodes[1]=new o({left:this.box.left+a,top:this.box.top,width:a,height:t}),this.nodes[2]=new o({left:this.box.left+a,top:this.box.top+t,width:a,height:t}),this.nodes[3]=new o({left:this.box.left,top:this.box.top+t,width:a,height:t})},getBoxPosition:function(a){var t=a.plotY<this.box.top+this.box.height/2;return a.plotX<this.box.left+this.box.width/2?t?0:3:t?1:2}}),t=t.QuadTree=function(a,t,e,p){this.box={left:a,top:t,width:e,height:p},this.maxDepth=25,this.root=new o(this.box,"0"),this.root.isInternal=!0,this.root.isRoot=!0,this.root.divideBox()},a(t.prototype,{insertNodes:function(a){a.forEach((function(a){this.root.insert(a,this.maxDepth)}),this)},visitNodeRecursive:function(a,t,o){var e;a||(a=this.root),a===this.root&&t&&(e=t(a)),!1!==e&&(a.nodes.forEach((function(a){if(a.isInternal){if(t&&(e=t(a)),!1===e)return;this.visitNodeRecursive(a,t,o)}else a.body&&t&&t(a.body);o&&o(a)}),this),a===this.root&&o&&o(a))},calculateMassAndCenter:function(){this.visitNodeRecursive(null,null,(function(a){a.updateMassAndCenter()}))}})})),o(t,"Series/Networkgraph/Layouts.js",[t["Core/Chart/Chart.js"],t["Core/Animation/AnimationUtilities.js"],t["Core/Globals.js"],t["Core/Utilities.js"]],(function(t,a,o,e){var n=a.setAnimation;a=e.addEvent;var r=e.clamp,p=e.defined,h=e.extend,d=e.isFunction,c=e.pick;o.layouts={"reingold-fruchterman":function(){}},h(o.layouts["reingold-fruchterman"].prototype,{init:function(b){this.options=b,this.nodes=[],this.links=[],this.series=[],this.box={x:0,y:0,width:0,height:0},this.setInitialRendering(!0),this.integration=o.networkgraphIntegrations[b.integration],this.enableSimulation=b.enableSimulation,this.attractiveForce=c(b.attractiveForce,this.integration.attractiveForceFunction),this.repulsiveForce=c(b.repulsiveForce,this.integration.repulsiveForceFunction),this.approximation=b.approximation},updateSimulation:function(b){this.enableSimulation=c(b,this.options.enableSimulation)},start:function(){var b=this.series,a=this.options;this.currentStep=0,this.forces=b[0]&&b[0].forces||[],this.chart=b[0]&&b[0].chart,this.initialRendering&&(this.initPositions(),b.forEach((function(b){b.finishedAnimating=!0,b.render()}))),this.setK(),this.resetSimulation(a),this.enableSimulation&&this.step()},step:function(){var b=this,a=this.series;b.currentStep++,"barnes-hut"===b.approximation&&(b.createQuadTree(),b.quadTree.calculateMassAndCenter()),b.forces.forEach((function(a){b[a+"Forces"](b.temperature)})),b.applyLimits(b.temperature),b.temperature=b.coolDown(b.startTemperature,b.diffTemperature,b.currentStep),b.prevSystemTemperature=b.systemTemperature,b.systemTemperature=b.getSystemTemperature(),b.enableSimulation&&(a.forEach((function(b){b.chart&&b.render()})),b.maxIterations--&&isFinite(b.temperature)&&!b.isStable()?(b.simulation&&o.win.cancelAnimationFrame(b.simulation),b.simulation=o.win.requestAnimationFrame((function(){b.step()}))):b.simulation=!1)},stop:function(){this.simulation&&o.win.cancelAnimationFrame(this.simulation)},setArea:function(b,a,t,o){this.box={left:b,top:a,width:t,height:o}},setK:function(){this.k=this.options.linkLength||this.integration.getK(this)},addElementsToCollection:function(b,a){b.forEach((function(b){-1===a.indexOf(b)&&a.push(b)}))},removeElementFromCollection:function(b,a){-1!==(b=a.indexOf(b))&&a.splice(b,1)},clear:function(){this.nodes.length=0,this.links.length=0,this.series.length=0,this.resetSimulation()},resetSimulation:function(){this.forcedStop=!1,this.systemTemperature=0,this.setMaxIterations(),this.setTemperature(),this.setDiffTemperature()},restartSimulation:function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))},setMaxIterations:function(b){this.maxIterations=c(b,this.options.maxIterations)},setTemperature:function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},setDiffTemperature:function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)},setInitialRendering:function(b){this.initialRendering=b},createQuadTree:function(){this.quadTree=new o.QuadTree(this.box.left,this.box.top,this.box.width,this.box.height),this.quadTree.insertNodes(this.nodes)},initPositions:function(){var b=this.options.initialPositions;d(b)?(b.call(this),this.nodes.forEach((function(b){p(b.prevX)||(b.prevX=b.plotX),p(b.prevY)||(b.prevY=b.plotY),b.dispX=0,b.dispY=0}))):"circle"===b?this.setCircularPositions():this.setRandomPositions()},setCircularPositions:function(){function b(a){a.linksFrom.forEach((function(a){n[a.toNode.id]||(n[a.toNode.id]=!0,g.push(a.toNode),b(a.toNode))}))}var a=this.box,t=this.nodes,o=2*Math.PI/(t.length+1),e=t.filter((function(b){return 0===b.linksTo.length})),g=[],n={},r=this.options.initialPositionRadius;e.forEach((function(a){g.push(a),b(a)})),g.length?t.forEach((function(b){-1===g.indexOf(b)&&g.push(b)})):g=t,g.forEach((function(b,g){b.plotX=b.prevX=c(b.plotX,a.width/2+r*Math.cos(g*o)),b.plotY=b.prevY=c(b.plotY,a.height/2+r*Math.sin(g*o)),b.dispX=0,b.dispY=0}))},setRandomPositions:function(){function b(b){return(b=b*b/Math.PI)-Math.floor(b)}var a=this.box,t=this.nodes,o=t.length+1;t.forEach((function(t,g){t.plotX=t.prevX=c(t.plotX,a.width*b(g)),t.plotY=t.prevY=c(t.plotY,a.height*b(o+g)),t.dispX=0,t.dispY=0}))},force:function(b){this.integration[b].apply(this,Array.prototype.slice.call(arguments,1))},barycenterForces:function(){this.getBarycenter(),this.force("barycenter")},getBarycenter:function(){var b=0,a=0,t=0;return this.nodes.forEach((function(o){a+=o.plotX*o.mass,t+=o.plotY*o.mass,b+=o.mass})),this.barycenter={x:a,y:t,xFactor:a/b,yFactor:t/b}},barnesHutApproximation:function(b,a){var t=this.getDistXY(b,a),o=this.vectorLength(t);if(b!==a&&0!==o)if(a.isInternal)if(a.boxSize/o<this.options.theta&&0!==o){var e=this.repulsiveForce(o,this.k);this.force("repulsive",b,e*a.mass,t,o);var g=!1}else g=!0;else e=this.repulsiveForce(o,this.k),this.force("repulsive",b,e*a.mass,t,o);return g},repulsiveForces:function(){var b=this;"barnes-hut"===b.approximation?b.nodes.forEach((function(a){b.quadTree.visitNodeRecursive(null,(function(t){return b.barnesHutApproximation(a,t)}))})):b.nodes.forEach((function(a){b.nodes.forEach((function(t){if(a!==t&&!a.fixedPosition){var o=b.getDistXY(a,t),e=b.vectorLength(o);if(0!==e){var g=b.repulsiveForce(e,b.k);b.force("repulsive",a,g*t.mass,o,e)}}}))}))},attractiveForces:function(){var a,t,o,b=this;b.links.forEach((function(e){e.fromNode&&e.toNode&&(a=b.getDistXY(e.fromNode,e.toNode),0!==(t=b.vectorLength(a))&&(o=b.attractiveForce(t,b.k),b.force("attractive",e,o,a,t)))}))},applyLimits:function(){var a=this;a.nodes.forEach((function(b){b.fixedPosition||(a.integration.integrate(a,b),a.applyLimitBox(b,a.box),b.dispX=0,b.dispY=0)}))},applyLimitBox:function(a,t){var b=a.radius;a.plotX=r(a.plotX,t.left+b,t.width-b),a.plotY=r(a.plotY,t.top+b,t.height-b)},coolDown:function(a,t,o){return a-t*o},isStable:function(){return 1e-5>Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature},getSystemTemperature:function(){return this.nodes.reduce((function(a,t){return a+t.temperature}),0)},vectorLength:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},getDistR:function(a,t){return a=this.getDistXY(a,t),this.vectorLength(a)},getDistXY:function(a,t){var b=a.plotX-t.plotX;return{x:b,y:a=a.plotY-t.plotY,absX:Math.abs(b),absY:Math.abs(a)}}}),a(t,"predraw",(function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach((function(a){a.stop()}))})),a(t,"render",(function(){function a(a){a.maxIterations--&&isFinite(a.temperature)&&!a.isStable()&&!a.enableSimulation&&(a.beforeStep&&a.beforeStep(),a.step(),o=!1,t=!0)}var t=!1;if(this.graphLayoutsLookup){for(n(!1,this),this.graphLayoutsLookup.forEach((function(a){a.start()}));!o;){var o=!0;this.graphLayoutsLookup.forEach(a)}t&&this.series.forEach((function(a){a&&a.layout&&a.render()}))}})),a(t,"beforePrint",(function(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach((function(a){a.updateSimulation(!1)})),this.redraw())})),a(t,"afterPrint",(function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach((function(a){a.updateSimulation()})),this.redraw()}))})),o(t,"Series/Networkgraph/DraggableNodes.js",[t["Core/Chart/Chart.js"],t["Core/Globals.js"],t["Core/Utilities.js"]],(function(t,a,o){var e=o.addEvent;a.dragNodesMixin={onMouseDown:function(a,t){t=this.chart.pointer.normalize(t),a.fixedPosition={chartX:t.chartX,chartY:t.chartY,plotX:a.plotX,plotY:a.plotY},a.inDragMode=!0},onMouseMove:function(a,t){if(a.fixedPosition&&a.inDragMode){var o=this.chart,e=o.pointer.normalize(t);t=a.fixedPosition.chartX-e.chartX,e=a.fixedPosition.chartY-e.chartY;var n=void 0,r=void 0,b=o.graphLayoutsLookup;(5<Math.abs(t)||5<Math.abs(e))&&(n=a.fixedPosition.plotX-t,r=a.fixedPosition.plotY-e,o.isInsidePlot(n,r)&&(a.plotX=n,a.plotY=r,a.hasDragged=!0,this.redrawHalo(a),b.forEach((function(a){a.restartSimulation()}))))}},onMouseUp:function(a,t){a.fixedPosition&&(a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}},e(t,"load",(function(){var t,o,n,a=this;a.container&&(t=e(a.container,"mousedown",(function(t){var r=a.hoverPoint;r&&r.series&&r.series.hasDraggableNodes&&r.series.options.draggable&&(r.series.onMouseDown(r,t),o=e(a.container,"mousemove",(function(a){return r&&r.series&&r.series.onMouseMove(r,a)})),n=e(a.container.ownerDocument,"mouseup",(function(a){return o(),n(),r&&r.series&&r.series.onMouseUp(r,a)})))}))),e(a,"destroy",(function(){t()}))}))})),o(t,"Series/Networkgraph/Networkgraph.js",[t["Core/Globals.js"],t["Series/NodesComposition.js"],t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,a,o,e,n,r){var h=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function o(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),d=n.seriesTypes,c=r.addEvent,l=r.css,b=r.defined,f=r.extend,u=r.merge,m=r.pick,q=t.dragNodesMixin;return r=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.nodes=void 0,b.options=void 0,b.points=void 0,b}return h(b,a),b.defaultOptions=u(e.defaultOptions,{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return this.key},linkFormatter:function(){return this.point.fromNode.name+"<br>"+this.point.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1e3,gravitationalConstant:.0625,friction:-.981},showInLegend:!1}),b}(e),f(r.prototype,{forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,drawGraph:void 0,isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,pointArrayMap:["from","to"],trackerGroups:["group","markerGroup","dataLabelsGroup"],drawTracker:d.column.prototype.drawTracker,animate:void 0,buildKDTree:t.noop,createNode:a.createNode,destroy:function(){this.layout&&this.layout.removeElementFromCollection(this,this.layout.series),a.destroy.call(this)},init:function(){var a=this;return e.prototype.init.apply(this,arguments),c(this,"updatedData",(function(){a.layout&&a.layout.stop()})),c(this,"afterUpdate",(function(){a.nodes.forEach((function(a){a&&a.series&&a.resolveColor()}))})),this},generatePoints:function(){var b;for(a.generatePoints.apply(this,arguments),this.options.nodes&&this.options.nodes.forEach((function(a){this.nodeLookup[a.id]||(this.nodeLookup[a.id]=this.createNode(a.id))}),this),b=this.nodes.length-1;0<=b;b--){var t=this.nodes[b];t.degree=t.getDegree(),t.radius=m(t.marker&&t.marker.radius,this.options.marker&&this.options.marker.radius,0),this.nodeLookup[t.id]||t.remove()}this.data.forEach((function(a){a.formatPrefix="link"})),this.indexateNodes()},getPointsCollection:function(){return this.nodes||[]},indexateNodes:function(){this.nodes.forEach((function(a,b){a.index=b}))},markerAttribs:function(a,t){return t=e.prototype.markerAttribs.call(this,a,t),b(a.plotY)||(t.y=0),t.x=(a.plotX||0)-(t.width||0)/2,t},translate:function(){this.processedXData||this.processData(),this.generatePoints(),this.deferLayout(),this.nodes.forEach((function(a){a.isInside=!0,a.linksFrom.forEach((function(a){a.shapeType="path",a.y=1}))}))},deferLayout:function(){var a=this.options.layoutAlgorithm,o=this.chart.graphLayoutsStorage,e=this.chart.graphLayoutsLookup,n=this.chart.options.chart;if(this.visible){o||(this.chart.graphLayoutsStorage=o={},this.chart.graphLayoutsLookup=e=[]);var r=o[a.type];r||(a.enableSimulation=b(n.forExport)?!n.forExport:a.enableSimulation,o[a.type]=r=new t.layouts[a.type],r.init(a),e.splice(r.index,0,r)),this.layout=r,r.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight),r.addElementsToCollection([this],r.series),r.addElementsToCollection(this.nodes,r.nodes),r.addElementsToCollection(this.points,r.links)}},render:function(){var a=this.points,b=this.chart.hoverPoint,t=[];this.points=this.nodes,d.line.prototype.render.call(this),this.points=a,a.forEach((function(a){a.fromNode&&a.toNode&&(a.renderLink(),a.redrawLink())})),b&&b.series===this&&this.redrawHalo(b),this.chart.hasRendered&&!this.options.dataLabels.allowOverlap&&(this.nodes.concat(this.points).forEach((function(a){a.dataLabel&&t.push(a.dataLabel)})),this.chart.hideOverlappingLabels(t))},drawDataLabels:function(){var a=this.options.dataLabels.textPath;e.prototype.drawDataLabels.apply(this,arguments),this.points=this.data,this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,e.prototype.drawDataLabels.apply(this,arguments),this.points=this.nodes,this.options.dataLabels.textPath=a},pointAttribs:function(a,b){var t=b||a&&a.state||"normal";return b=e.prototype.pointAttribs.call(this,a,t),t=this.options.states[t],a&&!a.isNode&&(b=a.getLinkAttributes(),t&&(b={stroke:t.linkColor||b.stroke,dashstyle:t.linkDashStyle||b.dashstyle,opacity:m(t.linkOpacity,b.opacity),"stroke-width":t.linkColor||b["stroke-width"]})),b},redrawHalo:q.redrawHalo,onMouseDown:q.onMouseDown,onMouseMove:q.onMouseMove,onMouseUp:q.onMouseUp,setState:function(a,b){b?(this.points=this.nodes.concat(this.data),e.prototype.setState.apply(this,arguments),this.points=this.data):e.prototype.setState.apply(this,arguments),this.layout.simulation||a||this.render()}}),q=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.degree=void 0,b.linksFrom=void 0,b.linksTo=void 0,b.options=void 0,b.radius=void 0,b.series=void 0,b.toNode=void 0,b}return h(b,a),b}(e.prototype.pointClass),f(q.prototype,{setState:a.setNodeState,init:function(){return o.prototype.init.apply(this,arguments),this.series.options.draggable&&!this.series.chart.styledMode&&(c(this,"mouseOver",(function(){l(this.series.chart.container,{cursor:"move"})})),c(this,"mouseOut",(function(){l(this.series.chart.container,{cursor:"default"})}))),this},getDegree:function(){var a=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===a?1:a},getLinkAttributes:function(){var a=this.series.options.link,b=this.options;return{"stroke-width":m(b.width,a.width),stroke:b.color||a.color,dashstyle:b.dashStyle||a.dashStyle,opacity:m(b.opacity,a.opacity,1)}},renderLink:function(){if(!this.graphic&&(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),!0).add(this.series.group),!this.series.chart.styledMode)){var a=this.series.pointAttribs(this);this.graphic.attr(a),(this.dataLabels||[]).forEach((function(b){b&&b.attr({opacity:a.opacity})}))}},redrawLink:function(){var a=this.getLinkPath();if(this.graphic){if(this.shapeArgs={d:a},!this.series.chart.styledMode){var b=this.series.pointAttribs(this);this.graphic.attr(b),(this.dataLabels||[]).forEach((function(a){a&&a.attr({opacity:b.opacity})}))}this.graphic.animate(this.shapeArgs);var t=a[0];a=a[1],"M"===t[0]&&"L"===a[0]&&(this.plotX=(t[1]+a[1])/2,this.plotY=(t[2]+a[2])/2)}},getMass:function(){var a=this.fromNode.mass,b=this.toNode.mass,t=a+b;return{fromNode:1-a/t,toNode:1-b/t}},getLinkPath:function(){var a=this.fromNode,b=this.toNode;return a.plotX>b.plotX&&(a=this.toNode,b=this.fromNode),[["M",a.plotX||0,a.plotY||0],["L",b.plotX||0,b.plotY||0]]},isValid:function(){return!this.isNode||b(this.id)},remove:function(a,b){var t,o=this.series,n=o.options.nodes||[],g=n.length;if(this.isNode){for(o.points=[],[].concat(this.linksFrom).concat(this.linksTo).forEach((function(a){-1<(t=a.fromNode.linksFrom.indexOf(a))&&a.fromNode.linksFrom.splice(t,1),-1<(t=a.toNode.linksTo.indexOf(a))&&a.toNode.linksTo.splice(t,1),e.prototype.removePoint.call(o,o.data.indexOf(a),!1,!1)})),o.points=o.data.slice(),o.nodes.splice(o.nodes.indexOf(this),1);g--;)if(n[g].id===this.options.id){o.options.nodes.splice(g,1);break}this&&this.destroy(),o.isDirty=!0,o.isDirtyData=!0,a&&o.chart.redraw(a)}else o.removePoint(o.data.indexOf(this),a,b)},destroy:function(){return this.isNode&&this.linksFrom.concat(this.linksTo).forEach((function(a){a.destroyElements&&a.destroyElements()})),this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]),o.prototype.destroy.apply(this,arguments)}}),r.prototype.pointClass=q,n.registerSeriesType("networkgraph",r),r})),o(t,"masters/modules/networkgraph.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(n=[e(137)],void 0===(r=function(t){return h(t),h.Highcharts=t,h}.apply(o,n))||(t.exports=r))}}]);