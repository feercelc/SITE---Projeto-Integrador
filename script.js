
// =====================================
// SISTEMA DE AQUECIMENTO DA PISCINA
// PARTE 1/4
// =====================================


// Temperatura inicial da piscina

let temperatura = 24;


// Temperatura máxima desejada

const temperaturaIdeal = 30;


// Controle para evitar vários cliques

let aquecendo = false;



// Função chamada pelo botão do HTML

function aquecerPiscina(){


    if(aquecendo){

        return;

    }


    aquecendo = true;



    // Elementos do HTML

    const temperaturaTexto = document.getElementById("temperatura");

    const barra = document.getElementById("barra");

    const mensagem = document.getElementById("mensagem");

    const bomba = document.getElementById("bomba");

    const energia = document.getElementById("energia");




    // Atualiza status inicial


    bomba.innerHTML = "Ligada 💧";


    energia.innerHTML = "Desligado ⚡";



    mensagem.innerHTML = 
    "☀️ Captando energia solar e iniciando aquecimento...";





    // Intervalo para aumentar temperatura

    let intervalo = setInterval(function(){



        if(temperatura < temperaturaIdeal){



            temperatura++;



            temperaturaTexto.innerHTML = 
            temperatura + "°C";



            // calcula porcentagem da barra

            let progresso = 
            ((temperatura - 24) /
            (temperaturaIdeal - 24)) * 100;



            barra.style.width = progresso + "%";



            mensagem.innerHTML =

            "🔥 Aquecendo piscina... " 
            + temperatura 
            + "°C";



        }



        else{


            clearInterval(intervalo);



            bomba.innerHTML =
            "Desligada ✅";



            mensagem.innerHTML =

            "🏊 Piscina aquecida! Temperatura ideal atingida.";

            

            aquecendo = false;



        }



    },1500);



}

// =====================================
// PAINEL INTELIGENTE E ECONOMIA
// PARTE 2/4
// =====================================



// Valores iniciais

let economia = 0;

let sistemaAtivo = false;



// Função para atualizar o painel

function atualizarPainel(){



    const sol = document.getElementById("sol");

    const bomba = document.getElementById("bomba");

    const energia = document.getElementById("energia");



    if(!sol || !bomba || !energia){

        return;

    }





    // Simula variação da luz solar

    let intensidadeSolar = 
    Math.floor(Math.random() * 21) + 70;



    sol.innerHTML = 
    intensidadeSolar + "%";





    // Verifica se o sistema está aquecendo

    if(aquecendo){



        bomba.innerHTML =
        "Ligada 💧";



        energia.innerHTML =
        "Desligado (Solar) ☀️";



        sistemaAtivo = true;



    }

    else{



        bomba.innerHTML =
        "Desligada ✅";


        energia.innerHTML =
        "Desligado ⚡";


        sistemaAtivo = false;


    }





}



// Atualiza o painel a cada 3 segundos

setInterval(atualizarPainel,3000);






// =====================================
// GRÁFICO DE ECONOMIA
// =====================================



function atualizarEconomia(){



    const barraSolar =
    document.querySelector(".solar");



    if(!barraSolar){

        return;

    }





    if(aquecendo){



        if(economia < 65){


            economia += 5;


        }



        barraSolar.style.width =
        economia + "%";



        barraSolar.innerHTML =
        economia + "%";



    }




}



// Atualiza economia durante aquecimento

setInterval(atualizarEconomia,2000);






// =====================================
// SIMULAÇÃO DE DADOS DO SISTEMA
// =====================================



function verificarSistema(){



    const mensagem =
    document.getElementById("mensagem");



    if(!mensagem){

        return;

    }





    if(aquecendo){



        mensagem.innerHTML +=

        "<br>📡 Sensores enviando dados ao controlador...";



    }



}



setInterval(verificarSistema,5000);

// =====================================
// INTERFACE E NAVEGAÇÃO
// PARTE 3/4
// =====================================



// =====================================
// MODO ESCURO
// =====================================



function modoEscuro(){


    document.body.classList.toggle("escuro");



}



// Cria botão automaticamente

const botaoTema = document.createElement("button");


botaoTema.innerHTML = "🌙 Modo Escuro";


botaoTema.className = "botao-tema";



document.body.appendChild(botaoTema);



botaoTema.addEventListener("click", modoEscuro);







// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================



const voltarTopo = document.createElement("button");


voltarTopo.innerHTML = "⬆️";


voltarTopo.className = "topo";



document.body.appendChild(voltarTopo);






window.addEventListener("scroll",function(){



    if(window.scrollY > 500){


        voltarTopo.style.display = "block";


    }


    else{


        voltarTopo.style.display = "none";


    }



});






voltarTopo.addEventListener("click",function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});






// =====================================
// MENU MOBILE
// =====================================



const menu = document.querySelector("nav");



const botaoMenu = document.createElement("button");


botaoMenu.innerHTML = "☰";


botaoMenu.className = "menu-mobile";



document.querySelector("header").appendChild(botaoMenu);






botaoMenu.addEventListener("click",function(){



    menu.classList.toggle("mostrar");



});






// Fecha menu ao clicar em um link


const linksMenu = document.querySelectorAll("nav a");



linksMenu.forEach(function(link){



    link.addEventListener("click",function(){


        menu.classList.remove("mostrar");


    });



});





// =====================================
// ANIMAÇÃO DE APARECER AO ROLAR
// =====================================



const elementos =
document.querySelectorAll("section");





function mostrarElementos(){



    elementos.forEach(function(elemento){



        let posicao =
        elemento.getBoundingClientRect().top;



        let alturaTela =
        window.innerHeight;



        if(posicao < alturaTela - 100){



            elemento.classList.add("visivel");



        }



    });



}





window.addEventListener(
"scroll",
mostrarElementos
);



mostrarElementos();

// =====================================
// EFEITOS FINAIS DO SISTEMA
// PARTE 4/4
// =====================================



// =====================================
// RELÓGIO DO SISTEMA
// =====================================



function atualizarRelogio(){



    const agora = new Date();



    let horas =
    agora.getHours()
    .toString()
    .padStart(2,"0");



    let minutos =
    agora.getMinutes()
    .toString()
    .padStart(2,"0");



    let segundos =
    agora.getSeconds()
    .toString()
    .padStart(2,"0");



    let horario =

    horas +
    ":" +
    minutos +
    ":" +
    segundos;





    let relogio =
    document.getElementById("relogio");



    if(relogio){


        relogio.innerHTML =
        "🕒 " + horario;


    }



}



setInterval(atualizarRelogio,1000);








// =====================================
// DATA DO SISTEMA
// =====================================



function atualizarData(){



    const data =
    new Date();



    let texto =

    data.getDate()
    + "/"
    +
    (data.getMonth()+1)
    + "/"
    +
    data.getFullYear();




    let calendario =
    document.getElementById("dataSistema");



    if(calendario){


        calendario.innerHTML =
        "📅 " + texto;


    }



}



atualizarData();








// =====================================
// SIMULAÇÃO DOS SENSORES
// =====================================



function monitorarSensores(){



    let sensorTemp =
    document.getElementById("sensorTemperatura");



    let sensorLuz =
    document.getElementById("sensorLuz");




    if(sensorTemp){



        sensorTemp.innerHTML =

        "🌡 Sensor de temperatura: ONLINE";


    }




    if(sensorLuz){



        sensorLuz.innerHTML =

        "☀ Sensor solar: ONLINE";


    }



}




setInterval(monitorarSensores,4000);








// =====================================
// EFEITO DE CLIQUE NOS CARDS
// =====================================



const cards =
document.querySelectorAll(".card");



cards.forEach(function(card){



    card.addEventListener(
    "mouseenter",
    function(){


        card.style.transform =
        "translateY(-10px)";


    });



    card.addEventListener(
    "mouseleave",
    function(){


        card.style.transform =
        "translateY(0)";


    });



});








// =====================================
// MENSAGEM DE INICIALIZAÇÃO
// =====================================



window.addEventListener(
"load",
function(){



    console.log(
    "Sistema de aquecimento da piscina CEP iniciado."
    );



    console.log(
    "Sensores preparados."
    );



    console.log(
    "Automação funcionando."
    );



});