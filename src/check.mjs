import {
    is_array,
    is_bigint,
    is_blank,
    is_bool, is_date,
    is_empty, is_error,
    is_filled, is_function, is_iterable,
    is_null,
    is_number,
    is_numeric, is_object, is_promise, is_regexp,
    is_string, is_symbol,
    is_undefined
} from "./type.mjs";

/**
 * Devuelve `trueValue` cuando `value` está en blanco; de lo contrario devuelve `value`.
 *
 * Un valor se considera “en blanco” según la lógica de `is_blank`
 * (null, undefined, cadena vacía, iterable vacío, objeto sin propiedades, etc.).
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` está en blanco.
 * @returns {TValue|TAlt} - `trueValue` si `value` está en blanco; en caso contrario, `value`.
 */
export function if_blank(value, trueValue) {
    return is_blank(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` cuando `value` **NO** está en blanco; de lo contrario devuelve `value`.
 *
 * Un valor se considera “en blanco” según la lógica de `is_blank`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO está en blanco.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO está en blanco; en caso contrario, `value`.
 */
export function if_not_blank(value, trueValue) {
    return is_blank(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` está lleno; de lo contrario, devuelve `value`.
 *
 * Un valor se considera "lleno" cuando no está en blanco, según la lógica de `is_filled`.
 * Es decir, no es `null`, `undefined`, cadena vacía, iterable vacío u objeto vacío.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` está lleno.
 * @returns {TValue|TAlt} - `trueValue` si `value` está lleno; de lo contrario, `value`.
 */
export function if_filled(value, trueValue) {
    return is_filled(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO está lleno; de lo contrario, devuelve `value`.
 *
 * Un valor se considera "lleno" cuando no está en blanco, según la lógica de `is_filled`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO está lleno.
 * @returns {TValue|TAlt} - `trueValue` si `value` no está lleno; de lo contrario, `value`.
 */
export function if_not_filled(value, trueValue) {
    return is_filled(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es `undefined`; de lo contrario, devuelve `value`.
 *
 * Esta función permite reemplazar valores indefinidos por un valor alternativo.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` es `undefined`.
 * @returns {TValue|TAlt} - `trueValue` si `value` es `undefined`; de lo contrario, `value`.
 */
export function if_undefined(value, trueValue) {
    return is_undefined(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es `undefined`; de lo contrario, devuelve `value`.
 *
 * Esta función permite actuar cuando un valor está definido, devolviendo un valor alternativo.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO es `undefined`.
 * @returns {TValue|TAlt} - `trueValue` si `value` no es `undefined`; de lo contrario, `value`.
 */
export function if_not_undefined(value, trueValue) {
    return is_undefined(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` está vacío según la definición de `is_empty()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite proporcionar un valor alternativo cuando el valor original está vacío.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` está vacío.
 * @returns {TValue|TAlt} - `trueValue` si `value` está vacío; de lo contrario, `value`.
 */
export function if_empty(value, trueValue) {
    return is_empty(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO está vacío según `is_empty()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite ejecutar una lógica condicional cuando un valor está lleno (no vacío).
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO está vacío.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO está vacío; de lo contrario, `value`.
 */
export function if_not_empty(value, trueValue) {
    return is_empty(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es `null` según `is_null()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite reemplazar valores nulos con un valor alternativo.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` es `null`.
 * @returns {TValue|TAlt} - `trueValue` si `value` es `null`; de lo contrario, `value`.
 */
export function if_null(value, trueValue) {
    return is_null(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es `null` según `is_null()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite ejecutar una lógica condicional cuando un valor no es nulo.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO es `null`.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO es `null`; de lo contrario, `value`.
 */
export function if_not_null(value, trueValue) {
    return is_null(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una cadena de texto (`string`) según `is_string()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite aplicar una lógica alternativa cuando el valor es una cadena.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` es una cadena (`string`).
 * @returns {TValue|TAlt} - `trueValue` si `value` es una cadena; de lo contrario, `value`.
 */
export function if_string(value, trueValue) {
    return is_string(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una cadena de texto (`string`) según `is_string()`;
 * de lo contrario, devuelve `value`.
 *
 * Esta función permite aplicar una lógica alternativa cuando el valor no es una cadena.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO es una cadena (`string`).
 * @returns {TValue|TAlt} - `trueValue` si `value` NO es una cadena; de lo contrario, `value`.
 */
export function if_not_string(value, trueValue) {
    return is_string(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es numérico según `is_numeric()`;
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica alternativa cuando el valor es numérico (número o string numérico).
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` es numérico.
 * @returns {TValue|TAlt} - `trueValue` si `value` es numérico; de lo contrario, `value`.
 */
export function if_numeric(value, trueValue) {
    return is_numeric(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es numérico según `is_numeric()`;
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica alternativa cuando el valor NO es numérico.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO es numérico.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO es numérico; de lo contrario, `value`.
 */
export function if_not_numeric(value, trueValue) {
    return is_numeric(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es un número (tipo `number`);
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica alternativa cuando el valor es un número nativo de JavaScript.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` es un número.
 * @returns {TValue|TAlt} - `trueValue` si `value` es un número; de lo contrario, `value`.
 */
export function if_number(value, trueValue) {
    return is_number(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es un número (tipo `number`);
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica alternativa cuando el valor NO es un número nativo de JavaScript.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor que se devuelve si `value` NO es un número.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO es un número; de lo contrario, `value`.
 */
export function if_not_number(value, trueValue) {
    return is_number(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es un valor booleano (`true` o `false`);
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica condicional si el valor es estrictamente un booleano.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es booleano.
 * @returns {TValue|TAlt} - `trueValue` si `value` es booleano; de lo contrario, `value`.
 */
export function if_bool(value, trueValue) {
    return is_bool(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es un valor booleano (`true` o `false`);
 * de lo contrario, devuelve `value`.
 *
 * Útil para aplicar una lógica alternativa si el valor NO es estrictamente un booleano.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` NO es booleano.
 * @returns {TValue|TAlt} - `trueValue` si `value` NO es booleano; de lo contrario, `value`.
 */
export function if_not_bool(value, trueValue) {
    return is_bool(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es de tipo `symbol`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es un símbolo.
 * @returns {TValue|TAlt}
 */
export function if_symbol(value, trueValue) {
    return is_symbol(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es de tipo `symbol`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es un símbolo.
 * @returns {TValue|TAlt}
 */
export function if_not_symbol(value, trueValue) {
    return is_symbol(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es de tipo `bigint`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es un `bigint`.
 * @returns {TValue|TAlt} - `trueValue` si es `bigint`, de lo contrario `value`.
 */
export function if_bigint(value, trueValue) {
    return is_bigint(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es de tipo `bigint`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es un `bigint`.
 * @returns {TValue|TAlt} - `trueValue` si no es `bigint`, de lo contrario `value`.
 */
export function if_not_bigint(value, trueValue) {
    return is_bigint(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es un objeto (excluyendo `null`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es un objeto.
 * @returns {TValue|TAlt} - `trueValue` si es objeto, de lo contrario `value`.
 */
export function if_object(value, trueValue) {
    return is_object(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es un objeto (o si es `null`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es un objeto.
 * @returns {TValue|TAlt} - `trueValue` si no es objeto, de lo contrario `value`.
 */
export function if_not_object(value, trueValue) {
    return is_object(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una función; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es una función.
 * @returns {TValue|TAlt} - `trueValue` si es una función, de lo contrario `value`.
 */
export function if_function(value, trueValue) {
    return is_function(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una función; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es una función.
 * @returns {TValue|TAlt} - `trueValue` si no es una función, de lo contrario `value`.
 */
export function if_not_function(value, trueValue) {
    return is_function(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es un array; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es un array.
 * @returns {TValue|TAlt} - `trueValue` si es un array, de lo contrario `value`.
 */
export function if_array(value, trueValue) {
    return is_array(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es un array; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es un array.
 * @returns {TValue|TAlt} - `trueValue` si no es un array, de lo contrario `value`.
 */
export function if_not_array(value, trueValue) {
    return is_array(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es un objeto iterable (por ejemplo, array, string, Map, Set, etc.);
 * de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es iterable.
 * @returns {TValue|TAlt} - `trueValue` si es iterable, de lo contrario `value`.
 */
export function if_iterable(value, trueValue) {
    return is_iterable(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es un objeto iterable; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es iterable.
 * @returns {TValue|TAlt} - `trueValue` si no es iterable, de lo contrario `value`.
 */
export function if_not_iterable(value, trueValue) {
    return is_iterable(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una instancia válida de `Date`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es una fecha (`Date`).
 * @returns {TValue|TAlt} - `trueValue` si es una fecha, de lo contrario `value`.
 */
export function if_date(value, trueValue) {
    return is_date(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una instancia válida de `Date`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es una fecha (`Date`).
 * @returns {TValue|TAlt} - `trueValue` si no es una fecha, de lo contrario `value`.
 */
export function if_not_date(value, trueValue) {
    return is_date(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una expresión regular (`RegExp`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es una instancia de `RegExp`.
 * @returns {TValue|TAlt} - `trueValue` si es `RegExp`, de lo contrario `value`.
 */
export function if_regexp(value, trueValue) {
    return is_regexp(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una expresión regular (`RegExp`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es una instancia de `RegExp`.
 * @returns {TValue|TAlt} - `trueValue` si no es `RegExp`, de lo contrario `value`.
 */
export function if_not_regexp(value, trueValue) {
    return is_regexp(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una Promesa (`Promise`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es una instancia de `Promise`.
 * @returns {TValue|TAlt} - `trueValue` si es una `Promise`, de lo contrario `value`.
 */
export function if_promise(value, trueValue) {
    return is_promise(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una Promesa (`Promise`); de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es una instancia de `Promise`.
 * @returns {TValue|TAlt} - `trueValue` si no es una `Promise`, de lo contrario `value`.
 */
export function if_not_promise(value, trueValue) {
    return is_promise(value) ? value : trueValue;
}

/**
 * Devuelve `trueValue` si `value` es una instancia de `Error`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` es una instancia de `Error`.
 * @returns {TValue|TAlt} - `trueValue` si `value` es un error, de lo contrario `value`.
 */
export function if_error(value, trueValue) {
    return is_error(value) ? trueValue : value;
}

/**
 * Devuelve `trueValue` si `value` NO es una instancia de `Error`; de lo contrario, devuelve `value`.
 *
 * @template TValue
 * @template TAlt
 *
 * @param {TValue} value - Valor a evaluar.
 * @param {TAlt} trueValue - Valor a devolver si `value` no es una instancia de `Error`.
 * @returns {TValue|TAlt} - `trueValue` si `value` no es un error, de lo contrario `value`.
 */
export function if_not_error(value, trueValue) {
    return is_error(value) ? value : trueValue;
}
