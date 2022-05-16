"use strict";
{
    const modifyString = (string, separator) => {
        const inputText = string.split(separator);
        let outputText = [];
        for (let word of inputText){
            let newWord = word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
            outputText.push(newWord)
        }
        return outputText.join(separator)
    }
    const download = (filename, text) => {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    let textArea = document.getElementById("text-area");
    const upperCaseButton = document.getElementById("upper-case");
    upperCaseButton.addEventListener("click", function (){
        textArea.value = textArea.value.toUpperCase()
    });
    const lowerCaseButton = document.getElementById("lower-case");
    lowerCaseButton.addEventListener("click", function (){
        textArea.value = textArea.value.toLowerCase()
    });
    const properCaseButton = document.getElementById("proper-case");
    properCaseButton.addEventListener("click", function(){
        textArea.value = modifyString(textArea.value, " ");
    })
    const sentenceCaseButton = document.getElementById("sentence-case");
    sentenceCaseButton.addEventListener("click", function (){
        textArea.value = modifyString(textArea.value, ". ");
    })
    const downloadButton = document.getElementById("save-text-file");
    downloadButton.addEventListener("click", function (){
        // textArea.value = modifyString(textArea.value, ". ");
        download("text.txt", textArea.value)
    })
}