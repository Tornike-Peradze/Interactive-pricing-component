const scrollBar = document.getElementById("input");
const payment = document.querySelector(".dollar");
const switchToMonthYear = document.querySelector(".month");
const checkBox = document.getElementById("switch");

scrollBar.addEventListener("input", function () {
  const value = parseFloat(scrollBar.value);
  const formattedValue = value === 0 ? "$0.00" : `$${value.toFixed(2)}`;
  payment.textContent = formattedValue;
  const thumbPosition =
    ((value - scrollBar.min) / (scrollBar.max - scrollBar.min)) * 100;
  document.documentElement.style.setProperty(
    "--thumb-position",
    thumbPosition + "%"
  );
});

checkBox.addEventListener("input", function () {
  // const toggle = document.querySelector(".toggle");
  const value = parseFloat(scrollBar.value);
  const formattedValue = value === 0 ? "$0.00" : `$${value.toFixed(2)}`;
  payment.textContent = formattedValue;
  let yearAmountCounter = value * 12 * 0.75;
  if (checkBox.checked) {
    // toggle.style.backgroundColor = "#7aeadf";
    switchToMonthYear.innerHTML = "/ year";
    scrollBar.setAttribute("min", 0);
    scrollBar.setAttribute("max", yearAmountCounter);
  } else {
    // toggle.style.backgroundColor = "#cfd8ef";
    switchToMonthYear.innerHTML = "/ month";
    scrollBar.setAttribute("min", 0);
    scrollBar.setAttribute("max", 32);
  }
});
