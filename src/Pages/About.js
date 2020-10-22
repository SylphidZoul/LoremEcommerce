import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'
import { PresentationComponent } from '../Components/PresentationComponent'
import { FeedbackIcon } from '../Assets/Feedback'
import { Planet } from '../Assets/Planet'
import { QualityBadge } from '../Assets/QualityBadge'
import { Shipping } from '../Assets/Shipping'

const About = () => {
  return (
    <ContentWrapper
      title='Sobre Nosotros'
      subtitle='¿Quiénes somos y por qué confiar en nosotros?'
      background
    >
      <SectionComponent color='mainSilver' gradient>
        <PresentationComponent
          title='¿Por qué elegirnos?'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus, modi ad incidunt deleniti similique molestiae
          eligendi perferendis porro odit! Dolor quo, corporis est quam
          beatae atque ullam assumenda iusto nostrum?
          Magni ea fugiat, omnis fugit reprehenderit commodi harum minus
          adipisci iure at sapiente, dignissimos facere nulla rerum porro,
          suscipit repudiandae voluptatibus eum.'
        >
          <FeedbackIcon width='70%' />
        </PresentationComponent>
      </SectionComponent>
      <SectionComponent color='mainDark'>
        <PresentationComponent
          title='Somos importadores'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus, modi ad incidunt deleniti similique molestiae
          eligendi perferendis porro odit! Dolor quo, corporis est quam
          beatae atque ullam assumenda iusto nostrum?
          Magni ea fugiat, omnis fugit reprehenderit commodi harum minus
          adipisci iure at sapiente, dignissimos facere nulla rerum porro,
          suscipit repudiandae voluptatibus eum.'
          textColor='mainSilver'
          childrenFirst
        >
          <Planet width='70%' fill='#30175e' />
        </PresentationComponent>
      </SectionComponent>
      <SectionComponent color='mainLavander' colorTop='mainDark'>
        <PresentationComponent
          title='Directo a tu puerta'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus, modi ad incidunt deleniti similique molestiae
          eligendi perferendis porro odit! Dolor quo, corporis est quam
          beatae atque ullam assumenda iusto nostrum?
          Magni ea fugiat, omnis fugit reprehenderit commodi harum minus
          adipisci iure at sapiente, dignissimos facere nulla rerum porro,
          suscipit repudiandae voluptatibus eum.
          Praesentium eos nihil eius laudantium itaque veritatis illo voluptatem,
          fuga provident quam voluptate enim minus aut!'
        >
          <Shipping width='70%' />
        </PresentationComponent>
      </SectionComponent>
      <SectionComponent color='darkPurple'>
        <PresentationComponent
          title='Calidad garantizada'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus, modi ad incidunt deleniti similique molestiae
          eligendi perferendis porro odit! Dolor quo, corporis est quam
          beatae atque ullam assumenda iusto nostrum?
          Magni ea fugiat, omnis fugit reprehenderit commodi harum minus
          adipisci iure at sapiente, dignissimos facere nulla rerum porro,
          suscipit repudiandae voluptatibus eum.'
          textColor='mainSilver'
          childrenFirst
        >
          <QualityBadge fill='#d8d8f6' width='60%' />
        </PresentationComponent>
      </SectionComponent>
    </ContentWrapper>
  )
}

export default About
