import React, {Component} from 'react';
import {MadeByTitle, MadeByNames, Name,MadeBySocial} from '../styles/--madeByAnimation';

class MadeBy extends Component {
    render() {
        return <MadeByTitle>
            Made By
            <MadeByNames>
                <Name>Vera <MadeBySocial href="https://github.com/VeraButler" target="_blank"><i class="fab fa-github-square"></i></MadeBySocial><MadeBySocial href="https://www.linkedin.com/in/vera-butler-95236a161/" target="blank"> <i class="fab fa-linkedin"></i></MadeBySocial></Name> 
               
               
                <Name> Inna <MadeBySocial href="https://github.com/innaleikina" target="_blank"><i class="fab fa-github-square"></i></MadeBySocial> <MadeBySocial href="https://www.linkedin.com/in/inna-leikina-1580542b/" target="_blank"><i class="fab fa-linkedin"></i></MadeBySocial></Name>
                
                
                <Name> Lucas <MadeBySocial href="https://github.com/LucasTaboada" target="_blank"><i class="fab fa-github-square"></i></MadeBySocial> <MadeBySocial href="#"><i class="far fa-user"></i></MadeBySocial></Name>
            </MadeByNames>
            </MadeByTitle>
    }
}

export default MadeBy