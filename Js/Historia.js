document.addEventListener('DOMContentLoaded', function() {
    const historyModal = document.getElementById('history-modal');
    const closeButton = document.querySelector('.close-button');

    // Mostrar el modal si se ha hecho clic en el enlace de "Historia"
    if (localStorage.getItem('showHistoryModal') === 'true') {
        historyModal.style.display = 'block';
        localStorage.removeItem('showHistoryModal'); // Limpiar el localStorage
    }

    closeButton.addEventListener('click', function() {
        historyModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == historyModal) {
            historyModal.style.display = 'none';
        }
    });
});
