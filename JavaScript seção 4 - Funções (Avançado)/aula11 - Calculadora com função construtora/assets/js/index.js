function Calculadora() {

    this.display = document.querySelector('.display');

    this.Iniciar = () => {
        this.cliqueButtons();
        this.teclaEnter();
    }

    this.teclaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.which !== 13) return;
            if (e.which === 13) {
                this.calcular();
            }
        })
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.limparDisplay = () => {
        this.display.value = '';
    }

    this.deletarUltimoNum = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.calcular = () => {
        try {
            let conta = this.display.value;
            const verificador = /[a - z]/;
            if (conta.search(verificador)) {
                conta = eval(conta);
                this.display.value = conta;
            } else {
                alert('digite apenas numeros!');
                this.limparDisplay();
            }
        } catch (e) {
            alert('Conta inválida');
        }
    }

    this.cliqueButtons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            //adicionar número na conta
            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el)
            }
            //limpar tudo
            if (el.classList.contains('btn-clear')) {
                this.limparDisplay();
            }
            //Apagar o último numero teclado
            if (el.classList.contains('btn-del')) {
                this.deletarUltimoNum();
            }

            if (el.classList.contains('btn-eq')) {
                //calcular resultado
                this.calcular();
            }
        })
    }
}
const input = document.querySelector('.display');

const calculadora = new Calculadora();
calculadora.Iniciar();