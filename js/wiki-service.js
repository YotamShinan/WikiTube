'use strict'

function getWikiContent(val) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${val}&limit=1`)
        .then(res => renderWikiResult(res.data))
}