import GroupRow from "@components/group/row";
import Image from "next/image";
import Categories from "~/components/group/categories";

const Index = () => {
  return (
    <div>
      <div className="flex  justify-center gap-x-20 p-36">
        <div className="w-[50%] pl-12 text-left">
          <h1 className="text-5xl font-bold">Groops E-commerce</h1>

          <p className="mt-10 text-2xl font-semibold text-gray-700">
            Revolutionize the tranditional way of doing E-commerce, our
            group-buy model makes everyday items more affordable for you
          </p>

          <p className="mt-10 text-xl text-gray-400">
            Our group-buy buisness model can help group leader to monetize their
            influence and values through initializing a group and congregating
            consumers. All participating members can purchase items at a lower
            price.
          </p>

          <div className="mt-6 flex justify-start gap-x-5">
            <button className="rounded-lg bg-primary-main px-8 py-4 text-white">
              Create a group
            </button>
            <button className="rounded-lg bg-primary-main px-8 py-4 text-white">
              Join a group
            </button>
          </div>
        </div>
        <div className="flex w-[50%] flex-row justify-center ">
          <Image
            src="/assets/group/hero.svg"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex justify-between gap-x-10 px-36 py-24">
        <div className="flex w-1/4 flex-col items-center">
          <img
            src="/assets/group/create.png"
            alt="attribute"
            className="mb-5"
          />
          <p className="mt-3 text-xl font-bold">You can create a group</p>
          <p className="mt-5 text-center">
            As a group leader, you can start a group and get paid through
            commission according to the size of your group.
          </p>
        </div>
        <div className="flex w-1/4 flex-col items-center">
          <img src="/assets/group/join.png" alt="attribute" className="mb-5" />
          <p className="mt-3 text-xl font-bold">You can join a group</p>
          <p className="mt-5 text-center">
            As a group member you can participate in a group and enjoy the
            discount off your selected items
          </p>
        </div>
        <div className="flex w-1/4 flex-col items-center">
          <img
            src="/assets/group/groups.png"
            alt="attribute"
            className="mb-5"
          />
          <p className="mt-3 text-xl font-bold">Groups</p>
          <p className="mt-5 text-center">
            A group will be finialized when it reaches the member limit or when
            the time runs out whichever comes first. The final discount rate
            will be calculated automatically.
          </p>
        </div>
      </div>
      <div className="px-12">
        <Categories
          images={[
            "/assets/group/Group1.png",
            "/assets/group/Group2.png",
            "/assets/group/Group3.png",
            "/assets/group/Group4.png",
          ]}
        />
        <GroupRow sectionTitle="Recommended Groups" />
        <GroupRow sectionTitle="Ending Soon" />
      </div>
    </div>
  );
};

export default Index;
