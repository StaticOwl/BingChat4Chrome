document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('doubleButton');
    button.addEventListener('click', () => {
        const numberToDouble = 5;
        chrome.runtime.sendMessage({ type: 'double', data: numberToDouble }, (result) => {
            document.getElementById('result')!.textContent = `Result: ${result}`;
        });
    });
});
