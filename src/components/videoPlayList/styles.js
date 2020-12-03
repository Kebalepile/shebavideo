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
        font-family: 'Comic Neue', cursive;
    }
    
    .nextVideo {
        max-width: 200px;
        height: 140px;
        background:black;
        cursor:pointer;
        display:grid;
        grid-template-columns:repeat(12,auto);
        grid-template-rows: repeat(12, auto);
        border-radius:2px;
        border:none;
    }
    
    .nextVideo:hover{
        border:1px solid white;
    }
    .nextVideo video {
        grid-column:1/13;
        grid-row:1/13;
        width:100%;
        height:100%;
    }
    .remove {
        
        z-index:2;
        cursor:pointer;
        grid-column: 12;
        grid-row: 2/2;
        height:35px;
        width:35px;
        
    }
    
    .remove svg {
        pointer-events:none;
    }
    .duration {
        z-index:2;
        width:100%;
        grid-column:2/13;
        grid-row: 11;
        text-align:right;
        font-size:0.75em;
        background:#222;
        padding:1px;
        overflow:hidden;
    }
    
    
    #videoPlaylist{
        margin:auto;
        width:95%;
        height:290px;
        padding:10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(50, 1fr);
        gap: 8px;
        overflow-y: auto; 
        scrollbar-width: thin;          /* "auto" or "thin"  */
        scrollbar-color: #008CFF transparent;
    }
    #videoPlaylist::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }
    #videoPlaylist::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
    }
    #videoPlaylist::-webkit-scrollbar-thumb {
        
        background-color: #008CFF;    /* color of the scroll thumb */
        border-radius: 2px;       /* roundness of the scroll thumb */
        border: 3px solid transparent;  /* creates padding around scroll thumb */
    }
    
    
    @media only screen and (min-width:520px){
        #videoPlaylist{
            width:90%;
            height:400px;
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media only screen and (min-width:800px){
        #videoPlaylist{
            margin:auto;
            width:90%;
            height:450px;
            grid-template-columns: repeat(4, 1fr);
            
        }
    }
    @media only screen and (min-width:900px){
        #videoPlaylist{
            width:200px;
            grid-template-columns: repeat(1, 1fr);
            
        }
    }
    @media only screen and (min-width:1100px){
        #videoPlaylist{
            width:350px;
            height:420px;

        }
    }
    @media only screen and (min-width:1200px){
        #videoPlaylist{
            grid-template-columns: repeat(3,1fr);
            width:500px;
            height:450px;
        
        }
    }
    
    `);
}