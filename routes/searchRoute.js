import express from "express";
import Restaurant from "../models/Restaurant.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Restaurant.find();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(504).json(e);
  }
});
router.get("/:id", async(req, res) => {
    try {
        const result = await Restaurant.findById(req.params.id).lean()
       return res.status(200).json(result)
    } catch (e) {
        return res.status(504).json(e);
    }
})
//task9
router.get("/name/name", async (req, res) => {
    const name = req.query.name;
    console.log('name',name);
    
  try {
    const result = await Restaurant.find({ name: name }).lean();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(504).json(e);
  }
});

export default router;