function attachClickListener(elementId) {
    const element = document.getElementById(elementId);

    // Function to handle click inside the element
    function handleClickInside(event) {
        element.style.backgroundColor = 'grey';;
        
        // Function to handle clicks outside the element
        function handleClickOutside(event) {
            if (!element.contains(event.target)) {
                element.style.backgroundColor = ''; // Reset background color
            }
        }
        
        // Attach the click outside listener
        document.addEventListener('click', handleClickOutside);
    }

    // Set the new click inside event listener
    element.addEventListener('click', handleClickInside);
}

// Example usage:
attachClickListener('otbtn');

const playButton = document.getElementById('playButton');

  // Initial pop-up effect
  anime({
    targets: playButton,
    scale: [0, 1.2, 1],
    duration: 1000,
    easing: 'easeOutBounce',
  });

  // Interactive scaling on hover
  playButton.addEventListener('mouseenter', () => {
    anime({
      targets: playButton,
      scale: 1.2,
      duration: 300,
      easing: 'easeOutBounce',
    });
  });

  playButton.addEventListener('mouseleave', () => {
    anime({
      targets: playButton,
      scale: 1,
      duration: 300,
      easing: 'easeInOutQuad',
    });
  });
