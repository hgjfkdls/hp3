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

### ✅ Validaciones generales
- is_blank(value)
- is_filled(value)
- is_empty(value)
- is_null(value)
- is_undefined(value)
- is(value, type)

### ✅ Comprobaciones de tipo
- is_string(value)
- is_numeric(value)
- is_bool(value)
- is_symbol(value)
- is_bigint(value)
- is_object(value)
- is_function(value)
- is_array(value)
- is_iterable(value)
- is_date(value)
- is_regexp(value)
- is_promise(value)
- is_error(value)

### 🛠️ Utilidades
- value(value, ...args) — Evalúa si value es una función y la ejecuta, o devuelve el valor directamente.
- transform(value, callback, defaultValue) — Ejecuta el callback si el valor está "relleno", si no, retorna el valor por defecto.
- first(iterable) / last(iterable) — Primer o último valor de un array o iterable.
- object_get(obj, path, defaultValue) — Obtiene una propiedad usando notación "punto".
- object_set(obj, path, value) — Establece una propiedad usando notación "punto", incluso con *.

### 📦 Ejemplos de Uso

```js
import { is_blank, transform, object_get, object_set } from 'hp3';

console.log(is_blank("   ")); // true
console.log(is_blank(42));    // false

const user = {
  profile: {
    name: "Felipe"
  }
};

console.log(object_get(user, "profile.name")); // "Felipe"
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