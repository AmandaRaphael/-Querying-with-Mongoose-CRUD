import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();


router.patch("/:id", async (req, res) => {
    try {
        await Restaurant.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
        });
        return res.send("Updated")
    } catch (error) {
        return res.send(error)
    }
})

router.patch("/cuisine/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndUpdate(req.params.id, {
      cuisine: req.body.cuisine,
    });
    return res.send("Updated");
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/location/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndUpdate(req.params.id, {
        address: req.body.address,
        borough:req.body.borough
    });
    return res.send("Updated");
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/grades/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndUpdate(req.params.id, {
      grades: req.body.grades
     
    });
    return res.send("Updated");
  } catch (error) {
    return res.send(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    return res.send("Deleted");
  } catch (error) {
    return res.send(error);
  }
});
export default router;