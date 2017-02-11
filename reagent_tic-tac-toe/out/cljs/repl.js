// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8567_8581 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8568_8582 = null;
var count__8569_8583 = (0);
var i__8570_8584 = (0);
while(true){
if((i__8570_8584 < count__8569_8583)){
var f_8585 = cljs.core._nth.call(null,chunk__8568_8582,i__8570_8584);
cljs.core.println.call(null,"  ",f_8585);

var G__8586 = seq__8567_8581;
var G__8587 = chunk__8568_8582;
var G__8588 = count__8569_8583;
var G__8589 = (i__8570_8584 + (1));
seq__8567_8581 = G__8586;
chunk__8568_8582 = G__8587;
count__8569_8583 = G__8588;
i__8570_8584 = G__8589;
continue;
} else {
var temp__4425__auto___8590 = cljs.core.seq.call(null,seq__8567_8581);
if(temp__4425__auto___8590){
var seq__8567_8591__$1 = temp__4425__auto___8590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8567_8591__$1)){
var c__8214__auto___8592 = cljs.core.chunk_first.call(null,seq__8567_8591__$1);
var G__8593 = cljs.core.chunk_rest.call(null,seq__8567_8591__$1);
var G__8594 = c__8214__auto___8592;
var G__8595 = cljs.core.count.call(null,c__8214__auto___8592);
var G__8596 = (0);
seq__8567_8581 = G__8593;
chunk__8568_8582 = G__8594;
count__8569_8583 = G__8595;
i__8570_8584 = G__8596;
continue;
} else {
var f_8597 = cljs.core.first.call(null,seq__8567_8591__$1);
cljs.core.println.call(null,"  ",f_8597);

var G__8598 = cljs.core.next.call(null,seq__8567_8591__$1);
var G__8599 = null;
var G__8600 = (0);
var G__8601 = (0);
seq__8567_8581 = G__8598;
chunk__8568_8582 = G__8599;
count__8569_8583 = G__8600;
i__8570_8584 = G__8601;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8602 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7411__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7411__auto__)){
return or__7411__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8602);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8602)))?cljs.core.second.call(null,arglists_8602):arglists_8602));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8571 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8572 = null;
var count__8573 = (0);
var i__8574 = (0);
while(true){
if((i__8574 < count__8573)){
var vec__8575 = cljs.core._nth.call(null,chunk__8572,i__8574);
var name = cljs.core.nth.call(null,vec__8575,(0),null);
var map__8576 = cljs.core.nth.call(null,vec__8575,(1),null);
var map__8576__$1 = ((((!((map__8576 == null)))?((((map__8576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8576):map__8576);
var doc = cljs.core.get.call(null,map__8576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8603 = seq__8571;
var G__8604 = chunk__8572;
var G__8605 = count__8573;
var G__8606 = (i__8574 + (1));
seq__8571 = G__8603;
chunk__8572 = G__8604;
count__8573 = G__8605;
i__8574 = G__8606;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8571);
if(temp__4425__auto__){
var seq__8571__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8571__$1)){
var c__8214__auto__ = cljs.core.chunk_first.call(null,seq__8571__$1);
var G__8607 = cljs.core.chunk_rest.call(null,seq__8571__$1);
var G__8608 = c__8214__auto__;
var G__8609 = cljs.core.count.call(null,c__8214__auto__);
var G__8610 = (0);
seq__8571 = G__8607;
chunk__8572 = G__8608;
count__8573 = G__8609;
i__8574 = G__8610;
continue;
} else {
var vec__8578 = cljs.core.first.call(null,seq__8571__$1);
var name = cljs.core.nth.call(null,vec__8578,(0),null);
var map__8579 = cljs.core.nth.call(null,vec__8578,(1),null);
var map__8579__$1 = ((((!((map__8579 == null)))?((((map__8579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8579):map__8579);
var doc = cljs.core.get.call(null,map__8579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8611 = cljs.core.next.call(null,seq__8571__$1);
var G__8612 = null;
var G__8613 = (0);
var G__8614 = (0);
seq__8571 = G__8611;
chunk__8572 = G__8612;
count__8573 = G__8613;
i__8574 = G__8614;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map