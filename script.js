function carregar(){
    var msg = window.document.getElementById('msg')
    var recado = window.document.getElementById('recado')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'manha.png'
        recado.innerHTML = '<p>Bom dia!<p>'
        document.body.style.background = 'rgb(249,240,231)'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'tarde.png'
        recado.innerHTML = '<p>Boa tarde!!<p>'

        document.body.style.background = 'rgb(82,163,220)'
    }else{
        //  BOA NOITE
        img.src = 'noite.png'
        recado.innerHTML = '<p>Boa noite!<p>'
        document.body.style.background = 'rgb(57,67,76)'
    }
}
