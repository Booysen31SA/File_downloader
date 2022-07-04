const fileInput = document.querySelector("input"),
    donwloadBtn = document.querySelector("button");

donwloadBtn.addEventListener("click", e => {
    e.preventDefault();
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    try {
        fetch(url).then(res => res.blob()).then(file => {
            try {
                let tempUrl = URL.createObjectURL(file);
                let aTag = document.createElement("a");
                aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
                //padding file name as download value of <a> tag
                aTag.download = "filename";
                document.body.appendChild(aTag); //adding <a> tag inside body
                aTag.click(); // click <a> tag so the file download
                aTag.remove();// removing <a> tag once file downloaded
            } catch (error) {
                console.log("error");
            }
        })
    } catch (error) {
        console.log("error");
    }
}