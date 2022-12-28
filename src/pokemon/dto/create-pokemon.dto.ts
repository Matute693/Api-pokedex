import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

// Data que yo voy a recibir y quiero validar implementar condicionalesq
export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
