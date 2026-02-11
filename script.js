document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const openBtn = document.getElementById('open');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const bgEffects = document.getElementById('background-effects');

    // Function to handle the opening sequence
    const openCard = () => {
        // 1. Open the envelope
        envelope.classList.add('open');

        // 2. Wait for the envelope animation to finish somewhat (e.g., 2.5 seconds)
        // then fade out Page 1 and show Page 2
        setTimeout(() => {
            page1.classList.add('hidden');
            page2.classList.remove('hidden');
        }, 10000); // 10 seconds delay for user to read the letter
    };

    // Event Listeners
    envelope.addEventListener('click', openCard);
    openBtn.addEventListener('click', openCard);

    // Falling Hearts Effect
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤'; // Using unicode heart

        // Randomize position and animation properties
        const startLeft = Math.random() * 100; // 0 to 100vw
        const duration = Math.random() * 3 + 2; // 2s to 5s
        const size = Math.random() * 20 + 10; // 10px to 30px

        heart.style.left = startLeft + 'vw';
        heart.style.animationDuration = duration + 's';
        heart.style.fontSize = size + 'px';

        bgEffects.appendChild(heart);

        // Remove element after animation finishes to prevent memory leak
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    };

    // Create a heart every 300ms
    setInterval(createHeart, 300);
});
