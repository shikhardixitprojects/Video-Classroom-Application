export default function urlCheck(str) {
  var regex = new RegExp('(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?', 'g');

  let haystack = str;
  let matchIndex = haystack.search(regex)
  console.log(matchIndex)

  let resultarray = [];

  let spaceIndex = haystack.indexOf(' ', matchIndex)

  while (matchIndex !== -1) {

    if (spaceIndex === -1) {
      resultarray.push(haystack.substring(matchIndex, haystack.length));
      break;
    } else {
      console.log(haystack)
      resultarray.push(haystack.substring(matchIndex, spaceIndex))
      haystack = haystack.substring(spaceIndex+1)
      console.log(haystack)
      matchIndex = haystack.search(regex)
      console.log(matchIndex)
    }
    spaceIndex = haystack.indexOf(' ', matchIndex)
    //console.log(spaceIndex)
  }

  // while (matchIndex !== -1) {
  //
  //
  //
  //   resultarray.push(match);
  //   let matchLastIndex = match.index + match[0].length //match[0]?
  //   haystack = haystack.substring(matchLastIndex);
  //   match = haystack.search(regex);
  // }


  return resultarray;

}
