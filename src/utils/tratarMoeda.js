const TratarValorToBRL = (saldo, alert) => {
    // modulo reaproveitado do BankMGTKSimple

    // remove todos os caracteres não numéricos
    if (!saldo) return ""
    saldo = saldo.toString().replace(/[^0-9]/g, '');

    if (parseInt(saldo) < 1 && alert) {
        toast.error("Por favor escolha um valor acima de R$0,01")
        return "R$0,00"
    }
    // Adiciona a vírgula para os centavos
    if (saldo.length >= 3) {
        saldo = saldo.replace(/(\d{2})$/, ',$1');
    } else {
        saldo = `0,${saldo}`;
    }

    // Remove os zeros à esquerda
    saldo = saldo.replace(/^0+(?=\d)/, '');

    // Adiciona os pontos de milhar
    saldo = saldo.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    // Adiciona o "R$"
    saldo = `R$${saldo}`;


    if (saldo == "R$") {
        return setValor("R$0,00")
    }

    return saldo
}


export default TratarValorToBRL