// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem

function activityNotifications(expenditure, d) {
    let nNotif = 0;
    let i1 = Math.floor((d-1)/2);
    let i2 = Math.ceil((d-1)/2);
    let cs = new Array(Math.max(...expenditure)).fill(0);
  
    for (let i=d-1;i>=0;i--) {cs[expenditure[i]]++}
    for (let i=d;i<expenditure.length;i++){
        let med1=0, med2=0;
        for (let j=0, k =0; k<=i1;k+=cs[j],j++) med1=j
        for (let j=0, k =0; k<=i2;k+=cs[j],j++) med2=j
        let median = (med1+med2)/2;

        if (expenditure[i]>=median*2) {nNotif++}

        cs[expenditure[i]]++;
        cs[expenditure[i-d]]--;
    }
    return nNotif;
}

// Example
let expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]; 
let d = 5; 
console.log(activityNotifications(expenditure,d))