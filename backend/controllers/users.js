import { prisma } from "../dbConfing/db.js";
export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users });
};
export async function addUser(req, res) {
  const data = req.body;
  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    },
  });

  res.status(200).json({
    status: "success",
    data: user,
  });
}
