function generate() {
  const multiplierInput = document.getElementById("multiplier");
  const multiplier = multiplierInput.value;
  let multiply = Number(multiplier);

  const tableResult = document.getElementById("tableResult");
  const resultHeading = document.createElement("h2"); // Create h2 element
  resultHeading.textContent = `Multiplication Table of ${multiply}`;
  tableResult.innerHTML = "";
  tableResult.appendChild(resultHeading);

  if (multiplier > -1) {
    for (let i = 1; i <= 10; i++) {
      const para = document.createElement("p");
             
      para.textContent = `${multiply} X ${i} = ${multiply * i}`;
      tableResult.appendChild(para);
    }
  }
  else{
    alert('Enter positive no:')
  }
}

function clearTable() {
    const tableResult = document.getElementById("tableResult");
    tableResult.innerHTML = "";
}
