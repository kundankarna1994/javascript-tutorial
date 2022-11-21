module.exports = () => {
    /*
        In real life car is an object.
        A car has propertis like weight,color & bran, and methods like start & stop
    */

    const car = {
        type: "Fiat", // properties
        model: "500",
        color: "white",
        start: function () {
            // methods
            console.log("Car is starting");
        },
        stop: function () {
            console.log("Car is stoping");
        },
        info: function () {
            // here this refers to the object .i.e : more below
            return this.type + " " + this.color + " " + this.model;
        },
    };

    console.log(car);
    //accessing propertis
    console.log(car.type, car["type"]);
    //invoking methods
    car.start();
    console.log(car.info());

    // in an object metho, this refers to the object
    //alone this refers to the global objecet
    console.log(this);
    // in a function this refers to the global object.
    // in a function in strict mode this is undefined
    // in an event , this refers to the element that received the event

    // Note:: this is not a variable. it is an keyword , we cannot change the value of this
};
