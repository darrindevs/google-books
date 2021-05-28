# Google Books

Use the power of Google Books to search for your favorite books! 

[Deployed App](https://tranquil-crag-36037.herokuapp.com/)

## Technologies Used

⚛️ React - React is an open-source front-end JavaScript library for building user interfaces or UI components.

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

👢 Bootstrap - Build fast, responsive sites with Bootstrap. Quickly design and customize responsive mobile-first sites with Bootstrap.

📦 npm - npm is a package manager for the JavaScript programming language.

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

😺 GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet 

~~~
{this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)

