-- 1) Precio máximo, mínimo y promedio de cada marca
select max(precio) as precio_maximo, min(precio) as precio_minimo, avg(precio) as precio_promedio, marca from productos GROUP BY marca;

--2) Stock total de cada producto (en todas las sucursales)

select sum(productos_x_supermercados.stock) as stock_total, productos.nombre as producto from productos
join productos_x_supermercados on productos.id = productos_x_supermercados.id_producto GROUP BY productos.nombre;

--3) Stock de cada producto, por cada sucursal

select stock_total, stock_sucursal.nombre, stock_sucursal.sucursal, mercado, direccion from (select sum(productos_x_supermercados.stock)
as stock_total, productos.nombre, supermercados.sucursal, supermercados.nombre as mercado, supermercados.direccion as direccion from productos
join productos_x_supermercados on productos.id = productos_x_supermercados.id_producto
join supermercados on productos_x_supermercados.id_supermercado = supermercados.id
GROUP BY productos.nombre,supermercados.sucursal, supermercados.nombre, supermercados.direccion) as stock_sucursal ORDER BY stock_sucursal.sucursal;

-- 4) Precio del ticket promedio por sucursal (de todas las ventas de cada sucursal)

select round (avg(ventas.total)) as ticket_promedio, supermercados.sucursal, supermercados.nombre, supermercados.direccion from productos
join ventas on productos.id = ventas.id_producto
join productos_x_supermercados on productos.id = productos_x_supermercados.id_producto
join supermercados on productos_x_supermercados.id_supermercado = supermercados.id
GROUP BY supermercados.sucursal, supermercados.nombre, supermercados.direccion;


--5) Total de ventas por cada marca, de mayor a menor

select productos.marca, sum(ventas.total) as ventas_marca
from productos join ventas on productos.id = ventas.id_producto
GROUP BY productos.marca ORDER BY ventas_marca DESC;

--6) Mostrar los clientes más frecuentes (cantidad de compras, no dinero gastado) de mayor a menor

select chango_compra, nombre_completo from (select count(productos) as chango_compra, concat(clientes.nombre, ', ', clientes.apellido) as nombre_completo
from productos join ventas on productos.id = ventas.id_producto
join clientes on ventas.id_cliente = clientes.id
GROUP BY nombre_completo) as compras_cliente ORDER BY chango_compra DESC;

--7) Mostrar cantidad de empleados por cada sector de cada sucursal

select cantidad_empleados, empleados_totales.sector, empleados_totales.sucursal
from (select count(empleados) as cantidad_empleados, empleados.sector, supermercados.sucursal from empleados
join empleados_x_supermercados on empleados.id = empleados_x_supermercados.id_empleado
join supermercados on empleados_x_supermercados.id_supermercado = supermercados.id
GROUP BY empleados.sector, supermercados.sucursal) as empleados_totales
ORDER BY empleados_totales.sucursal;

--8) Mostrar las sucursales con más cantidad de clientes (no de ventas sino clientes únicos). Ordenar de mayor a menor

select DISTINCT contar_clientes, clientes_x_sucursal.sucursal, mercado from(select count(DISTINCT clientes.id) as contar_clientes, supermercados.sucursal,supermercados.nombre as mercado
from clientes join ventas on clientes.id = ventas.id_cliente
join productos_x_supermercados on ventas.id_producto = productos_x_supermercados.id_producto
join supermercados on productos_x_supermercados.id_supermercado = supermercados.id
GROUP BY supermercados.sucursal, supermercados.nombre) as clientes_x_sucursal ORDER BY contar_clientes DESC;

--9) Mostrar la cantidad y tipo de productos de la marca "Ciudad del Lago"

select count(productos) as cantidad, nombre as tipo, marca
from productos where productos.marca = 'Ciudad del Lago'
GROUP BY nombre,marca;

--10) Traer nombre completo de todos los empleados mayores de 40 años

select nombre, apellido, edad from empleados where edad > 40;

