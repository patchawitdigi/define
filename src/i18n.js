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
        
      "Copyright © 2021 CapitaLand Limited. All Rights Reserved.": "Copyright © 2021 CapitaLand Limited. All Rights Reserved.",
      "Personal Information Protection Policy": "Personal Information Protection Policy",

      "Website Owner: CapitaLand-Thien Duc Company Limited": "Website Owner: CapitaLand-Thien Duc Company Limited",
      "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and": "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and",
      "Investment Ho Chi Minh City, 1st issued on 30 December 2009": "Investment Ho Chi Minh City, 1st issued on 30 December 2009",
      "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City": "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City",
      
    } 
  },
  vn: {
    translation: {
      "REGISTER NOW": "ĐĂNG KÍ",
      "CRAFTED BY": "PHÁT TRIỂN BỞI",
      "LEAD DEVELOPER": "CHỦ ĐẦU TƯ CHÍNH",
      "IN COLLABORATION WITH": "CÙNG PHỐI HỢP VỚI",
      "SHOP": "MUA SẮM",
      "Deals": "Deals",
      "Rewards": "Trung tâm thương mại",
      "STAY": "NHÀ Ở",
      "Residential Developments": "Căn hộ nhà ở",
      "Lodging": "Lưu Trú",
      "LEASE": "THUÊ MẶT BẰNG",
      "Business Parks, Industrial & Logistics Spaces": "Khu Phức Hợp Văn Phòng Thương Mại, Công Nghiệp & Vận Tải",
      "Offices": "Trung tâm thương mại",
      "Malls": "Văn phòng",
      "INVEST": "ĐẦU TƯ",
      "MORE FROM CAPITALAND": "VỀ CAPITALAND",
      "Who We Are": "Về chúng tôi",
      "CapitaLand Hope Foundation": "Quỹ Thiện Nguyện CapitaLand Hope Foundation",
      "Sustainability": "Bền vững",
      "Careers": "Nghề nghiệp",
      "Art @ CapitaLand": "Tin Tức",
      "Newsroom": "Giải thưởng",
      "Blog": "Blog",
      "Awards": "Awards",
      "Follow @CapitaLand on social!": "Theo dõi Mạng xã hội @CapitaLand!",
      "API Portal": "API Portal",
      "Find a Property": "Tìm kiếm Dự án",
      "Contact Us": "Liên Hệ",
      "Privacy Policy": "Chính sách Riêng tư",
      "Terms & Conditions": "Điều khoản & Điều kiện",
      "Follow @CapitaLand": "Theo dõi @CapitaLand",
      "We have used reasonable care in preparing this website and in constructing the model(s) and showflats. Please note, however, that neither our agents nor we will be held responsible for any inaccuracy in the contents of this website.Whilst we believe the contents of this website to be correct and accurate and correct at the time of publication, they are not to be regarded as statements or representations of fact. All information, specifications and plans hereincontained may be subjected to change from time to time by us and/or the competent authorities as may be required and do not form part of an offer or contract. Renderings, depictions and illustrations are artistic impressions.Photographs do not necessarily represent as-built standard specifications. Floor areas are approximate measurements and are subject to final survey. Likewise the model(s) and showflats are artistic impressions only and should not beconsidered as representation of fact.": "Chúng tôi đã đặc biệt thận trọng trong việc chuẩn bị nội dung tài liệu này cũng như các bản mẫu. Tuy nhiên vui lòng lưu ý rằng bản thân tập đoàn, cũng như các đại lý bán hàng, sẽ không chịu trách nhiệm cho những thông tin chưa chính xác trong tài liệu này. Tuy bản thân chúng tôi thực sự tin tưởng rằng những nội dung dưới đây là hoàn toàn chính xác, nhưng tài liệu này sẽ không mang tính đại diện hay trở thành một tuyên ngôn riêng. Tất cả thông tin, những thông số đều có thể sẽ được thay đổi bởi chủ đầu tư hoặc bởi các nhà chức trách có thẩm quyền, bởi vậy mà đây không thể trở thành một phần của các hợp đồng hay đề nghị. Các bản vẽ, thiết kế hay hình ảnh đồ họa sẽ không đại diện chính xác cho điều kiện xây dựng thực tế. Các khu vực sàn được đo đạc kĩ lưỡng, có căn cứ từ các bản báo cáo. Trong khi đó, các hình ảnh đồ họa có thể không phản ánh hoàn toàn điều kiện thực tế.",
      "Copyright © 2021 CapitaLand Limited. All Rights Reserved.": "Quyền sở hữu © 2022 bởi CapitaLand",
      "Personal Information Protection Policy": "Chính Sách Bảo Vệ Thông Tin Cá Nhân",
      "Website Owner: CapitaLand-Thien Duc Company Limited": "Website thuộc sở hữu bởi Công Ty TNHH CAPITALAND – THIÊN ĐỨC",
      "Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and": "Giấy chứng nhận thành lập số 0309710742, do Sở Kế hoạch và Đầu tư Thành phố",
      "Investment Ho Chi Minh City, 1st issued on 30 December 2009": "Hồ Chí Minh cấp đăng ký lần đầu ngày 30/12/2009",
      "Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City": "Số 2, Phan Văn Đáng, phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
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