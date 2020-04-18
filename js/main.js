'use strict'

var gCurrentSearchInput = 'magic shrooms';
const elSearchInput = document.querySelector('.search-input');

elSearchInput.addEventListener('keyup', (ev) => {
    if (ev.keyCode === 13) onHitSerach();
})

function onInit() {
    onHitSerach();
}

function onHitSerach() {
    getYoutubeResults(getCurrenSearchInput())
    getWikiContent(getCurrenSearchInput())
}

function AutoRenderMainScreen(url) {
    const strHTML = `
    <iframe class="youtube-box" src=${url}></iframe>
    `
    document.querySelector('.youtube-spot').innerHTML = strHTML;
}

function onTypeSerachInput(val) {
    gCurrentSearchInput = val;
}

function getCurrenSearchInput() {
    return gCurrentSearchInput;
}

function renderYTResults(items) {
    const strHTMLs = items.map(item => {
        return `
        <li>
        <a href="#/" class="YT-result flex align-center" id="https://www.youtube.com/embed/${item.id.videoId}" onclick="onRenderMainScreen(this.id)">
        <img class="YT-img" src=${item.snippet.thumbnails.high.url}>
        <h3>${item.snippet.title}</h3>
        </a>
        </li>

        `
    })

    document.querySelector('.videos-list').innerHTML = strHTMLs;
    AutoRenderMainScreen(`https://www.youtube.com/embed/${items[0].id.videoId}`);
}

function onRenderMainScreen(url) {
    const strHTML = `
    <iframe class="youtube-box" src=${url}></iframe>
    `
    document.querySelector('.youtube-spot').innerHTML = strHTML;
}

function renderWikiResult(wikiData) {
    const strHTML = `
    <h2 class="wiki-title">${wikiData[1][0]}</h2>
    <p class="wiki-content">${wikiData[2][0]}</p>
    `
    document.querySelector('.wiki').innerHTML = strHTML;
}