
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}
//from solution provided
function appendDeleteBtn(tr, type) {
  let newTableData = document.createElement('td');
  newTableData.className = 'delBtn';
  newTableData.innerText = "X";
  newTableData.addEventListener('click',removeEle);
  tr.append(newTableData)
}
// from solution provided
function removeEle(evt){
  let ele = evt.target.closest('tr');
  delete allServers[ele.id];
  ele.parentNode.removeChild(ele);
  updateServerTable();

}
