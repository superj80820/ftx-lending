// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1501){
var map__1502 = p__1501;
var map__1502__$1 = (((((!((map__1502 == null))))?(((((map__1502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1502):map__1502);
var m = map__1502__$1;
var n = cljs.core.get.call(null,map__1502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5754__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1504_1536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1505_1537 = null;
var count__1506_1538 = (0);
var i__1507_1539 = (0);
while(true){
if((i__1507_1539 < count__1506_1538)){
var f_1540 = cljs.core._nth.call(null,chunk__1505_1537,i__1507_1539);
cljs.core.println.call(null,"  ",f_1540);


var G__1541 = seq__1504_1536;
var G__1542 = chunk__1505_1537;
var G__1543 = count__1506_1538;
var G__1544 = (i__1507_1539 + (1));
seq__1504_1536 = G__1541;
chunk__1505_1537 = G__1542;
count__1506_1538 = G__1543;
i__1507_1539 = G__1544;
continue;
} else {
var temp__5754__auto___1545 = cljs.core.seq.call(null,seq__1504_1536);
if(temp__5754__auto___1545){
var seq__1504_1546__$1 = temp__5754__auto___1545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1504_1546__$1)){
var c__4556__auto___1547 = cljs.core.chunk_first.call(null,seq__1504_1546__$1);
var G__1548 = cljs.core.chunk_rest.call(null,seq__1504_1546__$1);
var G__1549 = c__4556__auto___1547;
var G__1550 = cljs.core.count.call(null,c__4556__auto___1547);
var G__1551 = (0);
seq__1504_1536 = G__1548;
chunk__1505_1537 = G__1549;
count__1506_1538 = G__1550;
i__1507_1539 = G__1551;
continue;
} else {
var f_1552 = cljs.core.first.call(null,seq__1504_1546__$1);
cljs.core.println.call(null,"  ",f_1552);


var G__1553 = cljs.core.next.call(null,seq__1504_1546__$1);
var G__1554 = null;
var G__1555 = (0);
var G__1556 = (0);
seq__1504_1536 = G__1553;
chunk__1505_1537 = G__1554;
count__1506_1538 = G__1555;
i__1507_1539 = G__1556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1557);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1557)))?cljs.core.second.call(null,arglists_1557):arglists_1557));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1508_1558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1509_1559 = null;
var count__1510_1560 = (0);
var i__1511_1561 = (0);
while(true){
if((i__1511_1561 < count__1510_1560)){
var vec__1522_1562 = cljs.core._nth.call(null,chunk__1509_1559,i__1511_1561);
var name_1563 = cljs.core.nth.call(null,vec__1522_1562,(0),null);
var map__1525_1564 = cljs.core.nth.call(null,vec__1522_1562,(1),null);
var map__1525_1565__$1 = (((((!((map__1525_1564 == null))))?(((((map__1525_1564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1525_1564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1525_1564):map__1525_1564);
var doc_1566 = cljs.core.get.call(null,map__1525_1565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1567 = cljs.core.get.call(null,map__1525_1565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1563);

cljs.core.println.call(null," ",arglists_1567);

if(cljs.core.truth_(doc_1566)){
cljs.core.println.call(null," ",doc_1566);
} else {
}


var G__1568 = seq__1508_1558;
var G__1569 = chunk__1509_1559;
var G__1570 = count__1510_1560;
var G__1571 = (i__1511_1561 + (1));
seq__1508_1558 = G__1568;
chunk__1509_1559 = G__1569;
count__1510_1560 = G__1570;
i__1511_1561 = G__1571;
continue;
} else {
var temp__5754__auto___1572 = cljs.core.seq.call(null,seq__1508_1558);
if(temp__5754__auto___1572){
var seq__1508_1573__$1 = temp__5754__auto___1572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1508_1573__$1)){
var c__4556__auto___1574 = cljs.core.chunk_first.call(null,seq__1508_1573__$1);
var G__1575 = cljs.core.chunk_rest.call(null,seq__1508_1573__$1);
var G__1576 = c__4556__auto___1574;
var G__1577 = cljs.core.count.call(null,c__4556__auto___1574);
var G__1578 = (0);
seq__1508_1558 = G__1575;
chunk__1509_1559 = G__1576;
count__1510_1560 = G__1577;
i__1511_1561 = G__1578;
continue;
} else {
var vec__1527_1579 = cljs.core.first.call(null,seq__1508_1573__$1);
var name_1580 = cljs.core.nth.call(null,vec__1527_1579,(0),null);
var map__1530_1581 = cljs.core.nth.call(null,vec__1527_1579,(1),null);
var map__1530_1582__$1 = (((((!((map__1530_1581 == null))))?(((((map__1530_1581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1530_1581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1530_1581):map__1530_1581);
var doc_1583 = cljs.core.get.call(null,map__1530_1582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1584 = cljs.core.get.call(null,map__1530_1582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1580);

cljs.core.println.call(null," ",arglists_1584);

if(cljs.core.truth_(doc_1583)){
cljs.core.println.call(null," ",doc_1583);
} else {
}


var G__1585 = cljs.core.next.call(null,seq__1508_1573__$1);
var G__1586 = null;
var G__1587 = (0);
var G__1588 = (0);
seq__1508_1558 = G__1585;
chunk__1509_1559 = G__1586;
count__1510_1560 = G__1587;
i__1511_1561 = G__1588;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5754__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5754__auto__)){
var fnspec = temp__5754__auto__;
cljs.core.print.call(null,"Spec");

var seq__1532 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1533 = null;
var count__1534 = (0);
var i__1535 = (0);
while(true){
if((i__1535 < count__1534)){
var role = cljs.core._nth.call(null,chunk__1533,i__1535);
var temp__5754__auto___1589__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5754__auto___1589__$1)){
var spec_1590 = temp__5754__auto___1589__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1590));
} else {
}


var G__1591 = seq__1532;
var G__1592 = chunk__1533;
var G__1593 = count__1534;
var G__1594 = (i__1535 + (1));
seq__1532 = G__1591;
chunk__1533 = G__1592;
count__1534 = G__1593;
i__1535 = G__1594;
continue;
} else {
var temp__5754__auto____$1 = cljs.core.seq.call(null,seq__1532);
if(temp__5754__auto____$1){
var seq__1532__$1 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1532__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1532__$1);
var G__1595 = cljs.core.chunk_rest.call(null,seq__1532__$1);
var G__1596 = c__4556__auto__;
var G__1597 = cljs.core.count.call(null,c__4556__auto__);
var G__1598 = (0);
seq__1532 = G__1595;
chunk__1533 = G__1596;
count__1534 = G__1597;
i__1535 = G__1598;
continue;
} else {
var role = cljs.core.first.call(null,seq__1532__$1);
var temp__5754__auto___1599__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5754__auto___1599__$2)){
var spec_1600 = temp__5754__auto___1599__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1600));
} else {
}


var G__1601 = cljs.core.next.call(null,seq__1532__$1);
var G__1602 = null;
var G__1603 = (0);
var G__1604 = (0);
seq__1532 = G__1601;
chunk__1533 = G__1602;
count__1534 = G__1603;
i__1535 = G__1604;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5754__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5754__auto__)){
var msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5754__auto__)){
var ed = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1605 = cljs.core.conj.call(null,via,t);
var G__1606 = cljs.core.ex_cause.call(null,t);
via = G__1605;
t = G__1606;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5754__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5754__auto__)){
var root_msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5754__auto__)){
var data = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5754__auto__)){
var phase = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1609 = datafied_throwable;
var map__1609__$1 = (((((!((map__1609 == null))))?(((((map__1609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1609):map__1609);
var via = cljs.core.get.call(null,map__1609__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1609__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1609__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1610 = cljs.core.last.call(null,via);
var map__1610__$1 = (((((!((map__1610 == null))))?(((((map__1610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1610):map__1610);
var type = cljs.core.get.call(null,map__1610__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1610__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1610__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1611 = data;
var map__1611__$1 = (((((!((map__1611 == null))))?(((((map__1611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1611):map__1611);
var problems = cljs.core.get.call(null,map__1611__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1611__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1611__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1612 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1612__$1 = (((((!((map__1612 == null))))?(((((map__1612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1612):map__1612);
var top_data = map__1612__$1;
var source = cljs.core.get.call(null,map__1612__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1617 = phase;
var G__1617__$1 = (((G__1617 instanceof cljs.core.Keyword))?G__1617.fqn:null);
switch (G__1617__$1) {
case "read-source":
var map__1618 = data;
var map__1618__$1 = (((((!((map__1618 == null))))?(((((map__1618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1618):map__1618);
var line = cljs.core.get.call(null,map__1618__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1618__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1620 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1620__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1620,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1620);
var G__1620__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1620__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1620__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1620__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1621 = top_data;
var G__1621__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1621,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1621);
var G__1621__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1621__$1);
var G__1621__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1621__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1621__$2);
var G__1621__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1621__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1621__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1621__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1621__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1622 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1622,(0),null);
var method = cljs.core.nth.call(null,vec__1622,(1),null);
var file = cljs.core.nth.call(null,vec__1622,(2),null);
var line = cljs.core.nth.call(null,vec__1622,(3),null);
var G__1625 = top_data;
var G__1625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1625);
var G__1625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1625__$1);
var G__1625__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__1625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1625__$2);
var G__1625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1625__$4;
}

break;
case "execution":
var vec__1626 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1626,(0),null);
var method = cljs.core.nth.call(null,vec__1626,(1),null);
var file = cljs.core.nth.call(null,vec__1626,(2),null);
var line = cljs.core.nth.call(null,vec__1626,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1608_SHARP_){
var or__4126__auto__ = (p1__1608_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1608_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__1629 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1629__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1629,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1629);
var G__1629__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1629__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1629__$1);
var G__1629__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1629__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1629__$2);
var G__1629__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1629__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1629__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1629__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1629__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1617__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1633){
var map__1634 = p__1633;
var map__1634__$1 = (((((!((map__1634 == null))))?(((((map__1634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1634):map__1634);
var triage_data = map__1634__$1;
var phase = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1634__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1636 = phase;
var G__1636__$1 = (((G__1636 instanceof cljs.core.Keyword))?G__1636.fqn:null);
switch (G__1636__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1637_1646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1638_1647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1639_1648 = true;
var _STAR_print_fn_STAR__temp_val__1640_1649 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1639_1648);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1640_1649);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1631_SHARP_){
return cljs.core.dissoc.call(null,p1__1631_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1638_1647);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1637_1646);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1641_1650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1642_1651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1643_1652 = true;
var _STAR_print_fn_STAR__temp_val__1644_1653 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1643_1652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1644_1653);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1632_SHARP_){
return cljs.core.dissoc.call(null,p1__1632_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1642_1651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1641_1650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1636__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
