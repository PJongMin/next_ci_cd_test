import React from "react";
import { FiMusic } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";

const CategoryMenu = ({ icon, label }) => {
  return (
    <div className="flex h-[56px] w-full cursor-pointer flex-row items-center gap-4 rounded-sm bg-neutral-700 px-[24px] py-4 text-[20px] transition hover:bg-neutral-800">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      <CategoryMenu label={"최신음악"} icon={<FiMusic color="#AAAAAA" />} />
      <CategoryMenu label={"차트"} icon={<FiBarChart color="#AAAAAA" />} />
      <CategoryMenu
        label={"분위기 및 장르"}
        icon={<FiSmile color="#AAAAAA" />}
      />
    </div>
  );
};

export default Category;
