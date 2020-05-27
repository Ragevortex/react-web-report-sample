import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';
import Flexbox from 'flexbox-react';
import $ from 'jquery';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'FAQ'
    };
  }

  render() {
    return (
      
    <div class="container">
    
      <nav id="hamnav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>     
      <div id="hamitems"> 
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/Ragevortex/react-web-report-sample@master/images/icc.png" alt="ICC Logo" class="ICCLogo"/></a> 
        <a href="index.html">Intro</a>
        <a href="about.html">Building Index</a>
        <a href="reviews.html">Files</a>
        <a href="tech.html">Narrative</a>
        <a href="games.html">Full List</a>
        <a href="reviews.html">SQFT</a>
        <a href="reviews.html">Percentage</a>
        <a href="faq.html">FAQ</a>
        <a href="reviews.html">Scientiffic Method</a>
      </div>
    </nav>
    <div id="content">
   	<div id="main">

					<section id="top" class="one dark cover">
				 

							<header>
								<center><b>FREQUENTLY ASKED QUESTIONS</b></center>
							</header>
<main>
 
<div class="container-fluid " style="clear:both;">
    <div class="panel-group" id="faqAccordion">
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question0">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> What are the primary goals of using the Thermal Mapping (TM) & Moisture Recon Intel (MRI) service? </a>
              </h4>

            </div>
            <div id="question0" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>The answer is two-­­fold:  To reduce the scope of roof replacements and the scope of testing services.   Secondly, to re-­­prioritize roof repair/replacements based on need instead of age and leak complaints. Armed with  high-­­tech  information,  roof  repairs/replacements  can  be  reprioritized  from worst to best by roof section.  After verification, roofs exceed defined thresholds can move up on the roof replacement schedule – other roofs can be surgically restored or deferred.  The State of Mississippi reduced the scope of planned roof replacements by $10 million and Fulton County PS reallocated hundreds of thousands of USD based upon ICC’s intelligence.
                        </p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question1">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> Why is Thermal Mapping (TM) & Moisture Recon Intel (MRI) the required primary screening technique? </a>
              </h4>

            </div>
            <div id="question1" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Infrared is the ONLY inspection method that offers the potential to delineate (draws a clear line about) the areas indicative of moisture, allowing a baseline survey of condition throughout a client’s low slope roof inventory. ICC provides detail that cannot be humanly discerned when viewing the raw infrared imagery. What is not seen in other superficial infrared inspections is the damage below the visible very obvious anomalies.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question2">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> Why aerial Thermal Mapping (TM) and Moisture Recon Intel (MRI) roof moisture inspections? </a>
              </h4>

            </div>
            <div id="question2" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Most Cost-Effective Strategy – Additional testing of nuclear or coring is only ordered as needed. Most Accurate Delineation of Moisture - Areas of moisture as small as two square feet are accurately noted. Thermal Mapping (TM) and Moisture Recon Intel (MRI) is the only patented infrared inspection company utilizing proprietary computer software process to analyze infrared imagery. Clear Documentation – COLOR PHOTOS with AREAS INDICATING MOISTURE DELINEATED  IN  RED.   Options  -  Scaled,  Trending,  Multi-gradient,  Engineering Grade AutoCAD Drawings and AutoCAD importable files. Aerial infrared is specifically referred to in the American Society of Testing Materials (ASTM) Guidelines as superior to walk over infrared techniques.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question3">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> Why helicopter rather than fixed wing?</a>
              </h4>

            </div>
            <div id="question3" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Maximizes the quality of images – eliminates the smear effect caused   by an airplane’s speed. Helicopters allow technicians to hover over each building creating the strongest thermal image. Airplanes cannot loiter in airspace and cannot take perpendicular images, which are superior to “banked” shots. ICC’s reports are limited to 60k square feet. Larger rooftops are presented in an overview as well as sections.  Additionally, our reports provide a site or building key. </p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question4">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b>  Is this practice recommended by the Army Corps of Engineers?</a>
              </h4>

            </div>
            <div id="question4" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>The Army Corp. of Engineers developed the use of infrared for managing facilities and their data collection procedures are identical to Thermal Mapping (TM) & Moisture Recon Intel (MRI) in many respects. Thermal Mapping (TM) & Moisture Recon Intel (MRI) offers the additional benefits of the computer analysis utilizing our patented process exposing anomalies unseen by other methods. </p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question5">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> How does Thermal Mapping (TM) & Moisture Recon Intel (MRI) compare with other testing services?</a>
              </h4>

            </div>
            <div id="question5" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Thermal  Mapping  (TM)  &  Moisture  Recon  Intel  (MRI)  is  a  non-­­ destructive test to obtain a baseline survey of several or all buildings in a client’s inventory. Much like an MRI or sonogram, infrared is the primary screening tool  to assess moisture condition. Once areas of concern are identified by infrared, coring or nuclear tests (destructive testing) can be employed in areas indicated to verify the exact extent of moisture content (biopsy). Thermal Mapping (TM) & Moisture Recon Intel (MRI) can be purchased for less than 10 cents per square foot on a volume purchase. Coring or other destructive tests should be taken in areas targeted by the thermal maps.</p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question6">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> What is Thermal Mapping (TM) & Moisture Recon Intel (MRI)’s rate of accuracy?</a>
              </h4>

            </div>
            <div id="question6" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>There are two answers: The first is 100 percent meaning that infrared senses heat and Thermal Mapping (TM) and Moisture Recon Intel (MRI) delineates all heat that is indicative of moisture utilizing ICC’s patented process. Heat is derived from moisture trapped inside the roofing system that remains hot from the heat of the day.  The second answer is over 95 percent accuracy identifying wet areas. For example, Florida State University (FSU) has used Thermal Mapping (TM) and Moisture Recon Intel (MRI) for 15 consecutive years and reports that Thermal Mapping (TM) and Moisture Recon Intel (MRI)’s accuracy in identifying moisture exceeds 95 percent. Each annual study has been 60+ buildings.</p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question7">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> What conditions can explain the less than 5 percent error rate?</a>
              </h4>

            </div>
            <div id="question7" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Infrared is intended to call the client’s attention to a specific area of concern much like an MRI or sonogram (non-destructive tests).  Error rates can be explained by heat from other sources call false positives. Examples include: (1) A build- up of many layers of repair materials or gravel in a specific area will create a hot spot; (2) Vegetation growing on the roof; or (3) An unusually hot light source immediately under the roof.  If any of these conditions are known to exist, the client is recommended to advise ICC before proceeding with data collection.</p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question8">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> Now that I have the Thermal Mapping (TM) & Moisture Recon Intel (MRI) report, what should be done next?</a>
              </h4>

            </div>
            <div id="question8" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>First, a physical inspection of all areas noted as indicative of moisture identified in the report to explain away any obvious reasons for the call as noted in the previous paragraph. If visible inspection of the area verifies the cause  or extent, then remediation of the area is the next step. If physical inspection alone does not reveal the problem, core samples are recommended in 2 areas shown as potentially wet and 2 areas shown as potentially dry. Coring will reveal the exact percentage of moisture as well as the composition of the roof itself.</p>
                </div>
            </div>
        </div>
         <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question9">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> Who should pull the cores? My roofer has offered to pull cores…</a>
              </h4>

            </div>
            <div id="question9" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>VERY IMPORTANT! It is essential that the cores  be  pulled and analyzed by an independent lab. The proper procedure for analyzing cores is outlined in Florida and International Building Codes. The reason for an independent lab is the very reason for retaining Thermal Mapping (TM) and Moisture Recon Intel (MRI) – an independent resource for diagnostic intelligence, rather than an entity involved in the roofing business that may have a vested interest in telling the client a roof has reached the end of its life when in fact that life could be extended. Coring pulled on the roof without lab analysis is completely unreliable unless it is obviously saturated. Each material has specific guidelines for being determined “wet.” An independent roofer will pull the core, seal the material in plastic, have it transported in dry ice to an independent lab who will bake it and perform the necessary test for that specific material to determine the level of degradation. This procedure simply cannot and should not be done by the naked eye.  Anyone  who  tells  a  client  that  coring  can  be  eye-balled  is  attempting  to control the flow of information.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question10">
                 <h4 class="panel-title">
                    <a href="#" class="ing"><b>Question:</b> What other disciplines use the expertise offered by Thermal Mapping (TM) and Moisture Recon Intel (MRI)?</a>
              </h4>

            </div>
            <div id="question10" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>INFRARED CONCEPTS, owners of the  patented  Thermal  Mapping (TM) and Moisture Recon Intel (MRI) service, is being hired and our technology is being used by Jacobs Engineering, Lockheed Martin, U.S. Air Force Academy, New York City Schools, New York Housing Authority, Parson Brinckerhoff, MACTEC (formerly   Law-  Gibb Engineering), Construction Moisture Consultants, and numerous school systems, universities, airports, cities, and counties.</p>
                </div>
            </div>
        </div>
        
    </div>
    <!--/panel-group-->
</div>

<p>Some roofing contractors and roofing professionals see ICC’s Thermal Mapping (TM) & Moisture Recon Intel (MRI) as a competitor,(high-tech firm),that may refute their recommendations and/ or  cast a shadow on the value of their expertise.  Others, as well as hundreds of government clients, embrace the technology as being a giant leap forward in determining roof conditions. </p>
 
</main>

				 
					</section>

				

			</div>
    
    </div>
    <footer flex flex-end class="footer">Footer</footer>
    </div>
    
    );
  }
}




render(<App />, document.getElementById('root'));
