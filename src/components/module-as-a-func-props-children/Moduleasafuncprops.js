import React from 'react';
import './props.css';
const moduleasafuncprops = (props) => {
    return (
       <div className="myInline">
           <p> I'm {props.name} I turn {props.age} this year.</p>
           <p>So my age is {`${props.children}`}</p> {/* ${variable} is another type of syntax in react */}
       </div>
    )
}
export default moduleasafuncprops;