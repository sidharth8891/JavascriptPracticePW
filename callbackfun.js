function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log(" FUNCTION-01 Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("FUNCTION2: End (callback)");
});


console.log("FUNCTION-03: This runs immediately after async call");