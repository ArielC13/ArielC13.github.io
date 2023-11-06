CREATE TABLE empleados(
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR,
    apellido VARCHAR,
    sector VARCHAR,
    edad INT
);

CREATE TABLE clientes(
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR,
    apellido VARCHAR
);

CREATE TABLE productos(
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR,
    marca VARCHAR,
    precio INT
);

CREATE TABLE supermercados (
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR,
    direccion VARCHAR,
    sucursal INT
);

CREATE TABLE productos_x_supermercados(
    id_producto INT,
    id_supermercado INT,
    stock INT,
    Foreign Key (id_producto) REFERENCES productos(id),
    Foreign Key (id_supermercado) REFERENCES supermercados(id)
);

CREATE TABLE ventas(
    id_producto INT,
    id_cliente INT,
    total INT,
    Foreign Key (id_producto) REFERENCES productos(id),
    Foreign Key (id_cliente) REFERENCES clientes(id)
);

CREATE TABLE empleados_x_supermercados(
    id_empleado INT,
    id_supermercado INT,
    Foreign Key (id_empleado) REFERENCES empleados(id),
    Foreign Key (id_supermercado) REFERENCES supermercados(id)
);