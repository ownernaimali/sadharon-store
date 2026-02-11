
   // Initialize Icons
    lucide.createIcons();
    // Elements
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar');
    // Open Logic
    function openMenu() {
      sidebar.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevents background scrolling
    }

    // Close Logic
    function closeMenu() {
      sidebar.classList.remove('active');
      
      document.body.style.overflow = 'auto'; // Restores scrolling
    }

    // Events
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
  
