// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6371_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6371_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4425__auto__)){
var changed__$1 = temp__4425__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6376 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6377 = null;
var count__6378 = (0);
var i__6379 = (0);
while(true){
if((i__6379 < count__6378)){
var s = cljs.core._nth.call(null,chunk__6377,i__6379);
var temp__4425__auto___6380 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6380)){
var sheet_6381 = temp__4425__auto___6380;
var temp__4425__auto___6382__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_6381.href,changed);
if(cljs.core.truth_(temp__4425__auto___6382__$1)){
var href_uri_6383 = temp__4425__auto___6382__$1;
sheet_6381.ownerNode.href = href_uri_6383.makeUnique().toString();
} else {
}
} else {
}

var G__6384 = seq__6376;
var G__6385 = chunk__6377;
var G__6386 = count__6378;
var G__6387 = (i__6379 + (1));
seq__6376 = G__6384;
chunk__6377 = G__6385;
count__6378 = G__6386;
i__6379 = G__6387;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6376);
if(temp__4425__auto__){
var seq__6376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6376__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6376__$1);
var G__6388 = cljs.core.chunk_rest.call(null,seq__6376__$1);
var G__6389 = c__5791__auto__;
var G__6390 = cljs.core.count.call(null,c__5791__auto__);
var G__6391 = (0);
seq__6376 = G__6388;
chunk__6377 = G__6389;
count__6378 = G__6390;
i__6379 = G__6391;
continue;
} else {
var s = cljs.core.first.call(null,seq__6376__$1);
var temp__4425__auto___6392__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6392__$1)){
var sheet_6393 = temp__4425__auto___6392__$1;
var temp__4425__auto___6394__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_6393.href,changed);
if(cljs.core.truth_(temp__4425__auto___6394__$2)){
var href_uri_6395 = temp__4425__auto___6394__$2;
sheet_6393.ownerNode.href = href_uri_6395.makeUnique().toString();
} else {
}
} else {
}

var G__6396 = cljs.core.next.call(null,seq__6376__$1);
var G__6397 = null;
var G__6398 = (0);
var G__6399 = (0);
seq__6376 = G__6396;
chunk__6377 = G__6397;
count__6378 = G__6398;
i__6379 = G__6399;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6404 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6405 = null;
var count__6406 = (0);
var i__6407 = (0);
while(true){
if((i__6407 < count__6406)){
var s = cljs.core._nth.call(null,chunk__6405,i__6407);
var temp__4425__auto___6408 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6408)){
var image_6409 = temp__4425__auto___6408;
var temp__4425__auto___6410__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_6409.src,changed);
if(cljs.core.truth_(temp__4425__auto___6410__$1)){
var href_uri_6411 = temp__4425__auto___6410__$1;
image_6409.src = href_uri_6411.makeUnique().toString();
} else {
}
} else {
}

var G__6412 = seq__6404;
var G__6413 = chunk__6405;
var G__6414 = count__6406;
var G__6415 = (i__6407 + (1));
seq__6404 = G__6412;
chunk__6405 = G__6413;
count__6406 = G__6414;
i__6407 = G__6415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6404);
if(temp__4425__auto__){
var seq__6404__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6404__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6404__$1);
var G__6416 = cljs.core.chunk_rest.call(null,seq__6404__$1);
var G__6417 = c__5791__auto__;
var G__6418 = cljs.core.count.call(null,c__5791__auto__);
var G__6419 = (0);
seq__6404 = G__6416;
chunk__6405 = G__6417;
count__6406 = G__6418;
i__6407 = G__6419;
continue;
} else {
var s = cljs.core.first.call(null,seq__6404__$1);
var temp__4425__auto___6420__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6420__$1)){
var image_6421 = temp__4425__auto___6420__$1;
var temp__4425__auto___6422__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_6421.src,changed);
if(cljs.core.truth_(temp__4425__auto___6422__$2)){
var href_uri_6423 = temp__4425__auto___6422__$2;
image_6421.src = href_uri_6423.makeUnique().toString();
} else {
}
} else {
}

var G__6424 = cljs.core.next.call(null,seq__6404__$1);
var G__6425 = null;
var G__6426 = (0);
var G__6427 = (0);
seq__6404 = G__6424;
chunk__6405 = G__6425;
count__6406 = G__6426;
i__6407 = G__6427;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6430){
var map__6433 = p__6430;
var map__6433__$1 = ((((!((map__6433 == null)))?((((map__6433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6433):map__6433);
var on_jsload = cljs.core.get.call(null,map__6433__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6433,map__6433__$1,on_jsload){
return (function (p1__6428_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6428_SHARP_,".js");
});})(map__6433,map__6433__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6433,map__6433__$1,on_jsload){
return (function (p1__6429_SHARP_){
return goog.Uri.parse(p1__6429_SHARP_).makeUnique();
});})(js_files,map__6433,map__6433__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6433,map__6433__$1,on_jsload){
return (function() { 
var G__6435__delegate = function (_){
return on_jsload.call(null);
};
var G__6435 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6436__i = 0, G__6436__a = new Array(arguments.length -  0);
while (G__6436__i < G__6436__a.length) {G__6436__a[G__6436__i] = arguments[G__6436__i + 0]; ++G__6436__i;}
  _ = new cljs.core.IndexedSeq(G__6436__a,0);
} 
return G__6435__delegate.call(this,_);};
G__6435.cljs$lang$maxFixedArity = 0;
G__6435.cljs$lang$applyTo = (function (arglist__6437){
var _ = cljs.core.seq(arglist__6437);
return G__6435__delegate(_);
});
G__6435.cljs$core$IFn$_invoke$arity$variadic = G__6435__delegate;
return G__6435;
})()
;})(js_files,map__6433,map__6433__$1,on_jsload))
,((function (js_files,map__6433,map__6433__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6433,map__6433__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6442_6446 = cljs.core.seq.call(null,things_to_log);
var chunk__6443_6447 = null;
var count__6444_6448 = (0);
var i__6445_6449 = (0);
while(true){
if((i__6445_6449 < count__6444_6448)){
var t_6450 = cljs.core._nth.call(null,chunk__6443_6447,i__6445_6449);
console.log(t_6450);

var G__6451 = seq__6442_6446;
var G__6452 = chunk__6443_6447;
var G__6453 = count__6444_6448;
var G__6454 = (i__6445_6449 + (1));
seq__6442_6446 = G__6451;
chunk__6443_6447 = G__6452;
count__6444_6448 = G__6453;
i__6445_6449 = G__6454;
continue;
} else {
var temp__4425__auto___6455 = cljs.core.seq.call(null,seq__6442_6446);
if(temp__4425__auto___6455){
var seq__6442_6456__$1 = temp__4425__auto___6455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6442_6456__$1)){
var c__5791__auto___6457 = cljs.core.chunk_first.call(null,seq__6442_6456__$1);
var G__6458 = cljs.core.chunk_rest.call(null,seq__6442_6456__$1);
var G__6459 = c__5791__auto___6457;
var G__6460 = cljs.core.count.call(null,c__5791__auto___6457);
var G__6461 = (0);
seq__6442_6446 = G__6458;
chunk__6443_6447 = G__6459;
count__6444_6448 = G__6460;
i__6445_6449 = G__6461;
continue;
} else {
var t_6462 = cljs.core.first.call(null,seq__6442_6456__$1);
console.log(t_6462);

var G__6463 = cljs.core.next.call(null,seq__6442_6456__$1);
var G__6464 = null;
var G__6465 = (0);
var G__6466 = (0);
seq__6442_6446 = G__6463;
chunk__6443_6447 = G__6464;
count__6444_6448 = G__6465;
i__6445_6449 = G__6466;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__6467_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__6467_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__6469 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__6469);

adzerk.boot_reload.reload.reload_css.call(null,G__6469);

adzerk.boot_reload.reload.reload_img.call(null,G__6469);

return G__6469;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map