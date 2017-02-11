// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__9032__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9033__i = 0, G__9033__a = new Array(arguments.length -  0);
while (G__9033__i < G__9033__a.length) {G__9033__a[G__9033__i] = arguments[G__9033__i + 0]; ++G__9033__i;}
  args = new cljs.core.IndexedSeq(G__9033__a,0);
} 
return G__9032__delegate.call(this,args);};
G__9032.cljs$lang$maxFixedArity = 0;
G__9032.cljs$lang$applyTo = (function (arglist__9034){
var args = cljs.core.seq(arglist__9034);
return G__9032__delegate(args);
});
G__9032.cljs$core$IFn$_invoke$arity$variadic = G__9032__delegate;
return G__9032;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9035__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9036__i = 0, G__9036__a = new Array(arguments.length -  0);
while (G__9036__i < G__9036__a.length) {G__9036__a[G__9036__i] = arguments[G__9036__i + 0]; ++G__9036__i;}
  args = new cljs.core.IndexedSeq(G__9036__a,0);
} 
return G__9035__delegate.call(this,args);};
G__9035.cljs$lang$maxFixedArity = 0;
G__9035.cljs$lang$applyTo = (function (arglist__9037){
var args = cljs.core.seq(arglist__9037);
return G__9035__delegate(args);
});
G__9035.cljs$core$IFn$_invoke$arity$variadic = G__9035__delegate;
return G__9035;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map