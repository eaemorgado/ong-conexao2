const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.target;

        // Remove a classe 'active' de todas as tabs e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Adiciona a classe 'active' à tab e ao conteúdo selecionado
        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
      });
    });