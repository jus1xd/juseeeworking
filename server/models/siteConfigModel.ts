import {model, Schema} from "mongoose";

export interface ISiteConfig {
    _id : string
    siteLogo : string
    colors: Record<string, string>
    tof: Record<string, string>
    help: Record<string, string>
    categories: string[]
}

const siteConfigModel = new Schema<ISiteConfig> ( {
    colors: {
        headerColor: {type: String, required: true},
        underHeaderColor: {type: String, required: true},
        fontColorL: {type: String, required: true},
        backgroundColor: {type: String, required: true},
        blockBackgroundColor: {type: String, required: true},
        buttonColor: {type: String, required: true},
        buttonHoverColor: {type: String, required: true}
    },
    tof: {
        tofTitle: {type: String, required: true},
        description: {type: String, required: true}
    },
    help: {
        helpTitle: {type: String, required: true},
        imageLink: {type: String, required: true},
        firstBlock: {type: String, required: true},
        secondTextBlock: {type: String, required: true}
    },
    siteLogo : {type: String , required: true},
    categories: {type: [String], required: true}
} )

export default model ( "SiteConfig", siteConfigModel )