document.getElementById('infoButton').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Mostrar menos información';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Mostrar más información';
    }
});