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
var or__4988__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
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
var _STAR_always_update_STAR_7747 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_7747){
return (function (){
var _STAR_always_update_STAR_7748 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7748;
}});})(_STAR_always_update_STAR_7747))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7747;
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
var args7749 = [];
var len__6046__auto___7752 = arguments.length;
var i__6047__auto___7753 = (0);
while(true){
if((i__6047__auto___7753 < len__6046__auto___7752)){
args7749.push((arguments[i__6047__auto___7753]));

var G__7754 = (i__6047__auto___7753 + (1));
i__6047__auto___7753 = G__7754;
continue;
} else {
}
break;
}

var G__7751 = args7749.length;
switch (G__7751) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7749.length)].join('')));

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

var seq__7760_7764 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7761_7765 = null;
var count__7762_7766 = (0);
var i__7763_7767 = (0);
while(true){
if((i__7763_7767 < count__7762_7766)){
var v_7768 = cljs.core._nth.call(null,chunk__7761_7765,i__7763_7767);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7768);

var G__7769 = seq__7760_7764;
var G__7770 = chunk__7761_7765;
var G__7771 = count__7762_7766;
var G__7772 = (i__7763_7767 + (1));
seq__7760_7764 = G__7769;
chunk__7761_7765 = G__7770;
count__7762_7766 = G__7771;
i__7763_7767 = G__7772;
continue;
} else {
var temp__4425__auto___7773 = cljs.core.seq.call(null,seq__7760_7764);
if(temp__4425__auto___7773){
var seq__7760_7774__$1 = temp__4425__auto___7773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7760_7774__$1)){
var c__5791__auto___7775 = cljs.core.chunk_first.call(null,seq__7760_7774__$1);
var G__7776 = cljs.core.chunk_rest.call(null,seq__7760_7774__$1);
var G__7777 = c__5791__auto___7775;
var G__7778 = cljs.core.count.call(null,c__5791__auto___7775);
var G__7779 = (0);
seq__7760_7764 = G__7776;
chunk__7761_7765 = G__7777;
count__7762_7766 = G__7778;
i__7763_7767 = G__7779;
continue;
} else {
var v_7780 = cljs.core.first.call(null,seq__7760_7774__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7780);

var G__7781 = cljs.core.next.call(null,seq__7760_7774__$1);
var G__7782 = null;
var G__7783 = (0);
var G__7784 = (0);
seq__7760_7764 = G__7781;
chunk__7761_7765 = G__7782;
count__7762_7766 = G__7783;
i__7763_7767 = G__7784;
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