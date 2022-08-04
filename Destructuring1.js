let user = {
    name: "John",
    years: 30
    };
  
let {name, years: age, isAdmin = false} = user;

// your code to the left side:
// ... = user
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false