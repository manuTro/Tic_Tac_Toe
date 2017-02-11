(ns adzerk.boot-cljs-repl (:require [weasel.repl :as repl]))
(let [repl-conn "ws://localhost:46387"] (when (and repl-conn (not (repl/alive?))) (repl/connect "ws://localhost:46387")))