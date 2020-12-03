import pip from "./svg/picture_in_picture.svg";

export default () => {
    return(
        `<section class="dropup">
            <aside class="dropup-content">
                <button name="pip" title="picture in picture mode">${pip}</button>
                <hr/>
                <button name="speed" >speed</button>
                <hr/>
                <button name="0.25" >0.25</button>
                <hr/>
                <button name="0.75" >0.75</button>
                <hr/>
                <button name="1" >1</button> 
                <hr/>
                <button name="1.25" >1.25</button>
                <hr/>   
                <button name="1.75" >1.75</button>
                <hr/>
                <button name="2" >2</button>
                <hr/>
                <button name="2.5" >2.5</button>
                <hr/>
                <button name="3" >3</button> 
                <hr/>
                <button name="3.5" >3.5</button>
                <hr/>
                <button name="4" >4</button>
                <hr/>
                <button name="4.5" >4.5</button> 
                 <hr/>
                <button name="5" >5</button>      
            </aside>      
       </section>
        `
    );
}