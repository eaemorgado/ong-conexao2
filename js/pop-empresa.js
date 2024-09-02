// function showPopup(id) {
//   document.getElementById(id).style.display = 'block';
// }

// function hidePopup(id) {
//   document.getElementById(id).style.display = 'none';
// }



document.addEventListener('DOMContentLoaded', function() {
  function showPopup(id) {
    document.getElementById(id).style.display = 'block';
  }

  function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
  }

  const logoContainers = document.querySelectorAll('.logo-container');

  logoContainers.forEach(container => {
    const popupId = container.getAttribute('data-popup-id');

    container.addEventListener('mouseover', () => showPopup(popupId));
    container.addEventListener('mouseout', () => hidePopup(popupId));

    // Para dispositivos móveis, usamos 'touchstart'
    container.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do toque
      const popup = document.getElementById(popupId);
      if (popup.style.display === 'block') {
        hidePopup(popupId);
      } else {
        showPopup(popupId);
      }
    });

    // Esconder popup ao sair da área no touch
    container.addEventListener('touchend', (event) => {
      event.preventDefault();
      hidePopup(popupId);
    });
  });
});
