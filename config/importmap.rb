# Pin npm packages by running ./bin/importmap

pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "vendor/mods"
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/root", under: "root"
pin_all_from "app/javascript/home", under: "home"
pin_all_from "app/javascript/canvas", under: "canvas"
