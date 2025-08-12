let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value;

    if (nombreAmigo.trim() === '') {
        alert('Por favor ingrese un nombre valido.');
        return;
    }

    amigos.push(nombreAmigo.trim());
    mostrarListaAmigos();
    amigoInput.value = '';
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let p = document.createElement('p');
    p.textContent = `¡El amigo que ha ganado el sorteo es: ${amigoSorteado}!`;
    resultado.appendChild(p);
}
