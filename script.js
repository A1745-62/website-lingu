function uploadFiles(language) {
    const fileInput = document.getElementById(`${language}Upload`);
    const fileList = document.getElementById(`${language}FileList`);
    const files = fileInput.files;

    if (files.length === 0) {
        alert(`Please select a file to upload for ${language}.`);
        return;
    }

    fileList.innerHTML = '<h3>Uploaded Files:</h3>';

    Array.from(files).forEach(file => {
        const fileItem = document.createElement('p');
        fileItem.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
        fileList.appendChild(fileItem);
    });

    alert(`Files for ${language} uploaded successfully! (Note: This is a demo. Actual file upload functionality needs a backend.)`);
}
