import React from 'react';
// import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className='xs:w-[250px] w-full'>
//       <motion.div
//         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
//           <img src={icon} alt='title' className='w-16 h-16 object-contain' />
//           <h3 className='text-white text-[20px] font-bold text-center'>
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

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
        I'm a dedicated and results-driven software developer with over 4 years
        of experience of creating engaging and user-friendly web experiences. I
        possess a strong foundation in frontend technologies such as HTML, CSS
        (SASS, TailwindCSS, Bootstrap etc), JavaScript (and their frameworks
        like React.Js, Next.js, SvelteJs, NodeJs, Express, MongoDB) & C#. My
        goal is and has always been to combine my technical expertise with a
        creative approach to deliver seamless and visually appealing websites
        and applications.
        <br /> I'm a quick learner and I collaborate closely with
        clients/developers to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
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
