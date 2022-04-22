export const PromiseTimeout = (ms: number) => {
    return new Promise((resovle, reject) => {
        setTimeout(resovle, ms)
    })
}

/**
 * Debounce for Interface
 * 
 * @param ms
 * @param fn => Callback Function
 */
let debounceTimer: number;
export const DebounceTime = (ms: number, fn: Function) => {
    return function () {
        if (debounceTimer) {
            clearTimeout(debounceTimer)
        }
        debounceTimer = setTimeout(() => fn(), ms)
    }
}

/**
 * Throttle for Interface
 * 
 * @param ms
 * @param fn => Callback Function
 */
let throttleTimevalid: boolean = true;
export const ThrottleTime = (ms: number, fn: Function) => {
    return function () {
        if (!throttleTimevalid) {
            return
        }
        throttleTimevalid = false
        setTimeout(() => {
            fn()
            throttleTimevalid = true
        }, ms)
    }
}