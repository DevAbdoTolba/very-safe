
function handleInput(currentInput) {
    const maxLength = parseInt(currentInput.maxLength, 10);
    const currentInputIndex = Array.from(currentInput.parentNode.children).indexOf(currentInput);

    if (currentInput.value.length === maxLength) {
        const nextInput = currentInputIndex < currentInput.parentNode.children.length - 1
            ? currentInput.parentNode.children[currentInputIndex + 1].focus()
            : currentInput.blur();
    }
}

function handleBackspace(currentInput) {
    const currentInputIndex = Array.from(currentInput.parentNode.children).indexOf(currentInput);

    if (event.key === 'Backspace' && currentInput.value.length === 0) {
        const prevInput = currentInputIndex > 0
            ? currentInput.parentNode.children[currentInputIndex - 1].focus()
            : currentInput.focus();
    }
}