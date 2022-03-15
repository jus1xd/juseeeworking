import {model, Schema} from "mongoose";

export interface IProduct {
    _id: string
    title: string
    productPhoto: string
    downloadLink: string
    description: string
    previewPicture: Record<string, string>,
    fileFormat: string
    fileSize: string
    downloadSource: string
    unlockPassword: string
    downloadLinks: Record<string, string>,
    howToInstall: Record<string, string>,
    categories: string[]
    comments: IComment[]
}
export interface IComment {
    user : string
    text: string
}
const productModel = new Schema<IProduct> ( {
    title: {type: String, required: true},
    productPhoto: {type: String, required: true},
    description: {type: String, required: true},
    previewPicture: {
        firstPicture: {type: String, required: true},
        secondPicture: {type: String, required: true},
    },
    fileFormat: {type: String, required: true},
    fileSize: {type: String, required: true},
    downloadSource: {type: String, required: true},
    unlockPassword: {type: String, required: true},
    downloadLinks: {
        firstLink: {type: String, required: true},
        secondLink: {type: String, required: true},
    },
    howToInstall: {
        stepOne: {type: String, required: true},
        stepTwo: {type: String, required: true},
        stepThree: {type: String, required: true},
    },
    categories: {type: [String], required: true},
    comments: {type: [{} as IComment]}
} )

export default model ( "Product", productModel )