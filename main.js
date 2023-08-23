// import css file
import "./src/assets/css/style.scss";
import "./src/assets/css/utility.scss";
import "./src/assets/css/font.scss";

//import swipper js file.
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const toggleButtons = document.querySelectorAll(".toggleButton");
toggleButtons.forEach((toggleButton) => {
  const fileIcon = toggleButton.closest(".fileIcon");
  const dropdown = fileIcon.querySelector(".dropdown");

  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(fileIcon, dropdown);
  });
});

// Hide dropdowns when clicking outside of the buttons or dropdowns
document.addEventListener("click", (event) => {
  toggleButtons.forEach((toggleButton) => {
    const fileIcon = toggleButton.closest(".fileIcon");
    const dropdown = fileIcon.querySelector(".dropdown");
    if (!fileIcon.contains(event.target)) {
      dropdown.classList.remove("activeDrop");
    }
  });
});

function toggleDropdown(fileIcon, dropdown) {
  toggleButtons.forEach((btn) => {
    const otherFileIcon = btn.closest(".fileIcon");
    const otherDropdown = otherFileIcon.querySelector(".dropdown");
    if (otherFileIcon !== fileIcon) {
      otherDropdown.classList.remove("activeDrop");
    }
  });
  dropdown.classList.toggle("activeDrop");
}

//code for File Manager dropdown
const signleButton = document.getElementById("droptigger");
const fileDrop = document.querySelector(".fileDrop");

signleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  fileDrop.classList.toggle("activeFileDrop");
});

document.addEventListener("click", (event) => {
  if (!fileDrop.contains(event.target)) {
    fileDrop.classList.remove("activeFileDrop");
  }
});

//code for notification dropdown
const notiButton = document.getElementById("notibutton");
const notiPanel = document.querySelector(".notificationdrop");

notiButton.addEventListener("click", (event) => {
  event.stopPropagation();
  notiPanel.classList.toggle("activenoti");
});

document.addEventListener("click", (event) => {
  if (
    !notiPanel.contains(event.target) &&
    !profilesubMenu.contains(event.target)
  ) {
    notiPanel.classList.remove("activenoti");
  }
});

//code for profile dropdown
const prifileButton = document.getElementById("prifileButton");
const profilesubMenu = document.querySelector(".profilesubMenu");

prifileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profilesubMenu.classList.toggle("activeProfiledrop");
});

document.addEventListener("click", (event) => {
  if (
    !profilesubMenu.contains(event.target) &&
    !notiPanel.contains(event.target)
  ) {
    profilesubMenu.classList.remove("activeProfiledrop");
  }
});