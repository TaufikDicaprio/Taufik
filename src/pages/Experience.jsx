import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { FaMedal } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { GiRibbonMedal } from "react-icons/gi";
import { LiaMedalSolid } from "react-icons/lia";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/Experience.css'

function Experience() {
  return (
    <>
    <Navbar/>

      <diV className="wrapper">
        <h1>Achievement</h1>
        <VerticalTimeline>
                  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<LiaMedalSolid />}

            
          >
            <h3 className="vertical-timeline-element-title">2nd place</h3>
            <h4 className="vertical-timeline-element-subtitle">"Adhan competition"</h4>
            <p>
              "Suara yang biasa aja,ternyata bisa meraih  — Juara 2."
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaMedal />}

            
          >
            <h3 className="vertical-timeline-element-title">3rd place</h3>
            <h4 className="vertical-timeline-element-subtitle">"Silat competition"</h4>
            <p>
              "juara 3 memang belum seberapa, tapi saya akan berusaha untuk selalu menjadi yang terbaik".
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiRibbonMedal />}

            
          >
            <h3 className="vertical-timeline-element-title">2nd place</h3>
            <h4 className="vertical-timeline-element-subtitle">"Inter-school mathematics olympiad"</h4>
            <p>
              "HOKI KEKNYA".
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiTrophyCup />}

            
          >
            <h3 className="vertical-timeline-element-title">1st place</h3>
            <h4 className="vertical-timeline-element-subtitle">"Fashion Show Competition"</h4>
            <p>
              "Lomba Yang Sangat Melatih Mental".
            </p>
          </VerticalTimelineElement>

          


        </VerticalTimeline>
      </diV>
      <Footer/>
      <ScrollToTop/>
    </>
              )
}

export default Experience