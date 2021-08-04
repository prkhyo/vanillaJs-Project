const clockTitle = document.querySelector(".js-clock");

function calculateDday() {
  const todaydate = new Date();
  const christmasDate = new Date("2021,12,25");

  const Dday = christmasDate - todaydate;
  const day = Math.ceil(Dday / (1000 * 60 * 60 * 24));
  const hour = String(Math.ceil((Dday / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.ceil((Dday / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.ceil((Dday / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
  clockTitle.style.color = "green";
}

calculateDday();
setInterval(calculateDday, "1000");
