(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11,12,13,14,15,16,17,18,19,21,22],{399:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("4f95ec7f",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n.r(e);n(401);var r=n(46),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 rounded",attrs:{id:"card-content"}},[t._t("default")],2)}),[],!1,null,"7fdfdccc",null);e.default=component.exports},401:function(t,e,n){"use strict";n(399)},402:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n#card-content[data-v-7fdfdccc]{\n  background-color:#f2f6fa\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},404:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("3d670051",content,!0,{sourceMap:!1})},405:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("474ebe32",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n.r(e);var r={props:{item:{type:Object,required:!0}},emits:["item-click","item-enter","item-leave"],data:function(){return{hover:!1}},methods:{toggleIn:function(){this.hover=!0,this.$emit("item-enter",this.item.id)},toggleOut:function(){this.hover=!1,this.$emit("item-leave",null)}}},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"dropdown-item",staticClass:"w-full text-left text-sm font-medium dropdown-item",class:{"bg-gray-100":t.hover},on:{mouseenter:t.toggleIn,mouseleave:t.toggleOut,click:function(e){return t.$emit("item-click",t.item)}}},[n("p",{staticClass:"p-2"},[t._v("\n    "+t._s(t.item.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";n(404)},408:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.dd-content[data-v-2da69afe]{\n  width:20vw\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},409:function(t,e,n){"use strict";n(405)},410:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.active[data-v-13420d88]{\n  background-color:#f7c59f\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},411:function(t,e,n){var r=n(5),o=n(198).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},412:function(t,e,n){"use strict";n.r(e);n(197),n(11);var r={props:{label:{type:String,default:"Label"},selection:{type:String},defaultDescription:{type:String},items:{type:Array,required:!0}},emits:["hover","dispatch"],data:function(){return{active:!1}},methods:{toggle:function(){this.active=!this.active},close:function(){this.active=!1},hover:function(t){this.$emit("hover",t)},dispatch:function(t){this.$emit("dispatch",t),this.close()}},computed:{description:function(){var t=this;return this.selection?this.items.find((function(e){return e.id===t.selection})).label:this.defaultDescription?this.defaultDescription:null}}},o=(n(407),n(46)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-sm font-bold mb-1",attrs:{id:"dropdownlabel"}},[t._v(t._s(t.label))]),t._v(" "),n("div",{ref:"dropdown",staticClass:"flex flex-col w-full",on:{mouseleave:t.close}},[n("button",{staticClass:"bg-white py-1 px-2 text-left rounded",on:{click:t.toggle}},[n("div",{staticClass:"flex justify-between"},[n("p",{staticClass:"truncate text-sm font-medium",class:this.selection?"text-gray-700":"text-gray-400"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),t.active?t._e():n("i",{staticClass:"gg-chevron-down text-gray-700"}),t._v(" "),t.active?n("i",{staticClass:"gg-chevron-up text-gray-700"}):t._e()])]),t._v(" "),n("div",{staticClass:"relative mt-2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"bg-white rounded ring-2 ring-gray-200 absolute z-10 dd-content"},t._l(t.items,(function(e){return n("drop-down-item",{key:e.id,attrs:{item:e},on:{"item-enter":t.hover,"item-leave":t.hover,"item-click":t.dispatch}})})),1)])])])}),[],!1,null,"2da69afe",null);e.default=component.exports;installComponents(component,{DropDownItem:n(406).default})},413:function(t,e,n){"use strict";n.r(e);var r={props:{label:{type:String,default:""},value:{type:String,default:""},active:{type:Boolean,default:!1}},emits:["click"],data:function(){return{hover:!1}},computed:{activated:function(){return!!(this.hover|this.active)}}},o=(n(409),n(46)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"py-1 px-2 bg-gray-900 text-gray-50 rounded",class:{active:t.activated,"text-gray-900":t.activated},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,"13420d88",null);e.default=component.exports},414:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(43),n(47),n(63),n(11),n(24),n(64),n(411),n(31),n(65),{props:{data:{type:Object},activeLigand:{type:String},activeReceptor:{type:String}},methods:{chartLoaded:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[e.activeLigand,e.activeReceptor],o=e.axisIds.indexOf(e.activeLigand),c=e.axisIds.indexOf(e.activeReceptor),l=e.$parent.$parent.$parent.$refs["data-area"].$refs,r.includes(null)||t.series[0].points.forEach((function(p){var t=p.x,e=p.y;p.setState(""),e===o&&t===c&&p.setState("select")})),n.next=7,new Promise((function(t,e){setTimeout((function(){t()}),500)}));case 7:return t.reflow(),n.next=10,new Promise((function(t,e){setTimeout((function(){t()}),500)}));case 10:Object.values(l).forEach((function(n){n.$children.forEach((function(n){n.$el.addEventListener("click",(function(){r=[e.activeLigand,e.activeReceptor],o=e.axisIds.indexOf(e.activeLigand),c=e.axisIds.indexOf(e.activeReceptor),r.includes(null)||t.series[0].points.forEach((function(p){var t=p.x,e=p.y;p.setState(""),e===o&&t===c&&(p.select(),p.setState("select"))}))}))}))}));case 11:case"end":return n.stop()}}),n)})))()}},computed:{axis:function(){var t=[];return this.data.axis.forEach((function(e,i){t[i]=e.label})),t},axisIds:function(){var t=[];return this.data.axis.forEach((function(e,i){t[i]=e.id})),t},chartOptions:function(){return{chart:{type:"heatmap",margin:100,animation:!1},title:{text:null},xAxis:{categories:this.axis,gridLineWidth:0,title:{text:"Receptor",style:{fontWeight:"bold"}},lineWidth:0,labels:{rotation:0,enabled:!0,align:"center",formatter:function(){return this.value.replace(/\s/g,"</br>")}}},yAxis:{categories:this.axis,gridLineWidth:0,title:{text:"Ligand",style:{fontWeight:"bold"}},reversed:!0,labels:{enabled:!0,formatter:function(){return this.value.replace(/\s/g,"</br>")}}},colorAxis:{stops:[[0,"#fef0d9"],[.2,"#fdd49e"],[.4,"#fdbb84"],[.6,"#fc8d59"],[.8,"#e34a33"],[1,"#b30000"]]},tooltip:{formatter:function(){var t=this.series.yAxis.categories[this.point.y],e=this.series.xAxis.categories[this.point.x];return"x: ".concat(e,"<br>")+"y: ".concat(t,"<br>")+"val: ".concat(this.point.value)}},legend:{align:"right",layout:"vertical",margin:0,verticalAlign:"top",y:85,x:-20,enabled:!0},series:[{allowPointSelect:!1,animation:!1,type:"heatmap",data:this.data.data,dataLabels:{enabled:!0,color:"#000000",style:{textOutline:"0px"}},borderRadius:10,borderColor:"white",colsize:.95,rowsize:.95,marker:{states:{select:{enabled:!0,fillColor:void 0,lineWidth:3,lineColor:"red"}}}}],plotOptions:{series:{states:{hover:{enabled:!1}}}},credits:{enabled:!1}}}}}),c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("highchart",{staticClass:"flex-grow rounded",attrs:{options:t.chartOptions,modules:["heatmap"]},on:{chartLoaded:t.chartLoaded}})}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);n(11),n(24),n(48),n(416);var r=n(417),o=n.n(r),c=n(418),l=n.n(c);o.a.use(l.a);var d={props:{plotData:{type:Array,default:function(){return[]}}},methods:{initPlot:function(){var t=o()({container:this.$refs.cy,style:[{selector:".show",style:{label:"data(score)","text-background-opacity":1,"text-background-shape":"round-rectangle","text-background-color":"#f2f6fa","text-background-padding":5,"font-weight":500}},{selector:"edge",style:{width:"mapData(score, 0, 1, 0.2, 20)","line-opacity":"mapData(score, 0, 1, 0.5, 1)","target-arrow-shape":"triangle","curve-style":"bezier"}},{selector:"node",style:{label:"data(id)",width:"mapData(dcn, 0, 1, 10, 50)",height:"mapData(dcn, 0, 1, 10, 50)"}}]});this.plotData.forEach((function(e){t.add([{group:"nodes",data:{id:e.ligand,type:"ligand"},style:{shape:"round-triangle"}},{group:"nodes",data:{id:e.receptor,type:"receptor"},style:{shape:"circle"}},{group:"edges",data:{id:e.ligand+e.receptor,source:e.ligand,target:e.receptor,score:Math.round(100*parseFloat(e.score))/100}}])}));t.edges().sort((function(a,b){return b-a})).slice(0,15).style({"line-color":"red","target-arrow-color":"red"}),t.on("click","edge",(function(t){t.target.toggleClass("show")}));var e=t.elements().degreeCentralityNormalized();t.nodes().forEach((function(t){t.data({dcn:e.degree(t)})})),t.layout({name:"d3-force",fit:!1,infinite:!1,linkId:function(t){return t.id},linkDistance:40,manyBodyStrength:-300}).run()}},watch:{plotData:function(){this.initPlot()}},mounted:function(){this.initPlot()}},v=n(46),component=Object(v.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"cy",staticClass:"flex-grow bg-white rounded",attrs:{id:"cy"}})}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("bad8e090",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(43),{data:function(){return{datasets:[],ligands:[],receptors:[],hoveredLigand:null,hoveredReceptor:null}},computed:{activeDataset:function(){return this.$store.getters.activeDataset},activeLigand:function(){return this.$store.getters.activeLigand},activeReceptor:function(){return this.$store.getters.activeReceptor}},methods:{setActiveDataset:function(t){this.$store.dispatch("setActiveDataset",t.id),this.$store.dispatch("setActiveLigand",null),this.$store.dispatch("setActiveReceptor",null)},setActiveLigand:function(t){this.$store.dispatch("setActiveLigand",t.id)},setActiveReceptor:function(t){this.$store.dispatch("setActiveReceptor",t.id)},setHoveredLigand:function(t){this.hoveredLigand=t},setHoveredReceptor:function(t){this.hoveredReceptor=t}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("datasets").fetch();case 2:return t.datasets=e.sent,e.next=5,t.$content("heatmaps").where({slug:t.activeDataset}).only(["axis"]).fetch().then((function(t){return t[0].axis}));case 5:return t.ligands=e.sent,e.next=8,t.$content("heatmaps").where({slug:t.activeDataset}).only(["axis"]).fetch().then((function(t){return t[0].axis}));case 8:t.receptors=e.sent;case 9:case"end":return e.stop()}}),e)})))()},watch:{activeDataset:"$fetch"}}),c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",[n("div",{staticClass:"flex flex-row space-x-2 h-16"},[n("div",{staticClass:"w-1/3 relative"},[n("drop-down",{attrs:{label:"Dataset",selection:t.activeDataset,items:t.datasets},on:{dispatch:t.setActiveDataset}})],1),t._v(" "),n("div",{staticClass:"w-1/3 relative"},[n("drop-down",{ref:"dropdown-ligand",attrs:{label:"Ligand","default-description":"Select ligand region",selection:t.activeLigand,items:t.ligands},on:{dispatch:t.setActiveLigand,hover:t.setHoveredLigand}})],1),t._v(" "),n("div",{staticClass:"w-1/3 relative"},[n("drop-down",{ref:"dropdown-receptor",attrs:{label:"Receptor","default-description":"Select receptor region",selection:t.activeReceptor,items:t.receptors},on:{dispatch:t.setActiveReceptor,hover:t.setHoveredReceptor}})],1)]),t._v(" "),n("div",{staticClass:"flex-grow mb-2"},["cs13"===t.activeDataset?n("cs-13",{attrs:{"hovered-ligand":t.hoveredLigand,"hovered-receptor":t.hoveredReceptor}}):"cs14"===t.activeDataset?n("cs-14",{attrs:{"hovered-ligand":t.hoveredLigand,"hovered-receptor":t.hoveredReceptor}}):"cs16"===t.activeDataset?n("cs-16",{attrs:{"hovered-ligand":t.hoveredLigand,"hovered-receptor":t.hoveredReceptor}}):"umap"===t.activeDataset?n("umap",{attrs:{"active-ligand":t.activeLigand,"active-receptor":t.activeReceptor,"hovered-ligand":t.hoveredLigand,"hovered-receptor":t.hoveredReceptor}}):t._e()],1),t._v(" "),n("div",{staticClass:"bg-white p-4 rounded h-40"},[n("p",{staticClass:"text-sm font-bold"},[t._v("Explanation")]),t._v(" "),this.activeDataset.includes("cs")?n("p",[t._v("\n      Spatial transcriptome schematics show transverse sections of the human\n      embryo including the neural tube, dorsal aorta and urogenital ridges.\n      Sub-dissected domains around the dorsal aorta, where hematopoietic stem\n      cells first emerge from the ventral vessel wall, are highlighted.\n    ")]):t._e(),t._v(" "),"umap"===this.activeDataset?n("p",[t._v("\n      The UMAP dataset shows hematopoietic stem/progenitor cells and niche\n      populations within the dorsal aorta and sub-aortic mesenchyme of human\n      embryos CS13-15.\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropDown:n(412).default,Umap:n(425).default,MainCard:n(400).default})},427:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(47),n(63),n(43),{data:function(){return{heatmapData:[],interactionsData:[]}},computed:{activeDataset:function(){return this.$store.getters.activeDataset},activeLigand:function(){return this.$store.getters.activeLigand},activeReceptor:function(){return this.$store.getters.activeReceptor},activePlot:function(){return this.$store.getters.activePlot},activeSelection:function(){return[this.activeLigand,this.activeReceptor]}},watch:{activeDataset:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchHeatmapData();case 2:n=e.sent,t.heatmapData=n;case 4:case"end":return e.stop()}}),e)})))()},activeSelection:function(){this.activeSelection.includes(null)||this.fetchInteractionsData()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchHeatmapData();case 2:n=e.sent,t.heatmapData=n;case 4:case"end":return e.stop()}}),e)})))()},methods:{setActivePlot:function(t){this.$store.dispatch("setActivePlot",t)},fetchHeatmapData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("heatmaps").where({slug:t.activeDataset}).fetch().then((function(t){return t[0]}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},fetchInteractionsData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.activeLigand+"_to_"+t.activeReceptor,e.next=3,t.$content("interactions/"+t.activeDataset).where({slug:n}).fetch();case 3:r=e.sent,t.interactionsData=r;case 5:case"end":return e.stop()}}),e)})))()}}}),c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",{staticClass:"flex flex-col space-y-2"},[n("div",{staticClass:"flex flex-row space-x-2 h-16 flex-wrap content-end -mb-2 py-2.5"},[n("standard-button",{attrs:{label:"Heatmap",active:"heatmap"===t.activePlot},on:{click:function(e){return t.setActivePlot("heatmap")}}}),t._v(" "),n("standard-button",{attrs:{label:"Interactions",active:"interaction"===t.activePlot},on:{click:function(e){return t.setActivePlot("interaction")}}})],1),t._v(" "),n("div",{staticClass:"flex flex-grow"},["heatmap"===t.activePlot?n("heatmap",{key:t.activeDataset,attrs:{data:t.heatmapData,"active-ligand":t.activeLigand,"active-receptor":t.activeReceptor}}):"interaction"===t.activePlot&&t.activeLigand&&t.activeReceptor?n("interaction-plot",{attrs:{"plot-data":t.interactionsData}}):n("div",{staticClass:"flex flex-grow justify-center items-center"},[n("div",{staticClass:"bg-white p-8 rounded"},[t._v("\n        Please select ligand and receptor populations\n      ")])])],1),t._v(" "),n("div",{staticClass:"bg-white p-4 rounded h-40"},[n("p",{staticClass:"text-sm font-bold"},[t._v("Explanation")]),t._v(" "),"heatmap"===t.activePlot?n("p",[t._v("\n      Heatmap shows the summed-specificity weights between each domain/cell\n      type ligand-receptor pair. Pairs connected by many specific edges will\n      have higher summed-specificity weights i.e. greater predicted signaling\n      interactions.\n    ")]):t._e(),t._v(" "),"interaction"===t.activePlot?n("p",[t._v("\n      The Interactions tab show NATMI predicted ligand-receptor interactions\n      for the selected domains as a network. The top 15 specificity weights\n      are highlighted by red arrows. Node size is proportional to the number\n      of interactions.\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StandardButton:n(413).default,Heatmap:n(414).default,InteractionPlot:n(415).default,MainCard:n(400).default})},428:function(t,e,n){"use strict";n.r(e);var r={},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",{staticClass:"flex p-4"},[n("p",{staticClass:"m-auto text-sm"},[t._v("\n    Developed by\n    "),n("a",{staticClass:"\n        underline\n        text-blue-600\n        hover:text-blue-800\n        visited:text-purple-600\n      ",attrs:{href:"https://www.omiqa.bio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Omiqa Bioinformatics")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(400).default})},429:function(t,e,n){"use strict";n.r(e);var r=n(46),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",[n("div",{staticClass:"mb-6"},[n("h1",[t._v("\n      Receptor-ligand interactions across the human embryonic hematopoietic\n      stem cell niche\n    ")])]),t._v(" "),n("p",[t._v("\n    Interactively explore receptor-ligand interactions as predicted by\n    "),n("a",{staticClass:"\n        underline\n        text-blue-600\n        hover:text-blue-800\n        visited:text-purple-600\n      ",attrs:{href:"https://github.com/asrhou/NATMI",target:"_blank",rel:"noopener noreferrer"}},[t._v("NATMI")]),t._v("\n    across the human embryonic hematopoietic stem cell niche using spatial\n    (Crosse et al., 2022; Crosse et al., 2020) and single cell (Crosse et al.,\n    2021, Zeng et al., 2019) datasets. Toggle through the different datasets\n    available including three spatial transcriptomes from Carnegie stages 13\n    (LCM-Seq CS13), 14 (LCM-Seq CS14) and 16 (LCM-Seq CS16), and the\n    hematoendothelial + niche single cell dataset (UMAP CS13-CS15)\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(400).default})},430:function(t,e,n){"use strict";n.r(e);var r=n(46),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",{staticClass:"flex flex-col justify-between"},[n("div",{staticClass:"mb-6"},[n("h1",[t._v("Tutorial")])]),t._v(" "),n("ol",{staticClass:"list-decimal list-inside"},[n("li",[t._v("\n      Select dataset using the "),n("span",{staticClass:"font-bold"},[t._v("dataset")]),t._v(" dropdown\n      menu\n    ")]),t._v(" "),n("li",[t._v("\n      Select ligand population using the\n      "),n("span",{staticClass:"font-bold"},[t._v("ligand")]),t._v(" dropdown menu\n    ")]),t._v(" "),n("li",[t._v("\n      Select receptor population using the\n      "),n("span",{staticClass:"font-bold"},[t._v("receptor")]),t._v(" dropdown menu\n    ")]),t._v(" "),n("li",[t._v("\n      Toggle between the heatmap and interaction plots using the buttons\n    ")]),t._v(" "),n("li",[t._v("\n      Use the heatmap to view overall interaction strengh between populations\n    ")]),t._v(" "),n("li",[t._v("\n      The interaction plot shows the top\n      "),n("span",{staticClass:"text-green-500 font-bold"},[t._v("15")]),t._v(" interactions between\n      selected populations\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(400).default})},432:function(t,e,n){"use strict";n(419)},433:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nbody{\n  margin-top:2rem;\n  margin-bottom:2rem\n}\nh1{\n  font-size:1.5rem;\n  line-height:2rem;\n  font-weight:700\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n.r(e);n(432);var r=n(46),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-8 gap-4"},[n("introduction",{staticClass:"col-start-2 col-span-3"}),t._v(" "),n("tutorial",{staticClass:"col-start-5 col-span-3"}),t._v(" "),n("data-area",{ref:"data-area",staticClass:"col-start-2 col-span-3"}),t._v(" "),n("plot-area",{staticClass:"col-start-5 col-span-3"}),t._v(" "),n("footer-area",{staticClass:"col-start-2 col-span-6"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Introduction:n(429).default,Tutorial:n(430).default,DataArea:n(424).default,PlotArea:n(427).default,FooterArea:n(428).default})}}]);