var express = require("express");
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: "Liam",
    last: "Johnson",
    phone: "9175551001",
    email: "liam.johnson@example.com",
  },
  {
    id: 2,
    first: "Olivia",
    last: "Martinez",
    phone: "6465551002",
    email: "olivia.martinez@example.com",
  },
  {
    id: 3,
    first: "Noah",
    last: "Cohen",
    phone: "7185551003",
    email: "noah.cohen@example.com",
  },
  {
    id: 4,
    first: "Emma",
    last: "Goldberg",
    phone: "3475551004",
    email: "emma.goldberg@example.com",
  },
  {
    id: 5,
    first: "Aiden",
    last: "Kaplan",
    phone: "9295551005",
    email: "aiden.kaplan@example.com",
  },
  {
    id: 6,
    first: "Sophia",
    last: "Levine",
    phone: "9175551006",
    email: "sophia.levine@example.com",
  },
  {
    id: 7,
    first: "Mason",
    last: "Schwartz",
    phone: "6465551007",
    email: "mason.schwartz@example.com",
  },
  {
    id: 8,
    first: "Isabella",
    last: "Rosenberg",
    phone: "7185551008",
    email: "isabella.rosenberg@example.com",
  },
  {
    id: 9,
    first: "Ethan",
    last: "Weiss",
    phone: "3475551009",
    email: "ethan.weiss@example.com",
  },
  {
    id: 10,
    first: "Mia",
    last: "Friedman",
    phone: "9295551010",
    email: "mia.friedman@example.com",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layout", {
    title: "Contact List",
    contacts,
    noContacts: !contacts.length,
    partials: { content: "index.hjs" },
  });
});

router.get("/addContact", (req, res, next) => {
  res.render("layout", {
    title: "Add Contact",
    partials: { content: "add_edit_Contact.hjs" },
    buttonText: "Add",
  });
});

router.post("/addContact", (req, res, next) => {

  const newContact = {
    id: contacts.length + 1,
    ...req.body,
  };
  contacts.push(newContact);
  res.writeHead(301, {
    location: "/",
  });
  res.end();
});

router.post("/deleteContact/:id", (req, res, next) => {
  contacts = contacts.filter((c) => c.id !== +req.params.id);
  res.writeHead(301, {
    location: "/",
  });
  res.end();
});

router.get("/editContact/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const contact = contacts.find((c) => c.id === id);
  res.render("layout", {
    title: "Edit Contact",
    partials: { content: "add_edit_Contact.hjs" },
    contact: contact,
    buttonText: "Save",
  });
});

router.post("/editContact/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const contact = contacts.findIndex((c) => c.id === id);

  const newContact = {
    id,
    ...req.body,
  };
  contacts[contact] = newContact;
  res.redirect("/");
  res.end();
});

router.get("/api/contacts", (req, res, next) => {
  res.json(contacts);
});

router.get("/api/contacts/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const contact = contacts.find(c => c.id === id);
  if (!contact) {
  return  res.status(404).send({error:`Can not find contact with id ${req.params.id}`});

  }
  res.json(contact);
});


module.exports = router;
