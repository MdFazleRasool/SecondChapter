import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-yellow-500 font-extrabold text-lg mb-3">LANDAS</h2>
          <p>대표이사 : 장창진</p>
          <p>사업자등록번호 : 201-86-15245</p>
          <p>서울특별시 중구 다산로 139 (랜드스빌딩) 6층</p>
          <p>통신판매업신고 : 중구 제0575호</p>
          <p>개인정보보호책임자 : 최주연</p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="font-bold text-white mb-2">대표 번호 및 AS 문의</p>
          <p className="text-2xl font-bold text-white">1661-6244</p>
          <p>평일 : 09:00 ~ 18:00</p>
          <p>기관 : 기업은행</p>
          <p>계좌번호 : 213-111127-04-035</p>
          <p>예금주 : (주)랜드스</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <div className="space-x-5">
            <a href="#" className="hover:text-yellow-400">개인정보처리방침</a>
            <a href="#" className="hover:text-yellow-400">이용약관</a>
          </div>
          <div className="flex space-x-4 mt-3">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        Copyright © WWW.ldsb2bmall.com All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
