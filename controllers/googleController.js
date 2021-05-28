// ✅
const axios = require("axios");
const db = require("../models");

module.exports = {
  // search the google api
  findAll: async (req, res) => {
    try {
      const { query: params } = req;

      const results = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        { params }
      );

      https://www.googleapis.com/books/v1/volumes?

      const apiBooks = await results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );

      // get all book from db
      const dbBooks = await db.Book.find();

      // filter saved books from axios get request
      const books = await apiBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );

      // Send books which are not saved in database
      return res.json(books);
    } catch (error) {
      return res.status(422).json(error);
    }
  },
};
