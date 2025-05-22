# hp3

> Una colección de funciones utilitarias modernas y livianas para JavaScript. Hecha para simplificar tareas comunes de validación, transformación y manipulación de datos.

[![npm](https://img.shields.io/npm/v/hp3.svg)](https://www.npmjs.com/package/hp3)
[![License](https://img.shields.io/npm/l/hp3.svg)](https://github.com/hgjfkdls/hp3/blob/main/LICENSE)

## 🚀 Instalación

```bash
npm install hp3
```
o usando Yarn:
```bash
yarn add hp3
```

## 🧩 ¿Qué incluye?
> hp3 proporciona funciones listas para usar en validaciones, chequeos de tipo, transformaciones seguras y manejo de estructuras complejas como objetos y arreglos.

### ✅ Validaciones Generales (src/type.mjs)
| Función               | Descripción breve                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `is_blank(value)`     | Devuelve `true` si el valor es `null`, una cadena vacía, un iterable vacío, o se considera vacío según `is_empty`. |
| `is_filled(value)`    | Devuelve `true` si el valor **no** es "en blanco" (lo opuesto a `is_blank`).                                       |
| `is_undefined(value)` | Devuelve `true` si el valor es estrictamente `undefined`.                                                          |
| `is_empty(value)`     | Devuelve `true` si el valor es `undefined`, `null`, una cadena vacía, un array vacío o un objeto sin propiedades.  |
| `is_null(value)`      | Devuelve `true` si el valor es exactamente `null`.                                                                 |
| `is_string(value)`    | Devuelve `true` si el valor es una cadena (`typeof === "string"` o instancia de `String`).                         |
| `is_numeric(value)`   | Devuelve `true` si el valor puede ser interpretado como un número (ej: `"123"` o `42`).                            |
| `is_number(value)`    | Devuelve `true` si el valor es estrictamente del tipo `number`.                                                    |
| `is_bool(value)`      | Devuelve `true` si el valor es un booleano (`true` o `false`).                                                     |
| `is_symbol(value)`    | Devuelve `true` si el valor es un `symbol`.                                                                        |
| `is_bigint(value)`    | Devuelve `true` si el valor es de tipo `bigint`.                                                                   |
| `is_object(value)`    | Devuelve `true` si el valor es un objeto y no es `null`.                                                           |
| `is_function(value)`  | Devuelve `true` si el valor es una función.                                                                        |
| `is_array(value)`     | Devuelve `true` si el valor es un array (`Array.isArray`).                                                         |
| `is_iterable(value)`  | Devuelve `true` si el valor tiene `Symbol.iterator` (por ejemplo, strings, arrays, Maps, Sets).                    |
| `is_date(value)`      | Devuelve `true` si el valor es una instancia de `Date`.                                                            |
| `is_regexp(value)`    | Devuelve `true` si el valor es una expresión regular (`RegExp`).                                                   |
| `is_promise(value)`   | Devuelve `true` si el valor es una promesa (tiene métodos `.then()` y `.catch()`).                                 |
| `is_error(value)`     | Devuelve `true` si el valor es una instancia de `Error`.                                                           |
| `is(value, type)`     | Verifica si el valor coincide con un tipo dado (`typeof`, `instanceof`, o un array de tipos).                      |

### 💡 Condiciones Expresivas (src/conditions.mjs)
| Función            | Descripción breve                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `if_blank`         | Devuelve `trueValue` si `value` está en blanco según `is_blank`, si no, devuelve `value`.        |
| `if_not_blank`     | Devuelve `trueValue` si `value` **no** está en blanco, si no, devuelve `value`.                  |
| `if_filled`        | Devuelve `trueValue` si `value` está lleno (no en blanco), si no, devuelve `value`.              |
| `if_not_filled`    | Devuelve `trueValue` si `value` **no** está lleno, si no, devuelve `value`.                      |
| `if_undefined`     | Devuelve `trueValue` si `value` es `undefined`, si no, devuelve `value`.                         |
| `if_not_undefined` | Devuelve `trueValue` si `value` **no** es `undefined`, si no, devuelve `value`.                  |
| `if_empty`         | Devuelve `trueValue` si `value` está vacío según `is_empty`, si no, devuelve `value`.            |
| `if_not_empty`     | Devuelve `trueValue` si `value` **no** está vacío, si no, devuelve `value`.                      |
| `if_null`          | Devuelve `trueValue` si `value` es `null`, si no, devuelve `value`.                              |
| `if_not_null`      | Devuelve `trueValue` si `value` **no** es `null`, si no, devuelve `value`.                       |
| `if_string`        | Devuelve `trueValue` si `value` es una cadena, si no, devuelve `value`.                          |
| `if_not_string`    | Devuelve `trueValue` si `value` **no** es una cadena, si no, devuelve `value`.                   |
| `if_numeric`       | Devuelve `trueValue` si `value` es numérico, si no, devuelve `value`.                            |
| `if_not_numeric`   | Devuelve `trueValue` si `value` **no** es numérico, si no, devuelve `value`.                     |
| `if_number`        | Devuelve `trueValue` si `value` es un número (`typeof === "number"`), si no, devuelve `value`.   |
| `if_not_number`    | Devuelve `trueValue` si `value` **no** es un número, si no, devuelve `value`.                    |
| `if_bool`          | Devuelve `trueValue` si `value` es booleano, si no, devuelve `value`.                            |
| `if_not_bool`      | Devuelve `trueValue` si `value` **no** es booleano, si no, devuelve `value`.                     |
| `if_symbol`        | Devuelve `trueValue` si `value` es un símbolo, si no, devuelve `value`.                          |
| `if_not_symbol`    | Devuelve `trueValue` si `value` **no** es un símbolo, si no, devuelve `value`.                   |
| `if_bigint`        | Devuelve `trueValue` si `value` es un `bigint`, si no, devuelve `value`.                         |
| `if_not_bigint`    | Devuelve `trueValue` si `value` **no** es un `bigint`, si no, devuelve `value`.                  |
| `if_object`        | Devuelve `trueValue` si `value` es un objeto, si no, devuelve `value`.                           |
| `if_not_object`    | Devuelve `trueValue` si `value` **no** es un objeto, si no, devuelve `value`.                    |
| `if_function`      | Devuelve `trueValue` si `value` es una función, si no, devuelve `value`.                         |
| `if_not_function`  | Devuelve `trueValue` si `value` **no** es una función, si no, devuelve `value`.                  |
| `if_array`         | Devuelve `trueValue` si `value` es un array, si no, devuelve `value`.                            |
| `if_not_array`     | Devuelve `trueValue` si `value` **no** es un array, si no, devuelve `value`.                     |
| `if_iterable`      | Devuelve `trueValue` si `value` es iterable (como array, string, etc.), si no, devuelve `value`. |
| `if_not_iterable`  | Devuelve `trueValue` si `value` **no** es iterable, si no, devuelve `value`.                     |
| `if_date`          | Devuelve `trueValue` si `value` es una instancia de `Date`, si no, devuelve `value`.             |
| `if_not_date`      | Devuelve `trueValue` si `value` **no** es una instancia de `Date`, si no, devuelve `value`.      |
| `if_regexp`        | Devuelve `trueValue` si `value` es una expresión regular (`RegExp`), si no, devuelve `value`.    |
| `if_not_regexp`    | Devuelve `trueValue` si `value` **no** es una expresión regular, si no, devuelve `value`.        |
| `if_promise`       | Devuelve `trueValue` si `value` es una promesa (`Promise`), si no, devuelve `value`.             |
| `if_not_promise`   | Devuelve `trueValue` si `value` **no** es una promesa, si no, devuelve `value`.                  |
| `if_error`         | Devuelve `trueValue` si `value` es una instancia de `Error`, si no, devuelve `value`.            |
| `if_not_error`     | Devuelve `trueValue` si `value` **no** es un error, si no, devuelve `value`.                     |

### 🧱 Manipulación de Objetos (src/object.mjs)
| Función        | Descripción breve                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object_get`   | Obtiene el valor de una propiedad anidada usando notación de punto (`"a.b.c"`). Devuelve un valor por defecto si no existe la ruta.                         |
| `object_set`   | Establece el valor de una propiedad anidada usando notación de punto. Crea la estructura si es necesario y soporta el comodín `"*"` para asignación masiva. |
| `object_has`   | Verifica si una ruta existe dentro de un objeto utilizando notación de punto.                                                                               |
| `object_unset` | Elimina una propiedad anidada de un objeto utilizando notación de punto.                                                                                    |

### 🛠️ Utilidades (src/utilities.mjs)
| Función     | Descripción breve                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`     | Devuelve el valor evaluado: si es una función, la ejecuta con los argumentos dados; si no, lo devuelve tal cual.                                                |
| `transform` | Aplica una función (`callback`) a un valor si está "relleno" (`is_filled`); de lo contrario, devuelve un valor por defecto (que también puede ser una función). |
| `first`     | Devuelve el **primer elemento** de una colección iterable con índice (como un array o string). Retorna `undefined` si no es iterable.                           |
| `last`      | Devuelve el **último elemento** de una colección iterable que tenga `.slice()`. Retorna `undefined` si no aplica.                                               |

### 📦 Ejemplos de Uso

```js
import { is_blank, transform, object_get, object_set } from 'hp3';

console.log(is_blank("   ")); // true
console.log(is_blank(42));    // false

const user = {
  profile: {
    name: "Antonio"
  }
};

console.log(object_get(user, "profile.name")); // "Antonio"
console.log(object_get(user, "profile.age", 30)); // 30

const updated = object_set(user, "profile.age", 35);
console.log(updated.profile.age); // 35

console.log(transform("dato", v => v.toUpperCase(), "VACÍO")); // "DATO"
console.log(transform("", v => v.toUpperCase(), "VACÍO"));     // "VACÍO"
```

### 📚 Documentación
> Todas las funciones están documentadas usando JSDoc. Puedes revisar directamente el código fuente o generar documentación si lo necesitas.

### 🤝 Contribuciones
> ¡Las contribuciones son bienvenidas! Puedes abrir un issue con una sugerencia o enviar un pull request.

### 📄 Licencia
> MIT License / Licencia MIT
> 
> Copyright (c) 2025 hgjfkdls

[>> LICENSE](https://github.com/hgjfkdls/hp3/blob/main/LICENSE)