const notFound = (req,res)=>
{
    return res.status(404).send("Given Function is not found!")
}

module.exports = notFound;