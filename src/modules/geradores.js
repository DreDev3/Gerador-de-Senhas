function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const simbolos = ',.?/°!@#$%¨&*()-_=+*{}[]~^:|;'

const numeros = () => String.fromCharCode(rand(48, 58))

const letrasMaiusculas = () => String.fromCharCode(rand(65, 91))

const letrasMinusculas = () => String.fromCharCode(rand(97, 123))

const geraSimbolos = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, num, mai, min, simb) {
    const senhaArray = []
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        num && senhaArray.push(numeros())
        mai && senhaArray.push(letrasMaiusculas())
        min && senhaArray.push(letrasMinusculas())
        simb && senhaArray.push(geraSimbolos())
    }
    return senhaArray.join('').slice(0, qtd)
}