// Simple JavaScript to handle search input on Enter key press
const searchInput = document.querySelector('header input[type="search"]');
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      console.log('Searching for:', query);
      alert('Searching for: ' + query);
      // Further search logic or redirection can be added here
    }
  }
});
