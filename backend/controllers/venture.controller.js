import { ID } from "node-appwrite";
import { databases } from "../app.js";


export const addVenture = async (req, res) => {
  const venture = req.body;
  console.log(req.body)
  console.log(venture)

//   try {
    
//   const response = await databases.createDocument(
//     "VenturesDB",
//     "venturesColl",
//     ID.unique(),
//     venture
//   );
//   console.log(response);
//   res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
}

export const getVentures = async (req, res) => {
    console.log("getVentures");
    const response = await databases.listDocuments("VenturesDB", "venturesColl");
    res.status(200).json(response.documents);
    console.log(response.documents);
}
