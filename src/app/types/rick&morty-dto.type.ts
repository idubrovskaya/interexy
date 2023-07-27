import { UUIDDto } from 'types/uuid-dto.type';

export interface CharacterDto extends UUIDDto {
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
}
