# Pin npm packages by running ./bin/importmap

# main setting
pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

# bootstrap
# pin "bootstrap" # @5.3.3
# pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true

# faltpickr
pin "stimulus-flatpickr" # @3.0.0
pin "flatpickr", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/esm/index.js"
pin "flatpickr/dist/l10n/fr.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/fr.js"
pin "flatpickr/dist/l10n/es.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/es.js"
pin "flatpickr/dist/l10n/nl.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/nl.js"
pin "flatpickr/dist/l10n/default.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/default.js"

# fullcalendar
pin "fullcalendar", to: "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.js"
pin "@fullcalendar/core/", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.11/"
pin "@fullcalendar/daygrid/", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.11/"
pin "@fullcalendar/interaction/index.js", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/interaction@6.1.11/index.js"
pin "@fullcalendar/list/index.js", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/list@6.1.11/index.js"
pin "@fullcalendar/multimonth/index.js", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/multimonth@6.1.11/index.js"
pin "@fullcalendar/timegrid/index.js", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.11/index.js"
pin "preact", to: "https://cdn.jsdelivr.net/npm/preact@10.12.1/dist/preact.module.js"
pin "preact/compat", to: "https://cdn.jsdelivr.net/npm/preact@10.12.1/compat/dist/compat.module.js"
pin "preact/hooks", to: "https://cdn.jsdelivr.net/npm/preact@10.12.1/hooks/dist/hooks.module.js"

# simplebar
pin "simplebar", to: "https://ga.jspm.io/npm:simplebar@6.2.6/dist/index.mjs"
pin "can-use-dom", to: "https://ga.jspm.io/npm:can-use-dom@0.1.0/index.js"
pin "lodash-es", to: "https://ga.jspm.io/npm:lodash-es@4.17.21/lodash.js"
pin "simplebar-core", to: "https://ga.jspm.io/npm:simplebar-core@1.2.5/dist/index.mjs"

# chart.js
pin "chart.js", to: "https://ga.jspm.io/npm:chart.js@4.4.3/dist/chart.js"
pin "@kurkle/color", to: "https://ga.jspm.io/npm:@kurkle/color@0.3.2/dist/color.esm.js"

