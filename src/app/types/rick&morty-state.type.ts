import { BaseState } from 'types/base-state.type';
import { CharacterDto } from './rick&morty-dto.type';

export interface CharacterState extends BaseState {
  characters: CharacterDto[];
  pending: {
    characters: boolean;
  };
  errors: {
    characters: string | null;
  };
}
