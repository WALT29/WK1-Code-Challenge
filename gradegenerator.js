
function gradeGenerator(){
//I prompt the user to enter his marks but since I want to manipulate the marks enteredto  achieve something.I store the marks in a variable
let marks=prompt('ENTER YOUR MARKS BETWEEN 0-100');

marks=Number(marks); //I convert the entered marks into a number since the user might have entered something naughty

//the next step after the conversion is to check the validity of the entered marks
if(isNaN(marks) || marks<0 || marks>100){
    console.log('Please Enter Your correct marks between 0-100');
    alert('Please Enter Your correct marks between 0-100')
}

//the final step is to check the grade based on the marks entered
//I have used conditional statements if else if because there are multiple conditions 
let grade;//here we declared the variable but it remains undefined
if(marks>79){
    grade='A';
    console.log(`Congratulations You have an ${grade}`);
    alert(`Congratulations You have an : ${grade}`)

}else if(marks>=60 && marks<=79){
    grade='B';
    console.log(`Well Done You have a ${grade}`);
    alert(`Well Done You have a : ${grade}`)

}else if(marks>=49 && marks<=59){
    grade='C';
    console.log(`Nice Try You have a ${grade}`);
    alert(`Nice Try You have a : ${grade}`);

}else if(marks>=40 && marks<=49){
    grade='D';
    console.log(`There is Room for Improvement You have a ${grade}`);
    alert(`There is Room for Improvement You have a : ${grade}`);

}else if(marks<40 && marks>0){
    grade='E';
    console.log(`SEE ME ! You have an ${grade}`);
    alert(`SEE ME ! You have an : ${grade}`);

}

}

gradeGenerator();