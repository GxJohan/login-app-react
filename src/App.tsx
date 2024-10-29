// React es una biblioteca de JavaScript para construir interfaces de usuario
// useState es una función especial de React que nos permite guardar datos que pueden cambiar
import React, { useState } from "react";
// Importamos la página de inicio de sesión que creamos en otro archivo
import Login from "./components/Login";
// Importamos la página de registro que creamos en otro archivo  
import Register from "./components/Register";
// Importamos los estilos visuales de nuestra aplicación
import "./App.css";

// Este es el componente principal de nuestra aplicación
// Un componente es como una pieza de LEGO que podemos reutilizar
const App: React.FC = () => {
  // Aquí guardamos si el usuario quiere ver la página de inicio de sesión o registro
  // useState(true) significa que al inicio mostramos la página de inicio de sesión
  // isLogin guarda el valor actual (true/false)
  // setIsLogin es la función que usamos para cambiar ese valor
  const[isLogin, setIsLogin] = useState(true);

  // Aquí definimos lo que se va a mostrar en pantalla
  return (
    <div>
      {/* Esta es la barra superior con los botones para cambiar entre páginas */}
      <nav>
        {/* Cuando hacemos clic en este botón, mostramos la página de inicio de sesión */}
        <button onClick={() => setIsLogin(true)}>Iniciar sesión</button>
        {/* Cuando hacemos clic en este botón, mostramos la página de registro */}
        <button onClick={() => setIsLogin(false)}>Registrar</button>
      </nav>
      {/* Si isLogin es verdadero (true) mostramos la página de inicio de sesión */}
      {/* Si isLogin es falso (false) mostramos la página de registro */}
      {/* El ? y : es como un "si esto es verdad, haz esto, si no, haz lo otro" */}
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

// Hacemos que este componente esté disponible para usarlo en otras partes de la aplicación
export default App;
