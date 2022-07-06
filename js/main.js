const Main = {
  listaNotas: [200, 100, 50, 20, 10, 5, 2],

  init: function () {
    this.cacheSelectors();
    this.bindEvents();
  },

  cacheSelectors: function () {
    this.form = document.querySelector("#form");
    this.notas = document.querySelector(".notas");
    this.divNotas = document.querySelector(".imagens-notas");
  },

  bindEvents: function () {
    const self = this;
    this.form.onsubmit = function (e) {
      e.preventDefault();

      let saque = document.forms["form"].saque.value;
      let lastNumber = saque.substr(-1);

      if (lastNumber != 3 && lastNumber != 1) {
        for (let i = 0; i < self.listaNotas.length; i++) {
          let resto = saque - self.listaNotas[i];
          if (saque >= self.listaNotas[i] && resto != 3 && resto != 1) {
            saque = saque - self.listaNotas[i];
            self.divNotas.innerHTML += `<img src="images/${self.listaNotas[i]}.jpg" alt="">`;
            i = i - 1;
          }
        }
      } else {
        self.divNotas.innerHTML = "<h4>Valor não pemitido</h4>";
      }
    };
  },
};

Main.init();
