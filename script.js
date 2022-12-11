async function downloadIt(event) {
    const a = document.createElement("a");
    a.href = await toDataURL(event.target.src);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

async function toDataURL(url) {
    const blob = await fetch(url).then(res => res.blob());
    return URL.createObjectURL(blob);
}