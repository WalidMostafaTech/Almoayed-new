import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const SectionTitle = ({
  title,
  subtitle,
  description,
  link,
  linkName,
  icon = true,
  wide = false,
}) => {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">
      <hgroup
        className={`${wide ? "max-w-2xl" : "max-w-lg"} space-y-2 lg:space-y-4`}
      >
        {description && <p className="text-myGold">{description}</p>}
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold capitalize">{title}</h2>
        )}
        {subtitle && <p>{subtitle}</p>}
      </hgroup>

      {linkName && (
        <Link to={link} className="mainBtn">
          {linkName}
          {icon && <GoArrowLeft className="ltr:rotate-180" />}
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
