import UrlSeparator from '../react/lib/UrlSeparator';
import UrlParser, {
  searchFromIndex as search
} from '../react/lib/UrlParser';

describe("Separating Urls", () => {

  it("should separate urls that begin with a word, and are separated by a word and have space after", () => {
    let result = UrlSeparator(UrlParser("hi www.google.com hello www.google.com"), "hi www.google.com hello www.google.com")
    console.log(result)
    expect(result).toEqual([
      {
        url: false,
        messagePart: "hi "
      },
      {
        url: true,
        messagePart: "www.google.com",
      },
      {
        url: false,
        messagePart: " hello "
      },
      {
        url: true,
        messagePart: "www.google.com"
      },
      {
        url: false,
        messagePart: ""
      }
    ])

    let result2 = UrlSeparator(UrlParser("hi www.google.com hello www.google.com"), "hi www.google.com hello www.google.com   ")
    console.log(result2)
    expect(result2).toEqual([
      {
        url: false,
        messagePart: "hi "
      },
      {
        url: true,
        messagePart: "www.google.com",
      },
      {
        url: false,
        messagePart: " hello "
      },
      {
        url: true,
        messagePart: "www.google.com"
      },
      {
        url: false,
        messagePart: "   "
      }
    ])
  })
})
