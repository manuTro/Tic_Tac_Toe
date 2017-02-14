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
var seq__8125_8139 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8126_8140 = null;
var count__8127_8141 = (0);
var i__8128_8142 = (0);
while(true){
if((i__8128_8142 < count__8127_8141)){
var f_8143 = cljs.core._nth.call(null,chunk__8126_8140,i__8128_8142);
cljs.core.println.call(null,"  ",f_8143);

var G__8144 = seq__8125_8139;
var G__8145 = chunk__8126_8140;
var G__8146 = count__8127_8141;
var G__8147 = (i__8128_8142 + (1));
seq__8125_8139 = G__8144;
chunk__8126_8140 = G__8145;
count__8127_8141 = G__8146;
i__8128_8142 = G__8147;
continue;
} else {
var temp__4425__auto___8148 = cljs.core.seq.call(null,seq__8125_8139);
if(temp__4425__auto___8148){
var seq__8125_8149__$1 = temp__4425__auto___8148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125_8149__$1)){
var c__5791__auto___8150 = cljs.core.chunk_first.call(null,seq__8125_8149__$1);
var G__8151 = cljs.core.chunk_rest.call(null,seq__8125_8149__$1);
var G__8152 = c__5791__auto___8150;
var G__8153 = cljs.core.count.call(null,c__5791__auto___8150);
var G__8154 = (0);
seq__8125_8139 = G__8151;
chunk__8126_8140 = G__8152;
count__8127_8141 = G__8153;
i__8128_8142 = G__8154;
continue;
} else {
var f_8155 = cljs.core.first.call(null,seq__8125_8149__$1);
cljs.core.println.call(null,"  ",f_8155);

var G__8156 = cljs.core.next.call(null,seq__8125_8149__$1);
var G__8157 = null;
var G__8158 = (0);
var G__8159 = (0);
seq__8125_8139 = G__8156;
chunk__8126_8140 = G__8157;
count__8127_8141 = G__8158;
i__8128_8142 = G__8159;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8160 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8160);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8160)))?cljs.core.second.call(null,arglists_8160):arglists_8160));
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
var seq__8129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8130 = null;
var count__8131 = (0);
var i__8132 = (0);
while(true){
if((i__8132 < count__8131)){
var vec__8133 = cljs.core._nth.call(null,chunk__8130,i__8132);
var name = cljs.core.nth.call(null,vec__8133,(0),null);
var map__8134 = cljs.core.nth.call(null,vec__8133,(1),null);
var map__8134__$1 = ((((!((map__8134 == null)))?((((map__8134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8134):map__8134);
var doc = cljs.core.get.call(null,map__8134__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8134__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8161 = seq__8129;
var G__8162 = chunk__8130;
var G__8163 = count__8131;
var G__8164 = (i__8132 + (1));
seq__8129 = G__8161;
chunk__8130 = G__8162;
count__8131 = G__8163;
i__8132 = G__8164;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8129);
if(temp__4425__auto__){
var seq__8129__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8129__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__8129__$1);
var G__8165 = cljs.core.chunk_rest.call(null,seq__8129__$1);
var G__8166 = c__5791__auto__;
var G__8167 = cljs.core.count.call(null,c__5791__auto__);
var G__8168 = (0);
seq__8129 = G__8165;
chunk__8130 = G__8166;
count__8131 = G__8167;
i__8132 = G__8168;
continue;
} else {
var vec__8136 = cljs.core.first.call(null,seq__8129__$1);
var name = cljs.core.nth.call(null,vec__8136,(0),null);
var map__8137 = cljs.core.nth.call(null,vec__8136,(1),null);
var map__8137__$1 = ((((!((map__8137 == null)))?((((map__8137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8137):map__8137);
var doc = cljs.core.get.call(null,map__8137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8169 = cljs.core.next.call(null,seq__8129__$1);
var G__8170 = null;
var G__8171 = (0);
var G__8172 = (0);
seq__8129 = G__8169;
chunk__8130 = G__8170;
count__8131 = G__8171;
i__8132 = G__8172;
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