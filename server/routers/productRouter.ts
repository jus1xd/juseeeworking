import Router from "express";
import ProductController from "../controllers/productController";
import {adminMiddleware} from "../middleware/adminMiddleware";

const productRouter = Router ();

productRouter.post ( "/products", adminMiddleware, ProductController.create );
productRouter.get ( "/products", ProductController.getAll );
productRouter.get ( "/product/:id", ProductController.getOne );
productRouter.post ( "/products/:id", ProductController.addComment )
productRouter.delete ( "/products/:id", adminMiddleware, ProductController.deleteComment )
productRouter.get ( "/products/:category", ProductController.getByCategory );
productRouter.put ( "/products", adminMiddleware, ProductController.update );
productRouter.delete ( "/product/:id", adminMiddleware, ProductController.delete );

export default productRouter;