import ProductService from "../services/productService";

class ProductsController {
    async create ( req, res ) {
        try {
            const product = await ProductService.create ( req.body.product );
            res.status ( 200 ).json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getByCategory ( req, res ) {
        try {
            const products = await ProductService.getByCategory ( req.params.category );
            return res.json ( products );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getAll ( req, res ) {
        try {
            const products = await ProductService.getAll ();
            return res.json ( products );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getOne ( req, res ) {
        try {
            const product = await ProductService.getOne ( req.params.id );
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async update ( req, res ) {
        try {
            const updatedProduct = await ProductService.update ( req.body );
            return res.json ( updatedProduct );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }

    async delete ( req, res ) {
        try {
            const product = await ProductService.delete ( req.params.id );
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }

    async addComment ( req, res ) {
        try {
            const product = await ProductService.addComment ( req.params.id, req.body )
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }
    async deleteComment ( req, res ) {
        try {
            const product = await ProductService.deleteComment ( req.params.id, req.body )
            return res.json ( product );
        } catch (e) {
            res.status ( 500 ).json ( e.message );
        }
    }
}

export default new ProductsController ();