import { Link, NavLink } from "react-router-dom";
import { ICONS, IMAGE } from "../../assets";

const DashboardSidebar = () => {
  const menu = [
    {
        icon : ICONS.dashboard,
      label: "Dashboard",
      path: "dashboard",
    },
    {
        icon : ICONS.analysis,
      label: "Analysis",
      path: "dashboard/chat",
    },
    {
        icon : ICONS.sales,
      label: "Sales",
      path: "dashboard/orders",
    },
  ];

  const management = [
    {
        icon : ICONS.addProduct,
      label: "Add Product",
      path: "dashboard/add-product",
    },
    {
        icon : ICONS.orders,
      label: "Orders",
      path: "dashboard/orders",
    },
    {
        icon : ICONS.products,
      label: "Products",
      path: "dashboard/products",
    },
    {
        icon : ICONS.customers,
      label: "Customers",
      path: "dashboard/customers",
    },
    {
        icon : ICONS.report,
      label: "Reports",
      path: "dashboard/reports",
    },
  ];

  const notifications = [
    {
        icon : ICONS.transaction,
      label: "Transaction",
      path: "dashboard",
    },
    {
        icon : ICONS.message,
      label: "Message",
      path: "dashboard/chat",
    },
  ];
  return (
    <div>
      <div className="w-[250px] bg-gray-800 p-5 h-screen">
        <div className="flex flex-col">
          <Link to={"/"} className="flex items-center gap-2 mb-8">
            <img src={IMAGE.logo} alt="spotify-hub" className="size-8" />
            <h1 className="font-Roboto text-2xl font-bold text-neutral-5">
              Spotify Hub
            </h1>
          </Link>

        <div className="flex flex-col gap-5">
        {/* Menu */}
          <div>
            <h1 className="text-white font-semibold text-xl">Menu</h1>

            {menu.map((link, index) => (
              <NavLink
                to={`/${link.path}`}
                key={index}
                className="flex items-center gap-3 hover:bg-gray-900 text-neutral-30 text-[14px] py-2"
              >
                <img src={link.icon} alt={link.label} className="size-4" />
                {link.label}
              </NavLink>
            ))}
          </div>

        {/* Management */}
          <div>
            <h1 className="text-white font-semibold text-xl">Management</h1>

            {management.map((link, index) => (
              <NavLink
                to={`/${link.path}`}
                key={index}
                className="flex items-center gap-3 hover:bg-gray-900 text-neutral-30 text-[14px] py-2"
              >
                <img src={link.icon} alt={link.label} className="size-4" />
                {link.label}
              </NavLink>
            ))}
          </div>

        {/* Notifications */}
          <div>
            <h1 className="text-white font-semibold text-xl">Notifications</h1>

            {notifications.map((link, index) => (
              <NavLink
                to={`/${link.path}`}
                key={index}
                className="flex items-center gap-3 hover:bg-gray-900 text-neutral-30 text-[14px] py-2"
              >
                <img src={link.icon} alt={link.label} className="size-4" />
                {link.label}
              </NavLink>
            ))}
          </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
