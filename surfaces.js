exports.cuadrado = function (s) {
    return s * s;
};
exports.rectangulo = function (b, h) {
    return b * h;
};
exports.triangulo = function (b, h) {
    return b * h / 2;
};
exports.circulo = function (r) {
    return Math.PI * r * r;
};
exports.elipse = function (a, b) {
    return Math.PI * a * b;
};