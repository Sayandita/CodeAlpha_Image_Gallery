document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('fullscreen')) {
                image.classList.remove('fullscreen');
                image.classList.add('minimized');
            } else if (image.classList.contains('minimized')) {
                image.classList.remove('minimized');
                image.classList.add('fullscreen');
            } else {
                image.classList.add('fullscreen');
            }
        });
    });
});
