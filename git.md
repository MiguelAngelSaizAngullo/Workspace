# Teoria sobre Git y GitHub

## Creación de instantáneas

### Creando un repositorio

Para crear nuestro repositorio tendremos que utilizar la siguiente sentencia:

- git init (esto se tiene que realizar desde dentro del directorio donde vamos a trabajar).

```bash
git init
```

### Flujo de trabajo

- Área Staging --> Es el área intermedio entre antes de realizar nuestro commit y al guardar nuestro proyecto.

- commit --> Es una instantanea que se guardara en nuestro repositorio.


### Agregando a staging

Para conocer nuestro estado dentro de nuestro git realizaremos lo siguiente:

- git status --> Sirve para conocer como esta el estado de este directorio dentro de nuestro repositorio de git

```bash
git status
```

Para pasar los cambios a nuestra area de Statging para realizar un commit se realiza de la siguiente manera:

- git add archivos --> Este comando lo que realiza es pasar los archivos indicados (pueden ser mas de uno) a nuestra area de Staging para luego poder realizar un commit.

```bash
git add arhcivo*.txt
```

Aqui pasarian todos nuestros archivos que comienzen por archivo y termine por .txt

### Creando commits

Para crear nuestro commit lo que tendremos que realizar es lo siguiente:

- git commit --> Si hemos configurado nuestro git de forma correcta nos abrira nuestro editor de codigo en el cual en la linia 1 tendremos que poner un resumen de maximo 80 caracteres de que hemos realizado y a partir de la linia 3 podremos realizar la explicacion mas detallada de que hemos realizado.

```bash
git commit
```

Tambien se puede crear el mensaje de nuestro commir desde la terminal de la siguiente forma:

- git commit -m "mensaje" --> Aqui nos realiza un commit con un mensaje que le enviamos desde la terminal.

```bash
git commit -m "mensaje"
```

### Como saltarse el area de staging

Para poder realizar un commit sin primeramente pasar todos nuestros cambios al area de Staging lo que tendremos que realizar es:

- git commit -a --> Esto nos permite realizar directamente un commit de todos nuestros archivos que hemos midifcado/agregado.

```bash
git commit -a
```

### Como eliminar archivos

Para la eliminacion del archi primeramente tendras que eliminar el propio archivo que ya no utilizas y despues lanzaremos el git add con el archivo eliminado y ya realizamos el commit.

Pasos:

```bash
rm archivo.txt
git add archivo.txt
git commit 
```

Para eliminat el archivo en el area de staging realizaremos:

- git rm archivo.txt --> Aqui nos eliminara de nuestra area de staging el archivo eliminado.

```bash
git rm archivo.txt
```