import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePeliculaDto {
  @ApiProperty({
    example: 'El Padrino',
    description: 'Título de la película',
  })
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @ApiPropertyOptional({
    example: 'Francis Ford Coppola',
    description: 'Director de la película',
  })
  @IsOptional()
  @IsString()
  director?: string;

  @ApiPropertyOptional({
    example: 'Drama',
    description: 'Género de la película',
  })
  @IsOptional()
  @IsString()
  genero?: string;

  @ApiPropertyOptional({
    example: 175,
    description: 'Duración en minutos',
  })
  @IsOptional()
  @IsNumber()
  duracion?: number;

  @ApiPropertyOptional({
    example: 'La historia de la familia Corleone...',
    description: 'Sinopsis de la película',
  })
  @IsOptional()
  @IsString()
  sinopsis?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/poster.jpg',
    description: 'URL del póster',
  })
  @IsOptional()
  @IsString()
  poster?: string;

  @ApiPropertyOptional({
    example: 'https://youtube.com/...',
    description: 'URL del tráiler',
  })
  @IsOptional()
  @IsString()
  trailer?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/imagen.jpg',
    description: 'URL de la imagen',
  })
  @IsOptional()
  @IsString()
  imagen?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/thumbnail.jpg',
    description: 'URL del thumbnail',
  })
  @IsOptional()
  @IsString()
  imagenThumbnail?: string;
}
