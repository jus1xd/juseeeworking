import adminModel from "../models/adminModel";
import {ApiError} from "../exceptions/apiError";

export const adminMiddleware = async ( req, res, next ) => {
    try {
        const admin = await adminModel.findOne( {username: req.headers.adminusername} )
        if (!admin) {
            return next ( ApiError.AdminAuthError () )
        }
        next ()
    } catch (e) {
        return next ( ApiError.AdminAuthError () )
    }
}