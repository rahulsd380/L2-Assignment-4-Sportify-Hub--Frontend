import { socialMediaIcons } from './footerConstants';

const SocialMediaILinks = () => {
    return (
        <div className="flex items-center gap-4">
            {socialMediaIcons.map((icon, index) => (
              <a
                href={icon.href}
                target="blank"
                key={index}
                style={{ backgroundColor: icon.bgColor }}
                className={`size-7 xl:size-10 rounded-full flex justify-center items-center`}
              >
                <img src={icon.icon} alt="" className="size-3 xl:size-6" />
              </a>
            ))}
          </div>
    );
};

export default SocialMediaILinks;