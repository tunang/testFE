const hotCataTitles = [
  "Special Offers",
  "Performance",
  "T-shirts",
  "Underwear",
  "Top Brands",
  "Online Exclusive",
];

const customerServiceTitle = [
  "Privacy Policy",
  "Refund Policy",
  "Shipping & Return",
  "Term & Conditions",
  "Advanced Search",
  "Theme FAQs",
  "Store Locations",
];
const Accordian = () => {
  return (
    <>
      <div className="md:hidden col-span-12 md:col-span-6 xl:col-span-2 collapse collapse-plus border-t lg:border-none border-senary rounded-none mt-[20px]">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title list-none text-[14px] font-semibold text-secondary uppercase pl-0">
          Hot Categories
        </div>
        <div className="collapse-content">
          {hotCataTitles.map((title, index) => {
            return <li className="text-senary mt-[25px] list-none">{title}</li>;
          })}
        </div>
      </div>

      <div className="md:hidden col-span-12 md:col-span-6 xl:col-span-2 collapse collapse-plus border-t lg:border-none border-senary rounded-none">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title list-none text-[14px] font-semibold text-secondary uppercase pl-0">
        Customer Service
        </div>
        <div className="collapse-content">
        {customerServiceTitle.map((title, index) => {
              return (
                <li className="text-senary mt-[25px] list-none">{title}</li>
              );
            })}
        </div>
      </div> 
    </>
  );
};

export default Accordian;
