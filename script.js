function calcularMargenReal() {
    var margenTeorico = parseFloat(document.getElementById("margenTeorico").value);
    var descuentoQ = parseFloat(document.getElementById("descuentoQ").value);

    if (isNaN(margenTeorico) || isNaN(descuentoQ)) {
        alert("Por favor, ingrese ambos valores.");
        return;
    }

    margenTeorico = validarPorcentaje(margenTeorico);
    descuentoQ = validarPorcentaje(descuentoQ);

    var margenReal = 1 - ((1 - margenTeorico) / (1 - descuentoQ));

    document.getElementById("resultadoMargenReal").innerHTML = (margenReal * 100).toFixed(3) + '%';

    calcularDescuentoObjetivo();
}

function calcularDescuentoObjetivo() {
    var margenTeorico = parseFloat(document.getElementById("margenTeoricoObjetivo").value);
    var margenReal = parseFloat(document.getElementById("margenRealObjetivo").value);

    if (isNaN(margenTeorico) || isNaN(margenReal)) {
        return;
    }

    margenTeorico = validarPorcentaje(margenTeorico);
    margenReal = validarPorcentaje(margenReal);

    var descuentoObjetivo = 1 - ((1 - margenTeorico) / (1 - margenReal));

    document.getElementById("resultadoDescuentoObjetivo").innerHTML = (descuentoObjetivo * 100).toFixed(3) + '%';
}

function calcularDescuentoTotal() {
    var valorVenta = parseFloat(document.getElementById("valorVenta").value);
    var valorVentaFinal = parseFloat(document.getElementById("valorVentaFinal").value);

    if (isNaN(valorVenta) || isNaN(valorVentaFinal) || valorVentaFinal === 0) {
        return;
    }

    var descuentoTotal = 1 - (valorVenta / valorVentaFinal);

    document.getElementById("resultadoDescuentoTotal").innerHTML = (descuentoTotal * 100).toFixed(3) + '%';
}

function calcularDescuentoR() {
    var descuentoTotal = parseFloat(document.getElementById("descuentoTotalDR").value);
    var descuentoQ = parseFloat(document.getElementById("descuentoQDR").value);

    if (isNaN(descuentoTotal) || isNaN(descuentoQ)) {
        return;
    }

    descuentoTotal = validarPorcentaje(descuentoTotal);
    descuentoQ = validarPorcentaje(descuentoQ);

    var descuentoR = 1 - ((1 - descuentoTotal) / (1 - descuentoQ));

    document.getElementById("resultadoDescuentoR").innerHTML = (descuentoR * 100).toFixed(3) + '%';

    calcularDescuentoTotalQR();
}

function calcularDescuentoTotalQR() {
    var descuentoR = parseFloat(document.getElementById("descuentoR").value);
    var descuentoQ = parseFloat(document.getElementById("descuentoQDTQR").value);

    if (isNaN(descuentoR) || isNaN(descuentoQ)) {
        return;
    }

    descuentoR = validarPorcentaje(descuentoR);
    descuentoQ = validarPorcentaje(descuentoQ);

    var descuentoTotalQR = 1 - ((1 - descuentoR) * (1 - descuentoQ));

    document.getElementById("resultadoDescuentoTotalQR").innerHTML = (descuentoTotalQR * 100).toFixed(3) + '%';
}

function validarPorcentaje(valor) {
    if (isNaN(valor)) {
        alert("Por favor, ingrese un valor numérico.");
        return 0;
    }

    return parseFloat(valor).toFixed(3) / 100;
}
