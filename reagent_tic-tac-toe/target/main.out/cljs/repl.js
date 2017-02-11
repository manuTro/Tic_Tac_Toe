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
var seq__7624_7638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7625_7639 = null;
var count__7626_7640 = (0);
var i__7627_7641 = (0);
while(true){
if((i__7627_7641 < count__7626_7640)){
var f_7642 = cljs.core._nth.call(null,chunk__7625_7639,i__7627_7641);
cljs.core.println.call(null,"  ",f_7642);

var G__7643 = seq__7624_7638;
var G__7644 = chunk__7625_7639;
var G__7645 = count__7626_7640;
var G__7646 = (i__7627_7641 + (1));
seq__7624_7638 = G__7643;
chunk__7625_7639 = G__7644;
count__7626_7640 = G__7645;
i__7627_7641 = G__7646;
continue;
} else {
var temp__4425__auto___7647 = cljs.core.seq.call(null,seq__7624_7638);
if(temp__4425__auto___7647){
var seq__7624_7648__$1 = temp__4425__auto___7647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7624_7648__$1)){
var c__5791__auto___7649 = cljs.core.chunk_first.call(null,seq__7624_7648__$1);
var G__7650 = cljs.core.chunk_rest.call(null,seq__7624_7648__$1);
var G__7651 = c__5791__auto___7649;
var G__7652 = cljs.core.count.call(null,c__5791__auto___7649);
var G__7653 = (0);
seq__7624_7638 = G__7650;
chunk__7625_7639 = G__7651;
count__7626_7640 = G__7652;
i__7627_7641 = G__7653;
continue;
} else {
var f_7654 = cljs.core.first.call(null,seq__7624_7648__$1);
cljs.core.println.call(null,"  ",f_7654);

var G__7655 = cljs.core.next.call(null,seq__7624_7648__$1);
var G__7656 = null;
var G__7657 = (0);
var G__7658 = (0);
seq__7624_7638 = G__7655;
chunk__7625_7639 = G__7656;
count__7626_7640 = G__7657;
i__7627_7641 = G__7658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7659 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7659);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7659)))?cljs.core.second.call(null,arglists_7659):arglists_7659));
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
var seq__7628 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7629 = null;
var count__7630 = (0);
var i__7631 = (0);
while(true){
if((i__7631 < count__7630)){
var vec__7632 = cljs.core._nth.call(null,chunk__7629,i__7631);
var name = cljs.core.nth.call(null,vec__7632,(0),null);
var map__7633 = cljs.core.nth.call(null,vec__7632,(1),null);
var map__7633__$1 = ((((!((map__7633 == null)))?((((map__7633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7633):map__7633);
var doc = cljs.core.get.call(null,map__7633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7660 = seq__7628;
var G__7661 = chunk__7629;
var G__7662 = count__7630;
var G__7663 = (i__7631 + (1));
seq__7628 = G__7660;
chunk__7629 = G__7661;
count__7630 = G__7662;
i__7631 = G__7663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7628);
if(temp__4425__auto__){
var seq__7628__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7628__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7628__$1);
var G__7664 = cljs.core.chunk_rest.call(null,seq__7628__$1);
var G__7665 = c__5791__auto__;
var G__7666 = cljs.core.count.call(null,c__5791__auto__);
var G__7667 = (0);
seq__7628 = G__7664;
chunk__7629 = G__7665;
count__7630 = G__7666;
i__7631 = G__7667;
continue;
} else {
var vec__7635 = cljs.core.first.call(null,seq__7628__$1);
var name = cljs.core.nth.call(null,vec__7635,(0),null);
var map__7636 = cljs.core.nth.call(null,vec__7635,(1),null);
var map__7636__$1 = ((((!((map__7636 == null)))?((((map__7636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7636):map__7636);
var doc = cljs.core.get.call(null,map__7636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7668 = cljs.core.next.call(null,seq__7628__$1);
var G__7669 = null;
var G__7670 = (0);
var G__7671 = (0);
seq__7628 = G__7668;
chunk__7629 = G__7669;
count__7630 = G__7670;
i__7631 = G__7671;
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