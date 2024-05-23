// https://www.chartjs.org/docs/3.3.0/getting-started/integration.html

import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Connects to data-controller="chartjs"
export default class extends Controller {
  connect() {
    console.log("Hello from chartjs_controller.js");

    const ctx = document.getElementById('myChart');
    const labels = [
      'Red',
      'Blue',
      'Yellow',
      'Orange',
      'Pink',
      'Green',
    ];

    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
