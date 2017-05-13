var mysql = require("mysql");
var inquirer = require("inquirer");
var password = require("./.env.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: password,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// selects data from mysql and displays it into the console
var start = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price);
        }
        console.log("---------");

        startQuestions();
    });
}


var startQuestions = function () {
    inquirer.prompt([{
        name: "select_Id",
        type: "input",
        message: "Select the ID of the item you wish to buy.."
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then(function (answer) {

        console.log("----------");

        connection.query("SELECT product_name, price, stock_quantity FROM products WHERE ?", {
            item_id: answer.select_Id
        }, function (err, res) {
            for (var i = 0; i < res.length; i++) {
                if ((res[i].stock_quantity - answer.quantity) > 0) {
                    var cost = res[i].price;
                    var numItems = answer.quantity;
                    totalCost = (cost * numItems);
                    console.log("item: " + res[i].product_name + " | " + "price / item: $" + res[i].price);
                    console.log("Total: $" + totalCost);
                    anotherPurchase();


                } else {
                    console.log("Sorry this item is out of stock");
                    anotherPurchase();
                }
            }
        })

    })

    var restart = function () {


        inquirer.prompt([{
            name: "restart",
            type: "input",
            message: "Would you like to go back to the main menu?"
        }]).then(function (answer) {
            if (answer.restart === "yes") {
                start();
            } else if (answer.restart === "no") {
                console.log("sorry you are stuck here until you say yes because we cannot meet your demands with this product");
                restart();
            } else {
                console.log("please type yes or no");
                restart();
            }
        })
    }

    var anotherPurchase = function () {
        inquirer.prompt([{
            name: "anotherPurchase",
            type: "input",
            message: "Would you like to make another purchase?"
        }]).then(function (answer) {
            if (answer.anotherPurchase === "yes") {
                start();
            } else if (answer.anotherPurchase === "no") {
                console.log("Your business is appreciated!");
                anotherPurchase();
            } else {
                console.log("please type yes or no");
                anotherPurchase();
            }
        })
    }

}


start();
