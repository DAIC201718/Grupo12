!function(t,i,s,e){function n(e,n){this.options=t.extend({},o,n),this._container=t("#"+this.options.containerID),this._container.length&&(this.jQwindow=t(i),this.jQdocument=t(s),this._holder=t(e),this._nav={},this._first=t(this.options.first),this._previous=t(this.options.previous),this._next=t(this.options.next),this._last=t(this.options.last),this._items=this._container.children(":visible"),this._itemsShowing=t([]),this._itemsHiding=t([]),this._numPages=Math.ceil(this._items.length/this.options.perPage),this._currentPageNum=this.options.startPage,this._clicked=!1,this._cssAnimSupport=this.getCSSAnimationSupport(),this.init())}var a="jPages",h=null,o={containerID:"",first:!1,previous:"? previous",next:"next ?",last:!1,links:"numeric",startPage:1,perPage:10,midRange:5,startRange:1,endRange:1,keyBrowse:!1,scrollBrowse:!1,pause:0,clickStop:!1,delay:50,direction:"forward",animation:"",fallback:400,minHeight:!1,callback:e};n.prototype={constructor:n,getCSSAnimationSupport:function(){var t=!1,i="animation",s="",n="Webkit Moz O ms Khtml".split(" "),a="",h=this._container.get(0);if(h.style.animationName&&(t=!0),t===!1)for(var o=0;o<n.length;o++)if(h.style[n[o]+"AnimationName"]!==e){a=n[o],i=a+"Animation",s="-"+a.toLowerCase()+"-",t=!0;break}return t},init:function(){this.setStyles(),this.setNav(),this.paginate(this._currentPageNum),this.setMinHeight()},setStyles:function(){var i="<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>";t(i).appendTo("head"),this._cssAnimSupport&&this.options.animation.length?this._items.addClass("animated jp-hidden"):this._items.hide()},setNav:function(){var i=this.writeNav();this._holder.each(this.bind(function(s,e){var n=t(e);n.html(i),this.cacheNavElements(n,s),this.bindNavHandlers(s),this.disableNavSelection(e)},this)),this.options.keyBrowse&&this.bindNavKeyBrowse(),this.options.scrollBrowse&&this.bindNavScrollBrowse()},writeNav:function(){var t,i=1;for(t=this.writeBtn("first")+this.writeBtn("previous");i<=this._numPages;i++){switch(1===i&&0===this.options.startRange&&(t+="<span>...</span>"),t+=i>this.options.startRange&&i<=this._numPages-this.options.endRange?"<a href='#' class='jp-hidden'>":"<a>",this.options.links){case"numeric":t+=i;break;case"blank":break;case"title":var s=this._items.eq(i-1).attr("data-title");t+=s!==e?s:""}t+="</a>",(i===this.options.startRange||i===this._numPages-this.options.endRange)&&(t+="<span>...</span>")}return t+=this.writeBtn("next")+this.writeBtn("last")+"</div>"},writeBtn:function(i){return this.options[i]===!1||t(this["_"+i]).length?"":"<a class='jp-"+i+"'>"+this.options[i]+"</a>"},cacheNavElements:function(i,s){this._nav[s]={},this._nav[s].holder=i,this._nav[s].first=this._first.length?this._first:this._nav[s].holder.find("a.jp-first"),this._nav[s].previous=this._previous.length?this._previous:this._nav[s].holder.find("a.jp-previous"),this._nav[s].next=this._next.length?this._next:this._nav[s].holder.find("a.jp-next"),this._nav[s].last=this._last.length?this._last:this._nav[s].holder.find("a.jp-last"),this._nav[s].fstBreak=this._nav[s].holder.find("span:first"),this._nav[s].lstBreak=this._nav[s].holder.find("span:last"),this._nav[s].pages=this._nav[s].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last"),this._nav[s].permPages=this._nav[s].pages.slice(0,this.options.startRange).add(this._nav[s].pages.slice(this._numPages-this.options.endRange,this._numPages)),this._nav[s].pagesShowing=t([]),this._nav[s].currentPage=t([])},bindNavHandlers:function(i){var s=this._nav[i];s.holder.bind("click.jPages",this.bind(function(i){var e=this.getNewPage(s,t(i.target));this.validNewPage(e)&&(this._clicked=!0,this.paginate(e)),i.preventDefault()},this)),this._first.length&&this._first.bind("click.jPages",this.bind(function(){this.validNewPage(1)&&(this._clicked=!0,this.paginate(1))},this)),this._previous.length&&this._previous.bind("click.jPages",this.bind(function(){var t=this._currentPageNum-1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._next.length&&this._next.bind("click.jPages",this.bind(function(){var t=this._currentPageNum+1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._last.length&&this._last.bind("click.jPages",this.bind(function(){this.validNewPage(this._numPages)&&(this._clicked=!0,this.paginate(this._numPages))},this))},disableNavSelection:function(t){"undefined"!=typeof t.onselectstart?t.onselectstart=function(){return!1}:"undefined"!=typeof t.style.MozUserSelect?t.style.MozUserSelect="none":t.onmousedown=function(){return!1}},bindNavKeyBrowse:function(){this.jQdocument.bind("keydown.jPages",this.bind(function(t){var i=t.target.nodeName.toLowerCase();if(this.elemScrolledIntoView()&&"input"!==i&&"textarea"!=i){var s=this._currentPageNum;37==t.which&&(s=this._currentPageNum-1),39==t.which&&(s=this._currentPageNum+1),this.validNewPage(s)&&(this._clicked=!0,this.paginate(s))}},this))},elemScrolledIntoView:function(){var t,i,s,e;return t=this.jQwindow.scrollTop(),i=t+this.jQwindow.height(),s=this._container.offset().top,e=s+this._container.height(),e>=t&&i>=s},bindNavScrollBrowse:function(){this._container.bind("mousewheel.jPages DOMMouseScroll.jPages",this.bind(function(t){var i=(t.originalEvent.wheelDelta||-t.originalEvent.detail)>0?this._currentPageNum-1:this._currentPageNum+1;return this.validNewPage(i)&&(this._clicked=!0,this.paginate(i)),t.preventDefault(),!1},this))},getNewPage:function(t,i){return i.is(t.currentPage)?this._currentPageNum:i.is(t.pages)?t.pages.index(i)+1:i.is(t.first)?1:i.is(t.last)?this._numPages:i.is(t.previous)?t.pages.index(t.currentPage):i.is(t.next)?t.pages.index(t.currentPage)+2:void 0},validNewPage:function(t){return t!==this._currentPageNum&&t>0&&t<=this._numPages},paginate:function(i){var s,e;s=this.updateItems(i),e=this.updatePages(i),this._currentPageNum=i,t.isFunction(this.options.callback)&&this.callback(i,s,e),this.updatePause()},updateItems:function(t){var i=this.getItemRange(t);return this._itemsHiding=this._itemsShowing,this._itemsShowing=this._items.slice(i.start,i.end),this._cssAnimSupport&&this.options.animation.length?this.cssAnimations(t):this.jQAnimations(t),i},getItemRange:function(t){var i={};return i.start=(t-1)*this.options.perPage,i.end=i.start+this.options.perPage,i.end>this._items.length&&(i.end=this._items.length),i},cssAnimations:function(t){clearInterval(this._delay),this._itemsHiding.removeClass(this.options.animation+" jp-invisible").addClass("jp-hidden"),this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation),this._index=this._index+1},this),this.options.delay)},jQAnimations:function(t){clearInterval(this._delay),this._itemsHiding.addClass("jp-hidden"),this._itemsShowing.fadeTo(0,0).removeClass("jp-hidden"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).fadeTo(this.options.fallback,1),this._index=this._index+1},this),this.options.delay)},getDirectedItems:function(i){var s;switch(this.options.direction){case"backwards":s=t(this._itemsShowing.get().reverse());break;case"random":s=t(this._itemsShowing.get().sort(function(){return Math.round(Math.random())-.5}));break;case"auto":s=i>=this._currentPageNum?this._itemsShowing:t(this._itemsShowing.get().reverse());break;default:s=this._itemsShowing}return s},updatePages:function(t){var i,s,e;i=this.getInterval(t);for(s in this._nav)this._nav.hasOwnProperty(s)&&(e=this._nav[s],this.updateBtns(e,t),this.updateCurrentPage(e,t),this.updatePagesShowing(e,i),this.updateBreaks(e,i));return i},getInterval:function(t){var i,s,e,n;return i=Math.ceil(this.options.midRange/2),s=this._numPages-this.options.midRange,e=t>i?Math.max(Math.min(t-i,s),0):0,n=t>i?Math.min(t+i-(this.options.midRange%2>0?1:0),this._numPages):Math.min(this.options.midRange,this._numPages),{start:e,end:n}},updateBtns:function(t,i){1===i&&(t.first.addClass("jp-disabled"),t.previous.addClass("jp-disabled")),i===this._numPages&&(t.next.addClass("jp-disabled"),t.last.addClass("jp-disabled")),1===this._currentPageNum&&i>1&&(t.first.removeClass("jp-disabled"),t.previous.removeClass("jp-disabled")),this._currentPageNum===this._numPages&&i<this._numPages&&(t.next.removeClass("jp-disabled"),t.last.removeClass("jp-disabled"))},updateCurrentPage:function(t,i){t.currentPage.removeClass("jp-current"),t.currentPage=t.pages.eq(i-1).addClass("jp-current")},updatePagesShowing:function(t,i){var s=t.pages.slice(i.start,i.end).not(t.permPages);t.pagesShowing.not(s).addClass("jp-hidden"),s.not(t.pagesShowing).removeClass("jp-hidden"),t.pagesShowing=s},updateBreaks:function(t,i){i.start>this.options.startRange||0===this.options.startRange&&i.start>0?t.fstBreak.removeClass("jp-hidden"):t.fstBreak.addClass("jp-hidden"),i.end<this._numPages-this.options.endRange?t.lstBreak.removeClass("jp-hidden"):t.lstBreak.addClass("jp-hidden")},callback:function(t,i,s){var e={current:t,interval:s,count:this._numPages},n={showing:this._itemsShowing,oncoming:this._items.slice(i.start+this.options.perPage,i.end+this.options.perPage),range:i,count:this._items.length};e.interval.start=e.interval.start+1,n.range.start=n.range.start+1,this.options.callback(e,n)},updatePause:function(){if(this.options.pause&&this._numPages>1){if(clearTimeout(this._pause),this.options.clickStop&&this._clicked)return;this._pause=setTimeout(this.bind(function(){this.paginate(this._currentPageNum!==this._numPages?this._currentPageNum+1:1)},this),this.options.pause)}},setMinHeight:function(){this.options.minHeight&&!this._container.is("table, tbody")&&setTimeout(this.bind(function(){this._container.css({"min-height":this._container.css("height")})},this),1e3)},bind:function(t,i){return function(){return t.apply(i,arguments)}},destroy:function(){this.jQdocument.unbind("keydown.jPages"),this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"),this.options.minHeight&&this._container.css("min-height",""),this._cssAnimSupport&&this.options.animation.length?this._items.removeClass("animated jp-hidden jp-invisible "+this.options.animation):this._items.removeClass("jp-hidden").fadeTo(0,1),this._holder.unbind("click.jPages").empty()}},t.fn[a]=function(i){var s=t.type(i);return"object"===s?(this.length&&!t.data(this,a)&&(h=new n(this,i),this.each(function(){t.data(this,a,h)})),this):"string"===s&&"destroy"===i?(h.destroy(),this.each(function(){t.removeData(this,a)}),this):"number"===s&&i%1===0?(h.validNewPage(i)&&h.paginate(i),this):this}}(jQuery,window,document);