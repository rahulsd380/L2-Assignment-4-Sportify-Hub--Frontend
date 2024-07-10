import React from "react";
import { teamProfileSocialMediaIcons } from "../Footer/footerConstants";

type TTeamCardProps = {
    img : string;
    name : string;
    role : string;
    description : string;
}

const TeamCard: React.FC<TTeamCardProps> = ({img, name, role, description}) => {
    return (
        <div className="bg-neutral-5 rounded-2xl p-5 flex gap-7 group transition duration-300">
          <div className="rounded-xl bg-gradient-to-r from-gray-100 to-gray-300 max-w-[150px] flex justify-center items-center group-hover:bg-gradient-to-r group-hover:from-indigo-100 group-hover:to-blue-200 transition duration-300">
            <img src={img} alt={name} className="w-full" />
          </div>
          <div>
            <h1 className="text-md md:text-xl font-bold text-primary-60">{name}</h1>
            <p className="text-[12px] text-neutral-55">{role}</p>
            <p className="text-xs md:text-sm text-neutral-55 mt-3">{description}</p>
            <div className="flex items-center gap-4 mt-4">
              {teamProfileSocialMediaIcons.map((icon, index) => (
                <a
                  href={icon.href}
                  target="_blank"
                  key={index}
                  style={{ backgroundColor: icon.bgColor }}
                  className="size-7 rounded-full flex justify-center items-center"
                >
                  <img src={icon.icon} alt="" className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
    );
};

export default TeamCard;