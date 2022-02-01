import ImageColors from "react-native-image-colors"

 const getImageColors = async (uri : string )=>{
    const colors = await ImageColors.getColors(uri,{})
    let primary;
    let secondary;
    if(colors.platform == 'android'){
        primary = colors.dominant
        secondary = colors.average
    }
    return [primary,secondary]
}
export default getImageColors
