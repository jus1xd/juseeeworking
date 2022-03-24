export interface IComment {
    user: string
    text: string
}

export interface IProduct {
    _id?: string
    title: string
    productPhoto: string
    description: string
    previewPicture: Record<string, string>,
    fileFormat: string
    fileSize: string
    downloadLink : string
    downloadSource: string
    unlockPassword: string
    downloadLinks: Record<string, string>,
    howToInstall: Record<string, string>,
    categories: string[]
    comments?: IComment[]
}

export interface IProductProps {
    id?: string
    title: string
    categories: string[]
    description: string
    productPhoto: string
}