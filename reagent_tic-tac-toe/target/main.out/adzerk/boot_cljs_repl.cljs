(ns adzerk.boot-cljs-repl (:require [weasel.repl :as repl]))
(let [repl-conn "ws://localhost:44825"] (when (and repl-conn (not (repl/alive?))) (repl/connect "ws://localhost:44825")))