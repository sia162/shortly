// copy btns functionality
let copyBtns = document.getElementsByClassName("copyBtn");

Array.from(copyBtns).forEach((copyBtn) => {
  copyBtn.addEventListener("click", (e) => {
    copyBtnCLicked = e.target;
    copyBtnCLicked.textContent = "Copied!";
    copyBtnCLicked.style.backgroundColor = "hsl(255, 11%, 22%)";

    handleCopyTextFromParagraph(e.target.previousElementSibling.id);

    setTimeout(() => {
      changed();
    }, 1000);
  });
});
// copy btns functionality

// copy btn functionality
function handleCopyTextFromParagraph(containerid) {
  const cb = navigator.clipboard;
  if (containerid === "toCopy1") {
    const paragraph = document.querySelector("#toCopy1");
    cb.writeText(paragraph.innerText).then(() => alert("Text copied"));
  } else {
    const paragraph = document.querySelector("#toCopy2");
    cb.writeText(paragraph.innerText).then(() => alert("Text copied"));
  }
}

function changed() {
  copyBtnCLicked.textContent = "Copy";
  copyBtnCLicked.style.backgroundColor = "hsl(180, 66%, 49%)";
}
// copy btn functionality
