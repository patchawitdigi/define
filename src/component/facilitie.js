import React from 'react'
import "./facilitie.css";
import vel1 from '../img/hidden/level1.jpg'
import vel3 from '../img/hidden/level3.jpg'
import text1 from '../img/hidden/level1-text.png'
import text3 from '../img/hidden/level3-text.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Facilitie() {

  function changelevel1() {
    document.getElementById("level").src = vel1
    document.getElementById("text").src = text1
    document.getElementById("lv1").style.color = "#bf5c40"
    document.getElementById("lv3").style.color = "black"
    document.getElementById("textlv3").style.display = "none"
    document.getElementById("textlv1").style.display = "block"
  }
  function changelevel3() {
    document.getElementById("level").src = vel3
    document.getElementById("text").src = text3
    document.getElementById("lv3").style.color = "#bf5c40"
    document.getElementById("lv1").style.color = "black"
    document.getElementById("textlv3").style.display = "block"
    document.getElementById("textlv1").style.display = "none"

  }

  useEffect(() => {
    Aos.init({ duration:  1000 });
},[]);

  return (
    <div>
      <h3 className='facilitie' data-aos="fade-up">FACILITIES PLAN</h3>
      <div className='levelselect'>
        <p onClick={changelevel1} id="lv1">Level1</p>
        <p onClick={changelevel3} id="lv3">Level3</p>
      </div>
      <div className='levelimg'>
        <img src={vel1} id="level" data-aos="fade-up" data-aos-delay="500"/>
      </div>
      <img className='textlv' src={text1} id="text" data-aos="fade-up" data-aos-delay="500"/>

      <div id="textlv1" style={{ display: "block" }}>
        <Container fluid>
          <div className='levelplan'>
            <Row>
              <Col sm={7}>
                <div className='outdoor' data-aos="fade-up" data-aos-delay="750">
                  <h3>OUTDOOR FACILITIES</h3>
                  <div className='rowout'>
                    <div className='colout'>
                      <div className="faciout"><span>1</span> <a>Grand Arc Welcome Gate</a></div>
                      <div className="faciout"><span>2</span> <a>Guardhouse</a></div>
                      <div className="faciout"><span>3</span> <a>Pedestrian Gate</a></div>
                      <div className="faciout"><span>4</span> <a>Couture Jardin</a></div>
                      <div className="faciout"><span>5</span> <a>DEFINE Signage</a></div>
                      <div className="faciout"><span>6</span> <a>DEFINE Artwork</a></div>
                      <div className="faciout"><span>7</span> <a>Crystal Court</a></div>
                    </div>
                    <div className='colout'>
                      <div className="faciout"><span>8</span> <a>Ruby Terrace</a></div>
                      <div className="faciout"><span>9</span> <a>Reflexology Garden</a></div>
                      <div className="faciout"><span>10</span> <a>Emerald Terrace</a></div>
                      <div className="faciout"><span>11</span> <a>Vehical Washing Bay</a></div>
                      <div className="faciout"><span>12</span> <a>Eco Charging Point & Parking</a></div>
                      <div className="faciout"><span>13</span> <a>Amber Garden</a></div>
                      <div className="faciout"><span>14</span> <a>Amber Deck</a></div>
                    </div>
                    <div className='colout'>
                      <div className="faciout"><span>15</span> <a>Motorbike Parking</a></div>
                      <div className="faciout"><span>16</span> <a>L’Aventure Playground</a></div>
                      <div className="faciout"><span>17</span> <a>L’Aventure Treehouse</a></div>
                      <div className="faciout"><span>18</span> <a>Topaz Garden</a></div>
                      <div className="faciout"><span>19</span> <a>Topaz Pavilion</a></div>
                      <div className="faciout"><span>20</span> <a>Topaz Walkway</a></div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div className='indoor' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1000">
                  <h3>INDOOR FACILITIES</h3>
                  <div className='rowout'>
                    <div className='colout'>
                      <div className="faciin"><span>36</span> <a>DEFINE Grand Lobby</a></div>
                      <div className="faciin"><span>37</span> <a>Mail Room</a></div>
                      <div className="faciin"><span>38</span> <a>Diamond Lounge</a></div>
                      <div className="faciin"><span>39</span> <a>La Galerie Welcome Lounge</a></div>
                      <div className="faciin"><span>40</span> <a>Tranquillité Lounge</a></div>
                      <div className="faciin"><span>41</span> <a>La Première Co-working Lounge</a></div>
                      <div className="faciin"><span>42</span> <a>L’Aventure Kid’s Club</a></div>
                    </div>
                    <div className='colout'>
                      <div className="faciin"><span>43</span> <a>Privé Supercar Garage</a></div>
                      <div className="faciin"><span>44</span> <a>Automated Car Parking System</a></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div id="textlv3" style={{ display: "none" }}>
        <Container fluid>
          <div className='levelplan'>
            <Row>
              <Col sm={7}>
                <div className='outdoor'>
                  <h3>OUTDOOR FACILITIES</h3>
                  <div className='rowout'>
                    <div className='colout rowlv3'>
                      <div className="faciout"><span>21</span> <a>Hydrotherapy Jacuzzi</a></div>
                      <div className="faciout"><span>22</span> <a>Illuminating Pathway</a></div>
                      <div className="faciout"><span>23</span> <a>Sun Lounge</a></div>
                      <div className="faciout"><span>24</span> <a>Sunbed At DEFINE Pool</a></div>
                      <div className="faciout"><span>25</span> <a>DEFINE Pool</a></div>
                    </div>
                    <div className='colout rowlv3'>
                      <div className="faciout"><span>26</span> <a>Sapphire Deck</a></div>
                      <div className="faciout"><span>27</span> <a>Sapphire Path</a></div>
                      <div className="faciout"><span>28</span> <a>L’amour Sunbed</a></div>
                      <div className="faciout"><span>29</span> <a>Botanique Lawn</a></div>
                      <div className="faciout"><span>30</span> <a>Zen Zone</a></div>
                    </div>
                    <div className='colout rowlv3'>
                      <div className="faciout"><span>31</span> <a>BBQ Area</a></div>
                      <div className="faciout"><span>32</span> <a>Herbs Garden</a></div>
                      <div className="faciout"><span>33</span> <a>L’amour Swing</a></div>
                      <div className="faciout"><span>34</span> <a>L’Aventure Kid’s Pool</a></div>
                      <div className="faciout"><span>35</span> <a>Family Pavilion</a></div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div className='indoor'>
                  <h3>INDOOR FACILITIES</h3>
                  <div className='rowout'>
                    <div className='colout rowlv3'>
                      <div className="faciin"><span>45</span> <a>Privé Party House</a></div>
                      <div className="faciin"><span>46</span> <a>Privé Wine Cellar Lounge</a></div>
                      <div className="faciin"><span>47</span> <a>Changing Room</a></div>
                      <div className="faciin"><span>48</span> <a>Sauna & Steam Room</a></div>
                      <div className="faciin"><span>49</span> <a>Privé Gym</a></div>
                    </div>
                    <div className='colout rowlv3'>
                      <div className="faciin"><span>50</span> <a>Privé Yoga</a></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>


      <p className='disclaimer2'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein,
        no warranties whatsoever are given, or legal representations provided in respect thereon. The Developer reserves the right
        to modify information of the development, or any part thereof as may be approved or required by the relevant authorities.</p>
    </div>
  )
}

export default Facilitie