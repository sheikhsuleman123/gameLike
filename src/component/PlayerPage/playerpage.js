import React from 'react';
import './player.css';
import '../../assets/icons/font/flaticon.css';
import logo from '../../assets/images/aydan.png';

const PLayerPage = () => {
    return (
        //  <div className="main-container">
        //      <div className="container">
        //        <div className="inner-container">

        //          {/* PLayer Name  */}
        //          <div class="row" className="name-container">
        //            <div class="col-sm-12" className="player-name"> Ninja </div>
        //          </div>

        //          {/* Player Image */}
        //          <div class="row" >
        //              <div class="col-sm-6">colsm6</div>
        //              <div class="col-sm-6">colsm6</div>
        //          </div>
        //         </div>
        //      </div>
        //  </div>

        <div className="main-container">
            <div className="container">

                <div class="fg-row row fg-row-no-gutter fg-row-match-cols  fg-text-dark ">
                
                    <div class="container fg-col col-xs-12 col-sm-12 col-md-12 col-lg-4 fg-text-dark" style={{height:470}}>
                        <div class="fg-match-column-inside-wrapper marginTop">
                
                            <h1 class=" fg-heading text-center fg-text-dark ">Aydan</h1>
                            
                            <img class=" fg-image img-fluid img-responsive fg-text-dark pic" src={logo} alt="ninja luminosity blue" />
                           
                            <div class=" text-center text-sm-center text-md-center text-lg-center col-sm-12 col-md-12 fg-text-dark">
                                <a href="https://twitch.tv/ninja" target="_blank" rel="nofollow">
                                    <i class=" fab fa-twitch  " style={{ color: 'black', fontSize: 25, padding: 10 }}></i>
                                </a>
                                <a href="https://twitter.com/ninja" target="_blank" rel="nofollow">
                                    <i class="fab fa-twitter  " style={{ color: 'grey', fontSize: 25, padding: 10 }}>
                                    </i>
                                </a>
                                <a href="https://youtube.com/ninja" target="_blank" rel="nofollow">
                                    <i class="fab fa-youtube  " style={{ color: 'grey', fontSize: 25, padding: 10 }}>
                                    </i>
                                </a>
                                <a href="https://instagram.com/ninja" target="_blank" rel="nofollow">
                                    <i class=" fab fa-instagram " style={{ color: 'black', fontSize: 25, padding: 10 }}>
                                    </i>
                                </a>
                                <a href="https://instagram.com/ninja" target="_blank" rel="nofollow">
                                    <i class=" fab fa-facebook-f " style={{ color: 'grey', fontSize: 25, padding: 10 }}>
                                    </i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class=" fg-col col-xs-12 col-sm-12 col-md-12 col-lg-8 fg-el-has-bg fg-text-dark has-fg-bg fg-hover " style={{height:470}}>
                       
                        <div class="fg-vcenter-wrapper">
                            <div class="fg-vcenter">
                                <div class="fg-match-column-inside-wrapper">
                                    <div class=" fg-row row     fg-text-dark">

                                           
                                        <div class="fg-col col-xs-12 col-sm-12 col-md-6 fg-text-dark ">
                                       
                                        <div class=" fg-wrapper fg-text-dark content dato">
                                                <h6 class="ffb-id-2bpmp420 fg-heading  fg-text-dark marginTop2 marginleft"> Player</h6>
                                                <p class="ffb-id-2bpmp421 fg-paragraph text-left  pal  fg-text-dark dato3">Aydan</p>
                                          </div>
                                            <div class=" fg-wrapper fg-text-dark dato ">
                                                <h6 class=" fg-heading  fg-text-dark marginTop2  marginleft">DOB</h6>
                                                <p class=" fg-paragraph   fg-text-dark">June 5, 1991</p>
                                            </div>
                                        </div>
                                <div class=" fg-col col-xs-12 col-sm-12 col-md-6 fg-text-dark dato">
                                    <div class=" fg-wrapper fg-text-dark content">
                                        <h6 class=" fg-heading   marginTop2 fg-text-dark">Name</h6>
                                        <p class=" fg-paragraph text-left  par  fg-text-dark dato2">Tyler Blevins</p></div>
                                        <div class=" fg-wrapper fg-text-dark content">
                                        <h6 class=" fg-heading  marginTop2  content fg-text-dark">Country</h6>     
                                        <img class=" fg-image  img-responsive fg-text-dark"
                                         src="https://taylorcbq.wpengine.com/wp-content/uploads/2018/08/USAflag.png" alt="USAflag" />
                                    </div>
                                </div>

                                        <div class=" fg-col col-xs-12 col-sm-12 col-md-12 fg-text-dark ">
                                            <h6 class=" fg-heading text-center text-sm-left text-md-left text-lg-left fg-text-dark" style={{ marginTop: "5%" }}>About</h6>
                                            <p class=" fg-paragraph text-center text-sm-left text-md-left text-lg-left fg-text-dark">
                                                Tyler 'ninja' Blevins is currently the most viewed streamer on Twitch. Formerly a Halo pro, Ninja led
                                                 the charge into Fortnite Battle Royale scene. Prior to the competitive scene most viewers
                                                 would have given him the title as the best player on Fortnite. Number 1 or not, he is
                                                 certainly the most impressive. While consistently supplying what is arguably some of
                                                  the most entertaining content on Fortnite, Ninja simultaneously puts in the work to
                                                  lead the community in numerous stats. He is first in both wins and kills while still
                                                  playing aggressive enough to have a double digit kill-death ratio.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<div class="row ">
     <div class="col-xs-12 col-sm-12 col-md-12">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-8">Input</th>
      <th scope="col-4">Action</th>
    </tr>
  </thead>
  <tbody>
   
    <tr >
        
      <td scope="row">Thumb Mouse Button</td>
      <td>Floor</td>
      </tr>
    <tr>
      <td scope="row">F</td>
      <td>Wall</td>
      
    </tr>
    <tr>
      <td scope="row">Thumb Mouse Button 2</td>
      <td>Stairs</td>
    </tr>
    <tr>
      <td scope="row">'</td>
      <td>Roof</td>
      
    </tr>
    <tr>
      <td scope="row">5</td>
      <td>Trap</td>
      
    </tr>
    <tr>
      <td scope="row">G</td>
      <td>Building Edit</td>
      
    </tr>
  </tbody>
</table>
</div>
</div>




            </div>
        </div>
    );
}
export default PLayerPage;