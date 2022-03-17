import productModel, {IComment, IProduct} from "../models/productModel";
import ProductModel from "../models/productModel";

class ProductService {
    async create ( product: IProduct ) {
        return await productModel.create ( product );
    }

    async getAll () {
        return productModel.find ();
    }

    async getByCategory ( category: string ) {
        return productModel.find ( {categories: {$all: [category]}} )
    }

    async getOne ( id: string ) {
        const product = await productModel.findById ( id );
        if (!id) {
            throw new Error ( "Id не указан" );
        }
        return product;
    }

    async update ( product: IProduct ) {
        if (!product._id) {
            throw new Error ( "Id не указан" );
        }
        return productModel.findByIdAndUpdate ( product._id, product, {new: true} );
    }

    async delete ( id: string ) {
        if (!id) {
            throw new Error ( "не указан ID" );
        }
        return productModel.findByIdAndDelete ( id );
    }

    async addComment ( id: string, comment ) {
        const product = await ProductModel.findById ( id )
        product.comments.push ( comment )
        return productModel.findByIdAndUpdate ( product._id, product, {new: true} );
    }

    async deleteComment ( id: string, comment: IComment ) {
        const product = await ProductModel.findById ( id )
        product.comments = product.comments.filter ( item => item.text != comment.text )
        return productModel.findByIdAndUpdate ( product._id, product, {new: true} );
    }
}

export default new ProductService ();