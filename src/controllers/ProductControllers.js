import products from "../db/database.js";

// Obtener productos
export const getProducts = (req, res) => {
    res.json(products);
};

// Crear producto
export const createProduct = (req, res) => {
    const { name, description, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price: parseFloat(price),
        imageUrl: req.file ? req.file.path : null
    };

    products.push(newProduct);
    res.status(201).json({ message: "Producto creado", product: newProduct });
};
