
// Função para alternar entre as páginas
function togglePage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    // Exibir a página desejada
    const page = document.getElementById(pageId);
    if (page) {
      page.style.display = 'block';
    }
  }
  
  // Event listener para alternar entre as páginas
  document.addEventListener('DOMContentLoaded', function() {
    // Mostrar a página de login por padrão
    togglePage('login-page');
  
    // Adicionar listeners para os links de alternância de página
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
      loginLink.addEventListener('click', function() {
        togglePage('login-page');
      });
    }
  
    const signupLink = document.getElementById('signup-link');
    if (signupLink) {
      signupLink.addEventListener('click', function() {
        togglePage('signup-page');
      });
    }
  
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', function() {
        togglePage('forgot-password-page');
      });
    }
  });
  