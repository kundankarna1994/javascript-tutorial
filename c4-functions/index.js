module.exports = () => {
    // functions are a block of code designed to perform a particular task
    // function are executed when "something" invokes(call) it.

    // lets write a function with name myFunction which returns the multuplication of two values provided
    // this function will not run unless we call it.
    function myFunction(p1, p2) {
        // here p1 and p2 are parameters of the function
        console.log(p1 * p2);
    }

    myFunction(10, 5); // here 10 & 5 are the two paramtere p1 & p2 resp

    // Function Return
    // when javascript reaches a return statement , the function will stop executing

    let x = sumFunction(4, 3);
    function sumFunction(a, b) {
        return a + b;
    }
    console.log(x);

    // local variables
    // variables declared within the function become LOCAL to the function

    function localVariable() {
        let name = "I am local variable";

        console.log(name);
    }
    // above name variable cannot be used outside of the function

    // console.log(name); this code will result in error as name is not defined
};
