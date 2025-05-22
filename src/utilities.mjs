import {is_filled, is_function, is_iterable} from "./type.mjs";

/**
 * El valor predeterminado de un valor dado.
 * @param {*} value
 * @param {...args} args
 * @return {*}
 */
export function value(value, ...args) {
    return is_function(value) ? value(...args) : value;
}

/**
 * Transforma un valor mediante una función de retorno (`callback`) si el valor está "relleno" (`is_filled`).
 * Si el valor no está relleno, retorna un valor por defecto. Este valor por defecto puede ser un valor estático
 * o una función que reciba el valor original.
 *
 * @template TValue
 * @template TReturn
 * @template TDefault
 *
 * @param {TValue} value - El valor que se evaluará y transformará.
 * @param {(value: TValue) => TReturn} callback - Función que transforma el valor si está "relleno".
 * @param {TDefault|((value: TValue) => TDefault)} [defaultValue=null] - Valor por defecto o función para obtenerlo, si el valor original no está "relleno".
 * @return {TReturn|TDefault} - El resultado de `callback(value)` si el valor está relleno, o el valor por defecto.
 */
export function transform(value, callback, defaultValue = null) {

    if (is_filled(value)) {
        return callback(value);
    }

    if (is_function(defaultValue)) {
        return defaultValue(value);
    }

    return defaultValue;
}

/**
 * Devuelve el primer elemento de una colección iterable con propiedad `length`, como un array o una cadena.
 * Si el valor no es iterable, retorna `undefined`.
 *
 * @param {*} value - La colección de la que se desea obtener el primer elemento.
 * @return {*|undefined} - El primer elemento de la colección, o `undefined` si no aplica.
 */
export function first(value) {
    if (is_iterable(value)) {
        return value[0];
    }
    return undefined;
}

/**
 * Devuelve el último elemento de una colección iterable con propiedad `length`, como un array o una cadena.
 * Si el valor no es iterable, retorna `undefined`.
 *
 * @param {*} value - La colección de la que se desea obtener el último elemento.
 * @return {*|undefined} - El último elemento de la colección, o `undefined` si no aplica.
 */
export function last(value) {
    if (is_iterable(value) && "slice" in value && is_function(value.slice)) {
        return value.slice(-1);
    }
    return undefined;
}