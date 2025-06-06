// Scroll suave para âncoras
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Efeitos ao passar o mouse em botões
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

//Efeito de Digitar e Apagar
const typed = new Typed('#typed-text', {
  strings: ["Inesquecível.", "Criativo.", "Inovador."],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,    
  loop: true
});

//Efeito da aréa de FAQ
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = question.classList.contains('active');

    // Fecha todos
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
    });

    // Abre se não estava aberto
    if (!isOpen) {
      question.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

//EFEITO DA SEÇÃO SOBRE
const toggleBtn = document.getElementById('toggleBtn');
  const moreText = document.getElementById('moreText');

  toggleBtn.addEventListener('click', () => {
    if (moreText.style.display === 'block') {
      moreText.style.display = 'none';
      toggleBtn.textContent = 'Leia mais';
    } else {
      moreText.style.display = 'block';
      toggleBtn.textContent = 'Leia menos';
    }
  });

//Efeito de scroll suave para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Redirecionamento para a página de contato
document.querySelectorAll('.pacote').forEach(btn => {
  btn.addEventListener('click', function() {
    window.open('https://ig.me/m/afetivamente2025', '_blank');
  });
});
