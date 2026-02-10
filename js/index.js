
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
  
  
  
// Pop-up Notice Logic
const noticeOverlay = document.getElementById('noticeOverlay');
const closeNoticePopup = document.getElementById('closeNoticePopup');
const continueBtn = document.getElementById('continueBtn');

// Function to show popup
window.addEventListener('load', () => {
  setTimeout(() => {
    noticeOverlay.classList.add('show');
  }, 500); // 1 second delay
});

// Function to close popup
function closePopup() {
  noticeOverlay.classList.remove('show');
}

closeNoticePopup.addEventListener('click', closePopup);
continueBtn.addEventListener('click', closePopup);

// Close if user clicks outside the card
noticeOverlay.addEventListener('click', (e) => {
 // if (e.target === noticeOverlay) closePopup();
});
