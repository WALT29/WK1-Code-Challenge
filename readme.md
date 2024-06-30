# WEEK 1 CODE CHALENGE    28/6/24

By WALTER DAVID IRUNGU

## DESCRIPTION

This repository contains three different projects :
    1.Student Grade Genarator
    2.Speed Detector
    3.Net Salary Calculator

## TECHNOLOGIES USED

    1.HTML
    2.JAVASCRIPT
    3.GIT and GITHUB

## 1.Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
 A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

### APPROACH
    1.From the project,I am required to have a function 
    2.The function must prompt the student to enter his/her marks which should be between 0-100
    3.Since I am going use the marks entered by the student to grade him .I must store the entered marks in a variable.
    4.Once I have stored the entered marks in a variable I must convert the marks to a Number .
    5.The next step is to check the validity of the marks entered whereby the marks should lie between 0-100 and must be a valid number.If the marks entered are valid the marks will be evaluated,if the marks are not valid ,the student will be requested to enter valid marks which lie between 0-100
    6.Once the marks entered are valid .I should determine the grade of the students based on Marks.
    7.To determine the grade I have used conditonal statements .The conditional statements I have used is if (){}else if (){} ,this is because the problem requires us to evaluate multiple conditions.
    8.The output is displayed on the console or the document using the alert function



## 2.Speed Detector (Toy Problem)
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


### APPROACH
    1.Given the problem .I begin by declaring and defining the variables which are obvious. The speedLimit=70 and kmDemerit=5
    2.I define a function called speedRegulator which prompts the user to enter the correct speed between 0 and infinity
    3.I store the entered speed by the user in a variable called speed
    4.The entered speed must be converted to a number since I want to also validate the speed. 
    5.I validated the speed with the help of conditional statements whereby ,I check if the speed entered is a number and if the speed is greater or equal to zero
    6.Once the entered speed is valid I should determine if the speed is within the speed limit or not to do this .I have used conditonal statements if else .if the speed is within the speed limit the driver will be alerted ok .If the speed is above the speed limit I have invoked another called demeritCalculator.
    7.I have prefered to invoke the demeritCalculator in the else block in speedRegulator function because it looks neater and easier to interpret.
    8.The demeritClaculator function takes in speed as the argument.
    9.I declared and define the exceededSpeed =Speed - speedLimit;
    10.I also declare and define the demeritPoints =Math.floor(exceededspeed/kmDemerit).I have used .ceil () method since I dont want to have points in decimal points .floor is less stricter to drivers than .ceil().
    11.I have used conditional statements to evaluate  I whether the the demerits are greater than 12 .if the demerits are greater than 12 .The driver gets his licenced cancelled else if the demerit points are less than 12 ,the program will only warn the driver.
    12.The program will output in the console and in the document through the alert function.


