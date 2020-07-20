export default () => {
    return (`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #ffff;
    }

    /*mobile version*/
    #videoPlayer{
      margin-bottom:10px;
      width:100vw;
      height:300px;
      display:grid;
      grid-template-column:repeat(12,auto);
      grid-template-rows: repeat(12, auto);
      grip-gap:2px;
    }
    video{
        background-color:#807878;
        width:100%;
        height:100%;
        grid-column:1/12;
        grid-row:1/12;
    }
    video:hover{
        border:1px solid white;
    }
    #controls{
        padding-left:30px;
        width:100%;
        height:50px;
        z-index:2;
        grid-column:1/12;
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
   
    svg:hover{
        stroke: white;
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
    
    /* Show the dropup menu on hover */


    /*tablet version*/
    /*pc version*/
 
    `);
}