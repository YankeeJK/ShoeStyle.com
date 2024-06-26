Create database BaseDB

Use BaseDB

-- Creacion de la tabla Usuarios
CREATE TABLE Usuarios (
    id_usuario INT IDENTITY (1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrase�a VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

-- Creacion de la tabla Productos
CREATE TABLE Productos (
    id_producto INT IDENTITY (1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    talla VARCHAR(10) NOT NULL,
    stock INT NOT NULL
);

-- Creacion de la tabla Pedidos
CREATE TABLE Pedidos (
    id_pedido INT IDENTITY (1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Creacion de la tabla Detalles_Pedidos
CREATE TABLE Detalles_Pedidos (
    id_detalle INT IDENTITY (1,1)  PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);
