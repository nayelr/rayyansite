// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Toggle like functionality for posts
  const likeButtons = document.querySelectorAll('.likes i');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle between filled and outlined heart
      if (this.classList.contains('far')) {
        this.classList.remove('far');
        this.classList.add('fas');
        
        // Increment like count
        const countElement = this.nextElementSibling;
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
      } else {
        this.classList.remove('fas');
        this.classList.add('far');
        
        // Decrement like count
        const countElement = this.nextElementSibling;
        let count = parseInt(countElement.textContent);
        countElement.textContent = count - 1;
      }
    });
  });
  
  // Navigation active state
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.parentElement.classList.remove('active'));
      
      // Add active class to clicked link
      this.parentElement.classList.add('active');
    });
  });
}); 