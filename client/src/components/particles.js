import React , {Component} from 'react';
import Particles from 'react-particles-js';

class ParticlesMain extends Component {

    render() {
        return (
            <Particles   
            width={400} 
            height={55}
            style={{
            marginTop:10,
              //   border:"1px red solid",
              //   paddingBottom:"30px",
            }}/> 
        )
    }
}

export default ParticlesMain;