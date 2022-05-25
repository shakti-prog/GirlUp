import MainScreen from './tp'
import Nav from '../components/navbar'
import { Box } from '@chakra-ui/react';
import SmallCentered from '../components/footer';
import dynamic  from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import('../components/navbar');
  },
  { ssr: false }
);

const Main = dynamic(
  () => {
    return import('./tp');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Scroll/>
      <Main/>
      
    </>
  );
}
