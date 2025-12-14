# Introducción

## Que es react?

React es una biblioteca para construir interfaces tanto web como nativas, es decir, podemos crear tanto aplicaciones web como para moviles o tablets.

### Porque utilizar React?

React lo utilizamos ya que cada vez que creamos una app tenemos que interactuar con el DOM y el DOM son etiquetas, y gracias a react podremos actualizar la interfaz del usuario ademas gracias a react podremos crear componentes que podremos reutilizar.

## Configurando el ambiente

Para poder utilizar react necesitamos tener instalado Node JS con una versión major a la 16.

## Creando una app react

Para crear nuestro projecto react utilizaremos vite (es mas rápido y crea empaqutados mas pequeños), para crearlo tendremos que realizar lo siguiente:

```shell
npm init vite@latest
```

Con esto comenzara nuestro proyecto, una vez iniciado tendremos que seleccionar el framework de React y luego el lenguaje que quieras utilizar, ya sea, typeScript o JavaScript

## Estructura del proyecto

Al crear nuestro proyecto nos habra creado una serie de directorios y archivos:

- node_modules: Aqui se encuentran todas las dependencias

- public: Aqui se encuentran todos los archivos que tienen que ser publico y que cualquier usuario pueda acceder a el.

- src: Aqui se encuentra todo nuesto codigo de la app

- .eslintrc.cjs: Aqui se encuentra la configuración de nuestro linter.

- .gitignore: Aqui se encuentran los archivos que no queremos que se suban al git

- index.html: Aqui se encuentra todo nuestro codigo html

- package.json: Contiene todas nuestras dependencias y scripts que podemos ejecutar.

- tsconfig.json: La configración del typeScript

- vite.config.ts: Se encuentra la configuración del vite

## Componentes de React

Todas las aplicaciones que construyamos en React necesitan la funcion App y la tendremos que exportar (el archivo es App.tsx)

```React
function App() {
  return <p>Hola Mundo</p>;
}

export default App;
```

Este codigo lo que realiza es exportar la funcion App que retorna un parrafo con hola mundo.

El codigo que estamos visualizando en realidad no es codigo HTML sino es codigo jsx, que en realidad es parecido al HTML pero no es.

Tambien podemos mostrar variables:

```React
const nombre = "Miguel";

function App() {
  return <p>Hola {nombre}</p>;
}

export default App;
```

Esta vez en el codigo podremos observar que esta vez pondra Hola Miguel.

Pero tambien podremos crear componentes para poder reutilizar, ahora dentro de nuestra carpeta src crearemos nuestro componentes Titulo.tsx (jsx si estas con JavaScript).

Codigo de Titulo.tsx:

```React
const nombre = "Miguel";

function Titulo() {
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }

  return <h1>Hola Mundo!</h1>_;
}

export default Titulo;
```

Aqui lo que realizamos es un componente llamado Titulo que devuelve si hay nombre un parrafo con Hola {nombre} y si no hay nombre devuelve un Hola Mundo!

Codigo de App.tsx:

```React
import Titulo from "./Titulo";

function App() {
  return <Titulo></Titulo>;
}

export default App;
```

Este codigo lo que hace es importar el componente Titulo y luego retorna lo que devuelve ese mismo componente.

## Como funciona React?

React lo que realiza es recoger todo el codigo que hemos escrito en tsx (TypeScript) o jsx (JavaScript) y transformarlo a HTML, esto lo que realiza es crear diferentes nodos. Cuando existan cambios en nuestro codigo lo que realiza es crear una copia de esto mismo dentro de la memoria del PC y a su vez buscara la diferencia y una vez sabe qual es la diferencia react entrga la responsabilidad de poder renderizar el proyecto en el explorador web del usuario. El encargado de poder mostrar nuestra app es react-dom.

# Componentes

## Componente Card

Para crear un componente primero debemos crear nuestra carpeta components que se encontrara dentro de la carpeta src.

Ejemplo de componente:

```React
function Card() {
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
```

En este codigo lo que realizamos es crear un componente llamado Card el qual es copiado a través de bootstrap, lo unico que tenemos es que al div general de toda la card le añadimos un ancho a traves de la etiqueta style, esto recibe un objeto pero en este caso que el objeto solo tiene una propiedad lo podemos realizar dentro de la etiqueta style directamente. Aunque esto es una mala practica y mas a delante veremos como realizarlo de una forma correcta.
