document.addEventListener("DOMContentLoaded", function() {
    // Code to toggle visibility of additional company information
    const readMoreButton = document.querySelector('.read-more');
    const moreInfoSection = document.querySelector('.more-info');

    readMoreButton.addEventListener('click', function() {
        moreInfoSection.classList.toggle('show');
        if (moreInfoSection.classList.contains('show')) {
            readMoreButton.textContent = 'Read Less';
        } else {
            readMoreButton.textContent = 'Read More';
        }
    });

    // Code to display a modal with company history
    const historyButton = document.querySelector('.history-button');
    const historyModal = document.querySelector('.history-modal');
    const closeModalButton = document.querySelector('.close-modal');

    historyButton.addEventListener('click', function() {
        historyModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        historyModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == historyModal) {
            historyModal.style.display = 'none';
        }
    });
});
