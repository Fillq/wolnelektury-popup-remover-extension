console.log("Content script loaded for Wolne Lektury");

chrome.storage.sync.get("autoRemove", (data) => {
    if (data.autoRemove) {
        setTimeout(() => {
            removeAnnoyingPopup();
        }, 10);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "removePopup") {
        removeAnnoyingPopup();
        sendResponse({ status: "removed" });
    }
});

function removeAnnoyingPopup() {
    const element = document.querySelector(".annoy-banner_top-container");
    if (element) {
        element.remove();
        console.log("Usunięto annoy-banner_top-container");
    } else {
        console.log("Element nie znaleziony");
    }
}
