
export function debounce(func, wait = 300) {
    let timeout = null;
    return (...args) => {
        let self = this;
        return new Promise((resolve) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                let result = func.apply(self, args);
                resolve(result);
            }, wait);
        });
    };
}