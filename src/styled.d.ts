import 'styled-components';
import { IPalette } from './styles/pallete';

declare module 'styled-components' {
  export interface DefaultTheme {

    pallete:{
        common:{
            white:string;
            brown:string;
            offwhite:string;
            lightGrey:string;
            normalGrey:string;
        }
            primary: IPalette;
          };
    
  }
}