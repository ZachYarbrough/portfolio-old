var typeWriter = document.querySelector('.type-writer');
dataText = ['Developer', 'Designer', 'Creator'];

var count = 0;
var delCount = 0;
var lengthCount = 0;

var setText = function () {
    setTimeout(function () {
        typeWriter.textContent += dataText[lengthCount].charAt(count);
        count++;
        if(count <= dataText[lengthCount].length) {
            setText();
        }
    }, 150);

    if(typeWriter.textContent.length === dataText[lengthCount].length) {
        setTimeout(deleteText, 3000);
    }
}
var deleteText = function () {
    setTimeout(function () {
        var delText = typeWriter.textContent.substr(0, dataText[lengthCount].length - (delCount));
        typeWriter.textContent = delText;
        delCount++;
        if(delCount <= dataText[lengthCount].length) {
            deleteText();
        }

        if(typeWriter.textContent.length === 0) {
            count = 0;
            delCount = 0;
            setText();
            if(lengthCount < dataText.length - 1){
                lengthCount++;
            } else {
                lengthCount = 0;
            }
        }
    }, 150);
}

window.onload = function () {
        setText();
}