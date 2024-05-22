import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr" // Needed to import this to use new flatpickr()

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("Hello from flatpickr_controller.js");

    flatpickr(".date");
  }
}
