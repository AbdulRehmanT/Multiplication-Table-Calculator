function generate() {
  let multiply = document.getElementById("multiplier").value;
  multiply = Number(multiply);

  let tableResult = document.getElementById("tableResult");
  tableResult.innerHTML = "";

  const resultHeading = document.createElement("h2");
  resultHeading.textContent = `Multiplication Table of ${multiply}`;
  tableResult.appendChild(resultHeading);

  if (multiply > -1) {
    for (let i = 1; i <= 10; i++) {
      const multiplyResult = document.createElement("p");
      multiplyResult.textContent = `${multiply} x ${i} = ${multiply * i}`;
      tableResult.appendChild(multiplyResult);
    }
  } else {
    alert("Invalid Number! Please Enter Positive Number.");
  }
}

function clearTable() {
  const tableResult = document.getElementById("tableResult");
  tableResult.innerHTML = "";
}
