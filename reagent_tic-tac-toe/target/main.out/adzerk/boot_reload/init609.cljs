(ns adzerk.boot-reload.init609 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:46757" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})