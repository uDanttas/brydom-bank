// Script principal do BryDom Bank

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.boxShadow = "0 0 15px gold";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.boxShadow = "none";
    });
  });

  console.log("🔔 Sistema BryDom Bank carregado com sucesso!");
});
