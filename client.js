var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
console.log(employees);
function calcBonus (obj) {
var values = Object.values(obj);
console.log(values);
function bonusPercent(values) {
if (values[3] <= 2 ) {
  return  0;
  } else if (values[3] === 3) {
    return 4;
  } else if (values[3] === 4) {
    return  6;
  } else  if (values[3] === 5) {
    return 10;
  }
}
console.log(bonusPercent(values));
function loyaltyBonus (values) {
  if (values[1].length === 4) {
    return 5;
  } else {
    return 0;
  }
}
console.log(loyaltyBonus(values));
function salarySize (values){
    if (values[2] > '65000') {
      return 1;
    } else {
      return 0;
    }
}
console.log(salarySize(values));
return bonusPercent(values) + loyaltyBonus(values) - salarySize(values);

}
console.log(calcBonus(jem));
function totalBonus(bonusPercent, annualSalary){
  return ((bonusPercent/100)*annualSalary);

}
console.log(totalBonus());
