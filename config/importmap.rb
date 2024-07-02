# Pin npm packages by running ./bin/importmap

pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
# pin "canvas/three.module", to: "three.module.js"
# pin_all_from "node_modules"
# pin_all_from "vendor/mods"

# pin "three/build/three.module.js", to: "canvas/three.module.js"

pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/home", under: "home"
pin_all_from "app/javascript/canvas", under: "canvas"

def pin_all_relative(dir_name)
  pin_all_from "app/javascript/#{dir_name}",
    under: "#{Rails.application.config.assets.prefix}/#{dir_name}/index.js",
    to: dir_name
end

# pin_all_relative "canvas"
# pin "three", to: "pages/bullseye"
