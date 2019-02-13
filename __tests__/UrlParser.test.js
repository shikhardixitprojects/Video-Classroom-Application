import UrlParser, { searchFromIndex as search } from '../react/lib/UrlParser';

describe("Parsing Urls", () => {

  it("should parse a string containing only a url", () => {
    let result = UrlParser("www.google.com")
    console.log(result)
    expect(result).toEqual([ {url: 'www.google.com', startIdx: 0, endIdx: 14}])
  })

  it("should return empty if no url", () => {
    expect(UrlParser("hi")).toEqual([])
  })

  it("should parse a string containing only a url", () => {
    expect(UrlParser("www.google.com")).toEqual([ {url: 'www.google.com', startIdx: 0, endIdx: 14}])
  })

  it("should parse a string containing url surrounded by whitespace" , () => {
    expect(UrlParser("www.google.com    ")).toEqual([ {url: 'www.google.com', startIdx: 0, endIdx: 14}])
    expect(UrlParser("   www.google.com")).toEqual([ {url: 'www.google.com', startIdx: 3, endIdx: 17}])
  })

  it("should parse a string containing a url and a random word", () => {
    let result = UrlParser("hi www.google.com www.google.com")
    console.log(result)
    expect(result).toEqual([ {url: 'www.google.com', startIdx: 3, endIdx: 17}, {url: 'www.google.com', startIdx: 18, endIdx: 32} ])
  })

  it("should parse a string containing a url and a random word", () => {
    let result = UrlParser("www.google.com www.google.com")
    console.log(result)
    expect(result).toEqual([ {url: 'www.google.com', startIdx: 0, endIdx: 14}, {url: 'www.google.com', startIdx: 15, endIdx: 29} ])

  })

  it("should parse urls that are separated by many spaces or a word", () => {
    expect(UrlParser("www.google.com wutzzup manggzz   ,www.google.com")).toEqual([
      {
        url:"www.google.com",
        startIdx:0,
        endIdx:14,
      },
      {
        url:"www.google.com",
        startIdx:34,
        endIdx:48,
      }
    ])

    expect(UrlParser("hi www.google.com hello www.google.com")).toEqual([
      {
        url: "www.google.com",
        startIdx: 3,
        endIdx: 17
      },
      {
        url: "www.google.com",
        startIdx: 24,
        endIdx: 38
      }
    ])

    expect(UrlParser("hi www.google.com hello www.google.com   ")).toEqual([
      {
        url:"www.google.com",
        startIdx:3,
        endIdx:17,
      },
      {
        url:"www.google.com",
        startIdx:24,
        endIdx:38
      }
    ])
  })

})

describe("Search from Index", () => {

  it('should search a regex from a string', () => {
    expect(search('strr', /rr/)).toBe(2)
    expect(search('Foobar', /bar/)).toBe(3)
  })

  it("should search a regex starting at a certain index", () => {
    expect(search("rrstrrr", /rr/, 2)).toBe(4)
    expect(search("FooFee", /[A-Z]/, 1)).toBe(3)
    expect(search("FooFee", /[A-Z]/, 0)).toBe(0)
  })

  it('should return -1 if no match', () => {
    expect(search("adfafefawf", /r/)).toBe(-1);
    expect(search("adfafefawf", /r/, 7)).toBe(-1);
  })

})
