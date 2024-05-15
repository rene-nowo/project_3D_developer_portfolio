import { SectionWrapper } from "../hoc"
import { amazonProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Tilt from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github } from "../assets";

const ProjectCard = ({
    index,
    title,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
        
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[20px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };
  

const Insights = () => {
    return (
      <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Meine Arbeit</p>
        <h2 className={`${styles.sectionHeadText}`}>Projekte.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Im folgenden ein paar Beispiel Projekte, welche bereits umgesetzt wurden. Ich hatte schon die Chance mit vielen Systemen zu arbeiten.
          Unter anderem mit Shopify, Amazon, Ebay, Shopware, Otto und noch vielen mehr. Eine Anbindung an diese Systeme zur Prozessautomatisierung werden im Hand umdrehen erledigt.
          Durch meine mehrjährige Erfahrung als CTO in einem großen E-Commerce Unternehmen, bin ich mit der Unternehmens- und Anwendersicht bestens vertraut und kann mich hervorragend 
          in diese hineinversetzen. Die Kommunikation ist einfach und schnell. Falls Sie Fragen haben, zögern Sie nicht mir eine Nachricht über das Kontaktforumal dazulassen. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {amazonProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
       
      </>
  
    )
  }

export default SectionWrapper(Insights,"insights");