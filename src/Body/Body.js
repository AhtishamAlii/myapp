import React, { Component } from 'react';
import './body.css'

class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="layout1">
                    <h1>heading no:1</h1>
                    <p>By default, flex items are laid out in the source order.
                 However, the order property controls the order in which they appear in the flex container.</p>
                    <p>This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
                   Flexbox is (aside from optional wrapping) a single-direction layout concept.
                Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
                    <p>This defines the ability for a flex item to grow if necessary.
                         It accepts a unitless value that serves as a proportion.
                     It dictates what amount of the available space inside the flex container the item should take up.</p>
                    <p>If set to 0, the extra space around content isn't factored in.
                         If set to auto, the extra space is distributed based on its flex-grow value. See this graphic.</p>
                    <p>(which was temporarily done by the main-size keyword until deprecated).
                   The content keyword means "size it based on the item's content" - this keyword isn't well supported yet,
                         so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.</p>
                </div>
                <div className="layout2">
                    <h2>heading no:2</h2>
                    <p>By default, flex items are laid out in the source order.
                 However, the order property controls the order in which they appear in the flex container.</p>
                    <p>This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
                   Flexbox is (aside from optional wrapping) a single-direction layout concept.
                Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
                </div>
                <div className="layout3">
                    <h3>heading no:3</h3>
                    <p>This defines the default size of an element before the remaining space is distributed.
                         It can be a length (e.g. 20%, 5rem, etc.) or a keyword.
                          The auto keyword means "look at my width or height property"
                           </p>
                           </div>
                            
                </div>
                
        )
    }
}


export default Body;