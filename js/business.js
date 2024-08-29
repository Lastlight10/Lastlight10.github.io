document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.showMoreBtn');
    var moreTextSections = document.querySelectorAll('.moreText');

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var moreText = moreTextSections[index];
            if (moreText.classList.contains('hidden')) {
                moreText.classList.remove('hidden');
                this.textContent = 'SHOW LESS';
            } else {
                moreText.classList.add('hidden');
                this.textContent = 'SPECS';
            }
        });
    });
});
