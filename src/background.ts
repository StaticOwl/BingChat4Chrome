chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'double') {
        const result = message.data * 2;
        sendResponse(result);
    }
});
