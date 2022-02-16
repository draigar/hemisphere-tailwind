import { ColorObject, fetchRefByDataType } from "@web/types";
import urlFor from "./imageUrlGenerator";
import videoAssetFor from "./video-url";
import fetchRefByData from '../hooks/useActions';

export const utilities = {
    ImageFn(ImageAsset: string) {
        const imageAsset = ImageAsset && urlFor(ImageAsset).url()
        return imageAsset;
    },
    ColorCombo(_color: ColorObject) {        
        const colorClass = _color?.colorClass;
        const brand = _color?.brand;
        const neutral = _color?.neutral;
        const black = _color?.black;
        const primary = _color?.primary;
        const colors =
            colorClass === 'brand'
                ? `bg-brand-${brand}`
                : colorClass === 'neutral'
                    ? `bg-neutral-${neutral}`
                    : colorClass === 'primary'
                        ? `bg-primary-${primary}`
                        : colorClass === 'black'
                            ? `bg-black-${black}`
                            : 'bg-white';

        return colors;
    },
    VideoFn(VideoAsset: any) {
        const videoAsset = videoAssetFor(VideoAsset)
        return videoAsset;
    },
    ButtonColorFn(_color: ColorObject) {
        const colorClass = _color?.colorClass;
        const brand = _color?.brand;
        const neutral = _color?.neutral;
        const black = _color?.black;
        const primary = _color?.primary;
        const colors =
            colorClass === 'brand'
                ? `brand-${brand} hover:bg-primary-800`
                : colorClass === 'neutral'
                    ? `neutral-${neutral} hover:bg-neutral-hover`
                    : colorClass === 'primary'
                        ? `primary-${primary}`
                        : colorClass === 'black'
                            ? `black-${black} ${black === '1' ? 'hover:bg-black-2' : 'hover:bg-black-1'}`
                            : 'white hover:bg-black hover:bg-opacity-25';

        return colors;
    },
    async getRef(refObject: fetchRefByDataType) {
        const res = await fetchRefByData(refObject)
        return res
    }
}