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

## Fragments

Fragmentar el codigo significa separar el codigo, es decir, por ejemplo anteriormente hemos creado el componente Card pues ahora lo que haremos sera dividir el codigo para asi poder reutilizarlo por si en algun momento queremos reutilizar esa Card para otra cosa.

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
        <CardBody></CardBody>
      </div>
    </div>
  );
}

export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
```

Como podemos observar ahora mismo dentro del componente Card tenemos 2 funciones diferentes una funcion que lo que realiza es mostrar el componente Card por completo y luego tenemos la otra funcion que lo que realiza es mostrar el contenido que tendra la Card, como podemos observar para poder realizar eso, la funcion CardBody al devolver el codigo tiene que tener un elemento padre por ejemplo un div pero como aqui no nos interesa que tenga un div tenemos dos opciones:

- 1º: Importar Fragments de react
- 2º: Utilizar <> y </>

Esto es lo mismo que añadir un elemento padre, pero como no nos interesa poner un div porque ya lo tenemos en la primera funcion deberiamos realizar alguna de las dos opciones.

## Pasando Props

Las props realmente significan propiedades que les podemos pasar a nuestros componentes, como por ejemplo un nombre para asi poder reutilizar los componentes, para pasar las props lo que deberemos hacer es ir a nuestro componente donde llamamos al componente el qual va a recibir propiedades y desde ahi enviarle las propiedades necesarias.

Ejemplo desde App.tsx:

```React
import "./App.css";
import Card from "./components/Card";

function App() {
  return <Card body={"Hola Miguel"}></Card>;
}

export default App;
```

Aqui como observamos en este caso lo que estamos realizando es enviarle una propiedad llamada body de tipo string al componente Card y ahora observamos que tendriamos que realizar en el componente Card:

```React
interface Props {
  body: string;
}

function Card(props: Props) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
```

Aqui en este caso al estar utilizando TypeScript y no JavaScript lo primero que tendriamos que crear es una inteficie (crear un objeto con los tipos pero sin valores) con todos los elementos que le pasaremos y con su tipo de variables en nuestro caso seria una unica propiedad de tipo string y por ultimo lo que hariamos seria ir a la card y ahora lo que hariamos sera destructurar nuestro bjetos props para poder recoger nuestras variables (!!Importante el nombre de la variable se tiene que llamar igual que cuando enviamos la variable) y por ultimo ponemos la variable donde la queramos mostrar.

## Multiples Props

Tambien podriamos pasar mas de una prop a un componente, esta vez vamos a realizar lo mismo pero de momento vamos a dejar el componente Card para mas adelante esta vez unicamente utilizaremos la funcion CardBody y le enviaremos por paramentros tanto el titulo como el texto que quedremos que aparezca en el componente.

Primero observaremos el App.tsx:

```React
import "./App.css";
import { CardBody } from "./components/Card";

function App() {
  return (
    <CardBody title={"Hola Mundo"} text={"El texto del componente"}></CardBody>
  );
}

export default App;
```

Como vemos esta vez importamos de momento unicamente la funcion CardBody y le enviaremos dos parametros tanto el titulo como el texto. Ahora observaremos el codigo de la funcion de CardBody:

```React
interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
```

Primero crearemos la interfaz y si queremos que alomejor una de las variables puedan no recibir texto lo que tendremos que realizar es añadir el ? despues de crear la variable asi le decimos que esa variable puede estar vacia y ya luego lo que realizamos es mostrar por pantalla todo el body de la Card.

## Children

Con la propiedad children nos sirve para "advertir" que ese componente dentro tendra un contenido ya sea un texto, una variable u otro componente. Para conseguir esto lo que tendremos que hacer es ir al componente y añadir que va a recibir un "hijo" se realiza de la siguiente manera:

```rect
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
```

El import type { ReactNode } from "react" nos sirve para poder poner un componente en vez de un texto, luego en la interface le decimos que el children es del tipo ReactNode para poder asi poner un componente o incluso una variable.

## Imprimir listas

Creamos un componente que se llama lista y ahi lo que haremos sera meter una lista con los elementos que nosotros necesitemos:

```react
type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
};

export default List;
```

En este caso como podemos observar a nuestra lista le tendremos que añadir el elemento key, ya que sino nos mostrara un error, el elemento necesita la key ya que sera como el id de la base de datos.
