import { ICONS } from "../assets";


const Facilities = () => {
    const facilities = [
        {
            icon : ICONS.shipping,
            title : "Free Shipping",
            subTitle: "Free Shipping for orders over $299."
        },
        {
            icon : ICONS.payment,
            title : "Flexible Payment",
            subTitle: "Pay with Multiple Credit Cards and banks."
        },
        {
            icon : ICONS.send,
            title : "Money Guarantee",
            subTitle: "Within 10 days for an exchange."
        },
        {
            icon : ICONS.support,
            title : "Online Support",
            subTitle: "Get 24/7 support & information."
        },
    ]
    return (
        <div className="font-Roboto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 md:gap-5 justify-between max-width mx-auto mt-9 border-t pt-8">
            {
                facilities.map(facility => 
                    <div key={facility.title} className="flex items-center gap-5">
                <img src={facility.icon} alt="" className="size-20 md:size-14" />
                <div>
                    <h1 className="text-neutral-60 font-semibold text-xl md:text-lg">{facility.title}</h1>
                    <p className="text-neutral-60 text-sm mt-2">{facility.subTitle}</p>
                </div>
            </div>
                )
            }
        </div>
    );
};

export default Facilities;