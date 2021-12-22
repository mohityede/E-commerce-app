import Product from "../models/product.js";

// get all products
export const getAllProducts = async(req, res) => {
    try{
        const allProducts = await Product.find();
        res.status(200).json({succes:true,allProducts});
    }catch(err){
        res.send(500).json({
            success:false,
            massage:err
        });
    }
}

// get one product
export const getProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                massage:"Product not found!"
            })
        }
        res.status(200).json({succes:true,product});
    }catch (err) {
        res.status(500).json({
            success:false,
            massage:err
        });
    }
}

// create product -- admin
export const createProduct = async(req, res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json({
            success:false,
            massage:err
        });
    }
}

// update product -- admin
export const updateProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                massage:"Product not found!"
            })
        }
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        res.status(200).json({succes:true,product});
    }catch (err) {
        res.status(500).json({
            success:false,
            massage:err
        });
    }
}

// delete product -- admin
export const deleteProduct = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                massage:"Product not found!"
            })
        }
        product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({succes:true,massage:"Product Deleted"});
    }catch (err) {
        res.status(500).json({
            success:false,
            massage:err
        });
    }
}