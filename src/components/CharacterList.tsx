import React from 'react';

interface ICharacter {
  name: string;
  image: string;
}

export const CharactersList = ({ name, image }: ICharacter) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
    </div>
  );
};
