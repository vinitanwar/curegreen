export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-') 
      .replace(/^-+|-+$/g, '');   
  };
  