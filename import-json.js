// import-json.js

function openJsonImport() {
    // Functionality to open file dialog and handle JSON file import
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const json = JSON.parse(e.target.result);
            // Process the JSON data as needed
        };
        reader.readAsText(file);
    };
    input.click();
}

export { openJsonImport };