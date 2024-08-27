document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 500; // Quanto menor a velocidade, mais rápido é a contagem

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0; // Inicia a contagem a partir de 0

        const updateCount = () => {
            // Calcular incremento
            const increment = target / speed;

            // Verificar se a contagem está abaixo do alvo
            if (count < target) {
                // Adicionar incremento à contagem e formatar o número
                count += increment;
                counter.innerText = Math.ceil(count).toLocaleString();
                // Chamar a função a cada milissegundo
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    };

    // Intersection Observer para iniciar a contagem quando o elemento estiver na visualização
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
