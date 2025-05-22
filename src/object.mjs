import {is_array, is_blank, is_null, is_object, is_undefined} from "./type.mjs";
import {value} from "./value.mjs";

const DEFAULT = Symbol("default");

/**
 * Obtiene el valor de una propiedad anidada dentro de un objeto utilizando notación de "punto".
 * Si la ruta no existe, retorna un valor por defecto.
 *
 * @param {*} target - El objeto del cual obtener el valor.
 * @param {string[]|string|null} [key] - Clave o ruta a acceder (en formato array o string con notación de punto).
 * @param {*} [defaultValue] - Valor devuelto si la ruta no existe en el objeto.
 * @return {*} - El valor encontrado o el valor por defecto.
 */
export function object_get(target, key = null, defaultValue = null) {

    if (is_null(key)) {
        return target;
    }

    let segments = is_array(key) ? key : `${key}`.split(".");

    for (let segment of segments) {
        if (!is_object(target) || is_undefined(target[segment])) {
            return value(defaultValue);
        }
        target = target[segment];
    }
    return target;
}

/**
 * Establece el valor de una propiedad anidada dentro de un objeto utilizando notación de "punto".
 * Crea la estructura del objeto si es necesario. Soporta el carácter '*' para asignación masiva.
 *
 * @param {*} target - El objeto sobre el cual establecer el valor.
 * @param {string[]|string|null} key - Ruta de la propiedad a establecer (en formato array o string con notación de punto).
 * @param {*} value - Valor a asignar.
 * @return {*} - El objeto modificado.
 */
export function object_set(target, key, value) {

    let segments = is_array(key) ? key : `${key}`.split(".");

    let segment = segments.shift();

    if (segment === "*") {
        if (!is_object(target) && is_null(target)) target = {};

        if (!is_blank(segments)) {
            for (const k in target) {
                target[k] = object_set(target[k], segments, value);
            }
        } else {
            for (const k in target) {
                target[k] = value;
            }
        }
    } else if (is_object(target)) {
        if (is_null(target)) target = {};
        if (!is_blank(segments)) {
            if (is_undefined(target[segment]) || !is_object(target[segment])) {
                target[segment] = {};
            }
            target[segment] = object_set(target[segment], segments, value)
        } else {
            target[segment] = value;
        }
    } else {
        target = {};
        if (!is_blank(segments)) {
            target[segment] = value;
        } else {
            target[segment] = object_set({}, segments, value)
        }
    }

    return target;
}

/**
 * Verifica si una ruta anidada existe en un objeto, utilizando notación de "punto".
 *
 * @param {*} target - El objeto a inspeccionar.
 * @param {string[]|string|null} key - Ruta de la propiedad a verificar.
 * @returns {boolean} - `true` si la ruta existe, `false` en caso contrario.
 */
export function object_has(target, key) {
    return object_get(target, key, DEFAULT) !== DEFAULT;
}

/**
 * Elimina una propiedad anidada de un objeto utilizando notación de "punto".
 *
 * @param {*} target - El objeto del cual se eliminará la propiedad.
 * @param {string[]|string|null} key - Ruta de la propiedad a eliminar.
 * @returns {*} - El objeto modificado.
 */
export function object_unset(target, key) {
    let segments = is_array(key) ? key : `${key}`.split(".");
    let last = segments.pop();

    let obj = object_get(target, segments);
    if (obj && is_object(obj) && !is_undefined(obj[last])) {
        delete obj[last];
    }

    return target;
}