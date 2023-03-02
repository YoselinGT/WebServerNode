import * as http from 'http';

http.createServer((req, res) => {

    res.setHeader('Content-Disposition','attachmen; filename=lista.cvs')
    res.writeHead(200,{'Content-Type':'application/csv'})

    const persona = {
        id:1,
        nombre: 'Fernando'
    }

    res.write('id, nombre');
    res.write('1, Fernando');
    res.write('2, Maria');
    res.write('3, Juan');
    res.write('4, Pedro');

    res.end()
})
.listen(8080);

console.log("Escuchando en el puero 8080")