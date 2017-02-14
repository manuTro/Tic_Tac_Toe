// Compiled by ClojureScript 1.7.170 {}
goog.provide('my_reagent.tic_tac_toe');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('domina.core');
my_reagent.tic_tac_toe.player = "Next Player: X";
my_reagent.tic_tac_toe.player_box = (function my_reagent$tic_tac_toe$player_box(player){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),player], null);
});
my_reagent.tic_tac_toe.Square = (function my_reagent$tic_tac_toe$Square(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450)], null);
});
my_reagent.tic_tac_toe.renderSquare = (function my_reagent$tic_tac_toe$renderSquare(i){
return my_reagent.tic_tac_toe.Square;
});
my_reagent.tic_tac_toe.board_row = (function my_reagent$tic_tac_toe$board_row(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.renderSquare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.renderSquare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.renderSquare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null)], null);
});
my_reagent.tic_tac_toe.Board = (function my_reagent$tic_tac_toe$Board(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.player_box,my_reagent.tic_tac_toe.player], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.board_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.board_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.board_row], null)], null);
});
my_reagent.tic_tac_toe.init = (function my_reagent$tic_tac_toe$init(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_reagent.tic_tac_toe.Board], null),document.getElementById("container"));
});
goog.exportSymbol('my_reagent.tic_tac_toe.init', my_reagent.tic_tac_toe.init);

//# sourceMappingURL=tic_tac_toe.js.map