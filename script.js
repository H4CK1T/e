// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   var str = 'afdhal201';
//   document.title = '';
//   async function typewriteTitle() {
//     for (let i = 0; i < str.length; i++) {
//       document.title += str.charAt(i);
//       console.log(document.title); //debug only
//       await sleep(200);
//     }
//   }
//   typewriteTitle();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var str = 'afdhal201';
  document.title = ''; // Ensure the title is cleared initially
  
  // Store the original title
  const originalTitle = document.title; 
  
  async function typewriteTitle() {
    while (true) { // Infinite loop
      // Typing the string forward
      for (let i = 0; i < str.length; i++) {
        document.title += str.charAt(i);
        console.log(document.title); // Debug only
        await sleep(250); // Adjusted sleep duration to 250ms
      }
  
      // Erasing the string backwards
      for (let i = str.length - 1; i >= 0; i--) {
        document.title = document.title.slice(0, i); // Remove last character
        console.log(document.title); // Debug only
        await sleep(250); // Adjusted sleep duration to 250ms
      }
  
      // After completing the erase cycle, ensure title is set explicitly
      document.title = originalTitle; // Reset title to the original
      await sleep(250); // Optional delay before starting again
    }
  }
  
  typewriteTitle(); // Start the function   



