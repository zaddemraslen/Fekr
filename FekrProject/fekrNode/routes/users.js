const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {

  console.log("req.body._id", req.body._id, "\nreq.params.id", req.params.id, "\nreq.body.isAdmin", req.body.isAdmin);  
  if (req.body._id === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      await User.findByIdAndUpdate(req.body._id,
        req.body);
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {

    console.log("req.body._id", req.body._id, "\nreq.params.id", req.params.id, "\nreq.body.isAdmin", req.body.isAdmin);  
    if (req.body._id === req.params.id || req.body.isAdmin) {
      
      try {
        await User.findByIdAndDelete(req.body._id)
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  });
//http://localhost:8800/api/users/62de127bc240aea62cf58abd
//get a user
router.get("/", async (req, res)=>{
  const userId= req.query.userId  ;
  const username= req.query.username  ;
  try{
        const user= userId? await User.findById(userId): await User.findOne({username: username}) ;
        const {password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
});
  
//follow a user
router.put("/:id/follow", async (req, res)=>
{
    if(req.body._id !== req.params.id)
    {
        try{
            const user= await User.findById(req.params.id);
            const currentUser= await User.findById(req.body._id);

            if(!user.followers.includes(req.body._id))
            {
                await user.updateOne({$push:{followers: req.body._id}});
                await currentUser.updateOne({$push:{following: req.params.id}});

                res.status(200).json("User has been followed");
            }
            else{
                res.status(403).json("You are already following this person ");
            }

        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("following realtionship is not reflexive !");
    }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res)=>
{
    if(req.body._id !== req.params.id)
    {
        try{
            const user= await User.findById(req.params.id);
            const currentUser= await User.findById(req.body._id);

            if(user.followers.includes(req.body._id))
            {
                await user.updateOne({$pull:{followers: req.body._id}});
                await currentUser.updateOne({$pull:{following: req.params.id}});

                res.status(200).json("User has been unfollowed");
            }
            else{
                res.status(403).json("You are not already following this person ");
            }

        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("unfollowing realtionship is not reflexive !");
    }
});


module.exports = router