import type { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";
import { Specialbtn } from "../components/Specialbtn";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Home"
      description="Home of the roorlab products website"
    >
      <div className="grow flex flex-col justify-center items-center bg-cover bg-[url('https://www.digitalmenta.com/wp-content/uploads/2019/04/potenciar-campanas-shopping.jpg')]">
        <div className="grow bg-black w-full justify-center items-center flex flex-col opacity-80">
          <h1 className="text-7xl text-white">Rootlab Products</h1>
          <Specialbtn />
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;
