import "./faq.css"
import { useState } from "react";
function Faq() {
    const [value,setvalue] = useState(false)
    const[value2,setvalue2] = useState(false)
    const [value3,setvalue3] = useState(false)
    const[value4,setvalue4] = useState(false)
    const handlechange1 =()=>{
        setvalue(!value)
    }
    const handlechange2 =()=>{
        setvalue2(!value2)
    }
    const handlechange3 =()=>{
        setvalue3(!value3)
    }
    const handlechange4 =()=>{
        setvalue4(!value4)
    }
    return ( 
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
            <div className="faq-cont">
                <div className="question">
                    <h3>What is Bookmark?</h3>
                    <svg onClick={handlechange1} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </div>
                <p id={value ? "hide-answer" : "answer"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>

                <div className="question">
                    <h3>How can I request a new browser?</h3>
                    <svg onClick={handlechange2} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </div>
                <p id={value2 ? "hide-answer" : "answer"}> Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>

                <div className="question">
                    <h3> Is there a mobile app?</h3>
                    <svg onClick={handlechange3} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </div>
                <p id={value3 ? "hide-answer" : "answer"}>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                sollicitudin ex et ultricies bibendum. </p>

                <div className="question">
                    <h3> What about other Chromium browsers?</h3>
                    <svg onClick={handlechange4} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </div>
                <p id={value4 ? "hide-answer" : "answer"}>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                vitae neque eget nisl gravida pellentesque non ut velit.</p>
                <button>More Info</button>
            </div>
        </div>
     );
}

export default Faq;