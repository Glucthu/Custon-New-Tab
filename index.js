const clock = function() {
    let getDate = new Date();
    document.getElementById('clock').innerHTML = getDate.toLocaleTimeString();
}

/*function addBox() {
    localStorage.setItem()
}*/

setInterval(function() { clock();}, 250);

//document.getElementById("myButton").addEventListener("click", addBox);

let addLinkButtons = document.querySelectorAll('.add-link');
let deleteLinkButtons = document.querySelectorAll('.delete-link');

addLinkButtons.forEach(button => {
    button.addEventListener('click', event => {
        let parentDiv = event.target.parentNode;
        let nth = 0;
        let sibling = parentDiv.previousSibling;

        while (sibling) {
            if (sibling.nodeType === 1) {
                nth++;
            }
            sibling = sibling.previousSibling;
        }

        if (event.target === button) {
            let promptBackground = document.getElementById("promptBackground");

            if(promptBackground) {
                promptBackground.style.display="inline";
            }

            let addLinkButton = document.getElementById("addLinkButton");

            if(addLinkButton) {
                let createLink = function(){
                    let newLinkHref = document.querySelector("input[name='new-link-href']");
                    let newLinkText = document.querySelector("input[name='new-link-text']");
                    if(newLinkHref && newLinkHref.value !== "" && newLinkText && newLinkText.value !== "") {
                        boxLinks = document.getElementsByClassName("box-links");
                        let link = document.createElement('div');
                        let newLink = document.createElement('a');
                        let deleteLink = document.createElement('button');
                        deleteLink.className = "delete-link"
                        link.className = "link";
                        newLink.href = newLinkHref.value;
                        newLink.innerHTML = newLinkText.value;
                        deleteLink.innerHTML = "x";
                        link.appendChild(newLink);
                        link.appendChild(deleteLink);
                        boxLinks[nth].appendChild(link);
                        deleteLink.addEventListener('click', deleteLinkHandler);
                    }
                    promptBackground.style.display="none";
                    addLinkButton.removeEventListener("click", createLink);
                }
                addLinkButton.addEventListener("click", createLink);
            }
        }
    });
});

function deleteLinkHandler(event) {
    let parentDiv = event.target.parentNode;
        while(parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        event.target.removeEventListener('click', deleteLinkHandler);
        parentDiv.remove();
}


deleteLinkButtons.forEach(button => {
    button.addEventListener('click', event => {
        let parentDiv = event.target.parentNode;

        if (event.target === button) {
            while(parentDiv.firstChild) {
                parentDiv.removeChild(parentDiv.firstChild);
            }
            button.removeEventListener('click', event);
            parentDiv.remove();
        }
    });
});