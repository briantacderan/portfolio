import { Application } from "@hotwired/stimulus"
import * as THREE from "three"

const application = Application.start()

// Configure Stimulus development experience
application.register("three", THREE)
application.debug = false
window.Stimulus   = application

export default application
