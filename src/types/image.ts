export interface IImage {
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    id:string;
}

export interface IApprovedImage extends IImage {}
