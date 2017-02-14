(ns my-reagent.tic_tac_toe
  (:require [reagent.core :as r :refer [render]]
    [domina.core :as dom :refer [by-id]]))



(def player "Next Player: X")
(defn player-box [player][:div player])
(defn Square [] [:button.square])
(defn renderSquare[i] Square)

(defn board-row [] [:div.board-row [renderSquare[0]] [renderSquare[1]] [renderSquare[3]]])
; (defn board-row2 [] [:div [renderSquare[0]] [renderSquare[1]] [renderSquare[3]]])
; (defn board-row3 [] [:div [renderSquare[0]] [renderSquare[1]] [renderSquare[3]]])



(defn Board
  []
  [:div [player-box player]
          [board-row]
          [board-row]
          [board-row]])
(defn ^:export init []
  (render [Board] (.getElementById js/document "container")))
