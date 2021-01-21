import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", function() {
    
  const WOW = require('wowjs');
  window.wow = new WOW.WOW({
    live: false
  });
  window.wow.init();
    
});
