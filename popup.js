let pushups = 0;

const pushupDisplay = document.getElementById("pushups");
const button = document.getElementById("addPushup");

// STEP 1: Load saved data from Chrome storage
chrome.storage.local.get(["pushups"], (result) => {

    // If nothing is saved yet, default to 0
    pushups = result.pushups || 0;

    // Update UI immediately
    pushupDisplay.textContent = pushups;
});

button.addEventListener("click", () => { // When the button is clicked execute the code 
    pushups = pushups + 1;
    pushupDisplay.textContent = pushups; //changes the text so adds a pushup
    chrome.storage.local.set({ pushups: pushups });
});