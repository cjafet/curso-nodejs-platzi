process.stdin.setEncoding('utf-8');
console.log('Aguardando pelas informações do usuário');

process.stdin.on('readable', () => {
    let chunk;
    while (( chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data:  ${chunk}`);
    };
});

