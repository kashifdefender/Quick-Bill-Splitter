function calculate() {
    // 1. Get values from the input boxes
    const bill = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value);
    const people = parseInt(document.getElementById('numPeople').value);

    // 2. The Logic (The Math)
    const tipAmount = bill * (tipPercent / 100);
    const totalBill = bill + tipAmount;
    const perPerson = totalBill / people;

    // 3. DOM Manipulation: Show the result on the screen
    // .toFixed(2) ensures we only show 2 decimal places (like $10.50)
    if (!isNaN(perPerson) && perPerson > 0) {
        document.getElementById('perPersonResult').innerText = "PKR" + perPerson.toFixed(2);
    } else {
        alert("Please enter valid numbers!");
    }
}