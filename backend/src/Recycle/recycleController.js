var userService = require('./recycleService');

var signUpUserControllerFn = async (req, res) =>
{
    try
    {
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);

        if(status){
            res.send({"status": true, "message": "User created successfully" })
        } else {
            res.send({"status": false, "message": "Error" });
        }
    }
    catch(err){
        console.log(err);
    }
}
