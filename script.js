const foodData = {
  Pollito: { 50: { calories: 26, carbs: 7, protein: 0.1 }, 100: { calories: 52, carbs: 14, protein: 0.3 }, 150: { calories: 78, carbs: 21, protein: 0.5 }, 200: { calories: 104, carbs: 28, protein: 0.7 } },
  Bananita: { 50: { calories: 45, carbs: 12, protein: 0.6 }, 100: { calories: 89, carbs: 23, protein: 1.3 }, 150: { calories: 133, carbs: 35, protein: 2 }, 200: { calories: 178, carbs: 47, protein: 2.7 } },
  Pavito: { 50: { calories: 22, carbs: 5, protein: 0.3 }, 100: { calories: 43, carbs: 9, protein: 1 }, 150: { calories: 65, carbs: 14, protein: 1.5 }, 200: { calories: 87, carbs: 18, protein: 2 } },
  Yogourt: { 50: { calories: 22, carbs: 5, protein: 0.3 }, 100: { calories: 43, carbs: 9, protein: 1 }, 150: { calories: 65, carbs: 14, protein: 1.5 }, 200: { calories: 87, carbs: 18, protein: 2 } }
};

function addItem() {
  const foodSelect = document.getElementById("foodSelect").value;
  const servingSize = parseInt(document.getElementById("servingSize").value);
  const nutritionalValuesTable = document.getElementById("nutritionalValuesTable");
  const selectedItemsTableBody = document.getElementById("selectedItemsTableBody");
  const totalCaloriesCell = document.getElementById("totalCalories");
  const totalCarbsCell = document.getElementById("totalCarbs");
  const totalProteinCell = document.getElementById("totalProtein");

  if (foodData[foodSelect] && foodData[foodSelect][servingSize]) {
    const servingData = foodData[foodSelect][servingSize];

    const newRow = selectedItemsTableBody.insertRow(selectedItemsTableBody.rows.length);
    const foodCell = newRow.insertCell(0);
    const servingSizeCell = newRow.insertCell(1);
    const caloricCell = newRow.insertCell(2);
    const carbsCell = newRow.insertCell(3);
    const proteinCell = newRow.insertCell(4);

    foodCell.innerHTML = foodSelect;
    servingSizeCell.innerHTML = servingSize;
    caloricCell.innerHTML = servingData.calories;
    carbsCell.innerHTML = servingData.carbs;
    proteinCell.innerHTML = servingData.protein;

    updateTotalIntake(servingData.calories, servingData.carbs, servingData.protein);
  } else {
    alert("Invalid serving size for the selected food item.");
  }
}

function updateTotalIntake(calories, carbs, protein) {
  const totalCaloriesCell = document.getElementById("totalCalories");
  const totalCarbsCell = document.getElementById("totalCarbs");
  const totalProteinCell = document.getElementById("totalProtein");

  let currentCalories = parseInt(totalCaloriesCell.innerHTML) || 0;
  let currentCarbs = parseFloat(totalCarbsCell.innerHTML) || 0;
  let currentProtein = parseFloat(totalProteinCell.innerHTML) || 0;

  currentCalories += parseInt(calories);
  currentCarbs += parseFloat(carbs);
  currentProtein += parseFloat(protein);

  totalCaloriesCell.innerHTML = currentCalories;
  totalCarbsCell.innerHTML = currentCarbs.toFixed(1);
  totalProteinCell.innerHTML = currentProtein.toFixed(1);
}
