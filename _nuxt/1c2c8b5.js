(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{409:function(t,e,r){"use strict";r.r(e);var n=r(15),o=(r(30),r(63),r(34),r(11),r(24),r(107),{props:["plotData"],computed:{chartOptions:function(){return{chart:{type:"heatmap",margin:100},title:{text:null},xAxis:{categories:this.xAxis,gridLineWidth:0,lineWidth:0,labels:{rotation:0,enabled:!0,align:"center",formatter:function(){return this.value.replace(/\s/g,"</br>")}}},yAxis:{categories:this.yAxis,gridLineWidth:0,title:null,reversed:!0,labels:{enabled:!0,formatter:function(){return this.value.replace(/\s/g,"</br>")}}},colorAxis:{stops:[[0,"#fef0d9"],[.2,"#fdd49e"],[.4,"#fdbb84"],[.6,"#fc8d59"],[.8,"#e34a33"],[1,"#b30000"]]},tooltip:{formatter:function(){var t=this.series.yAxis.categories[this.point.y],e=this.series.xAxis.categories[this.point.x];return"x: ".concat(e,"<br>")+"y: ".concat(t,"<br>")+"val: ".concat(this.point.value)}},legend:{align:"right",layout:"vertical",margin:0,verticalAlign:"top",y:25,enabled:!1},series:[{type:"heatmap",borderWidth:3,borderColor:"white",borderRadius:10,data:this.series,dataLabels:{enabled:!0,color:"#000000"}}],credits:{enabled:!1}}},xAxis:function(){return Object.keys(this.plotData[0])},yAxis:function(){return Object.keys(this.plotData[0])},series:function(){var t=[];return this.plotData.forEach((function(e,r){Object.entries(e).forEach((function(e,col){var o=Object(n.a)(e,2),l=(o[0],o[1]),c=parseFloat(col),h=parseFloat(r),d=parseFloat(l);t.push({x:c,y:h,value:d})}))})),t}}}),l=r(46),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("highchart",{staticClass:"flex-grow rounded",attrs:{options:t.chartOptions,modules:["heatmap"]}})}),[],!1,null,null,null);e.default=component.exports}}]);