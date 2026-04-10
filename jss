// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Copy to clipboard functionality
function copyContent(button) {
    const content = button.previousElementSibling.textContent;
    
    navigator.clipboard.writeText(content).then(() => {
        // Visual feedback
        button.classList.add('copied');
        button.textContent = 'Copied!';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            button.textContent = 'Copy Content';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy content');
    });
}
