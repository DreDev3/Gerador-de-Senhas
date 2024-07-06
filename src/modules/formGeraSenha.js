import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.result')
const quant = document.querySelector('.quant')
const chkNum = document.querySelector('.chk-numeros')
const chkMai = document.querySelector('.chk-maiusculas')
const chkMin = document.querySelector('.chk-minusculas')
const chkSimb = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.button')
const alerta = document.querySelector('.alert')


export default () => {
    gerarSenha.addEventListener('click', () => {
        if (quant.value <= 0) return senhaGerada.innerHTML = 'Digite um número maior que 0'
        if (quant.value > 20) return alerta.style.display = 'block'
        if (!chkNum.checked && !chkMai.checked && !chkMin.checked && !chkSimb.checked) return senhaGerada.innerHTML = 'Nada Selecionado'
        senhaGerada.innerHTML = geraSenha(quant.value, chkNum.checked, chkMai.checked, chkMin.checked, chkSimb.checked)
        alerta.style.display = 'none'
    })
}
