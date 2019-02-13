export function urlCheckOld(str) {
  var regex = new RegExp('(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?', 'g');

  let haystack = str;
  let matchIndex = haystack.search(regex)
  let startInd = matchIndex;
  let endInd = 0;

  let resultarray = [];

  let spaceIndex = haystack.indexOf(' ', matchIndex)

  while (matchIndex !== -1) {

    if (spaceIndex === -1) {

      //haystackFinalUrl = haystack.substring(matchIndex, haystack.length)
      resultarray.push({url: haystack.substring(matchIndex, haystack.length), startInd: startInd, endInd: startInd + (haystack.substring(matchIndex, haystack.length)).length});
      break;
    } else {
      endInd = spaceIndex;
      resultarray.push({url: haystack.substring(matchIndex, spaceIndex), startInd: startInd, endInd: endInd})
      startInd = spaceIndex + 1;
      haystack = haystack.substring(spaceIndex+1)
      matchIndex = haystack.search(regex)
    }
    spaceIndex = haystack.indexOf(' ', matchIndex)

  }

  return resultarray;

}

export const searchFromIndex = (str, regex, index = 0) => {
  const matchIdx = str.substring(index).search(regex)
  return matchIdx === -1 ? -1 : matchIdx + index;
}

export default function UrlParser(str) {
  let regex = new RegExp('(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?', 'g');
  let haystack = str;
  let cursorIdx = 0;
  const results = []

  let matchIdx = searchFromIndex(haystack, regex, cursorIdx);

  while(matchIdx !== -1) {
    let endIdx = haystack.indexOf(" ", matchIdx);

    if(endIdx === -1) {
      results.push({
        url: haystack.substring(matchIdx, haystack.length),
        startIdx: matchIdx,
        endIdx: haystack.length
      })
      break;
    } else {
      // push match to results array
      results.push({
        url: haystack.substring(matchIdx, endIdx),
        startIdx: matchIdx,
        endIdx,
      })
      // reset matchIdx
      cursorIdx = endIdx + 1
      matchIdx = searchFromIndex(haystack, regex, cursorIdx);
    }
  }

  return results;
}
