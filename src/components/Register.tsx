// React es una biblioteca para crear páginas web interactivas
// useState es una herramienta especial de React que nos permite guardar información que puede cambiar
import React, { useState } from "react";

// Aquí creamos una página de registro de usuarios
// React.FC significa que esto es un "Componente Funcional" de React (como una pieza de la página web)
const Register: React.FC = () => {
    // Necesitamos guardar lo que el usuario escribe en cada casilla
    // useState nos da dos cosas: un lugar para guardar el dato y una función para cambiarlo
    // El "" significa que al inicio está vacío
    const [username, setUsername] = useState("");     // Para guardar el nombre de usuario
    const [email, setEmail] = useState("");          // Para guardar el correo electrónico
    const [password, setPassword] = useState("");     // Para guardar la contraseña
    const [message, setMessage] = useState("");       // Para mostrar mensajes al usuario
    
    // Esta función se ejecuta cuando el usuario hace clic en el botón de registrar
    const handleRegister = (e: React.FormEvent) => {
        // Esto evita que la página se recargue cuando enviamos el formulario
        e.preventDefault(); 
        
        // Revisamos que el usuario haya llenado todas las casillas
        if(username && email && password){
            // Juntamos toda la información del usuario en un solo paquete
            const user = {username, email, password};
            // Guardamos la información en el navegador para usarla después
            // JSON.stringify convierte nuestro paquete de información en texto
            localStorage.setItem("user", JSON.stringify(user));
            // Le decimos al usuario que todo salió bien
            setMessage("Usuario registrado correctamente");
        } else {
            // Si falta alguna casilla por llenar, le avisamos al usuario
            setMessage("Por favor, complete todos los campos");
        }
    };

  // Aquí definimos cómo se verá nuestra página de registro
  return (
    // Este div es como una caja que contiene todo nuestro formulario
    <div className="register-container">
        <h2>Registro de usuario</h2>
        {/* Este es el formulario donde el usuario escribirá sus datos */}
        {/* Cuando se envíe, se ejecutará nuestra función handleRegister */}
        <form onSubmit={handleRegister}>            
            {/* Esta es la casilla para escribir el nombre de usuario */}
            {/* placeholder es el texto que se ve cuando la casilla está vacía */}
            {/* value es lo que ha escrito el usuario */}
            {/* onChange detecta cuando el usuario escribe y guarda lo que escribió */}
            <input type="text" 
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             />
            
            {/* Esta es la casilla para escribir el correo electrónico */}
            {/* type="email" hace que el navegador verifique que sea un correo válido */}
            <input type="email" 
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            
            {/* Esta es la casilla para escribir la contraseña */}
            {/* type="password" hace que se oculten los caracteres que se escriben */}
            <input type="password"
             placeholder="Contraseña"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />

            {/* Este es el botón para enviar el formulario */}
            <button type="submit">Registrar</button>
        </form>
        {/* Si hay algún mensaje (éxito o error), lo mostramos aquí */}
        {/* El && significa: "si hay mensaje, muéstralo" */}
        {message && <p>{message}</p>}
    </div>
  );
};

// Hacemos que esta página esté disponible para usarla en otras partes de nuestra aplicación
export default Register;
