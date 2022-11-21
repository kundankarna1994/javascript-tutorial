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
};
