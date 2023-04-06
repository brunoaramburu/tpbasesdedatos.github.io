import './App.css';
import diagrama from './Diagrama.png';
import tablas from './Tablas.PNG';

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <h1>TRABAJO PRÁCTICO BASES DE DATOS / BRUNO ARAMBURÚ</h1>
      </div>
      <div className='centrado-diagrama'>
      <div className='diagrama'>
        <iframe className="video" width="100%" height="600px" src="https://www.youtube.com/embed/7cqC7SnUChU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      <div className='centrado-diagrama'>
      <div className='container-consigna'>
        <p className='consigna'>La empresa "Cortex" ha decidido crear una base de datos para gestionar los empleados y los proyectos en los que están involucrados.
        Cada empleado tiene un nombre, un número de identificación y una fecha de contratación.
        Cada proyecto tiene un nombre, un número de identificación, una fecha de inicio y una fecha de finalización prevista.
        Cada empleado puede trabajar en múltiples proyectos y cada proyecto puede tener múltiples empleados.
        Cada proyecto tiene un gerente responsable que es un empleado en el proyecto.
        Además, se quiere mantener un registro de las horas trabajadas por cada empleado en cada proyecto, donde se debe registrar el empleado, el proyecto, la fecha y la cantidad de horas trabajadas.
        Cada registro de horas trabajadas está asociado a un solo empleado y a un solo proyecto, pero un mismo empleado puede trabajar en múltiples proyectos y un mismo proyecto puede tener múltiples empleados trabajando en él.
        Diseña un diagrama entidad-relación para esta base de datos y luego conviértelo en un modelo relacional de tablas, indicando las claves primarias y foráneas de cada tabla.
        </p>
      </div>
      </div>
      <div className='centrado-diagrama'>
      <div className='diagrama'>
        <h3 className='titulo-diagrama'>DIAGRAMA ENTIDAD-RELACIÓN</h3>
        <img src={diagrama} width='100%' height='100%'></img>
      </div>
      </div>
      <div className='centrado-diagrama'>
      <div className='diagrama'>
        <h3 className='titulo-diagrama'>PASAJE A TABLAS</h3>
        <img src={tablas} width='100%' height='100%'></img>
      </div>
      </div>
      <div className='centrado-diagrama footer'>
      <div className='diagrama'>
        <h3 className='titulo-diagrama'>CONSIGNA DE EXPLORACIÓN (MONGO DB)</h3>
        <div className='mongodb'>
        <p>
        Definición:
        MongoDB es una base de datos NoSQL (Not Only SQL) que se basa en el almacenamiento de datos en formato JSON (JavaScript Object Notation) o BSON (Binary JSON). Es una base de datos de código abierto que permite el almacenamiento y acceso a datos de forma rápida y escalable.
        </p>
        <p>
        Características:
        Es una base de datos NoSQL, lo que significa que no utiliza el modelo relacional.
        Utiliza documentos en formato JSON o BSON para almacenar los datos.
        Es altamente escalable y puede manejar grandes cantidades de datos.
        Ofrece una alta disponibilidad y una fácil replicación.
        Soporta consultas y agregaciones complejas.
        Permite la indexación de datos para un acceso rápido a la información.
        </p>
        <p>
        Usos:
        MongoDB es ampliamente utilizado en aplicaciones web y móviles, así como en empresas de comercio electrónico y medios sociales. Es especialmente útil en casos de uso en los que se necesita almacenar grandes cantidades de datos que pueden ser consultados y actualizados rápidamente. También se utiliza en aplicaciones que necesitan escalar horizontalmente de manera eficiente, por ejemplo, en sistemas de análisis de grandes volúmenes de datos.
        </p>
        <p>
        Ventajas:
        Alta escalabilidad y rendimiento.
        Fácil replicación y alta disponibilidad.
        Capacidad para manejar grandes volúmenes de datos.
        Flexibilidad en la estructura de los datos.
        Soporte para consultas complejas y agregaciones.
        Integración con otros sistemas y herramientas.
        </p>
        <p>
        Desventajas:
        No es adecuado para aplicaciones que requieren transacciones complejas.
        No tiene un esquema fijo, lo que puede dificultar la comprensión de la estructura de los datos.
        Requiere una comprensión profunda de los comandos de consulta y agregación para su uso eficaz.
        No es una buena opción para aplicaciones con requisitos de seguridad muy estrictos.
        </p>
        <p>
        Ejemplos de uso:
        Forbes utiliza MongoDB para almacenar y analizar datos de usuarios, así como para personalizar y optimizar la experiencia del usuario en su sitio web.
        La aplicación de redes sociales LinkedIn utiliza MongoDB para almacenar los datos de perfil de los usuarios, las interacciones y las actualizaciones.
        La plataforma de análisis de datos en tiempo real Apache Metron utiliza MongoDB para almacenar y procesar grandes volúmenes de datos de seguridad de red.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
