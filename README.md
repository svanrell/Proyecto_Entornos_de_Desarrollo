# Proyecto_Entornos_de_Desarrollo
## Descripción
Este proyecto es una aplicación web educativa desarrollada con HTML, CSS y JavaScript. Permite a los usuarios registrarse (Sign Up) e iniciar sesión (Login), y posteriormente acceder a una tienda con productos variados.  

El proyecto tiene como objetivo principal aprender a trabajar de manera organizada y profesional con Git y GitHub, así como practicar la estructura y navegación de proyectos web.  

## Autores
- Sergio  
- Sergio  
- Allandryo  

## Funcionalidades implementadas por Sergi V
- **Página de Tienda (`tienda.html`):**  
  - Esta página se muestra después de iniciar sesión o registrarse.  
  - Muestra un grid con productos obtenidos dinámicamente desde `https://fakestoreapi.com/products?limit=8`.  
  - Cada producto tiene imagen, título, precio y un botón de compra que actualiza un contador de carrito.  
  - Incluye un favicon (`favicon.ico`) que creé usando una imagen generada por IA, luego convertida a formato `.ico` mediante una página web especializada.  

- **Archivo JavaScript (`js/script.js`):**  
  - Gestiona la navegación entre Login y Sign Up dentro de `index.html`.  
  - Redirige automáticamente a `tienda.html` al enviar los formularios de login o registro.  
  - El flujo de trabajo con Git fue: hacer **pull** y **sync** al añadir funcionalidades importantes, verificar que todo funcionara correctamente, y luego hacer **merge** a la rama `main`.  
  - Al principio el manejo de Git y la estructura me resultaba confuso, pero ahora el proceso de añadir, sincronizar y fusionar cambios se ha vuelto mucho más automático y natural.
     
## Experiencia trabajando con Git
- **Trabajar con Git ha sido una parte fundamental del proyecto. Al inicio resultaba confuso entender el flujo de ramas y la sincronización con GitHub, pero poco a poco el proceso se volvió más natural. 
  - Aprendizaje inicial: Al principio fue un reto comprender cómo funcionaban los commits, los merges y los conflictos.  
  - Mejora progresiva: Con la práctica, el uso de pull, push y merge se volvió más automático y eficiente.  
  - Trabajo en equipo: Git permitió mantener un flujo organizado entre los integrantes, evitando sobrescribir cambios y facilitando la colaboración. 
  - Beneficio principal: La experiencia me ayudó a trabajar de manera más profesional, entendiendo la importancia del control de versiones en proyectos reales.
  - 
## Ciclo de Vida del Desarrollo del Software

### Planificación
- **Temática elegida:** Tienda web.  
- **Usuarios definidos:**  
  1. Usuario registrado que puede iniciar sesión y ver productos.  
  2. Nuevo usuario que puede registrarse y acceder a la tienda.  
- **Requisitos de la aplicación:**  
  1. Permitir registro y login de usuarios.  
  2. Mostrar productos dinámicamente en la tienda.  
  3. Contar los productos añadidos al carrito.  

### Diseño
- El proyecto sigue una **arquitectura cliente-servidor**, donde el cliente (navegador) solicita información y realiza interacciones, y el servidor (API externa en este caso) proporciona los datos de los productos.  

### Despliegue
- La página se ha desplegado mediante **GitHub Pages**, lo que permite probar la aplicación en línea fácilmente y compartirla con el equipo para revisión.  
- El despliegue fue sencillo y útil para comprobar el funcionamiento final de la tienda y la navegación desde `index.html` a `tienda.html`.  

### Mantenimiento
- **Errores encontrados:**  
  - Al principio, la sincronización con Git y la comprensión del flujo de ramas era confusa.
  - Ha sido complicado crear código confiando en una ia lo que nos ha dado errores de API al intentar implementar cosas más complicadas que no habíamos practicado y el hacer funcionar todos los archivos entre sí.  
- **Mejoras futuras:**   
  - Mejorar el diseño visual y añadir más funcionalidades de filtrado o búsqueda de productos.  
## Tecnologías Utilizadas
- HTML5  
- CSS3  
- JavaScript  
- Git / GitHub  
- GitHub Pages  
- IA para creación de imágenes, código en general y estructura del README.md 

