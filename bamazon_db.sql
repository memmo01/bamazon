-- CREATE DATABASE Bamazon_DB;

USE bamazon_db;
/*
CREATE TABLE products(
item_id integer NULL,
product_name VARCHAR(50) null,
department_name VARCHAR(50) null,
price decimal(10,3) null,
stock_quantity INT(30) null

);
*/
SELECT * FROM bamazon_db.products;
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(1,"Teddy Bear", "toys", 10, 20);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(2, "Robot", "toys", 10, 5);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(3, "hair gel", "hygiene", 10, 5);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(4, "batteries", "toys", 8, 40);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(5, "laptop", "entertainment", 500, 15);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(6, "television", "entertainment", 600, 5);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(7, "swifer", "cleaning", 15, 28);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(8, "pillows", "bedding", 23, 60);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(9, "purple dress", "clothing", 50, 5);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(10, "white shirt", "clothing", 30, 20);
SELECT * FROM bamazon_db.products;
