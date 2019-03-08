let aula = process.argv[2];

function printwelcomeMessage(aula) {
    if(aula) {
        console.log(`Bem vindo ao curso de NodeJS aqui!`);
    } else {
        console.log('Bem vindo a sua aula aqui na Platzi');
    }
}

printwelcomeMessage(aula);




