//import MainScreen from './tp'
import Nav from '../components/navbar'
import dynamic  from "next/dynamic";
import MainScreen from '../components/main';

const Scroll = dynamic(
  () => {
    return import('../components/navbar');
  },
  { ssr: false }
);

const Main = dynamic(
  () => {
    return import('./About');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Nav/>
      <MainScreen/> 
    </>
  );
}
