let shortLinkBtn = document.querySelector(".shortLinkBtn");
let toShortenInput = document.getElementById("linkToShorten");
let resultLinks = document.querySelector(".resultLinks");

toShortenInput.addEventListener("click", () => {
  toShortenInput.value = "";
  toShortenInput.style.color = "black";
});

shortLinkBtn.addEventListener("click", () => {
  // console.log("shorten btn");

  let linkToShorten =
    "https://api.shrtco.de/v2/shorten?url=" + toShortenInput.value;

  if (
    linkToShorten !== "https://api.shrtco.de/v2/shorten?url=" &&
    validateUrl(linkToShorten)
  ) {
    // console.log(linkToShorten);
    toShortenInput.value = "please wait. fetching short link...";

    let ans = getData(linkToShorten)
      .then((data) => data.result)
      .catch(() => {
        toShortenInput.value = "Error - Please enter a valid Link!";
        toShortenInput.style.color = "red";
      });

    let displayOnScreen = Promise.resolve(ans);
    displayOnScreen.then((data) => {
      if (data != undefined) {
        let sl1 = data.short_link;
        let str = "";
        str = `
                <div class="results">
                  <div class="shortLink1">
                    ${data.original_link}
                  </div>
                  <div class="leftResults">
                    <div id="toCopy1" class="shortLink2">${sl1}</div>
                    <button class="btn copyBtn">Copy</button>
                  </div>
                </div>

                <div class="results">
                  <div class="shortLink1">
                    ${data.original_link}
                  </div>
                  <div class="leftResults">
                    <div id="toCopy2" class="shortLink2">${data.short_link2}</div>
                    <button class="btn copyBtn">Copy</button>
                  </div>
                </div>
                `;
        resultLinks.innerHTML = str;
        toShortenInput.value = "Yay your link is shortened! 🎉";
        toShortenInput.style.color = "hsl(120deg 74% 68%)";

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
      }
    });
  } else {
    toShortenInput.value = "Error - Please enter a valid Link!";
    toShortenInput.style.color = "red";
  }
});

async function getData(link) {
  url = link;
  const response = await fetch(url);
  const users = await response.json();
  return users;
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

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
