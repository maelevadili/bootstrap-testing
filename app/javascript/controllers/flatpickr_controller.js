// https://flatpickr.js.org/options/

import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr" // Needed to import this to use new flatpickr()
import { French } from "flatpickr/dist/l10n/fr.js"
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { Dutch } from "flatpickr/dist/l10n/nl.js"

const currentUrl = document.URL;
console.log(currentUrl);

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    // console.log("Hello from flatpickr_controller.js");

    flatpickr(".date", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      minDate: "today",
      // => May cause trouble with edit
      disableMobile: "true",
      // => if not, flatpickr calendar is replaced by native datetime and disabled dates are lost
      enableTime: "true",
      time_24hr: "true"
    });

    //flatpickr.localize(French)
    // Localize globally (for all instances)
    // OR, make it dynamique using url params ⬇️
    // First uncomment const currentUrl at top
    if (currentUrl.includes('locale=fr'))
      flatpickr.localize(French)
    // Localize globally (for all instances)
    else if (currentUrl.includes('locale=es'))
      flatpickr.localize(Spanish)
    else if (currentUrl.includes('locale=nl'))
      flatpickr.localize(Dutch)
    else
      flatpickr
  }
}
