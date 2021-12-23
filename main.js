const calculate = document.getElementById("calculate");
calculate.addEventListener("click", (e) => {
  const amount = document.getElementById("loand-amount").value;
  const rate = document.getElementById("interest-rate").value;
  const years = document.getElementById("years").value;
  const result = amount * (rate / 100) * years * 12;
  const desplayResult = document.getElementById("result");
  desplayResult.innerHTML = `Yours Intrest = ${result}`;
});
