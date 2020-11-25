import poke_1 from '../../assets/poke/poke_1.png';
import poke_2 from '../../assets/poke/poke_2.png';
import poke_3 from '../../assets/poke/poke_3.png';
import poke_4 from '../../assets/poke/poke_4.png';
import poke_5 from '../../assets/poke/poke_5.png';
import poke_6 from '../../assets/poke/poke_6.png';
import poke_7 from '../../assets/poke/poke_7.png';
import poke_8 from '../../assets/poke/poke_8.png';
import poke_9 from '../../assets/poke/poke_9.png';
import poke_10 from '../../assets/poke/poke_10.png';
import poke_11 from '../../assets/poke/poke_11.png';
import poke_12 from '../../assets/poke/poke_12.png';
import poke_13 from '../../assets/poke/poke_13.png';
import poke_14 from '../../assets/poke/poke_14.png';
import poke_15 from '../../assets/poke/poke_15.png';
import poke_16 from '../../assets/poke/poke_16.png';
import poke_17 from '../../assets/poke/poke_17.png';
import back from '../../assets/components/Pokeball.png';

export default switchImage  = {
    
    switchImage(level){
        if(level.back)return back;

        switch ( parseInt(level.id)) {
            case 1:
                return poke_1;
            case 2:
                return poke_2;
            case 3:
                return poke_3
            case 4:
                return poke_4;
            case 5:
                return poke_5;
            case 6:
                return poke_6;
            case 7:
                return poke_7;
            case 8:
                return poke_8;
            case 9:
                return poke_9;
            case 10:
                return poke_10;
            case 11:
                return poke_11;
            case 12:
                return poke_12;
            case 13:
                return poke_13;
            case 14:
                return poke_14;
            case 15:
                return poke_15;
            case 16:
                return poke_16;
            default:
                return poke_17;
        }
    }
}