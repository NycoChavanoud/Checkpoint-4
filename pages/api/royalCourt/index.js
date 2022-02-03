import base from "../../../middlewares/common";
import royalCourt, {
  createMember,
  getMembers,
} from "../../../models/royalCourt";

const handleGetMembers = async (req, res) => {
  res.send(await royalCourt.getMembers());
};

async function handlePostMember(req, res) {
  const { name, role, baseLine, description, imageUrl } = req.body;
  res
    .status(201)
    .send(await createMember({ name, role, baseLine, description, imageUrl }));
}

export default base().post(handlePostMember).get(handleGetMembers);
