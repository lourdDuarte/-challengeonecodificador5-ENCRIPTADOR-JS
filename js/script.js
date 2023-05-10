var texto_ingresado = document.querySelector(".txt-ingresado");
var txt_encriptado = document.getElementById('txt_encriptado');
var imagen = document.querySelector(".img");
var titulo_h1 = document.querySelector(".mensaje");
var titulo_h3 = document.querySelector("h3");

var btn_copiar = document.querySelector(".btn-copiar")


const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];


// *****BOTONES*****

function btnEncriptar(){
    texto_encriptado = encriptar(texto_ingresado.value)
    if (texto_encriptado.length > 0){
        txt_encriptado.innerHTML = texto_encriptado;
        titulo_h1.style.display = 'none'
        titulo_h3.style.display = 'none'
        btn_copiar.style.display = 'block'
        

    }else{
        validar_texto_ingresado()
    }
    

}

function btnDesencriptar(){
    texto_encriptado = desencriptar(texto_ingresado.value)
    if (texto_encriptado.length > 0){
        txt_encriptado.innerHTML = texto_encriptado;
    }else{
        validar_texto_ingresado()
    }

}


function btnCopiar(){
    navigator.clipboard.writeText(txt_encriptado.innerHTML)
    alert ("Texto copiado en portapapeles")
}



// **** FUNCIONES DE ENCRIPTACION/DESCENCRIPTACION ****

function encriptar(txt){
    let texto = txt.toLowerCase();
    

    for (let i = 0; i <  llaves.length; i++ ){
        if(texto.includes(llaves[i][0])){
            texto = texto.replaceAll(llaves[i][0],llaves[i][1])
        }       
        
    }

    return(texto)
   
}

function desencriptar(txt){
    let texto = txt.toLowerCase();
    for (let i = 0; i <  llaves.length; i++ ){
        if(texto.includes(llaves[i][1])){
            texto = texto.replaceAll(llaves[i][1],llaves[i][0])
        }       
        
    }

    return(texto)
}

// **** VALIDACION ****

function validar_texto_ingresado(){
    titulo_h1.style.display = 'block'
        titulo_h3.style.display = 'block'
        txt_encriptado.innerHTML = ' '
        if (btn_copiar.style.display = 'block'){
            btn_copiar.style.display = 'none'

        }
}
