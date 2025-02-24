document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.getElementById("removePopup");
    const autoRemoveCheckbox = document.getElementById("autoRemove");

    chrome.storage.sync.get("autoRemove", (data) => {
        autoRemoveCheckbox.checked = data.autoRemove || false;
    });

    removeButton.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "removePopup" });
    });

    autoRemoveCheckbox.addEventListener("change", () => {
        chrome.storage.sync.set({ autoRemove: autoRemoveCheckbox.checked });
    });
});
