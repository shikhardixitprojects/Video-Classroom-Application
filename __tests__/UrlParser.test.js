import UrlParser from '../react/lib/UrlParser';

describe("Parsing Urls", () => {

  // it("should parse a string containing only a url", () => {
  //   expect(UrlParser("www.google.com")).toContain("www.google.com")
  // })

  it("should parse a string containing a url and a random word", () => {
    let result = UrlParser("www.google2.com hi www.google.com")
    console.log(result)
    expect(result).toEqual([ 'www.google2.com', 'www.google.com' ])
  })

  // it("should parse a string containing a url and a random word", () => {
  //   let result = UrlParser("hi shiki nice to meet you")
  //   console.log(result)
  //   expect(result).toEqual([])
  // })

})
