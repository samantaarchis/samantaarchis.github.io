document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const listItems = document.querySelectorAll('li');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        listItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
