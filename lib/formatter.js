
export const hyphenRemoval = (text='') => {
  if(!text) return '';
  let returnText = text.replace(/-/g, ' ')
       returnText = returnText.replace(/_/g, ' ')
       return returnText
};

export const capitalizeWord = (word='') => {
        if(!word) return '';  
        return word.charAt(0).toUpperCase() + word.slice(1);
};
const numberFormats2 = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const numberFormats0 = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  export const numberFormatSmart = (amt) => {
    if (amt == null || isNaN(amt)) return;
  
    // Check if amt is a whole number
    const isWhole = amt % 1 === 0;
  
    return isWhole ? numberFormats0.format(amt) : numberFormats2.format(amt);
  };