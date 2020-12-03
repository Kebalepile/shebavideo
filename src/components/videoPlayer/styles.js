import customFont from "../utils/Righteous-Regular.ttf";
export default () => {
  
  return (`
    @font-face{
        font-family: customFont;
        src: url(${customFont});
      } 
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #ffff;
        font-family: customFont;
    }

    /*default version*/
    #videoPlayer{
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      width:100%;
      height:350px;
      display:grid;
      grid-template-columns:repeat(12,auto);
      grid-template-rows: repeat(12, auto);
      z-index:3;
    }
    @media only screen and (min-width:600px){
      #videoPlayer{
         height:470px
          }
      }
    @media only screen and (min-width:800px){
      #videoPlayer{
        margin:auto;
          width:780px;
          height:500px;
          }
      }
     
    @media only screen and (min-width:1100px){
      #videoPlayer{
          height:550px;
          width:690px;   
          }
      }
    @media only screen and (min-width:1200px){
      #videoPlayer{
          height:580px;
          width:700px;   
          }
      }
    @media only screen and (min-width:1300px){
      #videoPlayer{
          width:800px;   
          }
      }
    video{
        background-color:black;
        width:100%;
        height:100%;
        grid-column:1/13;
        grid-row:1/12;
        cursor:pointer;
    }
    video:hover{
        border:1px solid white;
    }

    input[name="setvolume"]{
       display:none;
      -webkit-appearance:none;
       grid-column:2/3;
       grid-row:9/10;
       background:transparent;
       z-index:2;
       width:100px;
       height:5px;
       margin-left:25%;
       border:1px solid black;
       border-radius:1px;
       transform: rotate(-90deg);
    }

    input[name="setvolume"]:focus{
      outline:none;
    }

    input[name="setvolume"]::-webkit-slider-runnable-track{
     width:100px;
     cursor:pointer;
     animate:0.2s;
     border-radius:2px;
    }
    /*
    input[name="setvolume"]:focus::-webkit-slider-runnable-track{
      background:transparent;
      width:100%;
      height:100%;
    }
    */

    input[name="setvolume"]::-webkit-slider-thumb{
      -webkit-appearance:none;
      height:15px;
      width:20px;
      background:#008CFF;
      border:none;
      border-radius:2px;
      cursor:pointer;
    }
    input[name="setvolume"]::-moz-range-thumb{
      
      height:15px;
      width:20px;
      background:#008CFF;
      cursor:pointer;
      border:none;
      border-radius:2px;
    }
    input[name="setvolume"]::-moz-range-track{
      background:transparent;
      width:100%;
      height:100%;
    }
    input[name="setvolume"]::-ms-track{
      background:transparent;
      width:100%;
      height:100%;
    }
    input[name="setvolume"]::-ms-thumb{
      
      height:15px;
      width:20px;
      background:#008CFF;
      cursor:pointer;
      border:none;
    }
   
    
    #controls{
        padding-left:30px;
        width:100%;
        height:50px;
        z-index:2;
        grid-column:1/13;
        grid-row:12/12;
        align-content:center;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    
    #controls > button[name="playbtn"] {
          width:50px;
    }
    #controls > * {
        width:30px;
        background-color:transparent;
        border:none;
        cursor:pointer;
    }
    #controls:hover{
        border:1px solid white;
    }

    /* disables click events on all svgs in video controller.*/
   
    svg:hover{
        stroke: white;
    }
    button[name="pip"] svg{
      pointer-events: none;
    }
    /* The container <section> - needed to position the dropup content */
    .dropup {
        position: relative;
        display: inline-block;  
      }
    
    /* Dropup content (Hidden by Default)
     * display none does the trick
     */
    .dropup-content {
        display:none ;
        position: absolute;
        background-color: none;
        width: 80px;
        height:100px;
        overflow-y:auto;
        bottom:30px;
        right:2px;
        cursor:pointer;
        scrollbar-width: thin;          /* "auto" or "thin"  */
        scrollbar-color: #008CFF transparent;
      }
      .dropup-content::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      .dropup-content::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
      }
      .dropup-content::-webkit-scrollbar-thumb {
        background-color: #008CFF;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid transparent;  /* creates padding around scroll thumb */
      }
      /* Buttons inside the dropup */
    .dropup-content button {
        height:30px;
        width:100%;
        border:none;
        cursor:pointer;
        color: #ffff;
        background-color:transparent;
        text-decoration: none;
        display: block;
        text-align:center;
        }
    /* Change color of dropup links on hover */
    .dropup-content button:hover {
        background-color: #222;
    }
    /* Affects the picture in picture svg */
    .dropup-content button[name="pip"] > svg {
     width:30px;
     height:25px;
    }
    
    `);
}
