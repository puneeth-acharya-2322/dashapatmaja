// Industries Section Filter Gallery
(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (!filterButtons.length || !portfolioGrid) return;

    // Filter function
    function filterItems(filterValue) {
      const items = portfolioGrid.querySelectorAll('.grid-item');
      
      items.forEach(item => {
        // Remove hidden class from all items first
        item.classList.remove('hidden');
        item.style.display = '';
        
        // Determine if item should be shown
        let shouldShow = false;
        
        if (filterValue === '*') {
          // Show only "all-filter" cards for the All button
          shouldShow = item.classList.contains('all-filter');
        } else {
          // Show items matching the specific filter class
          const filterClass = filterValue.replace('.', '');
          shouldShow = item.classList.contains(filterClass);
        }
        
        // Hide items that don't match
        if (!shouldShow) {
          item.classList.add('hidden');
        }
      });
    }

    // Add click event to filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'text-primary', 'border-primary', 'dark:border-primary');
        });
        
        // Add active class to clicked button
        this.classList.add('active', 'text-primary', 'border-primary', 'dark:border-primary');
        
        // Get filter value and filter items
        const filterValue = this.getAttribute('data-filter');
        filterItems(filterValue);
      });
    });

    // Initialize with "All" filter
    filterItems('*');
  });
})();
