window.onload = function () {
  let tela = document.getElementById('tela');
  let expressao = '';
  let somClique = new Audio('click.mp3'); // som ao clicar

  window.adicionar = function (valor) {
    somClique.currentTime = 0; // reinicia som
    somClique.play();
    if (tela.innerText === '0' && valor !== '.') {
      expressao = '';
    }
    expressao += valor;
    tela.innerText = expressao;
  };

  window.limpar = function () {
    somClique.currentTime = 0;
    somClique.play();
    expressao = '';
    tela.innerText = '0';
  };

  window.calcular = function () {
    somClique.currentTime = 0;
    somClique.play();
    try {
      let resultado = eval(expressao.replace('%', '/100'));
      tela.innerText = resultado;
      expressao = resultado.toString();
    } catch {
      tela.innerText = 'Erro';
      expressao = '';
    }
  };
};
