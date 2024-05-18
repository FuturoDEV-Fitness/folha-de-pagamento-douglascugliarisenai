module.exports = function calculoInss(salario) {
    let inss = 0;
    const TETO_INSS = 908.85;

    if (salario <= 1412.0) {
        inss = salario * 0.075;
    } else if (salario >= 1412.01 && salario <= 2666.68) {
        inss = salario * 0.09;
    } else if (salario >= 2666.69 && salario <= 4000.03) {
        inss = salario * 0.12;
    } else {
        inss = salario * 0.14;
    }

    if (inss >= TETO_INSS) inss = TETO_INSS;

    return inss

};
