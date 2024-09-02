// function showPopup(id) {
//   document.getElementById(id).style.display = 'block';
// }

// function hidePopup(id) {
//   document.getElementById(id).style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', function() {
  function showPopup(popup) {
    popup.classList.add('show');
  }

  function hidePopup(popup) {
    popup.classList.remove('show');
  }

  const logoContainers = document.querySelectorAll('.logo-container');

  logoContainers.forEach(container => {
    const popupId = container.getAttribute('data-popup-id');
    const popup = document.getElementById(popupId);

    container.addEventListener('mouseover', () => showPopup(popup));
    container.addEventListener('mouseout', () => hidePopup(popup));

    // Para dispositivos móveis, usamos toque
    container.addEventListener('touchstart', () => {
      if (popup.classList.contains('show')) {
        hidePopup(popup);
      } else {
        showPopup(popup);
      }
    });
  });
});