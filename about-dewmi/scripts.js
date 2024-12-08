document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded');
    const moreInfoBtn = document.getElementById('more-info-btn');
    const moreInfo = document.getElementById('more-info');
    
    moreInfoBtn.addEventListener('click', () => {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            moreInfoBtn.textContent = 'Show Less';
        } else {
            moreInfo.classList.add('hidden');
            moreInfoBtn.textContent = 'Learn More';
        }
    });
});
