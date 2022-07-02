//UC1 IF ELSE
// {
// const IS_ABSENT=0;
// let emp_check=Math.floor(Math.random() * 10) % 2;
// if(emp_check == IS_ABSENT){
//     console.log("Employee is absent");
//    }
//    else{
//     console.log("Employee is present");
//    }
// }
   //UC2 SWITCH CASE

//    switch(emp_check){
//     case IS_PART_TIME:
//         emphrs=PART_TIME_HOURS;
//         break;
//     case IS_FULL_TIME:
//         emphrs=FULL_TIME_HOURS;
//         break;
//     default:
//         emphrs=0;
//         break;        
//    }
   const IS_PART_TIME=1;
   const IS_FULL_TIME=2;
   const PART_TIME_HOURS=4;
   const FULL_TIME_HOURS=8;
   const WAGE_PER_HOUR=20;

//    let emp_check=Math.floor(Math.random() * 10) % 3;
//    let emphrs=getWorkingHours(emp_check);
//    let empwage=emphrs*WAGE_PER_HOUR;
//    console.log("Emp Wage: " + empwage);

   //UC3 FUNCTION

   function getWorkingHours(emp_check){
    switch(emp_check){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            
        default:
            return 0;    

   }
}
//UC4 for loop
{
    const NUM_OF_WORKING_DAYS=20;
    let totalemphrs=0;
    for(let day=0; day < NUM_OF_WORKING_DAYS; day++){
        let emp_check=Math.floor(Math.random() * 10) % 3;
        totalemphrs += getWorkingHours(emp_check);
    }
    let empwage=totalemphrs*WAGE_PER_HOUR;
    console.log("UC 4: Total emp hours: "+totalemphrs + "Emp wage: "+empwage);
}

//UC6 Arrays
function calcDailyWage(emphrs){
    return emphrs*WAGE_PER_HOUR;
}
{
    const MAX_HRS_IN_MONTH=160;
    const NUM_OF_WORKING_DAYS=20;
    var totalemphrs=0;
    var totalworkingdays=0;
    var empDailyWagearr = new Array();

    while(totalemphrs <= MAX_HRS_IN_MONTH && 
        totalworkingdays <= NUM_OF_WORKING_DAYS){
            totalworkingdays++;
            let emp_check=Math.floor(Math.random() * 10) % 3;
            emphrs = getWorkingHours(emp_check);
            totalemphrs += emphrs;
            empDailyWagearr.push(calcDailyWage(emphrs));
        }
        let empwage=calcDailyWage(totalemphrs);
        console.log("UC 6: Total Days: " + totalworkingdays + "Total hours: "+totalemphrs
        + "Employee Wage" + empwage);

//Array
//UC 7A
let totempwage=0;
function sum(dailywage){
    totempwage += dailywage;
}
empDailyWagearr.forEach(sum);
console.log("Total Days: " + totalworkingdays + "Total hours: "+totalemphrs
        + "Employee Wage" + empwage);
 
function totalWages(totalWage,dailywage){
    return totalWage+dailywage;
}
console.log("UC 7A:Emp wage with reduce: " + empDailyWagearr.reduce(totalWages,0));

//UC 7B show the day along with daily wage using array map helper function
let dailyCntr=0;
function mapDayWithWage(dailywage){
    dailyCntr++;
    return dailyCntr + "=" + dailywage;
}
let mapDayWithWageArr = empDailyWagearr.map(mapDayWithWage);
console.log("UC 7B-Daily wage Map");
console.log(mapDayWithWageArr);

//UC 7C show days when full time wage of 160 were earned
function fulltimeWage(dailywage){
    return dailywage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C Daily wage filter when full time wage earned");
console.log(fullDayWageArr);
}
