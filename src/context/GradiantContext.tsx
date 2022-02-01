import React,{ createContext, useState } from "react";

export const GradiantContext = createContext({} as ContexProps)


interface ImageColors {
    primary: string,
    secondary : string
}

interface ContexProps {
    colors: ImageColors,
    prevColors:ImageColors,
    setMainColors : (colors_: ImageColors) => void
    setMainPrevColors : (colors_: ImageColors) =>void
}
export const GradiantProvider = ({children} :any)=>{

    const [colors, setColors] = useState<ImageColors>({
        primary:'transparent',
        secondary :'transparent'
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary:'transparent',
        secondary :'transparent'
    });

      const setMainColors = (colors: ImageColors) => { setColors(colors)}
      const setMainPrevColors = (colors: ImageColors) => { setPrevColors(colors)}

return ( 
    <GradiantContext.Provider 
    value={{
        colors,
        prevColors,
        setMainColors,
        setMainPrevColors
    }}>
        {children}
    </GradiantContext.Provider>
)

}