const input = document.getElementById("input")
const button = document.getElementById("convertir")
const result = document.getElementById("resultado")



button.addEventListener("click", function () {
    const valor = input.value.trim()
    if (isNaN(valor) || valor ===  "") {
        alert("Por favor ingresa un numero valido")
        return
    } 
        const farenheit = (valor * 9 / 5) + 32
        const kelvin = valor + 273.15

        result.innerHTML = `
    <p>
    <strong>
    Grados Farenheit: 
    </strong>
    ${farenheit}
    </p>

    <p>
    <strong>
    Grados Kelvin: 
    </strong>
    ${kelvin}
    </p>
    `
}


)



