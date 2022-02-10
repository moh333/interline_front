export const ChartData = {
   type: "doughnut",
   data: {
      // labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      labels: ["On trip", "On trip", "Out of service"],
      datasets: [{
         data: [50, 20, 10],
         backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
         ],
         hoverOffset: 4
      }, ]
   },
   options: {
      responsive: true,
      lineTension: 1,
      plugins: {
         legend: {
            display: true,
            labels: {
               boxWidth: 20
            },
            align: 'end'
         }
      }
   }
};




export const barChart = {
   type: 'line',
   data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
         data: [50, 23, 30, 50, 20, 34, 40],
         backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
         ],
         borderWidth: 2,
         borderRadius: 300,
         borderSkipped: false,
      }, ]
   },
   options: {
      responsive: true,
      lineTension: 1,
      plugins: {

      },
      scales: {
         x: {
            grid: {
               display: false,
            }
         },
      }
   }
};

export default {
   ChartData,
   barChart
}