export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const { format: formatDateTime } = new Intl.DateTimeFormat('default', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
})

export const formatPhone = (phone: string) => {
        var retorno = phone.replace(/\D/g, "");
        retorno = retorno.replace(/^0/, "");
        if (retorno.length > 10) {
          retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (retorno.length > 5) {
        //   if (retorno.length == 6 && event.code == "Backspace") { 
        //     // necessário pois senão o "-" fica sempre voltando ao dar backspace
        //     return; 
        //   } 
          retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (retorno.length > 2) {
          retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
          if (retorno.length !== 0) {
            retorno = retorno.replace(/^(\d*)/, "($1");
          }
        }

        return retorno
      }