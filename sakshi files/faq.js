const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((faqItem) => {
    faqItem.addEventListener('toggle', () => {
        const answer = faqItem.querySelector('.faq-answer');
        answer.classList.toggle('show');
    });
});