// Assuming this is your data structure

import Arun from "../assest/Arun.jpg";
import Wankhede from "../assest/Wankhede.jpg";
import dy from "../assest/dy.jpg";
import Chennai from "../assest/Chennai.jpg";
import Chinnaswamy from "../assest/Chinnaswamy.jpg";
import Narendra from "../assest/Narendra.jpg";
import eden from "../assest/eden.jpg";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/PageLoader";
import LazyLoad from "react-lazy-load";
import Rajastan from "../assest/Rajastan R.png";
import srh from "../assest/srh.png";
import cs from "../assest/cs.png";
import kkr from "../assest/kkr.png";
import kings from "../assest/kings.png";
import rcb from "../assest/rcb.png";
import gujarat from "../assest/gujarat.png";
import lsg from "../assest/lsg.png";
import delhi from "../assest/delhi.png";
import mumbai from "../assest/mumbai.png";

const cardsData = [
  { id: 1, image: cs, title: "CSK" },
  { id: 2, image: delhi, title: "DC" },
  { id: 3, image: gujarat, title: "GT" },
  { id: 4, image: mumbai, title: "MI" },
  { id: 5, image: kkr, title: "KKR" },
  { id: 6, image: rcb, title: "RCB" },
  { id: 7, image: lsg, title: "LSG" },
  { id: 8, image: kings, title: "KX11" },
  { id: 9, image: Rajastan, title: "RR" },
  { id: 10, image: srh, title: "SRH" },
];

export default cardsData;
