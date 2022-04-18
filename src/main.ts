import { getIconForFile, getIconForFolder, getIconForOpenFolder } from 'vscode-icons-js';

const elements = document.querySelectorAll("tr.ready.entry");

for (let i = 0; i < elements.length; i++){
    /**
     * <tr .. 
     *  <td class="name four wide">
     *      <span class="truncate">,
     *          <svg icon>
     *          <a href="...">
     *      </span>
     *  <td class="message nine wide"></td>
     *  ...
     *  </td>
     * </tr>
     */
    const newIconEl = document.createElement('img');
    
    var name = elements[i].getAttribute("data-entryname").toLowerCase();//<tr .. data-entryname="...">

    const span =  elements[i].firstElementChild.firstElementChild;//<span class="truncate">
 
    if (span.firstElementChild.getAttribute("class").includes("svg octicon-file-directory"))//<svg ... class="svg octicon-file-directory">
        newIconEl.setAttribute('src', chrome.runtime.getURL('./icons/'+ getIconForFolder(name)));
    else
        newIconEl.setAttribute('src', chrome.runtime.getURL('./icons/'+ getIconForFile(name)));
    newIconEl.setAttribute('class', 'gitea-vscode-icon');
    newIconEl.setAttribute('width', '16');
    newIconEl.setAttribute('height', '16');
    
    span.replaceChild(newIconEl, span.firstElementChild);//<svg icon> --> <img icon>
}

/*
Original Idea:

const newIconEl = document.createElement('img');

var name = document.querySelectorAll("tr.ready.entry")[0].getAttribute("data-entryname");
//const test = document.querySelectorAll("tr.ready.entry")[0].firstElementChild.firstElementChild.firstElementChild;
const el = document.querySelectorAll("tr.ready.entry")[0].firstElementChild.firstElementChild;

newIconEl.setAttribute('src', browser.runtime.getURL('./icons/'+ getIconForFile(name)));
newIconEl.setAttribute('class', 'gitea-vscode-icon');
newIconEl.setAttribute('width', '16');
newIconEl.setAttribute('height', '16');
console.log(newIconEl);

el.replaceChild(newIconEl, el.firstElementChild);
*/