// 1000*60*60 quantos milissegundos tem em uma hora

const finalDaCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +finalDaCopa + 1000 * 60 * 60;

// criar uma data a partir de um timestamp 
const finalMaisUmaHoraDate = new Date(finalMaisUmaHora);


console.log(finalDaCopa, finalMaisUmaHoraDate);