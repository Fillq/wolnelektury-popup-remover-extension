chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "removePopup") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length > 0) {
              chrome.scripting.executeScript({
                  target: { tabId: tabs[0].id },
                  function: removeAnnoyingPopup
              });
          }
      });
  }
});

// Funkcja do usunięcia popupa – musi być osadzona w background.js
function removeAnnoyingPopup() {
  const element = document.querySelector(".annoy-banner_top-container");
  if (element) {
      element.remove();
      console.log("Usunięto annoy-banner_top-container");
  } else {
      console.log("Element nie znaleziony");
  }
}
