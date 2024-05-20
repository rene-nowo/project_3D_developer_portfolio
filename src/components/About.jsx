import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, src, alt="web-development"}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {icon ? (
          <img
            src={icon}
            alt={alt}
            className='w-16 h-16 object-contain'
          />
        ) : (
          <img
            src={src} // You need to define `defaultSrc` or handle this case appropriately.
            alt={alt}
            className='w-16 h-16 object-contain'
          />
        )}
        
        
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Einführung</p>
        <h2 className={styles.sectionHeadText}>Überblick.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Als erfahrener Softwareentwickler habe ich mich auf Python und JavaScript spezialisiert, mit vertieften Kenntnissen in Django und React, um leistungsstarke ERP-Systeme, Schnittstellenautomatisierungen und Webanwendungen zu entwickeln.
        Mein Ansatz kombiniert technische Expertise mit einer schnellen Auffassungsgabe, um komplexe Herausforderungen zu meistern und benutzerzentrierte Lösungen zu schaffen. 
        Ich bin auch leidenschaftlich daran interessiert, mit Rust und Go zu arbeiten, um innovative und effiziente Software zu liefern. 
        Lassen Sie uns zusammenarbeiten, um Ihre Ideen mit präziser und effektiver Technologie zum Leben zu erwecken!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export {ServiceCard, About};
export default SectionWrapper(About, "about");