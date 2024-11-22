document.addEventListener('DOMContentLoaded', function () {
    const panelSelect = document.getElementById('panelSelect');
    const panelInfo = document.getElementById('panelInfo');
    
    //Atualiza informacoes ao mudar as versoes da panela
    panelSelect.addEventListener('change', function () {
        const selectedOption = panelSelect.value;
        panelInfo.innerHTML = '';
        
        if (selectedOption === 'none') {
            panelInfo.innerHTML = '<p>Selecione uma versão de panela para ver os detalhes.</p>';
        } else if (selectedOption === 'versao1') {
            panelInfo.innerHTML = `
                <p>Panela Solar Compacta. Ideal para quem precisa de praticidade e eficiência em qualquer lugar.</p>
                <img src="imagens/versao1.jpg" alt="Panela Solar Compacta" onerror="this.onerror=null; this.src='imagens/placeholder.jpg';" class="panel-image">
            `;
        } else if (selectedOption === 'versao2') {
            panelInfo.innerHTML = `
                <p>Panela Solar Premium. Maior capacidade e tecnologia avançada para uso em larga escala.</p>
                <img src="imagens/versao2.jpg" alt="Panela Solar Premium" onerror="this.onerror=null; this.src='imagens/placeholder.jpg';" class="panel-image">
            `;
        }
    });

    //Lógica formulário contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        alert(`Mensagem enviada com sucesso!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
        contactForm.reset();
    });
});
