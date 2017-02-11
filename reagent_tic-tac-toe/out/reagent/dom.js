// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7411__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7411__auto__)){
return or__7411__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8992 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8992){
return (function (){
var _STAR_always_update_STAR_8993 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8993;
}});})(_STAR_always_update_STAR_8992))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8992;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8994 = [];
var len__8469__auto___8997 = arguments.length;
var i__8470__auto___8998 = (0);
while(true){
if((i__8470__auto___8998 < len__8469__auto___8997)){
args8994.push((arguments[i__8470__auto___8998]));

var G__8999 = (i__8470__auto___8998 + (1));
i__8470__auto___8998 = G__8999;
continue;
} else {
}
break;
}

var G__8996 = args8994.length;
switch (G__8996) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8994.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9005_9009 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__9006_9010 = null;
var count__9007_9011 = (0);
var i__9008_9012 = (0);
while(true){
if((i__9008_9012 < count__9007_9011)){
var v_9013 = cljs.core._nth.call(null,chunk__9006_9010,i__9008_9012);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9013);

var G__9014 = seq__9005_9009;
var G__9015 = chunk__9006_9010;
var G__9016 = count__9007_9011;
var G__9017 = (i__9008_9012 + (1));
seq__9005_9009 = G__9014;
chunk__9006_9010 = G__9015;
count__9007_9011 = G__9016;
i__9008_9012 = G__9017;
continue;
} else {
var temp__4425__auto___9018 = cljs.core.seq.call(null,seq__9005_9009);
if(temp__4425__auto___9018){
var seq__9005_9019__$1 = temp__4425__auto___9018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9005_9019__$1)){
var c__8214__auto___9020 = cljs.core.chunk_first.call(null,seq__9005_9019__$1);
var G__9021 = cljs.core.chunk_rest.call(null,seq__9005_9019__$1);
var G__9022 = c__8214__auto___9020;
var G__9023 = cljs.core.count.call(null,c__8214__auto___9020);
var G__9024 = (0);
seq__9005_9009 = G__9021;
chunk__9006_9010 = G__9022;
count__9007_9011 = G__9023;
i__9008_9012 = G__9024;
continue;
} else {
var v_9025 = cljs.core.first.call(null,seq__9005_9019__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9025);

var G__9026 = cljs.core.next.call(null,seq__9005_9019__$1);
var G__9027 = null;
var G__9028 = (0);
var G__9029 = (0);
seq__9005_9009 = G__9026;
chunk__9006_9010 = G__9027;
count__9007_9011 = G__9028;
i__9008_9012 = G__9029;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map