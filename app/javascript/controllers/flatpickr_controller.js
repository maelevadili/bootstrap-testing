import { Controller } from "@hotwired/stimulus"
// Necessary
import flatpickr from "flatpickr"


// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    // console.log("connected", this.element);

    flatpickr(".date");
  }
}
