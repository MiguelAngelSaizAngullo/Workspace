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

### Como mover archivos

Para mover/renombrar un archivo y despues guardarlo en nuestro repositorio lo que tendremos que realizar es:

Pasos:

```bash
mv archivo1.txt app.py
git add archivo1.txt
git add app.py
```

Pero tambien tenemos una forma de poder salatarnos el paso de realizar el git add, se tendria que hacer de la siguiente manera.

- git mv archivo1.txt app.py --> LO que realiza esta accion es mover nuestro archivo1.txt hacia un archivo llamado app.py y con este comando nos podriamos saltar el paso de añadir a mano los archivos.

```bash
git mv archivo1.txt app.py
```

### Estado corto

Para poder mostrar el estado de una forma mas corta lo que tendremos que realizar es:

- git status -s --> Muestra el estado de nuestros componentes pero de una forma mas corta.

Ejemplo:

![Imagen de ejemplo sobre el estado corto](/images/estadoCorto.png)

Como observamos en la imagen la parte de la izquierda es la parte de nuestra area de Staging mientras que la parte de la derecha es la parte del directorio.

- Parte del staging:
    - m --> Significa que ese archivo ha sido modificado.
        - Verde --> Se encuentra dentro del area de Staging.
        - Rojo --> Se encuentra fuera del area de Staging.
    - a --> Significa que ese archivo ha sido añadido.
    - ?? --> Significa que esta rchivo no esta siendo seguido ni el directoiro de trabajo ni en el area de Staging.  

### Observar el historial

Para poder observar por completo todo el historial de nuestros commits deberemos hacer lo siguiente:

- git log --> Muestra por completo todos los commits que hemos realizado en la rama.

```bash
git log
```

![Imagen de ejemplo sobre el comando git log](/images/gitLog.png)

- git log --oneline --> Muestra todos los commits realizados pero en una sola linia.

```bash
git log --oneline
```

![Imagen de ejemplo sobre el comando git log --oneline](/images/gitLogOneline.png)

- git log --oneline --reverse --> Muestra lo mismo que el anterior pero con la diferencia que el primero que muestra es el primer commit realizado.

```bash
git log --oneline --reverse
```

![Imagen de ejemplo sobre el comando git log --oneline --reverse](/images/gitLogOnelineReverse.png)

- git log --oneline --graph --> Muestra los mismo que los dos anteriores pero esta vez tendra forma grafica para observar bien sobre todo cuando tenemos mas de una rama.

```bash
git log --oneline --graph
```

### Observar el contenido de los commits

Para poder observar un commit en especifico lo que tendremos que realizar es:

- git show idCommit --> Te mostrara toda la informacion sobre el comit que has especificado a traves de la ID.

```bash
git show ca2f4a3
```

Tambien podriamos observar un archivo especifico dentro del commit creado, se realiza a traves de:

- git show idCommid:archivo --> Te mostrara el contenido de ese archivo justo cuando has realizado ese commit.

```bash
git show ca2f4a3:git.md
```

Tambien se podria realizar mirando cuantos commits queremos tirar hacia atras.

- git show HEAD~1 --> ESto te mostraria el commit justo anterior del ultimo commit realizado.

```bash
git show HEAD~1
```

Tambien podemos observar que archivos existian dentro del commit realizado.

- git ls-tree commit --> Mostrara los archivos que existen dentro del commit que hemos especificado.

```bash
git ls-tree HEAD~1
```

### Quitar archivos que se encuentran en Staging

Para quitar un archivo de stsging lo que tendremos que realizar es lo siguiente:

- git restore --stage archivo --> Quita el archivo del area de Staging.

```bash
git restore --stage index.py
```

### Ignorar archivos y directorios

Tambien podemos ignorar algunos archivos o directorios que nosotros no queramos subir a nuestro commit, se tendria que realizar:

- 1º: Creas el archivo en tu raiz llamado .gitignore --> Este archivo nos permitira poner dentro los directorios o archivos que no queramos subir a nuestro commit.

- 2º: Poner el arhcivo/directorio dentro de nuestro archivo: Si quieres añadir un directorio tendremos que poner "/" al final para indicarle que es un directorio y no n archivo.