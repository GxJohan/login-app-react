// React es una biblioteca para crear interfaces de usuario
// useState es una función especial que nos permite guardar y actualizar datos en nuestros componentes
import React, { useState } from "react";

// Este es nuestro componente de Login (página de inicio de sesión)
// Los componentes son como bloques de construcción reutilizables que contienen código HTML y lógica
const Login: React.FC = () => {
    // Aquí guardamos los datos que el usuario escribe
    // useState crea una variable (primer valor) y una función para actualizarla (segundo valor)
    // El valor entre paréntesis ("") es el valor inicial, en este caso un texto vacío
    const [username, setUsername] = useState(""); // Para guardar el nombre de usuario
    const [password, setPassword] = useState(""); // Para guardar la contraseña
    const [message, setMessage] = useState("");   // Para mostrar mensajes al usuario

    // Esta función se ejecuta cuando el usuario hace clic en el botón de "Ingresar"
    const handleLogin = (e: React.FormEvent) => {
        // Evitamos que la página se recargue al enviar el formulario
        e.preventDefault();
        // Buscamos si hay un usuario guardado en el almacenamiento del navegador
        const storedUser = localStorage.getItem("user");

        // Verificamos si encontramos un usuario guardado
        if(storedUser){
            // Convertimos el texto guardado en un objeto que podemos usar
            const user = JSON.parse(storedUser);
            // Comparamos si el usuario y contraseña ingresados coinciden con los guardados
            if(user.username === username && user.password === password){
                setMessage("Inicio de sesión exitoso"); // Mensaje de éxito
            }else{
                setMessage("Usuario o contraseña incorrectos"); // Mensaje de error
            }
        }else{
            setMessage("Usuario no registrado"); // Mensaje si no hay usuario guardado
        }
    }

  // Aquí definimos lo que se va a mostrar en pantalla
  return (
    // div es un contenedor general, login-container le da los estilos visuales
    <div className="login-container">
        <h2>Iniciar sesión</h2>
        {/* form es un formulario que agrupa los campos de entrada */}
        {/* onSubmit define qué función se ejecuta cuando se envía el formulario */}
        <form onSubmit={handleLogin}>
            {/* input es un campo donde el usuario puede escribir */}
            {/* value es lo que se muestra en el campo */}
            {/* onChange se ejecuta cada vez que el usuario escribe algo */}
            <input type="text"
             placeholder="Usuario" // Texto que se muestra cuando el campo está vacío
             value={username}
             onChange={(e) => setUsername(e.target.value)} // Guardamos lo que escribe el usuario
             />
            {/* Campo para la contraseña, similar al anterior pero oculta lo que se escribe */}
            <input type="password"
             placeholder="Contraseña"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
            {/* Botón que envía el formulario cuando se hace clic */}
            <button type="submit">Ingresar</button>
        </form>
        {/* Si hay un mensaje (message no está vacío), lo mostramos */}
        {/* El && significa "si hay mensaje, muestra esto" */}
        {message && <p>{message}</p>}
    </div>
  );
};

// Hacemos que este componente esté disponible para usarlo en otras partes de la aplicación
export default Login;
