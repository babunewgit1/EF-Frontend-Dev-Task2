// import css file
import "./src/assets/css/style.scss";
import "./src/assets/css/utility.scss";
import "./src/assets/css/font.scss";
import "./src/assets/css/responsive.scss";

//import swipper js file.
import Swiper from "swiper";
import "swiper/css";

//import chart.js file.
import Chart from "chart.js/auto";

// code for swiper slider int
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  breakpoints: {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
});

// code for chart configaration
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    datasets: [
      {
        label: "Dataset A",
        data: [3500, 15000, 20000, 14000, 12000, 8000],
        backgroundColor: "#51459E",
        borderRadius: 6,
      },
      {
        label: "Dataset B",
        data: [12000, 20000, 18000, 11000, 9000, 6500],
        backgroundColor: "#84E8F4",
        borderRadius: 6,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#000",
          font: {
            family: "Sofia Pro",
            size: "12px",
          },
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 25000,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 5000000) {
              return "";
            }

            if (value === 0) {
              return value + 1 + "k";
            }
            return value / 1000 + "k";
          },
          color: "#AFB0B1",
          font: {
            family: "Sofia Pro",
            size: "12px",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
  },
});

// code for dropdown opening
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggoler");
  const target = document.querySelectorAll(".toggleable");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const targetDivId = button.getAttribute("data-target");

      target.forEach(function (div) {
        if (div.id === targetDivId) {
          div.classList.toggle("show");
        } else {
          div.classList.remove("show");
        }
      });

      event.stopPropagation();
    });
  });

  document.addEventListener("click", function () {
    target.forEach(function (div) {
      div.classList.remove("show");
    });
  });

  target.forEach(function (div) {
    div.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
