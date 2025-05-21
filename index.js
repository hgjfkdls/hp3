/**
 * Determina si un valor esta en "blanco"
 *
 * is_null(value) -> true
 *
 * is_string(value) -> value.trim() === ""
 *
 * is_numeric(value) || is_bool(value) -> false
 *
 * is_iterable(value) -> value.length === 0
 *
 * is_empty(value)
 *
 * @param {*} value
 * @return {boolean}
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
 * @param {*} value
 * @return {boolean}
 */
export function is_undefined(value) {
    return typeof value === "undefined";
}

/**
 * equivalente a is_undefined(value)
 * @param {*} value
 * @return {boolean}
 */
export function is_empty(value) {
    return is_undefined(value);
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_null(value) {
    return value === null;
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_string(value) {
    if (typeof value === "string") return true;
    return value instanceof String;
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_numeric(value) {
    return typeof value === "number";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_bool(value) {
    return typeof value === "boolean";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_symbol(value) {
    return typeof value === "symbol";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_bigint(value) {
    return typeof value === "bigint";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_object(value) {
    return typeof value === "object";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_function(value) {
    return typeof value === "function";
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_array(value) {
    return Array.isArray(value);
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_iterable(value) {
    return value !== null && typeof value[Symbol.iterator] === 'function';
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_date(value) {
    return value instanceof Date;
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_regexp(value) {
    return value instanceof RegExp;
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_promise(value) {
    return value && is_function(value.then) && is_function(value.catch);
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function is_error(value) {
    return value instanceof Error;
}

/**
 * @param {*} value
 * @param {*} type
 * @return {boolean}
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
 * @template TValue
 * @template TReturn
 * @template TDefault
 *
 * @param {TValue} value
 * @param {function(TValue):TReturn} callback
 * @param {TDefault|function(TValue):TDefault} defaultValue
 * @return {is_filled(TValue) ? TReturn : TDefault}
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
 * Devuelve el último elemento de un objeto iterable.
 * si el objeto no es iterable, false.
 * @param {*} value
 * @return {*|boolean}
 */
export function last(value) {
    if (is_iterable(value)) {
        return value[value.length - 1];
    }
    return false;
}

/**
 * Devuelve el primer elemento de un objeto iterable.
 * si el objeto no es iterable, false.
 * @param {*} value
 * @return {*|boolean}
 */
export function first(value) {
    if (is_iterable(value)) {
        return value[0];
    }
    return false;
}

/**
 * Obtener un elemento de un objeto usando la notación "punto"
 * @param {*} target
 * @param {[]|string|null} [key]
 * @param {*} [defaultValue]
 * @return {*}
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
 * Establezca un elemento en un objeto utilizando la notación de "punto".
 * @param {*} target
 * @param {[]|string|null} [key]
 * @param {*} value
 * @return {*}
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
            if (is_undefined(target[segment])) {
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
