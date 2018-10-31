const router = require('express').Router();
const ElectionBody;

/*
Register an election body

*/
router.post('/register', (req,res)=>{

	//gets parameter from form field
	let {name, country, description, logo}=req.body;

	//creates new instance
	let electionBody = new ElectionBody({ 
		name: name,
		country: country,
		description: description,
		logo: logo||''
	});

	//saves the instance
	electionBody.save().then((electionBody)=>{
		res.send(electionBody);
	}).catch(err=> { //if error status code is 500
		res.status(500).send({
			error: err.message
		})
	});

})



/*
Get an election body
*/




/*
List election bodies
*/



/*
Edit election body
*/

/*
Delete an election body

*/