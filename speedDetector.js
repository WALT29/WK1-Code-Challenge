let speedLimit=70;
let kmDemirit=5;


function speedRegulator(){
    let speed =prompt('ENTER YOUR DRIVING SPEED');
    speed=Number(speed);

    //we validate the speed
    if(isNaN(speed) || speed<0){
        console.log('ENTER A VALID SPEED');
        alert('ENTER A VALID SPEED')
        return;
    }
    //after validating the speed we evaluate the speed based on the given conditions
    if (speed<=speedLimit){
        console.log('OK');
        alert('OK')
    }
    else{
        demeritCalculator(speed);
    }

}
function demeritCalculator(speed){
    let exceededSpeed=speed-speedLimit;
    let demeritPoints=Math.ceil(exceededSpeed/kmDemirit);
    if(demeritPoints<12){
        console.log(`You have the following demerit points : ${demeritPoints}`);
        alert(` WARNING !!!! You have the following demerit points : ${demeritPoints}`);
    }
    else{
        console.log(`LICENCE SUSPENDED ,DEMERIT POINTS: ${demeritPoints}`);
        alert(`LICENCE SUSPENDED ,DEMERIT POINTS: ${demeritPoints}`);
    }
}

speedRegulator();