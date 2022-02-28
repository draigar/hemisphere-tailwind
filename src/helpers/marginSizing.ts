const MarginSizing = (margin: any) => {
    const type = margin?.type
    const marginsize = margin?.marginsize?.size

    const _sizeTop = `${marginsize === 'md' ? 'mt-12' :
    marginsize === 'lg' ? 'mt-14' : marginsize === 'xl' ? 'mt-16'
        : marginsize === 'sm' ? 'mt-7' :
        marginsize === 'xs' ? 'mt-7' : marginsize === 'xxs' ? 'mt-5' :
        marginsize === 'xxl' ? 'mt-20' : 'mt-2.5'}`

        const _sizeSide = `${marginsize === 'md' ? 'px-12' :
    marginsize === 'lg' ? 'px-14' : marginsize === 'xl' ? 'px-16'
        : marginsize === 'sm' ? 'px-10' : 
        marginsize === 'xs' ? 'px-7' : marginsize === 'xxs' ? 'px-5' :
        marginsize === 'xxl' ? 'px-20' : 'px-2.5'}`

        const _sizeTopSide = `${marginsize === 'md' ? 'mt-12 mx-12' :
    marginsize === 'lg' ? 'mt-14 mx-14' : marginsize === 'xl' ? 'mt-16 mx-16'
        : marginsize === 'sm' ? 'mt-10 mx-10' :
        marginsize === 'xs' ? 'mt-7 mx-7' : marginsize === 'xxs' ? 'mt-5 mx-5' :
        marginsize === 'xxl' ? 'mt-20 mx-20' : 'mt-2.5 mx-2.5'}`

        const _sizeBottomSide = `${marginsize === 'md' ? 'mb-12 mx-12' :
    marginsize === 'lg' ? 'mb-14 mx-14' : marginsize === 'xl' ? 'mb-16 mx-16'
        : marginsize === 'sm' ? 'mb-10 mx-10' :
        marginsize === 'xs' ? 'mb-7 mx-7' : marginsize === 'xxs' ? 'mb-7 mx-5' :
        marginsize === 'xxl' ? 'mb-20 mx-20' : 'mb-2.5 mx-2.5'}`

        const _sizeBottom = `${marginsize === 'md' ? 'mb-12' :
    marginsize === 'lg' ? 'mb-14' : marginsize === 'xl' ? 'mb-16'
        : marginsize === 'sm' ? 'mb-10' :
        marginsize === 'xs' ? 'mb-7' : marginsize === 'xxs' ? 'mb-5' :
        marginsize === 'xxl' ? 'mb-20' : 'mb-2.5'}`

    const mSize = type === 'top' ? _sizeTop : type === 'side' ? _sizeSide 
    : type === 'topandside' ? _sizeTopSide : type === 'buttomandside' ? _sizeBottomSide : _sizeBottom

        return mSize

}

export default MarginSizing