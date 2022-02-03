const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("membersCourt");

// function createMember(data) {
//   return collection.insertOne(data);
// }

async function getMembers() {
  return await collection.find().toArray();
}

async function getOneMember(memberId) {
  const member = await collection.find({ _id: ObjectId(memberId) }).next();
  return member;
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
  getOneMember,
};
