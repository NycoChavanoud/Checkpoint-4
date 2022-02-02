const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("membersCourt");

// function createMember(data) {
//   return collection.insertOne(data);
// }

function getMembers() {
  return collection
    .find()
    .toArray()
    .then((res) => res[0]);
}
const createMember = ({ name, role, baseLine, description, imageUrl }) => {
  return collection
    .insertOne({ name, role, baseLine, description, imageUrl })
    .then(({ insertedId }) => ({
      _id: insertedId,
      name,
      role,
      baseLine,
      description,
      imageUrl,
    }));
};

module.exports = {
  createMember,
  getMembers,
};
