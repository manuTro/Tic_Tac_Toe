// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_6677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6679,opt_wrapper_6677,table_section_wrapper_6678,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6677,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6678,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6678,cell_wrapper_6679,table_section_wrapper_6678,table_section_wrapper_6678]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4976__auto__ = div.firstChild;
if(cljs.core.truth_(and__4976__auto__)){
return div.firstChild.childNodes;
} else {
return and__4976__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6684 = cljs.core.seq.call(null,tbody);
var chunk__6685 = null;
var count__6686 = (0);
var i__6687 = (0);
while(true){
if((i__6687 < count__6686)){
var child = cljs.core._nth.call(null,chunk__6685,i__6687);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6688 = seq__6684;
var G__6689 = chunk__6685;
var G__6690 = count__6686;
var G__6691 = (i__6687 + (1));
seq__6684 = G__6688;
chunk__6685 = G__6689;
count__6686 = G__6690;
i__6687 = G__6691;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6684);
if(temp__4425__auto__){
var seq__6684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6684__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6684__$1);
var G__6692 = cljs.core.chunk_rest.call(null,seq__6684__$1);
var G__6693 = c__5791__auto__;
var G__6694 = cljs.core.count.call(null,c__5791__auto__);
var G__6695 = (0);
seq__6684 = G__6692;
chunk__6685 = G__6693;
count__6686 = G__6694;
i__6687 = G__6695;
continue;
} else {
var child = cljs.core.first.call(null,seq__6684__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6696 = cljs.core.next.call(null,seq__6684__$1);
var G__6697 = null;
var G__6698 = (0);
var G__6699 = (0);
seq__6684 = G__6696;
chunk__6685 = G__6697;
count__6686 = G__6698;
i__6687 = G__6699;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__6701 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__6701,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6701,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6701,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6702 = wrapper.lastChild;
var G__6703 = (level - (1));
wrapper = G__6702;
level = G__6703;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.core.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4976__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__4976__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.core.re_html,s))){
return domina.core.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});
domina.core.nodes;
domina.core.single_node;

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__5643__auto__ = (((content == null))?null:content);
var m__5644__auto__ = (domina.core.nodes[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,content);
} else {
var m__5644__auto____$1 = (domina.core.nodes["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__5643__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5644__auto__ = (domina.core.single_node[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,nodeseq);
} else {
var m__5644__auto____$1 = (domina.core.single_node["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6705 = arguments.length;
var i__6047__auto___6706 = (0);
while(true){
if((i__6047__auto___6706 < len__6046__auto___6705)){
args__6053__auto__.push((arguments[i__6047__auto___6706]));

var G__6707 = (i__6047__auto___6706 + (1));
i__6047__auto___6706 = G__6707;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__4976__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__4976__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__4976__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq6704){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6704));
});
domina.core.log = (function domina$core$log(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6709 = arguments.length;
var i__6047__auto___6710 = (0);
while(true){
if((i__6047__auto___6710 < len__6046__auto___6709)){
args__6053__auto__.push((arguments[i__6047__auto___6710]));

var G__6711 = (i__6047__auto___6710 + (1));
i__6047__auto___6710 = G__6711;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq6708){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6708));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.core.normalize_seq;
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
return domina.core.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.core.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6713 = arguments.length;
var i__6047__auto___6714 = (0);
while(true){
if((i__6047__auto___6714 < len__6046__auto___6713)){
args__6053__auto__.push((arguments[i__6047__auto___6714]));

var G__6715 = (i__6047__auto___6714 + (1));
i__6047__auto___6714 = G__6715;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq6712){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6712));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.core.common_ancestor.call(null,ancestor_content,descendant_content),domina.core.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.call(null,(function (p1__6716_SHARP_){
return p1__6716_SHARP_.cloneNode(true);
}),domina.core.nodes.call(null,content));
});
domina.core.apply_with_cloning;
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
domina.core.apply_with_cloning.call(null,(function (p1__6717_SHARP_,p2__6718_SHARP_){
return goog.dom.insertChildAt(p1__6717_SHARP_,p2__6718_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6720_SHARP_,p2__6719_SHARP_){
return goog.dom.insertSiblingBefore(p2__6719_SHARP_,p1__6720_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6722_SHARP_,p2__6721_SHARP_){
return goog.dom.insertSiblingAfter(p2__6721_SHARP_,p1__6722_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6724_SHARP_,p2__6723_SHARP_){
return goog.dom.replaceNode(p2__6723_SHARP_,p1__6724_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.core.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = goog.style.getStyle(domina.core.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6732 = arguments.length;
var i__6047__auto___6733 = (0);
while(true){
if((i__6047__auto___6733 < len__6046__auto___6732)){
args__6053__auto__.push((arguments[i__6047__auto___6733]));

var G__6734 = (i__6047__auto___6733 + (1));
i__6047__auto___6733 = G__6734;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6728_6735 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6729_6736 = null;
var count__6730_6737 = (0);
var i__6731_6738 = (0);
while(true){
if((i__6731_6738 < count__6730_6737)){
var n_6739 = cljs.core._nth.call(null,chunk__6729_6736,i__6731_6738);
goog.style.setStyle(n_6739,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6740 = seq__6728_6735;
var G__6741 = chunk__6729_6736;
var G__6742 = count__6730_6737;
var G__6743 = (i__6731_6738 + (1));
seq__6728_6735 = G__6740;
chunk__6729_6736 = G__6741;
count__6730_6737 = G__6742;
i__6731_6738 = G__6743;
continue;
} else {
var temp__4425__auto___6744 = cljs.core.seq.call(null,seq__6728_6735);
if(temp__4425__auto___6744){
var seq__6728_6745__$1 = temp__4425__auto___6744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6728_6745__$1)){
var c__5791__auto___6746 = cljs.core.chunk_first.call(null,seq__6728_6745__$1);
var G__6747 = cljs.core.chunk_rest.call(null,seq__6728_6745__$1);
var G__6748 = c__5791__auto___6746;
var G__6749 = cljs.core.count.call(null,c__5791__auto___6746);
var G__6750 = (0);
seq__6728_6735 = G__6747;
chunk__6729_6736 = G__6748;
count__6730_6737 = G__6749;
i__6731_6738 = G__6750;
continue;
} else {
var n_6751 = cljs.core.first.call(null,seq__6728_6745__$1);
goog.style.setStyle(n_6751,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6752 = cljs.core.next.call(null,seq__6728_6745__$1);
var G__6753 = null;
var G__6754 = (0);
var G__6755 = (0);
seq__6728_6735 = G__6752;
chunk__6729_6736 = G__6753;
count__6730_6737 = G__6754;
i__6731_6738 = G__6755;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6725){
var G__6726 = cljs.core.first.call(null,seq6725);
var seq6725__$1 = cljs.core.next.call(null,seq6725);
var G__6727 = cljs.core.first.call(null,seq6725__$1);
var seq6725__$2 = cljs.core.next.call(null,seq6725__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6726,G__6727,seq6725__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6763 = arguments.length;
var i__6047__auto___6764 = (0);
while(true){
if((i__6047__auto___6764 < len__6046__auto___6763)){
args__6053__auto__.push((arguments[i__6047__auto___6764]));

var G__6765 = (i__6047__auto___6764 + (1));
i__6047__auto___6764 = G__6765;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6759_6766 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6760_6767 = null;
var count__6761_6768 = (0);
var i__6762_6769 = (0);
while(true){
if((i__6762_6769 < count__6761_6768)){
var n_6770 = cljs.core._nth.call(null,chunk__6760_6767,i__6762_6769);
n_6770.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6771 = seq__6759_6766;
var G__6772 = chunk__6760_6767;
var G__6773 = count__6761_6768;
var G__6774 = (i__6762_6769 + (1));
seq__6759_6766 = G__6771;
chunk__6760_6767 = G__6772;
count__6761_6768 = G__6773;
i__6762_6769 = G__6774;
continue;
} else {
var temp__4425__auto___6775 = cljs.core.seq.call(null,seq__6759_6766);
if(temp__4425__auto___6775){
var seq__6759_6776__$1 = temp__4425__auto___6775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6759_6776__$1)){
var c__5791__auto___6777 = cljs.core.chunk_first.call(null,seq__6759_6776__$1);
var G__6778 = cljs.core.chunk_rest.call(null,seq__6759_6776__$1);
var G__6779 = c__5791__auto___6777;
var G__6780 = cljs.core.count.call(null,c__5791__auto___6777);
var G__6781 = (0);
seq__6759_6766 = G__6778;
chunk__6760_6767 = G__6779;
count__6761_6768 = G__6780;
i__6762_6769 = G__6781;
continue;
} else {
var n_6782 = cljs.core.first.call(null,seq__6759_6776__$1);
n_6782.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6783 = cljs.core.next.call(null,seq__6759_6776__$1);
var G__6784 = null;
var G__6785 = (0);
var G__6786 = (0);
seq__6759_6766 = G__6783;
chunk__6760_6767 = G__6784;
count__6761_6768 = G__6785;
i__6762_6769 = G__6786;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6756){
var G__6757 = cljs.core.first.call(null,seq6756);
var seq6756__$1 = cljs.core.next.call(null,seq6756);
var G__6758 = cljs.core.first.call(null,seq6756__$1);
var seq6756__$2 = cljs.core.next.call(null,seq6756__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6757,G__6758,seq6756__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__6791_6795 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6792_6796 = null;
var count__6793_6797 = (0);
var i__6794_6798 = (0);
while(true){
if((i__6794_6798 < count__6793_6797)){
var n_6799 = cljs.core._nth.call(null,chunk__6792_6796,i__6794_6798);
n_6799.removeAttribute(cljs.core.name.call(null,name));

var G__6800 = seq__6791_6795;
var G__6801 = chunk__6792_6796;
var G__6802 = count__6793_6797;
var G__6803 = (i__6794_6798 + (1));
seq__6791_6795 = G__6800;
chunk__6792_6796 = G__6801;
count__6793_6797 = G__6802;
i__6794_6798 = G__6803;
continue;
} else {
var temp__4425__auto___6804 = cljs.core.seq.call(null,seq__6791_6795);
if(temp__4425__auto___6804){
var seq__6791_6805__$1 = temp__4425__auto___6804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6791_6805__$1)){
var c__5791__auto___6806 = cljs.core.chunk_first.call(null,seq__6791_6805__$1);
var G__6807 = cljs.core.chunk_rest.call(null,seq__6791_6805__$1);
var G__6808 = c__5791__auto___6806;
var G__6809 = cljs.core.count.call(null,c__5791__auto___6806);
var G__6810 = (0);
seq__6791_6795 = G__6807;
chunk__6792_6796 = G__6808;
count__6793_6797 = G__6809;
i__6794_6798 = G__6810;
continue;
} else {
var n_6811 = cljs.core.first.call(null,seq__6791_6805__$1);
n_6811.removeAttribute(cljs.core.name.call(null,name));

var G__6812 = cljs.core.next.call(null,seq__6791_6805__$1);
var G__6813 = null;
var G__6814 = (0);
var G__6815 = (0);
seq__6791_6795 = G__6812;
chunk__6792_6796 = G__6813;
count__6793_6797 = G__6814;
i__6794_6798 = G__6815;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__6817 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6817,(0),null);
var v = cljs.core.nth.call(null,vec__6817,(1),null);
if(cljs.core.truth_((function (){var and__4976__auto__ = k;
if(cljs.core.truth_(and__4976__auto__)){
return v;
} else {
return and__4976__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__6818_SHARP_){
var attr = attrs__$1.item(p1__6818_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__6825_6831 = cljs.core.seq.call(null,styles);
var chunk__6826_6832 = null;
var count__6827_6833 = (0);
var i__6828_6834 = (0);
while(true){
if((i__6828_6834 < count__6827_6833)){
var vec__6829_6835 = cljs.core._nth.call(null,chunk__6826_6832,i__6828_6834);
var name_6836 = cljs.core.nth.call(null,vec__6829_6835,(0),null);
var value_6837 = cljs.core.nth.call(null,vec__6829_6835,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6836,value_6837);

var G__6838 = seq__6825_6831;
var G__6839 = chunk__6826_6832;
var G__6840 = count__6827_6833;
var G__6841 = (i__6828_6834 + (1));
seq__6825_6831 = G__6838;
chunk__6826_6832 = G__6839;
count__6827_6833 = G__6840;
i__6828_6834 = G__6841;
continue;
} else {
var temp__4425__auto___6842 = cljs.core.seq.call(null,seq__6825_6831);
if(temp__4425__auto___6842){
var seq__6825_6843__$1 = temp__4425__auto___6842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6825_6843__$1)){
var c__5791__auto___6844 = cljs.core.chunk_first.call(null,seq__6825_6843__$1);
var G__6845 = cljs.core.chunk_rest.call(null,seq__6825_6843__$1);
var G__6846 = c__5791__auto___6844;
var G__6847 = cljs.core.count.call(null,c__5791__auto___6844);
var G__6848 = (0);
seq__6825_6831 = G__6845;
chunk__6826_6832 = G__6846;
count__6827_6833 = G__6847;
i__6828_6834 = G__6848;
continue;
} else {
var vec__6830_6849 = cljs.core.first.call(null,seq__6825_6843__$1);
var name_6850 = cljs.core.nth.call(null,vec__6830_6849,(0),null);
var value_6851 = cljs.core.nth.call(null,vec__6830_6849,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6850,value_6851);

var G__6852 = cljs.core.next.call(null,seq__6825_6843__$1);
var G__6853 = null;
var G__6854 = (0);
var G__6855 = (0);
seq__6825_6831 = G__6852;
chunk__6826_6832 = G__6853;
count__6827_6833 = G__6854;
i__6828_6834 = G__6855;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__6862_6868 = cljs.core.seq.call(null,attrs);
var chunk__6863_6869 = null;
var count__6864_6870 = (0);
var i__6865_6871 = (0);
while(true){
if((i__6865_6871 < count__6864_6870)){
var vec__6866_6872 = cljs.core._nth.call(null,chunk__6863_6869,i__6865_6871);
var name_6873 = cljs.core.nth.call(null,vec__6866_6872,(0),null);
var value_6874 = cljs.core.nth.call(null,vec__6866_6872,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6873,value_6874);

var G__6875 = seq__6862_6868;
var G__6876 = chunk__6863_6869;
var G__6877 = count__6864_6870;
var G__6878 = (i__6865_6871 + (1));
seq__6862_6868 = G__6875;
chunk__6863_6869 = G__6876;
count__6864_6870 = G__6877;
i__6865_6871 = G__6878;
continue;
} else {
var temp__4425__auto___6879 = cljs.core.seq.call(null,seq__6862_6868);
if(temp__4425__auto___6879){
var seq__6862_6880__$1 = temp__4425__auto___6879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6862_6880__$1)){
var c__5791__auto___6881 = cljs.core.chunk_first.call(null,seq__6862_6880__$1);
var G__6882 = cljs.core.chunk_rest.call(null,seq__6862_6880__$1);
var G__6883 = c__5791__auto___6881;
var G__6884 = cljs.core.count.call(null,c__5791__auto___6881);
var G__6885 = (0);
seq__6862_6868 = G__6882;
chunk__6863_6869 = G__6883;
count__6864_6870 = G__6884;
i__6865_6871 = G__6885;
continue;
} else {
var vec__6867_6886 = cljs.core.first.call(null,seq__6862_6880__$1);
var name_6887 = cljs.core.nth.call(null,vec__6867_6886,(0),null);
var value_6888 = cljs.core.nth.call(null,vec__6867_6886,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6887,value_6888);

var G__6889 = cljs.core.next.call(null,seq__6862_6880__$1);
var G__6890 = null;
var G__6891 = (0);
var G__6892 = (0);
seq__6862_6868 = G__6889;
chunk__6863_6869 = G__6890;
count__6864_6870 = G__6891;
i__6865_6871 = G__6892;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.core.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__6897_6901 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6898_6902 = null;
var count__6899_6903 = (0);
var i__6900_6904 = (0);
while(true){
if((i__6900_6904 < count__6899_6903)){
var node_6905 = cljs.core._nth.call(null,chunk__6898_6902,i__6900_6904);
goog.dom.classes.add(node_6905,class$);

var G__6906 = seq__6897_6901;
var G__6907 = chunk__6898_6902;
var G__6908 = count__6899_6903;
var G__6909 = (i__6900_6904 + (1));
seq__6897_6901 = G__6906;
chunk__6898_6902 = G__6907;
count__6899_6903 = G__6908;
i__6900_6904 = G__6909;
continue;
} else {
var temp__4425__auto___6910 = cljs.core.seq.call(null,seq__6897_6901);
if(temp__4425__auto___6910){
var seq__6897_6911__$1 = temp__4425__auto___6910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6897_6911__$1)){
var c__5791__auto___6912 = cljs.core.chunk_first.call(null,seq__6897_6911__$1);
var G__6913 = cljs.core.chunk_rest.call(null,seq__6897_6911__$1);
var G__6914 = c__5791__auto___6912;
var G__6915 = cljs.core.count.call(null,c__5791__auto___6912);
var G__6916 = (0);
seq__6897_6901 = G__6913;
chunk__6898_6902 = G__6914;
count__6899_6903 = G__6915;
i__6900_6904 = G__6916;
continue;
} else {
var node_6917 = cljs.core.first.call(null,seq__6897_6911__$1);
goog.dom.classes.add(node_6917,class$);

var G__6918 = cljs.core.next.call(null,seq__6897_6911__$1);
var G__6919 = null;
var G__6920 = (0);
var G__6921 = (0);
seq__6897_6901 = G__6918;
chunk__6898_6902 = G__6919;
count__6899_6903 = G__6920;
i__6900_6904 = G__6921;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__6926_6930 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6927_6931 = null;
var count__6928_6932 = (0);
var i__6929_6933 = (0);
while(true){
if((i__6929_6933 < count__6928_6932)){
var node_6934 = cljs.core._nth.call(null,chunk__6927_6931,i__6929_6933);
goog.dom.classes.remove(node_6934,class$);

var G__6935 = seq__6926_6930;
var G__6936 = chunk__6927_6931;
var G__6937 = count__6928_6932;
var G__6938 = (i__6929_6933 + (1));
seq__6926_6930 = G__6935;
chunk__6927_6931 = G__6936;
count__6928_6932 = G__6937;
i__6929_6933 = G__6938;
continue;
} else {
var temp__4425__auto___6939 = cljs.core.seq.call(null,seq__6926_6930);
if(temp__4425__auto___6939){
var seq__6926_6940__$1 = temp__4425__auto___6939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6926_6940__$1)){
var c__5791__auto___6941 = cljs.core.chunk_first.call(null,seq__6926_6940__$1);
var G__6942 = cljs.core.chunk_rest.call(null,seq__6926_6940__$1);
var G__6943 = c__5791__auto___6941;
var G__6944 = cljs.core.count.call(null,c__5791__auto___6941);
var G__6945 = (0);
seq__6926_6930 = G__6942;
chunk__6927_6931 = G__6943;
count__6928_6932 = G__6944;
i__6929_6933 = G__6945;
continue;
} else {
var node_6946 = cljs.core.first.call(null,seq__6926_6940__$1);
goog.dom.classes.remove(node_6946,class$);

var G__6947 = cljs.core.next.call(null,seq__6926_6940__$1);
var G__6948 = null;
var G__6949 = (0);
var G__6950 = (0);
seq__6926_6930 = G__6947;
chunk__6927_6931 = G__6948;
count__6928_6932 = G__6949;
i__6929_6933 = G__6950;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__6955_6959 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6956_6960 = null;
var count__6957_6961 = (0);
var i__6958_6962 = (0);
while(true){
if((i__6958_6962 < count__6957_6961)){
var node_6963 = cljs.core._nth.call(null,chunk__6956_6960,i__6958_6962);
goog.dom.classes.toggle(node_6963,class$);

var G__6964 = seq__6955_6959;
var G__6965 = chunk__6956_6960;
var G__6966 = count__6957_6961;
var G__6967 = (i__6958_6962 + (1));
seq__6955_6959 = G__6964;
chunk__6956_6960 = G__6965;
count__6957_6961 = G__6966;
i__6958_6962 = G__6967;
continue;
} else {
var temp__4425__auto___6968 = cljs.core.seq.call(null,seq__6955_6959);
if(temp__4425__auto___6968){
var seq__6955_6969__$1 = temp__4425__auto___6968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6955_6969__$1)){
var c__5791__auto___6970 = cljs.core.chunk_first.call(null,seq__6955_6969__$1);
var G__6971 = cljs.core.chunk_rest.call(null,seq__6955_6969__$1);
var G__6972 = c__5791__auto___6970;
var G__6973 = cljs.core.count.call(null,c__5791__auto___6970);
var G__6974 = (0);
seq__6955_6959 = G__6971;
chunk__6956_6960 = G__6972;
count__6957_6961 = G__6973;
i__6958_6962 = G__6974;
continue;
} else {
var node_6975 = cljs.core.first.call(null,seq__6955_6969__$1);
goog.dom.classes.toggle(node_6975,class$);

var G__6976 = cljs.core.next.call(null,seq__6955_6969__$1);
var G__6977 = null;
var G__6978 = (0);
var G__6979 = (0);
seq__6955_6959 = G__6976;
chunk__6956_6960 = G__6977;
count__6957_6961 = G__6978;
i__6958_6962 = G__6979;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.core.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_6988__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6984_6989 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6985_6990 = null;
var count__6986_6991 = (0);
var i__6987_6992 = (0);
while(true){
if((i__6987_6992 < count__6986_6991)){
var node_6993 = cljs.core._nth.call(null,chunk__6985_6990,i__6987_6992);
goog.dom.classes.set(node_6993,classes_6988__$1);

var G__6994 = seq__6984_6989;
var G__6995 = chunk__6985_6990;
var G__6996 = count__6986_6991;
var G__6997 = (i__6987_6992 + (1));
seq__6984_6989 = G__6994;
chunk__6985_6990 = G__6995;
count__6986_6991 = G__6996;
i__6987_6992 = G__6997;
continue;
} else {
var temp__4425__auto___6998 = cljs.core.seq.call(null,seq__6984_6989);
if(temp__4425__auto___6998){
var seq__6984_6999__$1 = temp__4425__auto___6998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6984_6999__$1)){
var c__5791__auto___7000 = cljs.core.chunk_first.call(null,seq__6984_6999__$1);
var G__7001 = cljs.core.chunk_rest.call(null,seq__6984_6999__$1);
var G__7002 = c__5791__auto___7000;
var G__7003 = cljs.core.count.call(null,c__5791__auto___7000);
var G__7004 = (0);
seq__6984_6989 = G__7001;
chunk__6985_6990 = G__7002;
count__6986_6991 = G__7003;
i__6987_6992 = G__7004;
continue;
} else {
var node_7005 = cljs.core.first.call(null,seq__6984_6999__$1);
goog.dom.classes.set(node_7005,classes_6988__$1);

var G__7006 = cljs.core.next.call(null,seq__6984_6999__$1);
var G__7007 = null;
var G__7008 = (0);
var G__7009 = (0);
seq__6984_6989 = G__7006;
chunk__6985_6990 = G__7007;
count__6986_6991 = G__7008;
i__6987_6992 = G__7009;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.core.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__7014_7018 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7015_7019 = null;
var count__7016_7020 = (0);
var i__7017_7021 = (0);
while(true){
if((i__7017_7021 < count__7016_7020)){
var node_7022 = cljs.core._nth.call(null,chunk__7015_7019,i__7017_7021);
goog.dom.setTextContent(node_7022,value);

var G__7023 = seq__7014_7018;
var G__7024 = chunk__7015_7019;
var G__7025 = count__7016_7020;
var G__7026 = (i__7017_7021 + (1));
seq__7014_7018 = G__7023;
chunk__7015_7019 = G__7024;
count__7016_7020 = G__7025;
i__7017_7021 = G__7026;
continue;
} else {
var temp__4425__auto___7027 = cljs.core.seq.call(null,seq__7014_7018);
if(temp__4425__auto___7027){
var seq__7014_7028__$1 = temp__4425__auto___7027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7014_7028__$1)){
var c__5791__auto___7029 = cljs.core.chunk_first.call(null,seq__7014_7028__$1);
var G__7030 = cljs.core.chunk_rest.call(null,seq__7014_7028__$1);
var G__7031 = c__5791__auto___7029;
var G__7032 = cljs.core.count.call(null,c__5791__auto___7029);
var G__7033 = (0);
seq__7014_7018 = G__7030;
chunk__7015_7019 = G__7031;
count__7016_7020 = G__7032;
i__7017_7021 = G__7033;
continue;
} else {
var node_7034 = cljs.core.first.call(null,seq__7014_7028__$1);
goog.dom.setTextContent(node_7034,value);

var G__7035 = cljs.core.next.call(null,seq__7014_7028__$1);
var G__7036 = null;
var G__7037 = (0);
var G__7038 = (0);
seq__7014_7018 = G__7035;
chunk__7015_7019 = G__7036;
count__7016_7020 = G__7037;
i__7017_7021 = G__7038;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
return goog.dom.forms.getValue(domina.core.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__7043_7047 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7044_7048 = null;
var count__7045_7049 = (0);
var i__7046_7050 = (0);
while(true){
if((i__7046_7050 < count__7045_7049)){
var node_7051 = cljs.core._nth.call(null,chunk__7044_7048,i__7046_7050);
goog.dom.forms.setValue(node_7051,value);

var G__7052 = seq__7043_7047;
var G__7053 = chunk__7044_7048;
var G__7054 = count__7045_7049;
var G__7055 = (i__7046_7050 + (1));
seq__7043_7047 = G__7052;
chunk__7044_7048 = G__7053;
count__7045_7049 = G__7054;
i__7046_7050 = G__7055;
continue;
} else {
var temp__4425__auto___7056 = cljs.core.seq.call(null,seq__7043_7047);
if(temp__4425__auto___7056){
var seq__7043_7057__$1 = temp__4425__auto___7056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7043_7057__$1)){
var c__5791__auto___7058 = cljs.core.chunk_first.call(null,seq__7043_7057__$1);
var G__7059 = cljs.core.chunk_rest.call(null,seq__7043_7057__$1);
var G__7060 = c__5791__auto___7058;
var G__7061 = cljs.core.count.call(null,c__5791__auto___7058);
var G__7062 = (0);
seq__7043_7047 = G__7059;
chunk__7044_7048 = G__7060;
count__7045_7049 = G__7061;
i__7046_7050 = G__7062;
continue;
} else {
var node_7063 = cljs.core.first.call(null,seq__7043_7057__$1);
goog.dom.forms.setValue(node_7063,value);

var G__7064 = cljs.core.next.call(null,seq__7043_7057__$1);
var G__7065 = null;
var G__7066 = (0);
var G__7067 = (0);
seq__7043_7047 = G__7064;
chunk__7044_7048 = G__7065;
count__7045_7049 = G__7066;
i__7046_7050 = G__7067;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node.call(null,content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_.call(null,domina.core.destroy_children_BANG_.call(null,content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.core.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__4976__auto__ = allows_inner_html_QMARK_;
if(and__4976__auto__){
var and__4976__auto____$1 = (function (){var or__4988__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__4976__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})())){
var value_7078 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__7074_7079 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7075_7080 = null;
var count__7076_7081 = (0);
var i__7077_7082 = (0);
while(true){
if((i__7077_7082 < count__7076_7081)){
var node_7083 = cljs.core._nth.call(null,chunk__7075_7080,i__7077_7082);
node_7083.innerHTML = value_7078;

var G__7084 = seq__7074_7079;
var G__7085 = chunk__7075_7080;
var G__7086 = count__7076_7081;
var G__7087 = (i__7077_7082 + (1));
seq__7074_7079 = G__7084;
chunk__7075_7080 = G__7085;
count__7076_7081 = G__7086;
i__7077_7082 = G__7087;
continue;
} else {
var temp__4425__auto___7088 = cljs.core.seq.call(null,seq__7074_7079);
if(temp__4425__auto___7088){
var seq__7074_7089__$1 = temp__4425__auto___7088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7074_7089__$1)){
var c__5791__auto___7090 = cljs.core.chunk_first.call(null,seq__7074_7089__$1);
var G__7091 = cljs.core.chunk_rest.call(null,seq__7074_7089__$1);
var G__7092 = c__5791__auto___7090;
var G__7093 = cljs.core.count.call(null,c__5791__auto___7090);
var G__7094 = (0);
seq__7074_7079 = G__7091;
chunk__7075_7080 = G__7092;
count__7076_7081 = G__7093;
i__7077_7082 = G__7094;
continue;
} else {
var node_7095 = cljs.core.first.call(null,seq__7074_7089__$1);
node_7095.innerHTML = value_7078;

var G__7096 = cljs.core.next.call(null,seq__7074_7089__$1);
var G__7097 = null;
var G__7098 = (0);
var G__7099 = (0);
seq__7074_7079 = G__7096;
chunk__7075_7080 = G__7097;
count__7076_7081 = G__7098;
i__7077_7082 = G__7099;
continue;
}
} else {
}
}
break;
}
}catch (e7073){if((e7073 instanceof Error)){
var e_7100 = e7073;
domina.core.replace_children_BANG_.call(null,content,value_7078);
} else {
throw e7073;

}
}} else {
domina.core.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.core.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var args7101 = [];
var len__6046__auto___7104 = arguments.length;
var i__6047__auto___7105 = (0);
while(true){
if((i__6047__auto___7105 < len__6046__auto___7104)){
args7101.push((arguments[i__6047__auto___7105]));

var G__7106 = (i__6047__auto___7105 + (1));
i__6047__auto___7105 = G__7106;
continue;
} else {
}
break;
}

var G__7103 = args7101.length;
switch (G__7103) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7101.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4976__auto__ = bubble;
if(cljs.core.truth_(and__4976__auto__)){
return (value == null);
} else {
return and__4976__auto__;
}
})())){
var temp__4425__auto__ = domina.core.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.core.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__4988__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes.call(null,parent_content);
var children = domina.core.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__7114_7118 = cljs.core.seq.call(null,children);
var chunk__7115_7119 = null;
var count__7116_7120 = (0);
var i__7117_7121 = (0);
while(true){
if((i__7117_7121 < count__7116_7120)){
var child_7122 = cljs.core._nth.call(null,chunk__7115_7119,i__7117_7121);
frag.appendChild(child_7122);

var G__7123 = seq__7114_7118;
var G__7124 = chunk__7115_7119;
var G__7125 = count__7116_7120;
var G__7126 = (i__7117_7121 + (1));
seq__7114_7118 = G__7123;
chunk__7115_7119 = G__7124;
count__7116_7120 = G__7125;
i__7117_7121 = G__7126;
continue;
} else {
var temp__4425__auto___7127 = cljs.core.seq.call(null,seq__7114_7118);
if(temp__4425__auto___7127){
var seq__7114_7128__$1 = temp__4425__auto___7127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7114_7128__$1)){
var c__5791__auto___7129 = cljs.core.chunk_first.call(null,seq__7114_7128__$1);
var G__7130 = cljs.core.chunk_rest.call(null,seq__7114_7128__$1);
var G__7131 = c__5791__auto___7129;
var G__7132 = cljs.core.count.call(null,c__5791__auto___7129);
var G__7133 = (0);
seq__7114_7118 = G__7130;
chunk__7115_7119 = G__7131;
count__7116_7120 = G__7132;
i__7117_7121 = G__7133;
continue;
} else {
var child_7134 = cljs.core.first.call(null,seq__7114_7128__$1);
frag.appendChild(child_7134);

var G__7135 = cljs.core.next.call(null,seq__7114_7128__$1);
var G__7136 = null;
var G__7137 = (0);
var G__7138 = (0);
seq__7114_7118 = G__7135;
chunk__7115_7119 = G__7136;
count__7116_7120 = G__7137;
i__7117_7121 = G__7138;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__7108_SHARP_,p2__7109_SHARP_){
return f.call(null,p1__7108_SHARP_,p2__7109_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args7139 = [];
var len__6046__auto___7142 = arguments.length;
var i__6047__auto___7143 = (0);
while(true){
if((i__6047__auto___7143 < len__6046__auto___7142)){
args7139.push((arguments[i__6047__auto___7143]));

var G__7144 = (i__6047__auto___7143 + (1));
i__6047__auto___7143 = G__7144;
continue;
} else {
}
break;
}

var G__7141 = args7139.length;
switch (G__7141) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7139.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.call(null,nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.core.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var args7146 = [];
var len__6046__auto___7149 = arguments.length;
var i__6047__auto___7150 = (0);
while(true){
if((i__6047__auto___7150 < len__6046__auto___7149)){
args7146.push((arguments[i__6047__auto___7150]));

var G__7151 = (i__6047__auto___7150 + (1));
i__6047__auto___7150 = G__7151;
continue;
} else {
}
break;
}

var G__7148 = args7146.length;
switch (G__7148) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7146.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.core.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.call(null,nl);
} else {
return domina.core.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__4976__auto__ = obj;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4976__auto____$1){
return obj.length;
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,list_thing))){
return domina.core.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.core.DomContent["string"] = true);

(domina.core.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.core.nodes.call(null,domina.core.string_to_dom.call(null,s)));
}));

(domina.core.single_node["string"] = (function (s){
return domina.core.single_node.call(null,domina.core.string_to_dom.call(null,s));
}));

(domina.core.DomContent["_"] = true);

(domina.core.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return domina.core.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.core.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=core.js.map