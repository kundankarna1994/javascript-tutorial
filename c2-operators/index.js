module.exports = () => {
    /*
        Types of javsacript operators 
        1. Arithmetic Operators
        2. Assignment Operators
        3. Comparison Operators
        4. Logical Operators
        5. Conditional Operators
        6. Type Operators
    */

    // Arithmetic Operators : are used to perform arithmetic of numbers

    let a = 3;
    let x = (100 + 50) * a;
    console.log(x);

    /*
         + : Addition
         - : Substraction
         * : Multiplication
         /: Division
         %: Modules ( Divison Operators)
         ++ : Increment
         -- : Decrement
         ** : Exponentiation(ES2016)
    */

    // Assignment Operators : assign values to javascript variables
    let y = 10;
    console.log((y += 5)); // i.e : 15

    /*
        = :  x = y => x =y
        += : x + = y => x = x + y
        -= : x -= y =>  x = x - y
        *= : x = x = *= y => x = x * y
        /= : x /= y => x = x / y
        %= : x %=y = x % y
        **= : x **=y = x ** y ( x to the power of y)
    */

    console.log((x = y));
    console.log((x += y));
    console.log((x -= y));
    console.log((x *= y));
    console.log((x /= y));
    console.log((x %= y));
    console.log((x **= y));

    // Adding Strings

    let text1 = "John";
    let text2 = "Doe";

    console.log(text1 + " " + text2);

    // += assignment operator can also be used to add(concatenate) strings;

    let text3 = "Hello ";
    text3 += "World";
    console.log(text3);

    // adding string and numbers

    const example1 = 5 + 5;
    const example2 = "5" + 5;
    const example3 = "Hello" + 5; // if you add a number to a string, the result will be a string

    console.log(example1, example2, example3);

    // Comparison Operators

    /*
        == : equal to 
        === : equal to and equal type
        != : not equal
        !== : not equal value or not equal type
        > : greater than
        < : less than
        >= : greater than or equal to
        <= : less than or equal to
        ? : ternary operator
    */
    const example4 = 4;
    const example5 = 4;
    const example6 = "4";
    console.log(example4 == example5);
    console.log(example4 == example6);

    console.log(example4 === example5);
    console.log(example4 === example6);

    console.log(example4 != example5);
    console.log(example4 != example6);

    console.log(example4 !== example5);
    console.log(example4 !== example6);

    // TYpe of operators

    /*
        typeof : returns the type of variable
        instanceof : returns true if an object is an instance of object type
    */
};
