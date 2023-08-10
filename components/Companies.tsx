import Image from "next/image";

const companies = [
  {
    name: "branch",
    imageUrl: "/assets/images/branch.svg",
  },
  {
    name: "nzxt",
    imageUrl: "/assets/images/nzxt.svg",
  },
  {
    name: "Vercel",
    imageUrl: "/assets/images/vercel.svg",
  },
  {
    name: "supabase",
    imageUrl: "/assets/images/supabase.svg",
  },
  {
    name: "fly.io",
    imageUrl: "/assets/images/fly.io.svg",
  },
  {
    name: "materialize",
    imageUrl: "/assets/images/materialize.svg",
  },
  {
    name: "maker",
    imageUrl: "/assets/images/maker.svg",
  },
  {
    name: "tinybird",
    imageUrl: "/assets/images/tinybird.svg",
  },
  {
    name: "hashnode",
    imageUrl: "/assets/images/hashnode.svg",
  },
];

const Companies = () => {
  return (
    <section>
      <div className="mt-24 md:mt-48 flex items-center justify-center">
        <div>
          <h3 className="font-semibold text-sm md:text-xl pb-10 text-center">
            The go-to platform for top developers from leading companies.
          </h3>
          <div className="flex gap-10 items-center justify-center max-w-[800px] flex-wrap">
            {companies.map((company) => (
              <Image
                className="max-md:w-[70px]"
                key={company.name}
                src={company.imageUrl}
                alt={company.name}
                width={120}
                height={120}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
