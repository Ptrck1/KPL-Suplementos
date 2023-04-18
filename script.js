import "./style.css"

let rango = document.querySelector("#rango")
let texto = document.querySelector("#texto")

rango.oninput= () => {
    texto.innerHTML = rango.value
}
{
    
}