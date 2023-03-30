var chrt = document.getElementById("myChart").getContext("2d");
var chartId = new Chart(chrt, {
   type: 'radar',
   data: {
      labels: ["Mar", "May", "June", "July", "Aug", "Nov"],
      datasets: [{
         label: "2022 Github Contributions",
         data: [5, 9, 35, 16, 18, 38],
         backgroundColor: ['lightgrey'],
         pointBackgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
         borderColor: ['black'],
         borderWidth: 1,
         pointRadius: 6,
      }],
   },
   options: {
      responsive: false,
      elements: {
         line: {
            borderWidth: 3
         }
      }
   },
});