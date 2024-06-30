function salaryCalculator(){
    //this prompts the user to enter the basic salary and the benefits he/she is getting and the prompt is saved in variables
    let basicSalary=prompt('Enter your basic salary');
    let benefits=prompt('Enter your benefits/allowance');

    //since we are working with numbers and we want to validate the input easily we convert the input to number data type
    basicSalary=Number(basicSalary);
    benefits=Number(benefits);

    //VALIDATES THE BASIC SALARY AND THE BENEFITS A USER HAS ENTERED

    if (isNaN(basicSalary) || isNaN(benefits) ||basicSalary<0 || benefits<0){
        console.log('WARNING !!! PLEASE ENTER A VALID NUMBER');
        alert('WARNING !!! PLEASE ENTER A VALID NUMBER');
        return;
    }

    //money without mathematics is dangerous ,so we first define different variables to store some calculations

    let grossSalary=basicSalary + benefits;
    let nssfDeductions=grossSalary*0.06; //nsff rate is 60% to each an everyone
    let taxableIncome=grossSalary-nssfDeductions;
    let payee=payeeFunction(taxableIncome); //here I have invoked the payeeFunction .that takes in taxableIncome as its argument.the payeeFunction returns the tax based on the taxable income
    let nhif=nhifFunction(taxableIncome); //here I have invoked the nhifFunction ,that takes in the taxable income as is argument ,the nhifFunction returns the nhif value based on the taxable income
    let netSalary=grossSalary-nssfDeductions-payee-nhif;

    //HERE WE OUTPUT THE EVERYTHING THE USER NEEDS TO KNOW THROUGH THE CONSOLE AND DOCUMENT 
    console.log(`YOUR GROSS SALARY IS ${grossSalary}`);
    alert(`YOUR GROSS SALARY IS ${grossSalary}`);

    console.log(`YOUR NSSF DEDUCTION IS ${nssfDeductions}`);
    alert(`YOUR NSSF DEDUCTION IS ${nssfDeductions}`);

    console.log(`YOUR TAXABLE INCOME IS ${taxableIncome}`);
    alert(`YOUR TAXABLE INCOME IS ${taxableIncome}`);

    console.log(`YOUR NHIF DEDUCTION IS ${nhif}`);
    alert(`YOUR NHIF DEDUCTION IS ${nhif}`);

    console.log(`YOUR PAYE DEDUCTION IS ${payee}`);
    alert(`YOUR PAYE DEDUCTION IS ${payee}`);

    console.log(`YOUR NET SALARY IS ${netSalary}`);
    alert(`YOUR NET SALARY IS ${netSalary}`);

}

//This function takes in the taxable income and returns the nhif value based on the value of the income .I have used if else if to evaluate different income values
function nhifFunction(taxableIncome){
    if(taxableIncome<=5999){
       return 150;
    }
    else if(taxableIncome>=6000 && taxableIncome<=7999){
        return 300;
    }
    else if(taxableIncome>=8000 && taxableIncome<=11999){
        return 400;
    }
    else if(taxableIncome>=12000 && taxableIncome<=14999){
        return 500;
    }
    else if(taxableIncome>=15000 && taxableIncome<=19999){
        return 600;
    }
    else if(taxableIncome>=20000 && taxableIncome<=24999){
        return 750;
    }
    else if(taxableIncome>=25000 && taxableIncome<=29999){
        return 850;
    }
    else if(taxableIncome>=30000 && taxableIncome<=34999){
        return 900;
    }
    else if(taxableIncome>=35000 && taxableIncome<=39999){
        return 950;
    }
    else if(taxableIncome>=40000 && taxableIncome<=44999){
        return 1000;
    }
    else if(taxableIncome>=45000 && taxableIncome<=49999){
        return 1100;
    }
    else if(taxableIncome>=50000 && taxableIncome<=59999){
        return 1200;
    }
    else if(taxableIncome>=60000 && taxableIncome<=69999){
        return 1300;
    }
    else if(taxableIncome>=70000 && taxableIncome<=79999){
        return 1400;
    }
    else if(taxableIncome>=80000 && taxableIncome<=89999){
        return 1500;
    }
    else if(taxableIncome>=90000 && taxableIncome<=99999){
        return 1600;
    }
    else if(taxableIncome>=100000){
        return 1700;
    }
    

}


//the payeeFunction returns the paye based on different incomes ,each income bracket has a different tax rate
function payeeFunction(taxableIncome){
    if(taxableIncome<=24000){
        return taxableIncome*0.1;
    }
    else if(taxableIncome>=24001 && taxableIncome<=32333){
        return taxableIncome*0.25;
    }
    else if(taxableIncome>=32334 && taxableIncome<=500000){
        return taxableIncome*0.3;
    }
    else if(taxableIncome>=500001 && taxableIncome<=800000){
        return taxableIncome*0.325;
    }
    else if(taxableIncome>800000){
        return taxableIncome*0.35;
    }

}

salaryCalculator();