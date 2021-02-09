const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    // res.status(400).send('Create product failed');
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  //
  let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate("category")
    .populate("subs")
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(products);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).send("Product delete failed");
  }
};

// exports.list = async (req, res) => {
//     //
//     //sort by latest created category
//     res.json(await Category.find({}).sort({createdAt: -1}).exec());
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
