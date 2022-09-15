const router= require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    }catch (err){
      res.status(500).json(err);
    }
  });

  //update a post
router.put("/:id", async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        if(req.body.userId === post.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("The post has been updated");
        }
        else
        {res.status(403).json("You are not authorized to make an update");}
    }
    
    catch(err)
    {res.status(500).json(err);}
});

//delete post
router.delete("/:id", async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        if(req.body.userId === post.userId){
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        }
        else
        {res.status(403).json("You are not authorized to delete this post");}
    }catch(err)
    {console.log("here");res.status(500).json(err);}
});

//like and dislike a post
router.put("/:id/like",async(req, res)=>{
    try{
        const post= await Post.findById(req.params.id);
        console.log(post);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{ likes: req.body.userId}});
            res.status(200).json("Post has been liked");
        }
        else
        {
            await post.updateOne({$pull:{ likes: req.body.userId}});
            res.status(200).json("Post has been disliked");
        }
    }catch(err)
    {res.status(500).json("error while liking");}
});

//love and unlove a post
router.put("/:id/love",async(req, res)=>{
    try{
        const post= await Post.findById(req.params.id);
        console.log(post);
        if(!post.loves.includes(req.body.userId)){
            await post.updateOne({$push:{ loves: req.body.userId}});
            res.status(200).json("Post has been loved");
        }
        else
        {
            await post.updateOne({$pull:{ loves: req.body.userId}});
            res.status(200).json("Post has been unloved");
        }
    }catch(err)
    {res.status(500).json("error while loving");}
});

//get a post
router.get("/:id", async (req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err)
    {
        res.status(500).json("Error while loading the post");
    }
});

//get timeline posts
router.get("/timeline/:userId", async (req,res) =>{
    try{
console.table(req.query);

        const isHome=  req.query.isHome === "true"? true: false;
        //Test
      /*  console.log('Jawek brhi');
        res.status(200).json({"message" : 'All good'});  
        return;*/
        //Test
        currentUser= await User.findById(req.params.userId);

        const userPosts= await Post.find({userId: currentUser._id});
 
        if(isHome===true)
        {
        const friendsPosts= await Promise.all(
            currentUser.following.map((friendId)=> {
                return Post.find({userId: friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendsPosts));    
    }
    else        
        res.status(200).json(userPosts);
        

    }catch(err){
        res.status(500).json(err);
    }
    
});


module.exports= router;