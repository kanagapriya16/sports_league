import React, { useEffect, useRef, useState } from 'react';
import Grid from "@mui/material/Grid";
import "../styles/Home.css";
import MuiCardComponent from "./VenuseCard";
import { Container } from '@mui/material';
import Arun from"../assest/Arun.jpg"
import Wankhede from "../assest/Wankhede.jpg"
import dy from"../assest/dy.jpg"
import Chennai from"../assest/Chennai.jpg"
import Chinnaswamy from "../assest/Chinnaswamy.jpg"
import Narendra from "../assest/Narendra.jpg"
import eden from"../assest/eden.jpg"
import { motion, AnimatePresence } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import LazyLoad from 'react-lazy-load';

const cards = [
  { id: 1, image: Chennai, title: 'M.A.CHIDAMABARAM STADIUM', body: 'chennai', body1: "view stadium Details" },
  { id: 2, image: eden, title: 'EDEN GARDENS', body: 'kolkatta', body1: "view stadium Details" },
  { id: 3, image: Wankhede, title: 'WANKHADE', body: 'mumbai', body1: "view stadium Details" },
  { id: 4, image: Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore', body1: "view stadium Details" },
  { id: 5, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD', body1: "view stadium Details" },
  { id: 6, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT', body1: "view stadium Details" },


  { id: 7, image: Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore', body1: "view stadium Details" },
  { id: 8, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD', body1: "view stadium Details" },
  { id: 9, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT', body1: "view stadium Details" },
  { id: 10, image: Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore', body1: "view stadium Details" },
  { id: 11, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD', body1: "view stadium Details" },
  { id: 12, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT', body1: "view stadium Details" },
  { id: 13, image: Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore', body1: "view stadium Details" },
  { id: 14, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD', body1: "view stadium Details" },
  { id: 15, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT', body1: "view stadium Details" },
  { id: 16, image: Chinnaswamy, title: 'CHINNASWAMY', body: 'Bengalore', body1: "view stadium Details" },
  { id: 17, image: Arun, title: 'INDRGANDHI STADIUM', body: 'HYDRABAD', body1: "view stadium Details" },
  { id: 18, image: Narendra, title: 'INDORE STADIUM', body: 'GUJARAT', body1: "view stadium Details" },
];


const Card = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4); // Initial number of visible cards
  const loadingRef = useRef(null);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the duration of the loader

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
    const targetCard = document.getElementById(`card-${id}`);
    targetCard && targetCard.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (loadingRef.current && loadingRef.current.offsetTop - window.innerHeight < window.scrollY) {
      // Load more cards when the loading element is visible
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Increase the number of visible cards
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <AnimatePresence>
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>
      {!isLoading && (
        <Container
          
          sx={{
            mt: '40px',
            backgroundColor:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(198,198,255,1) 100%, rgba(0,212,255,1) 100%)',
            justifyContent: 'center',


          
          }}
        >
          <Grid container spacing={2}>
            {cards.slice(0, visibleCards).map((card, index) => (
              <Grid key={card.id} item xs={6} sm={6} md={3} id={`card-${card.id}`}>
                <LazyLoad height={400} offset={100}>
                  <motion.div
                    initial={{ opacity: 0, y: index < 4 ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <MuiCardComponent
                      isActive={card.id === activeCard}
                      onClick={() => handleCardClick(card.id)}
                      {...card}
                    />
                  </motion.div>
                </LazyLoad>
              </Grid>
            ))}
            <div ref={loadingRef}> 
              
            </div>
           
          </Grid>
        </Container>
      )}
    </motion.div>
  );
};

export default Card;