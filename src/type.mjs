/**
 * Determina si un valor puede considerarse "en blanco".
 *
 * Un valor se considera "en blanco" si:
 * - Es `null`.
 * - Es una cadena de texto vacía o compuesta solo por espacios.
 * - Es un iterable (como un array o string) con longitud 0.
 * - No es numérico ni booleano, pero cumple con la lógica de `is_empty`.
 *
 *  Los valores numéricos y booleanos nunca se consideran "en blanco".
 *
 * @param {*} value - El valor a evaluar.
 * @returns {boolean} `true` si el valor se considera en blanco, de lo contrario `false`.
 */
export function is_blank(value) {

    if (is_null(value)) {
        return true;
    }

    if (is_string(value)) {
        return `${value}`.trim() === "";
    }

    if (is_numeric(value) || is_bool(value)) {
        return false;
    }

    if (is_iterable(value)) {
        return value.length === 0;
    }

    return is_empty(value);
}

/**
 * Determina si un valor esta en "relleno". equivalente a  !is_blank(value)
 *
 * is_null(value) -> false
 *
 * is_string(value) -> value.trim() !== ""
 *
 * is_numeric(value) || is_bool(value) -> true
 *
 * is_iterable(value) -> value.length !== 0
 *
 * !is_empty(value)
 *
 * @param {*} value
 * @return {boolean}
 */
export function is_filled(value) {
    return !is_blank(value);
}

/**
 * Verifica si un valor es `undefined`.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es `undefined`, de lo contrario `false`.
 */
export function is_undefined(value) {
    return typeof value === "undefined";
}

/**
 * Determina si un valor se considera "vacío".
 *
 * Un valor se considera vacío si cumple alguna de las siguientes condiciones:
 * - Es `undefined` o `null`
 * - Es una cadena vacía o solo con espacios en blanco
 * - Es un arreglo sin elementos
 * - Es un objeto sin propiedades propias
 *
 * @param {*} value - El valor a evaluar.
 * @returns {boolean} `true` si el valor es vacío, de lo contrario `false`.
 */
export function is_empty(value) {
    return (
        is_undefined(value) ||
        is_null(value) ||
        (is_string(value) && value.trim() === "") ||
        (is_array(value) && value.length === 0) ||
        (is_object(value) && Object.keys(value).length === 0)
    );
}

/**
 * Verifica si un valor es `null`.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es `null`, de lo contrario `false`.
 */
export function is_null(value) {
    return value === null;
}

/**
 * Verifica si un valor es una cadena de texto (`string` o `String`).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es una cadena, de lo contrario `false`.
 */
export function is_string(value) {
    if (typeof value === "string") return true;
    return value instanceof String;
}

/**
 * Verifica si un valor es numérico (incluye strings numéricos).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es numérico, de lo contrario `false`.
 */
export function is_numeric(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
}

/**
 * Devuelve true solo si el valor es estrictamente del tipo number.
 * @param {*} value
 * @return {boolean}
 */
export function is_number(value) {
    return typeof value === "number";
}

/**
 * Verifica si un valor es booleano.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es booleano, de lo contrario `false`.
 */
export function is_bool(value) {
    return typeof value === "boolean";
}

/**
 * Verifica si un valor es un símbolo.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es un `symbol`, de lo contrario `false`.
 */
export function is_symbol(value) {
    return typeof value === "symbol";
}

/**
 * Verifica si un valor es un `bigint`.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es `bigint`, de lo contrario `false`.
 */
export function is_bigint(value) {
    return typeof value === "bigint";
}

/**
 * Verifica si un valor es un objeto (`value !== null && typeof value === "object"`).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es un objeto, de lo contrario `false`.
 */
export function is_object(value) {
    return value !== null && typeof value === "object";
}

/**
 * Verifica si un valor es una función.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es una función, de lo contrario `false`.
 */
export function is_function(value) {
    return typeof value === "function";
}

/**
 * Verifica si un valor es un arreglo.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es un arreglo, de lo contrario `false`.
 */
export function is_array(value) {
    return Array.isArray(value);
}

/**
 * Verifica si un valor es iterable (tiene `Symbol.iterator`).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es iterable, de lo contrario `false`.
 */
export function is_iterable(value) {
    return value !== null && typeof value[Symbol.iterator] === 'function';
}

/**
 * Verifica si un valor es una instancia de `Date`.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es una fecha válida, de lo contrario `false`.
 */
export function is_date(value) {
    return value instanceof Date;
}

/**
 * Verifica si un valor es una expresión regular.
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es `RegExp`, de lo contrario `false`.
 */
export function is_regexp(value) {
    return value instanceof RegExp;
}

/**
 * Verifica si un valor es una promesa (`Promise`).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es una promesa, de lo contrario `false`.
 */
export function is_promise(value) {
    return value && is_function(value.then) && is_function(value.catch);
}

/**
 * Verifica si un valor es un error (`Error`).
 * @param {*} value - Valor a verificar.
 * @returns {boolean} `true` si es un error, de lo contrario `false`.
 */
export function is_error(value) {
    return value instanceof Error;
}

/**
 * Verifica si un valor es de un tipo determinado.
 * Soporta clases, strings de tipo (`"string"`, `"number"`), o arrays de tipos.
 * @param {*} value - Valor a verificar.
 * @param {*} type - Tipo(s) a comparar.
 * @returns {boolean} `true` si coincide con el tipo, de lo contrario `false`.
 */
export function is(value, type) {

    if (is_function(type) || is_object(type)) {
        return value instanceof type;
    }

    if (is_string(type)) {
        return typeof value === type;
    }

    if (is_array(type)) {
        return type.some((t) => is(value, t));
    }

    return false;
}