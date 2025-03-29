const shareElement = document.querySelector(".user-share");

//Open share dialog
shareElement.addEventListener("click", () => {
  isCreated();
});

function createDialog(){
  //Containers
  const shareContainer = document.createElement("div");
  shareContainer.classList.add("article-dialog");
  
  const rowIcons = document.createElement("div");
  rowIcons.classList.add("dialog-row")

  const rowShare = document.createElement("div");
  rowShare.classList.add("dialog-row");

  //Share Text
  const shareText = document.createElement("p");
  shareText.textContent = "share";
  shareText.classList.add("dialog-text");

  //Share Icons
  const facebookIcon = document.createElement("img");
  const pinterestIcon = document.createElement("img");
  const twitterIcon = document.createElement("img");
  const shareIcon = document.createElement("img");

  facebookIcon.src = "./images/icon-facebook.svg";
  pinterestIcon.src = "./images/icon-pinterest.svg";
  twitterIcon.src = "./images/icon-twitter.svg";
  shareIcon.src = "./images/icon-share.svg";

  facebookIcon.alt = "Facebook Icon";
  pinterestIcon.alt = "Pinterest Icon";
  twitterIcon.alt = "Twitter Icon";
  shareIcon.alt = "Share Icon";
  
  facebookIcon.classList.add("dialog-icon");
  pinterestIcon.classList.add("dialog-icon");
  twitterIcon.classList.add("dialog-icon");
  shareIcon.classList.add("dialog-icon");

  //Append items to container
  rowIcons.appendChild(shareText);
  rowIcons.appendChild(facebookIcon);
  rowIcons.appendChild(twitterIcon);
  rowIcons.appendChild(pinterestIcon);
  rowShare.appendChild(shareIcon);

  shareContainer.appendChild(rowIcons);
  shareContainer.appendChild(rowShare);

  //Append to parent container
  const articleElement = document.querySelector(".article-body");
  articleElement.appendChild(shareContainer);
};

//Test if the dialog element is alredy created
function isCreated(){
  const dialogElement = document.querySelector(".article-dialog");

  if(!dialogElement){
    createDialog(); 
  } else {
    dialogElement.remove();
  }
};
