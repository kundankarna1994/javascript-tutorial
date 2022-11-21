module.exports = () => {
    // javascript strings is zero or more characters written inside quotes

    let text1 = "Javascript";
    console.log(typeof text1, text1);

    // we can use single quote or double quotes

    // let text2 = "Javascript";
    // let text3 = 'Javascript';

    // string length
    console.log(text1.length); // returns the number of characters in a string

    //escape character

    /*
        \' : ' : Single Quote
        \" : " : Double Quote
        \\ : \ : Backslash
    */

    //    let text4 = "We are the\"Nepalese\"";
    //    let text5 = 'It\'s alright';

    // Javascript String as object

    let x1 = "John";
    let x2 = new String("John");
    console.log(typeof x2, x2);

    console.log(x1 == x2);
    console.log(x1 === x2);

    let x3 = new String("John");
    let x4 = new String("John");
    console.log(x3 == x4);
    console.log(x3 === x4);

    // extracting string parts
    let y1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // slice : extracts the part of a string and returns the extracted part in a new string
    console.log(y1.slice(1, 5));

    // substring : is similar to slice

    console.log(y1.substring(1, 5));

    // substr : is similar to slice, where the second parameter is the length of the extracted part

    console.log(y1.substr(1, 5)); // ie. deprecated

    // replacing string content

    console.log(y1.replace("ABC", "CBA")); // this will not affect the value of y1. only replaces the first match

    console.log("Hello World, Hello Universe".replaceAll("Hello", "Hi")); // will replace all the matches

    // upper case and lower case

    console.log(y1.toLowerCase());
    console.log(y1.toUpperCase());

    // trim : removes whitespace from the start and ending of an string

    console.log("  Hello World  ");

    console.log("  Hello World   ".trim());

    // trimStart trimEnd

    // String Padding

    console.log("Hi".padStart(10, "x")); //add a padding to the string at the start
    console.log("Hi".padEnd(10, "x")); //add a padding to the string at the start

    // String charAt

    console.log("Hello World".charAt(0)); // return the first character of the string
    console.log("Hello World".charCodeAt(0)); // return the UTF-16 code of the character of the string

    // property access
    let z1 = "Hello World";
    console.log(z1[0]);

    // converting string to array

    let z2 = "Hello, World";

    console.log(z2.split(",")); // split on comma
    console.log(z2.split(" ")); // split of space
    console.log(z2.split("")); // split all characters

    // string indexOf

    let str1 = "Please locate where 'locate' occures!";

    console.log(str1.indexOf("locate")); // returns the starting index of the word
    console.log(str1.lastIndexOf("locate")); // returns the ending index of the word

    // string search

    console.log(str1.search("locate"));

    // string match

    console.log(str1.match("whe"));

    console.log(str1.matchAll("loc")); // es2020 feature

    // string inlcudes

    console.log(str1.includes("whe"));
    console.log(str1.includes("when"));

    // string starts with

    console.log(str1.startsWith("Please"));
    console.log(str1.endsWith("!"));

    // string template literals : uses backtick `` rather than quotes to define a string

    let tmp1 = `Hello World`;
    console.log(tmp1, typeof tmp1);

    console.log(`"Hello Wolrd,It's alright`); // we can use both quotes

    // interpolation i.e : ${...}

    let number1 = 42;

    console.log(`Hi my number is ${number1}`); // allows var in strings

    // allows expression in string
    let price = 10;
    let vat = 0.13;
    console.log(`Total : ${(price * (1 + vat)).toFixed(2)}`);
};
