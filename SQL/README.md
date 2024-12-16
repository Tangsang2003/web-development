# SQL
<h3>Table of Contents</h3>

- [SQL](#sql)
  - [1. Create Table:](#1-create-table)
  - [2. Insert data into table](#2-insert-data-into-table)
    - [2.1 Inserting if every columns need to be inserted.](#21-inserting-if-every-columns-need-to-be-inserted)
    - [2.2 Insert if only certain columns need to be inserted.](#22-insert-if-only-certain-columns-need-to-be-inserted)
  - [3. READ](#3-read)
    - [3.1 Select every row from a table.](#31-select-every-row-from-a-table)
    - [3.2 Select some columns from a table.](#32-select-some-columns-from-a-table)
  - [4. UPDATE](#4-update)
    - [4.1 Updating a particular row.](#41-updating-a-particular-row)
    - [4.2 Updating a table.](#42-updating-a-table)
    - [4.3 Delete](#43-delete)
  - [5. Relationships](#5-relationships)
    - [5.1 INNER JOIN](#51-inner-join)


## 1. Create Table:
```SQL
CREATE TABLE table_name (
    column_name datatype,
    column_name_2 datatype,
    ...
    column_name_n datatype,

) 
```
Example:
```SQL
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
)
```

## 2. Insert data into table

### 2.1 Inserting if every columns need to be inserted.
- For string, use single quotes. Double quotes are used for identifiers such as table names or column names.
```SQL
INSERT INTO products
VALUES (1, 'Pen', 240.19);
```

### 2.2 Insert if only certain columns need to be inserted.
```SQL
INSERT INTO products("id", "name")
VALUES(2, 'Pencil');
```

## 3. READ
### 3.1 Select every row from a table.
```SQL 
SELECT * FROM table_name; 
```

### 3.2 Select some columns from a table.
```SQL
SELECT column1, column2, ...
FROM table_name
WHERE condition; 
```

## 4. UPDATE

### 4.1 Updating a particular row.
```SQL
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
Example: 
```SQL 
UPDATE "products"
SET price = 4000
WHERE id = 3;
```

### 4.2 Updating a table.
To add, delete or modify a column we use ALTER.
```SQL
ALTER TABLE table_name
ADD column_name datatype;
```

### 4.3 Delete

```SQL
DELETE FROM table_name
WHERE condition
```

## 5. Relationships

```SQL
CREATE TABLE orders (
  id INT NOT NULL UNIQUE,
  customerId INT NOT NULL,
  productId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(customerId) REFERENCES customers(id),
  FOREIGN KEY(productId) REFERENCES products(id)
)
```

### 5.1 INNER JOIN 
```SQL
SELECT orders.customerid, customers.name, products.name
FROM orders
INNER JOIN customers ON orders.customerId =customers.id
INNER JOIN products ON orders.productId = products.id;
```

**Refer to W3 SChools Documentation for everything.**