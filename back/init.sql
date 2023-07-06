use barmanager;
CREATE TABLE users (
    id INT PRIMARY KEY,
    role VARCHAR(255),
    phone_number VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE menu_items (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    img VARCHAR(255),
    description VARCHAR(255),
	price DECIMAL(10,2)
);

CREATE TABLE ingredients (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price_per_unit DECIMAL(10,2),
    unit VARCHAR(255)
);

CREATE TABLE `orders` (
    id INT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10,2),
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT,
    menu_item_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES `orders`(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

CREATE TABLE ingredient_in_menu_item (
    id INT PRIMARY KEY,
    menu_item_id INT,
    ingredient_id INT,
    proportion DECIMAL(5,2),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

INSERT INTO users (id, role, phone_number, username, password) VALUES
(1, 'Manager', '5551234567', 'vahag', '123'),
(2, 'Customer', '5559876543', 'Amy', '456');

INSERT INTO menu_items (id, name, img, description, price) VALUES
(1, 'Mojito', 'mojito.jpg', 'Refreshing mint and lime cocktail', 8.99),
(2, 'Old Fashioned', 'oldfashioned.jpg', 'Classic whiskey cocktail', 9.99),
(3, 'Margarita', 'margarita.jpg', 'Tangy tequila cocktail', 8.99);

INSERT INTO ingredients (id, name, description, price_per_unit, unit) VALUES
(1, 'Mint Leaves', 'Fresh mint leaves', 0.05, 'leaf'),
(2, 'Lime', 'Fresh lime', 0.50, 'lime'),
(3, 'White Rum', 'Quality white rum', 2.00, 'oz'),
(4, 'Whiskey', 'Aged whiskey', 3.00, 'oz'),
(5, 'Sugar Cube', 'Sweet sugar cube', 0.10, 'cube'),
(6, 'Angostura Bitters', 'Flavorful bitters', 0.20, 'dash'),
(7, 'Tequila', 'Smooth tequila', 2.50, 'oz'),
(8, 'Triple Sec', 'Orange-flavored liqueur', 1.00, 'oz');

INSERT INTO orders (id, user_id, total_price, order_date) VALUES
(1, 2, 17.98, '2023-07-06');

INSERT INTO order_items (id, order_id, menu_item_id, quantity) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1);

INSERT INTO ingredient_in_menu_item (id, menu_item_id, ingredient_id, proportion) VALUES
(1, 1, 1, 10),
(2, 1, 2, 1),
(3, 1, 3, 2),
(4, 2, 4, 2),
(5, 2, 5, 1),
(6, 2, 6, 2),
(7, 3, 7, 2),
(8, 3, 8, 1),
(9, 3, 2, 1);

DROP TABLE IF EXISTS ingredient_in_menu_item;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS menu_items;