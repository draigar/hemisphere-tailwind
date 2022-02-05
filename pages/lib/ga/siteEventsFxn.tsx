import * as ga from './index';

// Import this function into any page where an even will be carried. 
// Call this function inside event handler function of that event t
// hat is to be logged to google analytics. Supply all the arguemnts needed. 
// see example fucntion for a button even below.


export const handleSiteEvents = (action: string, category : string, label : string, value : string) => {


    ga.event ({
        action, //what does the event to do eg add_to_cart, user_form
        category, // under what category is the event eg farmers, users
        label, // what do you want to happen when the event is fired eg submit_user_form, 
        value // what value do you want to see after the eg form_submitted, item_added_to_cart
    })
}

// sample use

// const handleClick = () => {
//     handleSiteEvents('user_email', 'user', 'user_form', 'email_submitted!')
//     console.log('button clicked!');
    
//   }

