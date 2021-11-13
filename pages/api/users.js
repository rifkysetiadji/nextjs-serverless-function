// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const users = [{ id: 1,name:"Rifky" }, { id: 2,name:"Ahmad" }, { id: 3,name:"Messi" }]
export default function handler(req, res) {
  res.status(200).json(users)
}
