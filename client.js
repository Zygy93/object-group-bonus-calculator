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
  }//Calculates rating bonus
}
console.log(bonusPercent(values));
function loyaltyBonus (values) {
  if (values[1].length === 4) {
    return 5;
  } else {
    return 0;
  }//Caclulates loyaltyBonus
}
console.log(loyaltyBonus(values));
function salarySize (values){
    if (values[2] > '65000') {
      return 1;
    } else {
      return 0;
    }//Calculates salary deduction
}
console.log(salarySize(values));


var total = bonusPercent(values) + loyaltyBonus(values) - salarySize(values);
 if (total > 13){
   total = 13;
 }//Keeps bonus from going over 13

return total;

}//calculates total bonus percent
console.log(calcBonus(jem));
function totalBonus(bonusPercent, annualSalary){
  return Math.round((bonusPercent/100)*annualSalary);

}//calculates total bonus $



function totalComp(totalBonus, annualSalary){
  return (totalBonus + annualSalary);
}

console.log(totalComp(calcBonus(jem),jem.annualSalary));


function employeeInfo( name, bonusPercent, totalComp, totalBonus ){
  this.name = name;
  this.bonusPercent = bonusPercent;
  this.totalComp = totalComp;
  this.totalBonus = totalBonus;
};//new object creator

function bonusForEmployee(obj){
var bonusInfo = new employeeInfo ( obj.name, calcBonus(obj), totalComp( calcBonus(obj), obj.annualSalary), totalBonus( calcBonus(obj), obj.annualSalary) );
return bonusInfo;
}
function bonusForEmployes (obj) {
  for (var i = 0; )
}
console.log(putItTogether(jem));
