import { Banner } from "./Banner/Banner";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>
  );
};
