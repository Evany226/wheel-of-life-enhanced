document.querySelector(".themeButton").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

const data = {
  labels: [
    "Health, Physial",
    "Health, Mental",
    "Love",
    "Creativity/Self Exprssion",
    "Housing",
    "Friends/Family",
    "Prosperity/Money",
    "Personal Development",
    "Work",
    "Fun & Relaxation",
  ],
  datasets: [
    {
      label: "Current",
      data: [5, 7, 4, 7, 8, 5, 7, 8, 6, 8],
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 1,
    },
    {
      label: "Ideal",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderColor: "rgba(0, 0, 255, 1)",
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "radar",
  data,
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

function changeCurrentHealthPhysical(health) {
  myChart.config.data.datasets[0].data[0] = health.value;
  myChart.update();
}

function changeCurrentHealthMental(health) {
  myChart.config.data.datasets[0].data[1] = health.value;
  myChart.update();
}
function changeCurrentLove(love) {
  myChart.config.data.datasets[0].data[2] = love.value;
  myChart.update();
}
function changeCurrentCreativity(creativity) {
  myChart.config.data.datasets[0].data[3] = creativity.value;
  myChart.update();
}

function changeCurrentHousing(housing) {
  myChart.config.data.datasets[0].data[4] = housing.value;
  myChart.update();
}

function changeCurrentFriends(friends) {
  myChart.config.data.datasets[0].data[5] = friends.value;
  myChart.update();
}

function changeCurrentMoney(money) {
  myChart.config.data.datasets[0].data[6] = money.value;
  myChart.update();
}
function changeCurrentPersonalDev(personaldev) {
  myChart.config.data.datasets[0].data[7] = personaldev.value;
  myChart.update();
}

function changeCurrentWork(work) {
  myChart.config.data.datasets[0].data[8] = work.value;
  myChart.update();
}

function changeCurrentFun(fun) {
  myChart.config.data.datasets[0].data[9] = fun.value;
  myChart.update();
}

function changeIdealHealthPhysical(health) {
  myChart.config.data.datasets[1].data[0] = health.value;
  myChart.update();
}
function changeIdealHealthMental(health) {
  myChart.config.data.datasets[1].data[1] = health.value;
  myChart.update();
}
function changeIdealLove(love) {
  myChart.config.data.datasets[1].data[2] = love.value;
  myChart.update();
}
function changeIdealCreativity(creativity) {
  myChart.config.data.datasets[1].data[3] = creativity.value;
  myChart.update();
}
function changeIdealHousing(housing) {
  myChart.config.data.datasets[1].data[4] = housing.value;
  myChart.update();
}
function changeIdealFriends(friends) {
  myChart.config.data.datasets[1].data[5] = friends.value;
  myChart.update();
}
function changeIdealMoney(money) {
  myChart.config.data.datasets[1].data[6] = money.value;
  myChart.update();
}

function changeIdealPersonalDev(personaldev) {
  myChart.config.data.datasets[1].data[7] = personaldev.value;
  myChart.update();
}
function changeIdealWork(work) {
  myChart.config.data.datasets[1].data[8] = work.value;
  myChart.update();
}

function changeIdealFun(fun) {
  myChart.config.data.datasets[1].data[9] = fun.value;
  myChart.update();
}

// get today's date
const d = new Date();
document.getElementById("demo").innerHTML = d;
