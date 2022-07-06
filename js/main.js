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
    this.msg = document.querySelector(".msg");
  },

  bindEvents: function () {
    const self = this;
    this.form.onsubmit = function (e) {
      e.preventDefault();

      self.divNotas.innerHTML = "<h4></h4>";
      self.msg.innerHTML = "";

      let saque = document.forms["form"].saque;
      let lastNumber = saque.value.substr(-1);

      if (
        lastNumber != 3 &&
        lastNumber != 1 &&
        saque.value != "" &&
        saque.value != 0
      ) {
        self.msg.innerHTML = "Saque realizado com sucesso!";
        for (let i = 0; i < self.listaNotas.length; i++) {
          let resto = saque.value - self.listaNotas[i];
          if (saque.value >= self.listaNotas[i] && resto != 3 && resto != 1) {
            saque.value = saque.value - self.listaNotas[i];
            self.divNotas.innerHTML += `<img src="images/${self.listaNotas[i]}.jpg" alt="">`;
            i = i - 1;
          }
        }
      } else {
        self.msg.innerHTML = "Valor não permitido";
      }
      saque.value = "";
    };
  },
};

Main.init();
