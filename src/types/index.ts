export interface SiteMetaConfigType {
    title: string;
    slug: string;
    description: string;
    openGraphImage: string;
    footer: footerType;
}

export interface footerType {
    _ref: string;
    _type: string;
}

export interface ColorObject {
    brand: string;
    colorClass: string;
    _type: string;
    neutral: string;
    black: string;
    primary: string;
}

export interface fetchRefByDataType {
    document: string;
    ref: string;
    key: string;
    limit: string;
}