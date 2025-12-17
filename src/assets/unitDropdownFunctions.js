

export function toCelsius(temp) {
    return ((temp - 32) * 5/9).toFixed(0);
}

export function toKMH(mph) {
    return (mph * 1.609).toFixed(1);
}

export function toMM(inches) {
    return (inches * 25.4).toFixed(1);
}