function printPhoto(e){var o,t;$.each(e.photoset.photo,function(e,a){o='<image alt="'+a.title+'" src="https://farm'+a.farm+".staticflickr.com/"+a.server+"/"+a.id+"_"+a.secret+'_q.jpg">',t="#flickr"+e,$(t).append(o);var s=e+1,n='<div class="item flickr'+e+'"><div class="carousel-caption"><h1>Imagen '+s+'</h1><a class="close" type="button" data-dismiss="modal"><i class="fa fa-close"></i></a></div><image alt="'+a.title+'" src="https://farm'+a.farm+".staticflickr.com/"+a.server+"/"+a.id+"_"+a.secret+'.jpg"></div>';$("#carousel-inner-modal").append(n)})}function formatVideo(e){var o,t,a=getRandomElements(e);$.each(a,function(e,a){o='<image alt="'+a.snippet.title+'" src="https://i.ytimg.com/vi/'+a.snippet.resourceId.videoId+'/mqdefault.jpg">',t="#image"+e,$(t).prepend(o),o='<iframe id="player" type="text/html"  width="100%" height="100%" src="http://www.youtube.com/embed/'+a.snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>',t="#modal-body"+e,$(t).append(o)})}function getRandomElements(e){for(var o=[];o.length<4;){for(var t=Math.ceil(50*Math.random()),a=!1,s=0;s<o.length;s++)if(o[s]==t){a=!0;break}a||(o[o.length]=t)}var n=[];return $.each(o,function(o,t){n.push(e.items[t])}),n}$.ajaxSetup({cache:!1}),$.ajax({url:"https://api.flickr.com/services/rest/",cache:!1,type:"GET",dataType:"jsonp",data:{method:"flickr.photosets.getPhotos",api_key:"336fbeb6e58bad33666acde583bd6310",photoset_id:"72157655923032262",user_id:"34233191@N08",per_page:8,privacy_filter:1,format:"json",nojsoncallback:1,jsoncallback:"printPhoto"}}),function(e,o,t,a){function s(o,t){this.element=o,this.options=e.extend({},i,t),this._defaults=i,this._name=n,this.init()}var n="defaultPluginName",i={propertyName:"value"};s.prototype={init:function(){},yourOtherFunction:function(e,o){}},e.fn[n]=function(o){return this.each(function(){e.data(this,"plugin_"+n)||e.data(this,"plugin_"+n,new s(this,o))})}}(jQuery,window,document),$(document).ready(function(){"use strict";function e(){for(var e=[new google.maps.LatLng(43.271081,-2.938457),new google.maps.LatLng(43.310818,-1.975909),new google.maps.LatLng(40.431071,-3.680894)],t=["Campus Bilbao","Campus San Sebastián","Campus Madrid"],a={center:new google.maps.LatLng(43.268501,-2.4983009),zoom:8},s=new google.maps.Map(o,a),n=[],i=0;i<e.length;i++)n[i]=new google.maps.Marker({position:e[i],map:s,title:t[i]});var l=[marcaBilbao,marcaDonosti,marcaMadrid],c=[];for(i=0;i<e.length;i++)c[i]=new google.maps.InfoWindow({content:l[i],maxWidth:200});var r=[document.getElementsByClassName("bilbao"),document.getElementsByClassName("sansebastian"),document.getElementsByClassName("madrid")];google.maps.event.addListener(n[0],"click",function(){c[0].open(s,n[0])}),$.each(r[0],function(e,o){o.addEventListener("click",function(){c[0].open(s,n[0])},!1)}),google.maps.event.addListener(n[1],"click",function(){c[1].open(s,n[1])}),$.each(r[1],function(e,o){o.addEventListener("click",function(){c[1].open(s,n[1])},!1)}),google.maps.event.addListener(n[2],"click",function(){c[2].open(s,n[2])}),$.each(r[2],function(e,o){o.addEventListener("click",function(){c[2].open(s,n[2])},!1)})}var o=document.getElementById("map-canvas");o&&google.maps.event.addDomListener(window,"load",e)}),!function(e,o,t){var a,s=e.getElementsByTagName(o)[0],n=/^http:/.test(e.location)?"http":"https";e.getElementById(t)||(a=e.createElement(o),a.id=t,a.src=n+"://platform.twitter.com/widgets.js",s.parentNode.insertBefore(a,s))}(document,"script","twitter-wjs"),$("#masonry-you").length&&$.ajax({url:"https://www.googleapis.com/youtube/v3/playlistItems",cache:!1,type:"GET",dataType:"jsonp",data:{part:"snippet",maxResults:50,playlistId:"PL2984A5B2B1D35DD4",key:"AIzaSyAn8cez-CpwnzTHvZi8tlhV3cmDE2J1jDY"}}).success(function(e){formatVideo(e)}),$(document).ready(function(){"use strict";function e(){jQuery(".search-form").slideUp("normal",function(){jQuery(".search-container").removeClass("show-sbox")})}function o(){jQuery(".search-container").addClass("show-sbox"),jQuery(".search-text-box").focus(),jQuery(".search-form").slideDown()}function t(){$(".responsive-menu").slideUp("normal",function(){$(".open-menu").removeClass("close"),$(".responsive-menu-container").removeClass("top-menu-open"),$(".responsive-menu").removeClass("top-height"),$("#page").addClass("menu-mobile")})}function a(){$(".open-menu").addClass("close"),$(".responsive-menu-container").addClass("top-menu-open"),$(".responsive-menu").addClass("top-height"),$(".responsive-menu").slideDown(),$("#page").removeClass("menu-mobile")}if(jQuery(window).scroll(function(){var e=$(window).scrollTop();e>150?($(".top-bar").addClass("sticky"),$("#menu").addClass("sticky")):($(".top-bar").removeClass("sticky"),$("#menu").removeClass("sticky"))}),"2"!=dispositivo){$("#carousel--home").carousel({interval:5e3,pause:"false"});var s=!0;$("#carousel__pause").click(function(){s?($("#carousel--home").carousel("pause"),$(this).find(".fa").removeClass("fa-play-circle").addClass("fa-pause"),s=!1):($("#carousel--home").carousel("cycle"),$(this).find(".fa").removeClass("fa-pause").addClass("fa-play-circle"),s=!0)}),$("#carousel--home-mv").carousel({interval:5e3,pause:"false"});var n=!0;$("#carousel__pause-mv").click(function(){n?($("#carousel--home-mv").carousel("pause"),n=!1):($("#carousel--home-mv").carousel("cycle"),n=!0)})}jQuery(".search-container").click(function(){jQuery(".search-form").is(":hidden")?($(".responsive-menu").is(":visible")&&t(),o()):e()}),$("#footer-accordion > ul > li a").click(function(){$("#footer-accordion li").removeClass("active"),$(this).closest("li").addClass("active");var e=$(this).next();return e.is("ul")&&e.is(":visible")&&($(this).closest("li").removeClass("active"),e.slideUp("normal")),e.is("ul")&&!e.is(":visible")&&($("#footer-accordion ul ul:visible").slideUp("normal"),e.slideDown("normal")),0===$(this).closest("li").find("ul").children().length?!0:!1}),jQuery(".panel-heading-open").click(function(){var e=jQuery(this).attr("data-id");$(this).toggleClass("open-table"),$(this).siblings("."+e).toggleClass("collapse"),$(this).siblings("div").find("."+e).toggleClass("collapse"),$(this).siblings("div").find("."+e).hasClass("collapse")||$("html, body").scrollTop($("#"+e).offset().top+-80)}),jQuery(".fa.fa1.fa-angle-down").click(function(e){$(e.currentTarget.parentNode.parentNode).toggleClass("open"),e.stopPropagation()}),jQuery(".fa.fa3.fa-angle-down").click(function(e){$(e.currentTarget.parentNode.parentNode).toggleClass("open"),e.stopPropagation()}),jQuery(".dropdown-submenu2").click(function(e){$(this).toggleClass("open2"),e.stopPropagation()}),$(".social-tab-mobile").click(function(){var e=this.getAttribute("data-id");$(".social-tab-"+e).slideToggle()}),$(".dropdown").on("click",function(){var e=this.getAttribute("data-url");e&&(window.location=e)}),$(".logged .login-container").on("click",function(){$(".login-full-container").toggleClass("show-login"),$(".login-box").slideToggle()}),"2"!=dispositivo&&$("#modalCarousel").carousel({interval:!1}),$(".thumbnail").click(function(){var e="."+this.id;$(".item").removeClass("active"),$(e).addClass("active"),$("#modalCarouselFlickr").modal("show"),$(".modal-title").text(this.getAttribute("title"))}),$(".open-menu").click(function(){$(".search-form").is(":visible")&&e(),$(this).hasClass("close")?t():a()}),$(".open-icon").click(function(e){var o=e.currentTarget.parentNode.children[2];$(o).toggleClass("expand"),$(e.currentTarget.parentNode).toggleClass("opened")}),$(".menu-header").click(function(){$(".menu-secondary").slideToggle()}),$(".open-search-button").click(function(){$(".search-big-box").toggleClass("expand")}),$(".option-container").click(function(){$(this).toggleClass("selected")}),$(".search-masonry").click(function(){$(this).toggleClass("selected")}),$(".social-media-button").click(function(){$(".social-links-sm").fadeToggle(0),$(".social-label").fadeToggle(0),$(".social-media-button").toggleClass("close")}),$('[id^="nav"]').click(function(e){e.stopPropagation()}),$("#download_mobil_program").click(function(){$(".form_download_mobil_program").toggleClass("hidden-xs hidden-sm")})});