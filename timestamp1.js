// Final da copa do mundo com dois gols = data da final (2002, 5, 30, 8)
// O primeiro gol aos 22 minutos do segundo tempo. O segundo go aos 34 minutos do segundo tempo
// Criar dois objetos com as datas em que ocorreram os gols
// Sabendo que um tempo tem 45 minutos e o intervalo sâo 15 minutos 
// 

const finalDaCopa = new Date(2002, 5, 30, 8);
const inicioTimestamp = +finalDaCopa;

const primeiroGolTimestamp = inicioTimestamp + (45 + 15 + 22) * 60 * 1000;
const primeiroGolDate = new Date(primeiroGolTimestamp);

console.log(primeiroGolDate); // 2002-06-30T12:22:00.000Z primeiro gol

console.log(new Date(+finalDaCopa + (45 + 15 + 38) * 60 * 1000)); // 2002-06-30T12:38:00.000Z segundo gol