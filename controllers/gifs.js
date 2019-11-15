const pool = require("../models/queries");
const cloudinary = require("cloudinary").v2;                                               
const multipart = require("connect-multiparty");                        
const multipartMiddleware = multipart();


// let filename = req.files.dataFile.path; 
// cloudinary.uploader.upload(filename, { tags: "gotemps",resource_type: "auto" })
// 	.then(function (file) {
// 		console.log("Public id of the file is  " + file.public_id);                                 
// 		console.log("Url of the file is  " + file.url);
	
// 		template.dataFile=file.url;  //save the url to your model                            
// 		template.save(); //save the model as you have changed it                                  
// 		res.redirect("/templates");
// 	})
// 	.catch(function(err) {                                                        
// 		if (err) {
// 		 	console.warn(err);
// 		}                
// 	});
// 	res.redirect("/templates");
 



const postGif = (request, response) => {}

const getGifById = (request, response) => {}

const comment = (request, response) => {}

const updateGif = (request, response) => {}

const deleteGif = (request, response) => {}



module.exports = { 
	postGif,
	getGifById,
	comment,
	updateGif,
	deleteGif
}