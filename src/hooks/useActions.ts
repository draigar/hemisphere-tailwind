import { fetchRefByDataType } from '@web/types';
import { getRefByData } from '../lib/sanity/queries';

const fetchRefByData = async (data: fetchRefByDataType) => {
    try {
        const {document, ref, key, limit} = data;
        const getItems = getRefByData(document, key, ref, limit)
        const encodedNavItems = encodeURIComponent(getItems)
        const ItemsQuery = `https://srlxc0y4.api.sanity.io/v1/data/query/production?query=${encodedNavItems}`
        const ItemsVal: any = await fetch(ItemsQuery).then((res) => res.json());
        return ItemsVal.result;
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export default fetchRefByData