document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenMembers = document.querySelectorAll('.team-member.hidden');

    showMoreBtn.addEventListener('click', () => {
        hiddenMembers.forEach(member => {
            member.classList.toggle('hidden');
            member.classList.toggle('visible');
        });
        if (showMoreBtn.textContent === 'Mostrar mais') {
            showMoreBtn.textContent = 'Mostrar menos';
        } else {
            showMoreBtn.textContent = 'Mostrar mais';
        }
    });
});
