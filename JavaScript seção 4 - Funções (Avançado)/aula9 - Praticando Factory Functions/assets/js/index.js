
const criarCalculadora = () => {
    return {
        display: document.querySelector('.display'),

        realizarConta(){
            let string = this.display.value;
            let verificador = /[a - z]/;
            if(string.search(verificador)){
                try {
                    string = eval(string);

                    if(!string){
                        alert("conta inválida");
                        return
                    }
                    this.display.value = string;
                } catch (error) {
                    alert("conta inválida");
                }
            }

        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1)
        },

        clearDisplay(){
            this.display.value = '';
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', (e) =>{
                if(e.keycode === 13){
                    this.realizarConta();
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) =>{
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criarCalculadora();

calculadora.inicia();