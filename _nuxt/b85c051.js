(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7,8,9,10,12,13,14,16],{394:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("08ed0223",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n.r(e);n(396);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 rounded",attrs:{id:"card-content"}},[t._t("default")],2)}),[],!1,null,"7956d0ef",null);e.default=component.exports},396:function(t,e,n){"use strict";n(394)},397:function(t,e,n){var l=n(82)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n#card-content[data-v-7956d0ef]{\n  background-color:#f2f6fa\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},399:function(t,e,n){"use strict";n.r(e);var l={props:{label:{type:String,default:"label"}},emits:["item-click","item-enter","item-leave"],data:function(){return{hover:!1}},methods:{toggleIn:function(){this.hover=!0,this.$emit("item-enter",this.label)},toggleOut:function(){this.hover=!1,this.$emit("item-leave",null)}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"w-full text-left",class:{"bg-gray-100":t.hover},on:{mouseenter:t.toggleIn,mouseleave:t.toggleOut,click:function(e){return t.$emit("item-click",t.label)}}},[n("p",{staticClass:"p-2"},[t._v("\n        "+t._s(t.label)+"\n    ")])])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var l={props:{label:{type:String,default:"Label"},text:{type:String,default:"Description"},items:{type:Array,required:!0}},emits:["hover","dispatch"],data:function(){return{active:!1}},methods:{toggle:function(){this.active=!this.active},close:function(){this.active=!1},propagate:function(t){this.$emit("hover",t)},dispatch:function(t){var label=this.label.toLowerCase();"dataset"===label&&(this.$store.dispatch("setDataset",t),this.$store.dispatch("setLigand",null),this.$store.dispatch("setReceptor",null)),"ligand"===label&&this.$store.dispatch("setLigand",t),"receptor"===label&&this.$store.dispatch("setReceptor",t),this.close(),this.$emit("dispatch")},getDescription:function(){var label=this.label.toLowerCase();if("dataset"===label)return this.$store.getters.activeDataset;if("ligand"===label){var t=this.$store.getters.activeLigand;return null===t?this.text:t}if("receptor"===label){var e=this.$store.getters.activeReceptor;return null===e?this.text:e}}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-50"},[n("p",{staticClass:"text-sm font-bold mb-1"},[t._v(t._s(t.label))]),t._v(" "),n("div",{on:{mouseleave:t.close}},[n("button",{staticClass:"bg-white p-2 w-full text-left rounded",on:{click:t.toggle}},[n("div",{staticClass:"w-full flex justify-between"},[n("p",{staticClass:"truncate"},[t._v(t._s(t.getDescription()))]),t._v(" "),t.active?t._e():n("i",{staticClass:"gg-chevron-down"}),t._v(" "),t.active?n("i",{staticClass:"gg-chevron-up"}):t._e()])]),t._v(" "),t.active?n("div",{staticClass:"bg-white w-full rounded mt-1 ring-2 ring-gray-200"},t._l(t.items,(function(e){return n("drop-down-item",{key:e.id,attrs:{label:e.label},on:{"item-enter":t.propagate,"item-leave":t.propagate,"item-click":t.dispatch}})})),1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropDownItem:n(399).default})},401:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("6d435986",content,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{datasets:[{id:"cs13",label:"LCM-Seq CS13"},{id:"cs14",label:"LCM-Seq CS14"},{id:"cs15",label:"LCM-Seq CS15"},{id:"umap",label:"UMAP CS13-CS15"}],ligands:[{id:"do",label:"Dorsal outer"},{id:"di",label:"Dorsal inner"},{id:"vo",label:"Ventral outer"},{id:"vi",label:"Ventral inner"},{id:"geo",label:"Gonadal epithelium outer"},{id:"gei",label:"Gonadal epithelium inner"}],receptors:[{id:"do",label:"Dorsal outer"},{id:"di",label:"Dorsal inner"},{id:"vo",label:"Ventral outer"},{id:"vi",label:"Ventral inner"},{id:"geo",label:"Gonadal epithelium outer"},{id:"gei",label:"Gonadal epithelium inner"}],ligand:null,receptor:null}},computed:{activeDataset:function(){return this.$store.getters.activeDataset}},methods:{reset:function(){this.ligand=null,this.receptor=null},propagateLigand:function(t){this.ligand=t},propagateReceptor:function(t){this.receptor=t}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",{staticClass:"grid grid-cols-2"},[n("div",{staticClass:"col-span-2 grid grid-cols-3 gap-2 mb-3"},[n("drop-down",{staticClass:"h-16",attrs:{label:"Dataset",text:"Select dataset",items:t.datasets},on:{dispatch:t.reset}}),t._v(" "),n("drop-down",{staticClass:"h-16",attrs:{label:"Ligand",text:"Select ligand population",items:t.ligands},on:{hover:t.propagateLigand}}),t._v(" "),n("drop-down",{staticClass:"h-16",attrs:{label:"Receptor",text:"Select receptor population",items:t.receptors},on:{hover:t.propagateReceptor}})],1),t._v(" "),n("div",{staticClass:"col-span-2 h-full"},["LCM-Seq CS13"===t.activeDataset?n("cs-13",{staticClass:"h-full flex m-auto",attrs:{ligand:t.ligand,receptor:t.receptor}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropDown:n(400).default,MainCard:n(395).default})},403:function(t,e,n){"use strict";n.r(e);var l={computed:{chartOptions:function(){return{chart:{type:"heatmap",marginTop:40},title:{text:null},xAxis:{categories:["Dorsal outer","Dorsal inner","Ventral outer","Ventral inner","Gonadal epithelium outer","Gonadal epithelium outer"],gridLineWidth:0,lineWidth:0},yAxis:{categories:["Dorsal outer","Dorsal inner","Ventral outer","Ventral inner","Gonadal epithelium outer","Gonadal epithelium outer"],gridLineWidth:0,title:null,reversed:!0},colorAxis:{minColor:"#fff7bc",maxColor:"#d95f0e"},legend:{align:"right",layout:"vertical",margin:0,verticalAlign:"top",y:25},series:[{type:"heatmap",borderWidth:2,borderColor:"white",data:[[0,0,10],[0,1,19],[0,2,8],[0,3,24],[0,4,67],[0,5,18],[1,0,92],[1,1,58],[1,2,78],[1,3,117],[1,4,48],[1,5,39],[2,0,35],[2,1,15],[2,2,123],[2,3,64],[2,4,52],[2,5,52],[3,0,72],[3,1,132],[3,2,114],[3,3,19],[3,4,16],[3,5,32],[4,0,38],[4,1,5],[4,2,8],[4,3,117],[4,4,115],[4,5,99],[5,0,88],[5,1,32],[5,2,12],[5,3,6],[5,4,120],[5,5,5]],dataLabels:{enabled:!0,color:"#000000"}}],credits:{enabled:!1}}}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-card",{staticClass:"h-full"},[n("div",{staticClass:"h-full w-full bg-white flex p-2"},[n("highchart",{staticClass:"w-full h-4/5 m-auto",attrs:{options:t.chartOptions,modules:["heatmap","data"]}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(395).default})},404:function(t,e,n){"use strict";n.r(e);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",[n("div",{staticClass:"h-24"},[n("h1",[t._v("\n            Receptor-ligand interactions across the human embryonic\n            hematopoietic stem cell niche\n        ")])]),t._v(" "),n("p",[t._v("\n        Interactively explore receptor-ligand interactions as predicted by\n        NATMI (link) across the human embryonic hematopoietic stem cell\n        niche using spatial (Crosse et al., 2021; Crosse et al., 2020) and\n        single cell (Crosse et al., 2021, Zeng et al., 2019) datasets.\n        Toggle through the different datasets available including three\n        spatial transcriptomes from Carnegie stages 13 (LCM-Seq CS13), 14\n        (LCM-Seq CS14) and 16 (LCM-Seq CS16), and the hematoendothelial +\n        niche single cell dataset.\n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(395).default})},405:function(t,e,n){"use strict";n.r(e);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",[n("div",{staticClass:"h-24"},[n("h1",[t._v("Tutorial")])]),t._v(" "),n("ol",{staticClass:"list-decimal list-inside"},[n("li",[t._v("Select dataset of interest via the dropdown menu")]),t._v(" "),n("li",[t._v("\n            Select a ligand population by clicking on a spatial domain or\n            cluster\n        ")]),t._v(" "),n("li",[t._v("\n            Select a receptor population by clicking on a second spatial\n            domain or cluster\n        ")]),t._v(" "),n("li",[t._v("\n            Toggle between the heatmap and interactions view using the\n            upper-left buttons\n        ")]),t._v(" "),n("li",[t._v("\n            View the overall interaction strength between two populations\n            using the heatmap view\n        ")]),t._v(" "),n("li",[t._v("\n            View the top 20 interactions for the selected populations using\n            the ligand-receptor view\n        ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(395).default})},406:function(t,e,n){"use strict";n.r(e);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-card",{staticClass:"col-span-8 flex"},[n("h1",{staticClass:"m-auto"},[t._v("This will be the footer content")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainCard:n(395).default})},407:function(t,e,n){"use strict";n(401)},408:function(t,e,n){var l=n(82)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\nbody{\n  margin-left:4rem;\n  margin-right:4rem;\n  margin-top:1rem;\n  margin-bottom:1rem\n}\nh1{\n  font-size:1.875rem;\n  line-height:2.25rem;\n  font-weight:700\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},411:function(t,e,n){"use strict";n.r(e);var l={computed:{activeDataset:function(){return this.$store.getters.activeDataset}}},r=(n(407),n(47)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-8 gap-2"},[n("introduction",{staticClass:"col-span-4"}),t._v(" "),n("tutorial",{staticClass:"col-span-4"}),t._v(" "),n("data-area",{staticClass:"col-span-4"}),t._v(" "),n("plot-area",{staticClass:"col-span-4"}),t._v(" "),n("footer",{staticClass:"col-span-8"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Introduction:n(404).default,Tutorial:n(405).default,DataArea:n(402).default,PlotArea:n(403).default,Footer:n(406).default})}}]);