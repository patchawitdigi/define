const apiurl = process.env.REACT_APP_LINK_NAME
const newsList = `${apiurl}/news/list.php`;
const homeGallery = `${apiurl}/homeGallery/list.php`;

export{newsList, homeGallery}