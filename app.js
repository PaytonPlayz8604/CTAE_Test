document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    hamburgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('open');
    });

    const reviewForms = document.querySelectorAll('.review-section form');
    reviewForms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const name = form.querySelector('input[name="name"]').value;
            const review = form.querySelector('textarea[name="review"]').value;
            const reviewSection = form.parentElement.querySelector('div[id^="reviews-"]');
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `<p><strong>${name}</strong></p><p>${review}</p>`;
            reviewSection.appendChild(reviewDiv);
            form.reset();
        });
    });
});
