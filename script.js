// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    const menuIcon = document.getElementById('menu-icon');
    
    // Toggle sidebar open/close
    burger.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        
        // Change menu icon
        if (sidebar.classList.contains('open')) {
            menuIcon.textContent = 'close';
        } else {
            menuIcon.textContent = 'menu';
        }
    });
    
    // Add click handlers for nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});
