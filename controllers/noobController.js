// IMPORTS
let noobs = require("../noobs"); //dummy data - (LET) to allow changing
const slugify = require("slugify"); // To generate slugs

// CONTROLLERS
//------------- noobs list
exports.noobList = (req, res) => {
  res.json(noobs);
};

//------------- Create noob
exports.noobCreate = (req, res) => {
  const id = noobs[noobs.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newNoob = { id, slug, ...req.body }; // id, slug are equivalent to id: id, slug: slug
  noobs.push(newNoob);
  res.status(201).json(newNoob);
};

//------------- Delete noob
exports.noobDelete = (req, res) => {
  const { noobId } = req.params;
  const foundNoob = noobs.find((noob) => noob.id === +noobId);
  if (foundNoob) {
    noobs = noobs.filter((noob) => noob !== foundNoob);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Noob not found" });
  }
};

//------------- Update noob
exports.noobUpdate = (req, res) => {
  const { noobId } = req.params;
  const foundNoob = noobs.find((noob) => noob.id === +noobId);
  if (foundNoob) {
    for (const key in req.body) foundNoob[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Noob not found" });
  }
};
