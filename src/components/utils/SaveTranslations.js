/**create array of translations */
const translations=[]
export function SaveTranslations(saveit){
    
    /**Remove last item if array is anylonger than then */
    if(translations.length>9){
        translations.pop();
    }

    /**unshift array to add items at the start of the array*/
    translations.unshift(saveit)
    return translations 
}