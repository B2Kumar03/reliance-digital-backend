import Product from "../models/product.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const productGet = asyncHandler(async (req, res) => {
    const { category } = req.query;
   
    if (!category) {
        return res.status(400).json({ message: "Category is required" });
    }

    try {
        const products = await Product.find({ category });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found in this category" });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


const getProjectWithId = asyncHandler(async (req, res) => {
    const { id } = req.query;
    console.log(id);
    if (!id) {
        return res.status(400).json({ message: "Project ID is required" });
    }

    try {
        const project = await Product.findById(id);
       

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default getProjectWithId;


const getProjectwithId=asyncHandler(async(req,res)=>{

})

export { productGet,getProjectWithId};
