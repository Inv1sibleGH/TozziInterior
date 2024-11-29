// Select buttons and gallery items
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Event listener for filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        // Get selected category
        const category = btn.getAttribute('data-category');

        // Show/hide items based on category
        galleryItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});
