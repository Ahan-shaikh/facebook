const express = require("express");
const axios = require("axios");
const router = express.Router();


const APP_ID = '440573525271563';
const APP_SECRET = '6e7e33db97859798af4783dbac7420cb';
const REDIRECT_URI = 'http://localhost:3000/auth/facebook/callback';



router.get('/',(req,res)=>{
    console.log("log 1");
    res.render('login.ejs')
});

router.get('/auth/facebook',(req,res)=>{
    const url = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=email`;
    console.log('-----'+url);
    console.log("log 2");
    res.redirect(url);
})

router.get('/auth/facebook/callback',async(req,res)=>{
    console.log("log 3");
    const { code } = req.query;
    try {
        const { data }  =  await axios.get(`https://graph.facebook.com/v13.0/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`);

        const { access_token} =  data
    
        const { data:profile } = await axios.get(`https://graph.facebook.com/v13.0/me?fields=name,email&access_token=${access_token}`);
        console.log("Log 4")
        console.log(data);
        res.redirect('/');
        
    } catch (error) {
        console.error('Error',error.response.data.error);
        res.redirect('/logout')
    }
});


router.get('/logout',(req,res)=>{
    res.redirect('/logout')
})

module.exports = router;