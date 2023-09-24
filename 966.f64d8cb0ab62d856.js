"use strict";(self.webpackChunkelearnWeb=self.webpackChunkelearnWeb||[]).push([[966],{9966:(R,C,_)=>{_.d(C,{JX:()=>M,_s:()=>D,tk:()=>B});var o=_(5e3),v=_(9808);class h{constructor(){this.change=new o.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(n){return null==n.id&&(n.id=this.DEFAULT_ID),this.instances[n.id]?this.updateInstance(n):(this.instances[n.id]=n,!0)}updateInstance(n){let e=!1;for(let t in this.instances[n.id])n[t]!==this.instances[n.id][t]&&(this.instances[n.id][t]=n[t],e=!0);return e}getCurrentPage(n){return this.instances[n]?this.instances[n].currentPage:1}setCurrentPage(n,e){if(this.instances[n]){let t=this.instances[n];e<=Math.ceil(t.totalItems/t.itemsPerPage)&&1<=e&&(this.instances[n].currentPage=e,this.change.emit(n))}}setTotalItems(n,e){this.instances[n]&&0<=e&&(this.instances[n].totalItems=e,this.change.emit(n))}setItemsPerPage(n,e){this.instances[n]&&(this.instances[n].itemsPerPage=e,this.change.emit(n))}getInstance(n=this.DEFAULT_ID){return this.instances[n]?this.clone(this.instances[n]):{}}clone(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}}const E=Number.MAX_SAFE_INTEGER;let D=(()=>{class i{constructor(e){this.service=e,this.state={}}transform(e,t){if(!(e instanceof Array)){let c=t.id||this.service.defaultId();return this.state[c]?this.state[c].slice:e}let l,p,a=t.totalItems&&t.totalItems!==e.length,r=this.createInstance(e,t),s=r.id,g=r.itemsPerPage,d=this.service.register(r);if(!a&&e instanceof Array){if(g=+g||E,l=(r.currentPage-1)*g,p=l+g,this.stateIsIdentical(s,e,l,p))return this.state[s].slice;{let m=e.slice(l,p);return this.saveState(s,e,m,l,p),this.service.change.emit(s),m}}return d&&this.service.change.emit(s),this.saveState(s,e,e,l,p),e}createInstance(e,t){return this.checkConfig(t),{id:null!=t.id?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}}checkConfig(e){const a=["itemsPerPage","currentPage"].filter(r=>!(r in e));if(0<a.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${a.join(", ")}`)}saveState(e,t,a,r,s){this.state[e]={collection:t,size:t.length,slice:a,start:r,end:s}}stateIsIdentical(e,t,a,r){let s=this.state[e];return!(!s||s.size!==t.length||s.start!==a||s.end!==r)&&s.slice.every((p,g)=>p===t[a+g])}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(h,16))},i.\u0275pipe=o.Yjl({name:"paginate",type:i,pure:!1}),i})(),B=(()=>{class i{constructor(e,t){this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new o.vpe,this.pageBoundsCorrection=new o.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(a=>{this.id===a&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(e){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(e){this.pageChange.emit(e)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let e=this.service.getInstance(this.id);const t=this.outOfBoundCorrection(e);t!==e.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(t),this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}outOfBoundCorrection(e){const t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage}createPageArray(e,t,a,r){r=+r;let s=[];const l=Math.max(Math.ceil(a/t),1),p=Math.ceil(r/2),g=e<=p,d=l-p<e,c=!g&&!d;let m=r<l,u=1;for(;u<=l&&u<=r;){let x,f=this.calculatePageNumber(u,e,r,l),A=2===u&&(c||d),F=u===r-1&&(c||g);x=m&&(A||F)?"...":f,s.push({label:x,value:f}),u++}return s}calculatePageNumber(e,t,a,r){let s=Math.ceil(a/2);return e===a?r:1===e?e:a<r?r-s<t?r-a+e:s<t?t-s+e:e:e}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(h),o.Y36(o.sBO))},i.\u0275dir=o.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[o.TTD]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({providers:[h],imports:[[v.ez]]}),i})()}}]);