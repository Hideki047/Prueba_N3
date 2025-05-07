# Documentación del Proyecto Disco Stu's Dance Palace 🕺

## Introducción
Hola! Este es mi primer proyecto web usando React y la verdad me costó un poco pero quedo super chido. Es una pagina web para una discoteca retro que se llama "Disco Stu's Dance Palace". La idea es mostrar eventos, una galeria de fotos y que la gente pueda reservar sus entradas.

## Tecnologías Usadas
- React (la version 18.2.0)
- Vite (para hacer el proyecto mas rapido)
- Bootstrap (para que se vea bonito)
- CSS (para los estilos y animaciones)

## Estructura del Proyecto

### Carpetas Principales
- `src/`: Aqui esta todo el codigo
  - `componentes/`: Los componentes que se usan en toda la pagina
  - `paginas/`: Cada pagina de la web
  - `estilos/`: Los archivos CSS
  - `assets/`: Imagenes y recursos

### Paginas Principales

#### 1. Inicio
Es la pagina principal donde se muestra un banner con el nombre de la discoteca y un boton para ver los eventos.

#### 2. Eventos
Aqui se muestran todos los eventos que van a haber:
- Cada evento tiene su imagen, fecha, hora y artistas
- Se puede hacer click para ver mas detalles
- Hay un formulario para reservar entradas
- Se pueden comprar entre 1 y 10 tickets
- Pide nombre y email para la reserva

#### 3. Galeria
Muestra fotos de la discoteca:
- Se pueden filtrar por año, tipo de evento y categoria
- Las imagenes se cargan con un spinner mientras aparecen
- Se puede hacer click para ver la imagen mas grande
- Tiene badges con informacion de cada foto

#### 4. Blog
Tiene posts sobre la discoteca:
- Noticias y actualizaciones
- Entrevistas con DJs
- Tips para bailar

#### 5. Contacto
Un formulario para contactar a la discoteca:
- Nombre y email
- Asunto y mensaje
- Mapa con la ubicacion

#### 6. Cuenta
Para los usuarios registrados:
- Login y registro
- Perfil de usuario
- Historial de reservas

## Caracteristicas Especiales

### Efectos Visuales
- La pagina tiene efectos de brillo y gradientes
- Los botones brillan cuando pasas el mouse
- Las tarjetas se elevan al pasar el mouse
- Hay animaciones en las imagenes

### Formularios
- Validacion en tiempo real
- Mensajes de error claros
- Limite de tickets (1-10)
- Validacion de email

### Galeria
- Carga progresiva de imagenes
- Filtros dinamicos
- Modal para ver imagenes grandes
- Badges informativos
