import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p
          className={`${styles.sectionSubText} balkind font-bold tracking-widest`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[16px] leading-[30px] text-center'>
        I am a dedicated and results-driven Frontend Developer with over 3 years
        of experience of creating engaging and user-friendly web experiences. I
        possess a strong foundation in frontend technologies such as HTML, CSS
        (SASS, Tailwind CSS, Bootstrap etc.), JavaScript (and it’s frameworks &
        libraries like Svelte Js, React Js, Next.js, Node Js, Deno, Express, MongoDB)
        . My goal is and has always been to combine my technical expertise
        with a creative approach to deliver seamless and visually appealing
        websites and applications.
        <br /> I'm a quick learner and I collaborate closely with
        clients/developers to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap justify-evenly'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, 'about');
