module.exports = () => {
    // javascript Types are Dynamic

    let x; // x is undefined
    x = 5; // x is a Number
    x = "John"; //x is a String

    // Javascript Strings

    let carName1 = "Ferrari"; // using double quotes
    let carName2 = "BMW"; // using single quotes
    console.log(typeof carName1, typeof carName2);
    //You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

    // Javascript Numbers
    let x1 = 34.0; // In decimals
    let x2 = 23; // without decimals

    console.log(typeof x1, typeof x2);

    // Javascript Booleans
    let y1 = 5;
    let y2 = 5;
    let y3 = 6;
    console.log(typeof (y1 == y2), y1 == y2);
    console.log(typeof (y1 == y3), y1 == y3);

    // Javascript Arrays

    let cars = ["Saab", "Volvo", "BMW"];
    // type of cars returns object
    //check if variable is array
    console.log(Array.isArray(cars));
    // we will learn more in future

    // Javascript object

    const person = {
        firstName: "Kundan",
        lastName: "Karna",
        age: 50,
    };
    // here this person obj has 3 properties i.e: firstName,lastName,age

    console.log(typeof person, person);
};
