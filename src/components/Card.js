import React from 'react';

const Card = props => {
  return (
    <div className={`card mt-2 ${props.dark ? 'bg-dark' : 'bg-light'}`}>
      {props.header && (
        <div
          className={`card-header ${props.dark ? 'text-light' : 'text-dark'}`}>
          {props.header}
        </div>
      )}
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;

/* anything that is defined inside the Card component when it is used
    will be placed where props.children is called

    <Card>
      <p>Hi this is inside the card body</p>
    </Card>

    by doing this we don't have to pass down props to the Image component we used in App.js

    If we imported the image component in here App.js would look like this...

    <Card 
      header={name} 
      id={id}
      name={name}
      image={image}
      handleClickOnImage={this.handleClickOnImage} 
      dark
    />

    and this card component would look like this

  <div className={`card mt-2 ${props.dark ? 'bg-dark' : 'bg-light'}`}>
      {props.header && (
        <div
          className={`card-header ${props.dark ? 'text-light' : 'text-dark'}`}>
          {props.header}
        </div>
      )}
      <div className="card-body">
        <Image
          id={props.id}
          name={props.name}
          image={props.image}
          handleClickOnImage={props.handleClickOnImage}
        />
      </div>
    </div>
    
    we would have to pass down props to the Card from App and then pass the relevant props to the Image component because it is being used inside the Card. In this case it makes the Card less reuseable.

  */
