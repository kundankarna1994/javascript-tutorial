module.exports = () => {
    // This is a comment. This line is excluded while executing the program
    // variables keywords
    /*
        const : The const keyword declares a block-scoped, immutable constant variable, 
            i.e. a variable that can’t be reassigned.
            Constants are also called “immutable variables”;
        let : The let keyword declares a block-scoped local variable, 
            optionally initializing it to a value.
            Block-scoped means that the variable is only available within the block it was declared in, 
            which is usually denoted by curly braces {}
        var: The var keyword declares a function-scoped or global variable, 
            optionally initializing it to a value.
            Function-scoped means that the variable is only available within 
            the function it was declared in. Global variables are available throughout your entire code
    */

    // Data Types
    //String

    let name = "Kundan";
    console.log(typeof name); // ie. string

    //Number
    let number = 32;
    console.log(typeof number); // ie. number

    //Boolean

    let status = true;
    console.log(typeof status);

    //undefined

    let age;
    console.log(typeof age);
};
