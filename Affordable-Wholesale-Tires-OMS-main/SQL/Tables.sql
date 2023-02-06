CREATE TABLE Customer(
    Cust_id INT NOT NULL AUTO_INCREMENT,
    First_name VARCHAR(255) NOT NULL,
    Last_name VARCHAR(255) NOT NULL,
    Phone_number VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(255) NOT NULL,
    Zip_code VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,

    PRIMARY KEY (Cust_id),
    CHECK (Phone_number REGEXP "^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$"),
    CHECK (Email REGEXP "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')"),
    CHECK (Zip_code REGEXP "^[0-9][0-9][0-9][0-9][0-9]$")
);

CREATE TABLE Vendor(
    Vendor_id INT NOT NULL AUTO_INCREMENT,
    Vendor_name VARCHAR(255) NOT NULL,
    Vendor_country VARCHAR(255) NOT NULL,
    Vendor_phone VARCHAR(255) NOT NULL,
    Vendor_email VARCHAR(255) NOT NULL,

    PRIMARY KEY (Vendor_id),
    CHECK (Vendor_phone REGEXP "^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$"),
    CHECK (Vendor_email REGEXP "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')")
);

CREATE TABLE Location(
    Location_id INT NOT NULL AUTO_INCREMENT,
    Phone_number VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(255) NOT NULL,
    Zip_code VARCHAR(255) NOT NULL,

    PRIMARY KEY (Location_id),
    CHECK (Phone_number REGEXP "^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$"),
    CHECK (Email REGEXP "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')")
    CHECK (Zip_code REGEXP "^[0-9][0-9][0-9][0-9][0-9]$")
);

CREATE TABLE Employee_type(
    Employee_type_id INT NOT NULL AUTO_INCREMENT,
    Employee_type_desc VARCHAR(255) NOT NULL,

    PRIMARY KEY (Employee_type_id)
);

CREATE TABLE Order_status(
    Order_status_type_id INT NOT NULL AUTO_INCREMENT,
    Order_status_desc VARCHAR(255) NOT NULL,
    PRIMARY KEY (Order_status_type_id)
);

CREATE TABLE Tire_status(
    Tire_status_id INT NOT NULL AUTO_INCREMENT,
    Tire_status_desc VARCHAR(255) NOT NULL,

    PRIMARY KEY (Tire_status_id)
);

CREATE TABLE Employee_status(
    Employee_status_id  INT NOT NULL AUTO_INCREMENT,
    Employee_status_desc VARCHAR(255) NOT NULL,

    PRIMARY KEY (Employee_status_id)
);

CREATE TABLE Tire_condition_type(
    Condition_type_id  INT NOT NULL AUTO_INCREMENT,
    Condition_type_desc VARCHAR(255) NOT NULL,

    PRIMARY KEY (Condition_type_id)
);

CREATE TABLE Security_question(
    Security_question_id INT NOT NULL AUTO_INCREMENT,
    Security_question_text VARCHAR(255) NOT NULL,

    PRIMARY KEY (Security_question_id)
);

CREATE TABLE Pickup_time(
    Pickup_time_id INT NOT NULL AUTO_INCREMENT,
    Pickup_time  VARCHAR(255) NOT NULL,

    PRIMARY KEY (Pickup_time_id),
    CHECK CONSTRAINT (Pickup_time REGEXP "^(0?[1-9]|1[0-2]):([0-5]\d)\s?((?:A|P)\.?M\.?)$")
);

CREATE TABLE Employee(
    Emp_id INT NOT NULL AUTO_INCREMENT,
    First_name VARCHAR(255) NOT NULL,
    Last_name VARCHAR(255) NOT NULL,
    Phone_number VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(255) NOT NULL,
    Zip_code VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Employee_type_id INT NOT NULL,
    Employee_status_id INT NOT NULL,

    PRIMARY KEY (Emp_id),
    FOREIGN KEY (Employee_type_id) REFERENCES Employee_type(Employee_type_id),
    FOREIGN KEY (Employee_status_id) REFERENCES Employee_status(Employee_status_id),

    CHECK (Phone_number REGEXP "^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$"),
    CHECK (Email REGEXP "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')"),
    CHECK (Zip_code REGEXP "^[0-9][0-9][0-9][0-9][0-9]$")
);

CREATE TABLE Customer_security_question(
    Cust_id INT NOT NULL,
    Security_question_id VARCHAR(255) NOT NULL,
    Answer VARCHAR(255) NOT NULL,

    PRIMARY KEY (Cust_id, Security_question_id),
    FOREIGN KEY Cust_id REFERENCES Customer(Cust_id),
    FOREIGN KEY Security_question_id REFERENCES Security_question(Security_question_id)
);

CREATE TABLE Employee_security_question(
    Emp_id INT NOT NULL,
    Security_question_id VARCHAR(255) NOT NULL,
    Answer VARCHAR(255) NOT NULL,

    PRIMARY KEY (Emp_id, Security_question_id),
    FOREIGN KEY Emp_id REFERENCES Employee(Emp_id),
    FOREIGN KEY Security_question_id REFERENCES Security_question(Security_question_id)
);

CREATE TABLE Tire(
    Tire_id INT NOT NULL AUTO_INCREMENT,
    Condition_type_id INT NOT NULL,
    Tire_status_id INT NOT NULL,
    Vendor_id INT NOT NULL,
    Location_id INT NOT NULL,
    Tire_size VARCHAR(255) NOT NULL,
    Price DECIMAL(6,2) NOT NULL,
    Tire_image BLOB,
    Tire_status_date DATETIME NOT NULL,
    Delivery_date DATE NOT NULL,

    PRIMARY KEY (Tire_id),
    FOREIGN KEY Condition_type_id REFERENCES Tire_condition_type(Condition_type_id),
    FOREIGN KEY Tire_status_id REFERENCES Tire_status(Tire_status_id),
    FOREIGN KEY Vendor_id REFERENCES Vendor(Vendor_id),
    FOREIGN KEY Location_id REFERENCES Location(Location_id),
    CHECK (Tire_size REGEXP "^\d+\/\d+\s?R\d+$")
);

CREATE TABLE Order(
    Order_id INT NOT NULL AUTO_INCREMENT,
    Cust_id INT NOT NULL,
    Emp_id INT,
    Order_status_id INT NOT NULL,
    Location_id INT NOT NULL,
    Order_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (Order_id),
    FOREIGN KEY Cust_id REFERENCES Customer(Cust_id),
    FOREIGN KEY Emp_id REFERENCES Employee(Emp_id),
    FOREIGN KEY Order_status_id REFERENCES Order_status_id(Order_status_id),
    FOREIGN KEY Location_id REFERENCES Location_id(Location_id)
);

CREATE TABLE Line_item_order(
    Order_id INT NOT NULL,
    Tire_id INT NOT NULL,

    PRIMARY KEY (Order_id, Tire_id),
    FOREIGN KEY Order_id REFERENCES Order(Order_id),
    FOREIGN KEY Tire_id REFERENCES Tire(Tire_id)
);

CREATE TABLE Appointment(
    Apt_id INT NOT NULL AUTO_INCREMENT,
    Order_id INT NOT NULL,
    Pickup_date DATE NOT NULL,
    Pickup_time_id INT NOT NULL,

    PRIMARY KEY (Apt_id),
    FOREIGN KEY Order_id REFERENCES Order(Order_id),
    FOREIGN KEY Pickup_time_id REFERENCES Pickup_time(Pickup_time_id)
);

CREATE TABLE Customer_session(
    Session_id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    Cust_id INT NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(), 
    Valid TINYINT(1),

    PRIMARY KEY (Session_id),
    FOREIGN KEY Cust_id REFERENCES Customer(Cust_id)
);

CREATE TABLE Employee_session(
    Session_id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    Emp_id INT NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(), 
    Valid TINYINT(1),

    PRIMARY KEY (Session_id),
    FOREIGN KEY Emp_id REFERENCES Employee(Emp_id)
);