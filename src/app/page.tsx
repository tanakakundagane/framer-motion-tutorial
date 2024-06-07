import Header from "./components/Header";
import Banner from "./components/Banner"
import Client from "./components/Client";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <div>   
      <PageTransition>
        <Banner />
        <Client/>
      </PageTransition>
    </div>
  );
}
