import { SectionWrapper } from "../hoc"


import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { amazonServices } from "../constants";
import { ServiceCard } from './About';


const AmazonKeyPoints = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Einführung</p>
          <h2 className={styles.sectionHeadText}>Überblick.</h2>
        </motion.div>
  
        
        <div className='mt-20 flex flex-wrap gap-10'  >
          {amazonServices.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
         
        >
          Unsere Amazon Agentur bietet spezialisierte ERP-Anbindungen und KI-Modelle an, maßgeschneidert auf Ihre Bedürfnisse. Mit über 5 Jahren Erfahrung in Seller Central und als Experten für Amazon Vendor integrieren wir nahtlos ERP-Systeme wie Shopware, Shopify, Plentymarkets, JTL, Magento, Odoo und Afterbuy. Vertrauen Sie auf unsere Expertise für eine einfache Anbindung und optimale Preisstrategien.
        </motion.p>
      </>
    )
  }

  

export default SectionWrapper(AmazonKeyPoints, "amazonKeyPoints");