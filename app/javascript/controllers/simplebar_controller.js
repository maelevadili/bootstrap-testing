// https://www.npmjs.com/package/simplebar

import { Controller } from "@hotwired/stimulus"
import SimpleBar from "simplebar"

// Connects to data-controller="simplebar"
export default class extends Controller {
  connect() {
    console.log("Hello from simplebar_controller.js");

    Array.prototype.forEach.call(
      document.querySelectorAll('.scrollbar-overlay'),
      (el) => new SimpleBar(el)
    );
  }
}

