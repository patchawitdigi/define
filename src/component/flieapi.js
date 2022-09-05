const apiurl = process.env.REACT_APP_LINK_NAME
const newsList = `${apiurl}/news/list.php`;
const homeGallery = `${apiurl}/homeGallery/list.php`;
const galleryArt = `${apiurl}/gallerieDArt/list.php`;

export{newsList, homeGallery, galleryArt}