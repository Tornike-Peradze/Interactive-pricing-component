const scrollBar = document.getElementById("input");
const payment = document.querySelector(".dollar");
const switchToMonthYear = document.querySelector(".month");
const checkBox = document.getElementById("switch");
const pageviews = document.querySelector(".pageviews");

const calculateProgressBarWidth = () => {
  const thumbPosition = (scrollBar.value * 100) / scrollBar.max;
  document.documentElement.style.setProperty(
    "--thumb-position",
    thumbPosition + "%"
  );
};

calculateProgressBarWidth();

scrollBar.addEventListener("input", function () {
  const value = parseFloat(scrollBar.value);
  const formattedValue = value === 0 ? "$0.00" : `$${value.toFixed(2)}`;
  payment.textContent = formattedValue;
  calculateProgressBarWidth();
  calculation();
});

checkBox.addEventListener("input", function () {
  const value = parseFloat(scrollBar.value);
  calculation();
});

const calculation = () => {
  const value = parseFloat(scrollBar.value);
  if (checkBox.checked) {
    switchToMonthYear.innerHTML = "/ year";
    if (value == 0) {
      payment.innerText = "$0.00";
    } else if (value == 1) {
      payment.innerText = "$72.00";
      pageviews.innerText = "10K PAGEVIEWS";
    } else if (value == 2) {
      payment.innerText = "$108.00";
      pageviews.innerText = "50K PAGEVIEWS";
    } else if (value == 3) {
      payment.innerText = "$144.00";
      pageviews.innerText = "100K PAGEVIEWS";
    } else if (value == 4) {
      payment.innerText = "$216.00";
      pageviews.innerText = "500K PAGEVIEWS";
    } else if (value == 5) {
      payment.innerText = "$324.00";
      pageviews.innerText = "1M PAGEVIEWS";
    }
  } else {
    switchToMonthYear.innerHTML = "/ month";
    if (value == 0) {
      payment.innerText = "$0.00";
    } else if (value == 1) {
      payment.innerText = "$8.00";
      pageviews.innerText = "10K PAGEVIEWS";
    } else if (value == 2) {
      payment.innerText = "$12.00";
      pageviews.innerText = "50K PAGEVIEWS";
    } else if (value == 3) {
      payment.innerText = "$16.00";
      pageviews.innerText = "100K PAGEVIEWS";
    } else if (value == 4) {
      payment.innerText = "$24.00";
      pageviews.innerText = "500K PAGEVIEWS";
    } else if (value == 5) {
      payment.innerText = "$36.00";
      pageviews.innerText = "1M PAGEVIEWS";
    }
  }
};
