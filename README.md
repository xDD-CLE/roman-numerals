# xDD Cleveland

Join us on Meetup!
http://www.meetup.com/xDD-CLE/

## Roman Numerals Kata

### What is a Roman Numeral?

The Romans wrote their numbers with I, V, X, L, C, D, M. The straight lines made them easy to carve into stone. 

Each character has a value:

```
I  -->  1
V  -->  5
X  -->  10
L  -->  50
C  -->  100
D  -->  500
M  -->  1000
```

The numerals can also be combined to create numbers like so:

```
II      -->  2
IIII    -->  4
VI      -->  6
LXVI    -->  66
XVIIII  -->  19
```

### The Kata

Your task is to create a function to convert numbers into roman numerals. The goal here is to practice TDD, so follow these steps.

1. Write a failing test for the simplest case.
2. Make the test pass.
3. Shape the code with another failing test.
4. Make that test pass, too.
5. Refactor your code using your tests as a regression suite.
6. Repeat steps 3-5 until a solution has emerged naturally!

**Some tips!**

- Always start by thinking about the design of your code.
- Write the code you wish you had, then build it!
- Write the simplest code you can to make each test pass.
- Avoid creating abstractions until you've learned as much as you can about the problem.
- Favor duplication until the abstractions become clear.
- Don't write any "I'm going to need this later" logic. If you need it, then write a test to describe it first.

### Extra Credit

1. Try to write the code without conditionals!
2. Refactor your code into the most elegant or terse solution you can. This *MAY NOT* produce the most ideal solution for maintainability, but you will be able to see the trade offs, and you might learn about a new library function!
3. Write a function to convert roman numeral strings into numbers
4. Write functions for conversions using '[subtractive notation](https://en.wikipedia.org/wiki/Subtractive_notation)'. This means that instead of writing `IIII` you write `IV`.

## Using This Repository

We've provided starting places for the following languages. They include a sample "prove the world exists" test. Feel free to delete that as you develop your test suite.

### Ruby

#### Requirements
- Ruby
  - [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - Optional
    - [rbenv](https://github.com/rbenv/rbenv)
    - [rvm](https://rvm.io/)
- Bundler
  - `gem install bundler`

#### How To
1. Navigate to the ruby directory
2. `bundle install`
3. Add tests under spec
4. Add code under lib
5. Run tests: `rspec`

### JavaScript

#### Requirements
- Node.js + NPM
  - [Install Node.js](https://nodejs.org/en/download/package-manager/)
  - Optional
    - [nodenv](https://github.com/nodenv/nodenv)
    - [nvm](https://github.com/creationix/nvm)

#### How To
1. Navigate to the javascript directory
2. `npm install`
3. Add tests under test
4. Add code under lib
5. Run tests: `npm test`

### Elixir

#### Requirements
- Elixir
  - [Install Elixir](http://elixir-lang.org/install.html#distributions)

#### How To
1. Navigate to the elixir directory
2. `mix compile`
3. Add tests under test
4. Add code under lib
5. Run tests: `mix test`

## More Learning

- [Happier TDD with testdouble.js](http://blog.testdouble.com/posts/2016-06-05-happier-tdd-with-testdouble-js.html)
- [My favorite way to TDD](http://blog.testdouble.com/posts/2015-09-10-how-i-use-test-doubles.html)
- [5 Common Misconceptions About TDD & Unit Tests](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9#.i5t7oo4l6)
- [Arrange Act Assert](http://c2.com/cgi/wiki?ArrangeActAssert)
