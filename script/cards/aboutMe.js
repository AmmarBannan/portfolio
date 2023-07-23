
// const DATA_COUNT = 1;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = ["Overall","Speaking","Writing","Reading","Comprehensive"]
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Arabic',
//       data: [99,99,95,95,99],
//       borderColor: "green",
//       backgroundColor: "rgba(34, 158, 9, 0.473)",
//     },
//     {
//       label: 'English',
//       data: [70,70,65,75,70],
//       borderColor: "red",
//       backgroundColor: "rgba(219, 33, 27, 0.473)",
//     },
//     {
//         label: 'Hebrew',
//         data: [50,70,40,60,55],
//         borderColor: "blue",
//         backgroundColor: "rgba(31, 7, 215, 0.473)",
//     }
//   ]
// };

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = ["Overall","Speaking","Writing","Reading","Comprehensive"]
const labels = ["Speaking","Reading","Writing","Comprehensive"]
const data = {
  labels: labels,
  datasets: [
          {
            label: 'Arabic',
            data: [99,97,95,100],
            borderColor: "blue",
            backgroundColor: "rgba(31, 7, 215, 0.473)",
          },
          {
            label: 'English',
            data: [65,70,55,70],
            borderColor: "red",
            backgroundColor: "rgba(219, 33, 27, 0.473)",
          },
          {
            label: 'Hebrew',
            data: [50,40,40,45],
            borderColor: "green",
            backgroundColor: "rgba(34, 158, 9, 0.473)",
          }
        
       
      ]
};



const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};




const ctx = document.getElementById('language');
new Chart(ctx,config);

