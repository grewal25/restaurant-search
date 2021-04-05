
1. I spent 6 hours coding, 30 mins on writing automation scripts for accessibililty and UI. If I have more time, I would build a better search options with more fileds and filter options like near to your place, filtered by rating etc. 
2. I was using class based components when I started working React. However, I when I used functional programming and especially Hooks in React, I really liked it. I used useState, useRef hook few to make this game

```javascript
import { useEffect, useState, useRef } from "react"
     const STARTING_TIME = 60

export default function WritingText(){
    const [initialText, setInitialText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [startTimer, setStartTimer] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    function handleChange(e){
        const { value } = e.target;
        setInitialText(value)
         
    }
    
    function calculateWord(text){
        const wordsArr = text.trim().split(" ");
        return  wordsArr.filter((word)=> word !== "").length
    }

    function endGame(){
        setStartTimer(false)
        setWordCount(calculateWord(initialText))
    }
    useEffect(()=>{
        if(startTimer  && timeRemaining > 0){
            setTimeout(()=>{
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemaining === 0){
            endGame()
            // console.log(numWords)
        }
    }, [timeRemaining, startTimer])

    function restartStage(){
        setStartTimer(true)
        setTimeRemaining(STARTING_TIME)
        setInitialText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    return(
        <div className="main">
        <h1>Please type here</h1>
        <textarea 
            ref = {textBoxRef}
            onChange = {handleChange}
            value = {initialText}
            disabled = {!startTimer}
        />
         
        Time remaining : {timeRemaining}
      
        <button
        onClick={restartStage}
        disabled = {startTimer}
        >start</button> 

        Total words you Count : {wordCount}
      
        
        </div>
    )
}
```
Secondly, I used Context API in React to uplift the state. I think this is a great new feature:
```javascript
import React, {createContext, useState} from 'react';

export const ProductContext = createContext();

export function ProductProvider(props){
  const [products] = useState([
    {
      category: 'Vegetables',
      name: 'Potatoes',
      price: 2.99,
      image: '../../photos/potatoes.jpeg'
    },
    {
      category: 'Vegetables',
      name: 'Carrots',
      price: 2.99,
      image: '../../photos/carrots.jpeg'
    },
    {
      category: 'Juices',
      name: 'Apple Juice',
      price: 2.99,
      image: '../../photos/apple_juice.jpeg'
    },
    {
      category: 'Fruits',
      name: 'Oranges',
      price: 2.99,
      image: '../../photos/oranges.jpeg'
    },
    {
      category: 'Fruits',
      name: 'Banana',
      price: 2.99,
      image: '../../photos/banana.jpeg'
    },
    {
      category: 'Vegetables',
      name: 'Onion',
      price: 2.99,
      image: '../../photos/onion.jpeg'
    }
  ])

      return (
          <div>
              <ProductContext.Provider value={[products]}>
                    {props.children}
              </ProductContext.Provider>
          </div>
      )
}

```
this way it is easier to uplift states without passing down the props to components that don't need them.

```javascript
import React, {useContext} from 'react';

import {ProductContext} from '../../context/ItemListContext';

export default function Content({addToCart}){
  const [products]= useContext(ProductContext)
  
    return(
        <div className="content">
          
          <header>
           
          </header>
          <div className="products">
          {products.map((product,idx)=>(
            <div key={idx}
            className="product-info">
              <h3>{product.category}</h3>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name}/>
                <p>${product.price}</p>
              <button onClick={()=>addToCart(product)}
              className="product-button">Add to Cart</button>
            </div>
          ))}
          </div>
        
        </div>
    )
}

```

3. The performance issue in production can be tracked down using tools like Locust. I did few load testing in the initial stage of the project when we had to launch it for the first time using Locust to check how effectively our application scales to a large number of users. 
If I have to do tracking of performance issue, I would use Kibana. Although I have not used much in my last job but I think it is a great tool for measuring performance.

4. The Zomato API wasn't available when I looked for it in their developer's page. That is why I created my own JSON file to show the data. The JSON I created was simple enough to show the name, address, cuisine and rating of a restaurant. I added only Toronto, Ottawa and Montreal as cities. However, a real API has more information than I used. For address it also gives longitute and latitude for the purpose of directions, more data regarding the rating and type of the restaurant. I might have used caching to load data faster. There is a technique wherer even we can prefetch the data to decrease the loading time.
5. 
```json
{ 
    "name":"saranjeet singh",
    "currentlyworking": "morneau shepell",
    "personalitytype": "friendly",
    "codinglove":"10/10",
    "javaScript": "React Fan",
    "currentlylooking":"front-end position",
    "teamplayer":"yes",
    "freetimeactivity":{
        "read books":"yes",
        "writetutorials":"yes",
    }
}
```