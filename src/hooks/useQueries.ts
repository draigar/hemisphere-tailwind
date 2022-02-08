import { getRefByData, routeQuery, siteConfig } from '../lib/sanity/queries';
import { useMutation, useQuery } from 'react-query';

export const useQueries = () => {

    const getDataIndex = (type: string, data: any) => {
        const dt = data;
        const names = dt?.map((el: any) => el.type);
        return names?.indexOf(type);
    };

    const fetchSlugFor = useMutation(async (Items: {}) => {
        try {
            const val: any = Items;
            const mData = []
            // console.log('fetchSlugFor', val);
            for (let i = 0; i < val.length; i++) {
                const el = val[i];
                const title = el.navName;
                const ref = el.navigationItemUrl.internalLink._ref
                const sl = `*[_type == "page" && _id == "${ref}"]{"slug": slug.current}`
                const _url = encodeURIComponent(sl)
                const _query = `https://srlxc0y4.api.sanity.io/v1/data/query/production?query=${_url}`
                const _val = await fetch(_query).then((r) => r.json())
                const slug = _val.result[0].slug
                const payload = {
                    title,
                    slug,
                }
                mData.push(payload)
            }
            return mData
        } catch (e) {
            
        }
    })
    const fetchSiteConfig = useQuery(
        ['fetchSiteConfig'],
        async () => {
            try {
                const getItems = siteConfig()
                const encodedNavItems = encodeURIComponent(getItems)
                const ItemsQuery = `https://srlxc0y4.api.sanity.io/v1/data/query/production?query=${encodedNavItems}`
                const ItemsVal: any = await fetch(ItemsQuery).then((res) => res.json());
                const val = ItemsVal.result
                return val
            } catch (e) {
                throw e;
            }
        },
        {
            onSuccess: val => {
                return val
            }
        }
    )
    const fetchRefByData = useMutation(async (data: {
        document: string;
        ref: string;
        key: string;
        limit: string;
    }) => {
        try {
            const {document, ref, key, limit} = data;
            const getItems = getRefByData(document, key, ref, limit)
            const encodedNavItems = encodeURIComponent(getItems)
            const ItemsQuery = `https://srlxc0y4.api.sanity.io/v1/data/query/production?query=${encodedNavItems}`
            const ItemsVal: any = await fetch(ItemsQuery).then((res) => res.json());
            return ItemsVal.result;
        } catch (e) {
            
        }
    })
    return { fetchSlugFor, fetchSiteConfig, fetchRefByData }
}