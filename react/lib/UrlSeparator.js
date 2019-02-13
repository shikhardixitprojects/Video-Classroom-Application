export default function UrlSeparator(urls, str) {

  var results = [];
  //takes the output of URL paraser and message:
  //  "hi www.google.com hello www.google.com     "

  //turns that into this:
  // [ {url:false, text:"hi "}, {url:true, text:"www.google.com"}, {url:false, text:" hello "}, /*... and so on*/"www.google.com", "     "]

  let cursorIdx = 0;

  if (urls.length == 0) {
    results.push({
      url: false,
      messagePart: str
    })
  } else {
    for (let r = 0; r < urls.length; r++) {
      while (cursorIdx !== urls[r].endIdx) {
        if (cursorIdx === urls[r].startIdx) {
          results.push({
            url: true,
            messagePart: urls[r].url
          })
          cursorIdx = urls[r].endIdx
        } else {
          results.push({
            url: false,
            messagePart: str.substring(cursorIdx, urls[r].startIdx)
          })
          cursorIdx = urls[r].startIdx
        }
      }
    }

    results.push({
      url: false,
      messagePart: str.substring(urls[urls.length - 1].endIdx, str.length)
    })
  }

  return results;

}
