import React from 'react';
import Card from '../Card/Card';
import './Ideas.css';

const Ideas = ({ ideas, removeIdea }) => {
const ideaCards = ideas.map(idea => {
    return <Card
      id={idea.id}
      title={idea.title}
      description={idea.description}
      removeIdea={removeIdea}
      key={idea.id}
    />
  })

  return (
    <>
      <h2>Shout Outs</h2>
      <section className='ideas'>
        {!ideas.length ? (<h3>You Currntly Have Shout Outs</h3>) : ideaCards}
      </section>
    </>
  )
}

export default Ideas;
