# ChatApp

ChatApp es una aplicación de chat en tiempo real construida con React y Vite en el frontend, y Firebase para la autenticación y la base de datos en tiempo real.

## Características

- Autenticación de usuario con Firebase.
- Envío y recepción de mensajes en tiempo real.
- Interfaz de usuario intuitiva y receptiva.
- Soporte para múltiples salas de chat.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo que mejora el rendimiento en aplicaciones React.
- **Firebase**: Plataforma de desarrollo de aplicaciones móviles y web de Google que proporciona una base de datos en tiempo real y servicios de autenticación.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Pasos

1. Clona este repositorio:

   ```sh
   git clone https://github.com/juanCamilo2002/react-firebase-chat.git
   cd react-firebase-chat
2. Instala las dependencias:
    ```sh
    npm install

3. Configura Firebase:

Crea un proyecto en Firebase.

Habilita la autenticación por correo electrónico y contraseña en la sección de autenticación.

Configura Firestore en modo de prueba.

Copia las credenciales de configuración de Firebase y pégalas en un archivo .env en la raíz del proyecto:
    ```sh
    VITE_API_KEY = your_api_key

4. Inicia el servidor de desarrollo:
    ```sh
    npm run dev

# Uso
1. Regístrate o inicia sesión con tu correo electrónico y contraseña.
2. Únete a una sala de chat existente o crea una nueva.
3. Comienza a enviar mensajes en tiempo real.  

# Estructura del proyecto
    src/
    ├── assets/         # Archivos estáticos (imágenes, estilos, etc.)
    ├── components/     # Componentes reutilizables de React
    ├── lib/            # Archivos de configuracion
    ├── App.jsx         # Componente principal de la aplicación
    ├── main.jsx        # Punto de entrada de la aplicación
    └── index.css       # Estilos globales

# Contribución
¡Las contribuciones son bienvenidas! Si tienes sugerencias para mejorar la aplicación, por favor abre un issue o envía un pull request.

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realiza los cambios necesarios y haz commit (git commit -am 'Añadir nueva característica').
4. Empuja los cambios a tu repositorio (git push origin feature/nueva-caracteristica).
5. Abre un pull request.