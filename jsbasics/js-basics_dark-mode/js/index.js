console.clear();



document.addEventListener("DOMContentLoaded", () => {
    // Select the body element using the data-js attribute
    const bodyElement = document.querySelector('[data-js="body"]');
    
    // Select the buttons for various mode actions
    const switchToDarkButton = document.querySelector('[data-js="dark-mode-button"]');
    const switchToLightButton = document.querySelector('[data-js="light-mode-button"]');
    const toggleModeButton = document.querySelector('[data-js="toggle-button"]');
  
    // Add event listener to "Switch to dark Mode" button
    switchToDarkButton.addEventListener("click", () => {
      bodyElement.classList.add("dark"); 
    });
  
    // Add event listener to "Switch to light Mode" button
    switchToLightButton.addEventListener("click", () => {
      bodyElement.classList.remove("dark"); 
    });
  
    // Add event listener to "Toggle Mode" button
    toggleModeButton.addEventListener("click", () => {
      bodyElement.classList.toggle("dark"); 
    });
  });
  
  