import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {

  en: {
    translation: {
      "REGISTER NOW": "REGISTER NOW",
      "CRAFTED BY": "CRAFTED BY",
      "LEAD DEVELOPER": "LEAD DEVELOPER",
      "IN COLLABORATION WITH": "IN COLLABORATION WITH",
      "SHOP": "SHOP",
      "Deals": "Deals",
      "Rewards": "Rewards",

      "STAY": "STAY",
      "Residential Developments": "Residential Developments",
      "Lodging": "Lodging",

      "LEASE": "LEASE",
      "Business Parks, Industrial & Logistics Spaces": "Business Parks, Industrial & Logistics Spaces",
      "Offices": "Offices",
      "Malls": "Malls",

      "INVEST": "INVEST",
      
      "MORE FROM CAPITALAND": "MORE FROM CAPITALAND",
      "Who We Are": "Who We Are",
      "CapitaLand Hope Foundation": "CapitaLand Hope Foundation",
      "Sustainability": "Sustainability",
      "Careers": "Careers",
      "Art @ CapitaLand": "Art @ CapitaLand",
      "Newsroom": "Newsroom",
      "Blog": "Blog",
      "Awards": "Awards",
      "Follow @CapitaLand on social!": "Follow @CapitaLand on social!",
      "API Portal": "API Portal",
      
      "Find a Property": "Find a Property",
      "Contact Us": "Contact Us",
      "Privacy Policy": "Privacy Policy",
      "Terms & Conditions": "Terms & Conditions",

      "Follow @CapitaLand": "Follow @CapitaLand",

      "We have used reasonable care in preparing this website and in constructing the model(s) and showflats. Please note, however, that neither our agents nor we will be held responsible for any inaccuracy in the contents of this website.Whilst we believe the contents of this website to be correct and accurate and correct at the time of publication, they are not to be regarded as statements or representations of fact. All information, specifications and plans hereincontained may be subjected to change from time to time by us and/or the competent authorities as may be required and do not form part of an offer or contract. Renderings, depictions and illustrations are artistic impressions.Photographs do not necessarily represent as-built standard specifications. Floor areas are approximate measurements and are subject to final survey. Likewise the model(s) and showflats are artistic impressions only and should not beconsidered as representation of fact.": "We have used reasonable care in preparing this website and in constructing the model(s) and showflats. Please note, however, that neither our agents nor we will be held responsible for any inaccuracy in the contents of this website.Whilst we believe the contents of this website to be correct and accurate and correct at the time of publication, they are not to be regarded as statements or representations of fact. All information, specifications and plans hereincontained may be subjected to change from time to time by us and/or the competent authorities as may be required and do not form part of an offer or contract. Renderings, depictions and illustrations are artistic impressions.Photographs do not necessarily represent as-built standard specifications. Floor areas are approximate measurements and are subject to final survey. Likewise the model(s) and showflats are artistic impressions only and should not beconsidered as representation of fact.",
        
      "Copyright ?? 2021 CapitaLand Limited. All Rights Reserved.": "Copyright ?? 2021 CapitaLand Limited. All Rights Reserved.",
      "Personal Information Protection Policy": "Personal Information Protection Policy",

      "Website Owner: CapitaLand-Thien Duc Company Limited": "Website Owner: CapitaLand-Thien Duc Company Limited",
      "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and": "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and",
      "Investment Ho Chi Minh City, 1st issued on 30 December 2009": "Investment Ho Chi Minh City, 1st issued on 30 December 2009",
      "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City": "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City",
      
    } 
  },
  vn: {
    translation: {
      "REGISTER NOW": "????NG K??",
      "CRAFTED BY": "PH??T TRI???N B???I",
      "LEAD DEVELOPER": "CH??? ?????U T?? CH??NH",
      "IN COLLABORATION WITH": "C??NG PH???I H???P V???I",
      "SHOP": "MUA S???M",
      "Deals": "Deals",
      "Rewards": "Trung t??m th????ng m???i",
      "STAY": "NH?? ???",
      "Residential Developments": "C??n h??? nh?? ???",
      "Lodging": "L??u Tr??",
      "LEASE": "THU?? M???T B???NG",
      "Business Parks, Industrial & Logistics Spaces": "Khu Ph???c H???p V??n Ph??ng Th????ng M???i, C??ng Nghi???p & V???n T???i",
      "Offices": "Trung t??m th????ng m???i",
      "Malls": "V??n ph??ng",
      "INVEST": "?????U T??",
      "MORE FROM CAPITALAND": "V??? CAPITALAND",
      "Who We Are": "V??? ch??ng t??i",
      "CapitaLand Hope Foundation": "Qu??? Thi???n Nguy???n CapitaLand Hope Foundation",
      "Sustainability": "B???n v???ng",
      "Careers": "Ngh??? nghi???p",
      "Art @ CapitaLand": "Tin T???c",
      "Newsroom": "Gi???i th?????ng",
      "Blog": "Blog",
      "Awards": "Awards",
      "Follow @CapitaLand on social!": "Theo d??i M???ng x?? h???i @CapitaLand!",
      "API Portal": "API Portal",
      "Find a Property": "T??m ki???m D??? ??n",
      "Contact Us": "Li??n H???",
      "Privacy Policy": "Ch??nh s??ch Ri??ng t??",
      "Terms & Conditions": "??i???u kho???n & ??i???u ki???n",
      "Follow @CapitaLand": "Theo d??i @CapitaLand",
      "We have used reasonable care in preparing this website and in constructing the model(s) and showflats. Please note, however, that neither our agents nor we will be held responsible for any inaccuracy in the contents of this website.Whilst we believe the contents of this website to be correct and accurate and correct at the time of publication, they are not to be regarded as statements or representations of fact. All information, specifications and plans hereincontained may be subjected to change from time to time by us and/or the competent authorities as may be required and do not form part of an offer or contract. Renderings, depictions and illustrations are artistic impressions.Photographs do not necessarily represent as-built standard specifications. Floor areas are approximate measurements and are subject to final survey. Likewise the model(s) and showflats are artistic impressions only and should not beconsidered as representation of fact.": "Ch??ng t??i ???? ?????c bi???t th???n tr???ng trong vi???c chu???n b??? n???i dung t??i li???u n??y c??ng nh?? c??c b???n m???u. Tuy nhi??n vui l??ng l??u ?? r???ng b???n th??n t???p ??o??n, c??ng nh?? c??c ?????i l?? b??n h??ng, s??? kh??ng ch???u tr??ch nhi???m cho nh???ng th??ng tin ch??a ch??nh x??c trong t??i li???u n??y. Tuy b???n th??n ch??ng t??i th???c s??? tin t?????ng r???ng nh???ng n???i dung d?????i ????y l?? ho??n to??n ch??nh x??c, nh??ng t??i li???u n??y s??? kh??ng mang t??nh ?????i di???n hay tr??? th??nh m???t tuy??n ng??n ri??ng. T???t c??? th??ng tin, nh???ng th??ng s??? ?????u c?? th??? s??? ???????c thay ?????i b???i ch??? ?????u t?? ho???c b???i c??c nh?? ch???c tr??ch c?? th???m quy???n, b???i v???y m?? ????y kh??ng th??? tr??? th??nh m???t ph???n c???a c??c h???p ?????ng hay ????? ngh???. C??c b???n v???, thi???t k??? hay h??nh ???nh ????? h???a s??? kh??ng ?????i di???n ch??nh x??c cho ??i???u ki???n x??y d???ng th???c t???. C??c khu v???c s??n ???????c ??o ?????c k?? l?????ng, c?? c??n c??? t??? c??c b???n b??o c??o. Trong khi ????, c??c h??nh ???nh ????? h???a c?? th??? kh??ng ph???n ??nh ho??n to??n ??i???u ki???n th???c t???.",
      "Copyright ?? 2021 CapitaLand Limited. All Rights Reserved.": "Quy???n s??? h???u ?? 2022 b???i CapitaLand",
      "Personal Information Protection Policy": "Ch??nh S??ch B???o V??? Th??ng Tin C?? Nh??n",
      "Website Owner: CapitaLand-Thien Duc Company Limited": "Website thu???c s??? h???u b???i C??ng Ty TNHH CAPITALAND ??? THI??N ?????C",
      "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and": "Gi???y ch???ng nh???n th??nh l???p s??? 0309710742, do S??? K??? ho???ch v?? ?????u t?? Th??nh ph???",
      "Investment Ho Chi Minh City, 1st issued on 30 December 2009": "H??? Ch?? Minh c???p ????ng k?? l???n ?????u ng??y 30/12/2009",
      "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City": "S??? 2, Phan V??n ????ng, ph?????ng Th???nh M??? L???i, Th??nh ph??? Th??? ?????c, Th??nh ph??? H??? Ch?? Minh, Vi???t Nam",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


  export default i18n;