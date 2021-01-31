const Product = require('../models/product')
const slugify = require('slugify');

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const newProduct = await new Product(req.body).save();
        res.json(newProduct);
    } catch (err) {
        // console.log(err)
        res.status(400).send('Create product failed')
    }
};

// exports.list = async (req, res) => {
//     //
//     //sort by latest created category
//     res.json(await Category.find({}).sort({createdAt: -1}).exec());
// };

// exports.read = async (req, res) => {
//     //
//     let category = await Category.findOne({slug: req.params.slug}).exec();
//     res.json(category);
// };

// exports.update = async (req, res) => {
//     //
//     const {name} = req.body;
//     try {
//         const updated = await Category.findOneAndUpdate(
//             {slug: req.params.slug}, 
//             {name, slug: slugify(name)}, 
//             // {useFindAndModify: false},
//             {new: true}
//             );
//             res.json(updated);   
//         } catch(err) {
//             res.status(400).send('Category Update failed');
//         }
//     };


// exports.remove = async (req, res) => {
//     try {
//       const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
//       res.json(deleted);
//     } catch (err) {
//       res.status(400).send("Category delete failed");
//     }
// };