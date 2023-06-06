export const hasImageProperty = (obj: any): obj is { image: any[] } =>
  'image' in obj;
