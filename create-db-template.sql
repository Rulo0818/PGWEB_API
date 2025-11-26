CREATE DATABASE notificaciones_alertas
    DEFAULT CHARACTER SET = 'utf8mb4';

    use notificaciones_alertas;

    CREATE TABLE notificaciones (
    id_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150),
    mensaje TEXT,
    tipo ENUM('info','alerta','error') DEFAULT 'info',
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE
);
INSERT INTO notificaciones (titulo, mensaje, tipo, fecha, leido) 
VALUES ('prueba#0', 'sistema de notificaciones', 'info', NOW(), FALSE);

INSERT INTO notificaciones (titulo, mensaje, tipo, fecha, leido) 
VALUES ('prueba#1', 'vista', 'alerta', NOW(), FALSE);
INSERT INTO notificaciones (titulo, mensaje, tipo, fecha, leido) 
VALUES ('prueba#2', 'error', 'error', NOW(), FALSE);
INSERT INTO notificaciones (titulo, mensaje, tipo, fecha, leido) 
VALUES ('prueba#3', 'alerta error', 'error', NOW(), FALSE),
('prueba#4','alerta info','info',NOW(),FALSE);


CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(100),
    precio_compra DECIMAL(10,2) DEFAULT 0,
    precio_venta DECIMAL(10,2) DEFAULT 0,
    unidad_medida VARCHAR(50) DEFAULT 'pieza',
    stock_actual DECIMAL(10,2) DEFAULT 0,
    imagen_url VARCHAR(255),
    estatus ENUM('activo','inactivo') DEFAULT 'activo',
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO productos (codigo, nombre, descripcion, categoria, precio_compra, precio_venta, unidad_medida, stock_actual, imagen_url, estatus, fecha_creacion)
VALUES (
    '911',                         -- codigo
    'test1',                       -- nombre
    'producto 1',                  -- descripcion
    'generica',                    -- categoria
    10.50,                         -- precio_compra
    15.99,                         -- precio_venta
    'pieza',                       -- unidad_medida
    100.00,                        -- stock_actual
    'https://img.ejemplo.com/imagen1.jpg', -- imagen_url
    'activo',                      -- estatus
    NOW()                          -- fecha_creacion
);

CREATE TABLE alertas_stock (
    id_alerta INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    stock_minimo DECIMAL(10,2),
    stock_maximo DECIMAL(10,2),
    notificar BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

INSERT INTO alertas_stock (id_producto, stock_minimo, stock_maximo, notificar)
VALUES (1, 10.00, 200.00, TRUE);
INSERT INTO alertas_stock (id_producto, stock_minimo, stock_maximo, notificar)
VALUES (1, 5.00, 150.00, TRUE);

INSERT INTO alertas_stock (id_producto, stock_minimo, stock_maximo, notificar)
VALUES (1, 20.00, 250.00, FALSE);

INSERT INTO alertas_stock (id_producto, stock_minimo, stock_maximo, notificar)
VALUES (1, 8.00, 180.00, TRUE);





use notificaciones_alertas;



