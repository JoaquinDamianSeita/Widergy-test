# Widergy-test

<h1>Ejercicio Técnico 1: Detección de errores</h1>

<h2>Decidi que lo mejor seria re-escribir toda la funcion</h2>

<i></i>

* Ahora "result" es un array que almacena los caracteres permitidos.
* Elimino la variable j, ya no es necesaria.
* Uso un bucle for para recorrer sentence, el while es dificil de controlar.
* Utilizo un método para obtener el valor ASCII de los caracteres.
* Agrego las validaciones correspondientes a las minúsculas y al "_", ya que no eran comprobados en el código original. De esta forma también no hace falta cambiar toda "sentence" a mayúsculas.
* Antes de devolver el "result" como un String evalúo si el array esta vacío porque no hay caracteres permitidos.

