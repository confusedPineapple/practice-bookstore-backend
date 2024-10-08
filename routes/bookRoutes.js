const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Book.find()
      .then((books) => res.json(books))
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route("/add")
    .post((req, res) => {
        const title = req.body.title;
        const author = req.body.author;

        // create a new Book object 
        const newBook = new Book({
            title,
            author,
        });


        // save the new object (newBook)
        newBook
            .save()
            .then(() => res.json("Book added!"))
            .catch((err) => res.status(400).json("Error: " + err));
    });

    router.route("/update/:id")
    .put((req, res) => {
        Book.findById(req.params.id)
            .then((book) => {
                book.title = req.body.title;
                book.author = req.body.author;

                book
                    .save()
                    .then(() => res.json("Book updated!"))
                    .catch((err) => res.status(400).json("Error: " + err));
            })
            .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id")
    .delete((req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.json("Book deleted."))
            .catch((err) => res.status(400).json("Error: " + err));
    });



    router.route('/:id').get((req, res) => {
        console.log('just id' + req.params.id);
        Book.findById(req.params.id)
          .then((book) => res.json(book))
          .catch((err) => res.status(400).json('Error: ' + err));
      });
      

module.exports = router;
