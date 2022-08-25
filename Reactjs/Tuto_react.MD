# !! In case there is an error during npm install
    npm install --save /*the package with the error*/ --legacy-peer-deps
# Tutorial react js

## Clear cache first
```
npx clear-npx-cache
```
## Create the app
```
npx create-react-app appName
```
## Run the app
```
npm run start
```
## Use "className" instead of "class" in jsx
```html
<div className="content"> Content here </div>
```
## Dynamic values
```js
const title = 'welcome'
[...]
<h1>{ title }</h1>
[...]
```
## Multiple components
- create a component (simple js file) ex : GameList.jsx
- To add it to a jsx, just import it like this :
```js
import GameList from './GameList';
```
- Then place it like this
```html
<GameList></GameList> 
```
- Or like this
```html
<GameList />
```
## Simple click event
### Create a function 'handleClick' then link it to a button or whatever should listen to the event :
```js
const handleClick() = () => {
        //codes here
}
```
### Inside the jsx
```html
<button onClick={handleClick}>Click me</button>
```
```
'handleClick' is without parenthesis, otherwise it will 
call the function even if the click event didn't happen
```
## Click event with a parameter
```js
const handleClick2() = (parameter) => {
    //codes here
}
```
```html
<button onClick={ (someParamHere) => { handleClick2(someParamHere) } }>Click me</button>
```
## UseState hook
```js
const [name, setName] = useState('mario');
const changeName = () => {
    setName('luigi')
}
```

## Outputting Lists
```js
const[games, setGames] = useState([
    {id:1, title:'titre1', description:'description1'},
    {id:2, title:'titre2', description:'description2'},
    {id:3, title:'titre3', description:'description3'}
])
```
### inside the jsx (use the map method of javascript) //DON'T FORGET THE KEY option
```js
{games.map((game) => (
    <div class="game-preview" key={game.id}>
        <h2> {game.title} </h2>
    </div>
))}
```
## Props
```js
const MyComponent = (props) => {
    return(
        <>
            {props.testProps}
        </>
    )
}

//...
const AnotherComponent = () => {
    return (
        <MyComponent testProps="this is a string" />
    )
}
```

## UseEffect hook : (basic)
### Why ?
``` To do something like for example refresh the data when something changes```
### How :
- Without brackets, it will trigger everytime a data changes inside the component
```js
useEffect(()=>{
    //infinite loop
})
```
- Without data to watch inside the brackets, it will only trigger on the first render of the page
```js
useEffect(()=>{
}, [])
```
- With data to watch, it will trigger everytime the data's state changes
```js
useEffect(()=>{
    //some codes
}, [name])
```

## Using JSON server :
- Create new file with .json extension : <br>
```ex : data/db.json```
```json
{
    "games":[
        {
            "id":1,
            "title":"First game",
            "description":"This is the first game"
        },
        {
            "id":2,
            "title":"Second game",
            "description":"This is the second game"
        }
    ]
}
```
- Create a new Terminal
- Run the following command : (ex: the data is inside data/db.json)
```
npx json-server --watch data/db.json --port 8000
```

## Custom hook
- custom hook should start with "use"
```
ex : useFetch()
```
- Create a new js file named useFetch()
```js
const useFetch = (url) => {
    const [datas,setDatas] = useState(null)
    const [isPending,setIsPending] = useState(null)
    const [err,setErr] = useState(null)
    useEffect(() => {
        //Code logic
    },[url])
    return { datas, isPending, err }
}
```
- inside the GameList for example
```js
    const { datas: games, isPending, err} = useFetch(url);
```
## NEW VERSION OF REACT ROUTER : (V6)
### Installation
```
npm install react-router-dom@6
```
### Utilisation
```js
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

<Router>
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
</Router>
```
## Router Links :
### Why ?
- Using it prevents the app to send too much requests to the server
### Import
```js
import { Link } from 'react-router-dom'
```

- Instead of using the 'a' tag for links , use the Link tag instead
```html
<Link to="/">Home</Link>
<Link to="/blabla">Blabla</Link>
```

## UseNavigate
```js
import { useNavigate } from "react-router-dom"

let navigate = useNavigate();
```
```html
<button onClick={() => {navigate("/")}}>Go to home</button>
```
## React router useParams (V6)
```html
<Route path="/profile/:username" element={<Profile />} />
```
### Profile.jsx
```js
import { useParams } from "react-router-dom"
let { username } = useParams()
```

## Nested Routes (React Router Dom V6)
### Routes 
```html
<Route path="/products/" element={ <Products /> }>
    <Route path="/products/list" element={ <ListProducts />} />
</Route>
```
### Products.jsx ( Don't forget the <Outlet /> tag )
```html
<nav>
    Link to blablabla...
</nav>

<Outlet />
```
            
## React Hooks : https://www.youtube.com/watch?v=LlvBzyy-558
- useState
- use Effect
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## Material UI
### Installation
```
npm install @material-ui/core --force
npm install @material-ui/icons --force
npm install @mui/material @emotion/react @emotion/styled
```
### Import
```
import {} from @mui/material
```

## Remove warning in useEffect
```js
// eslint-disable-next-line react-hooks/exhaustive-deps
```

## Error missing in props validation
```js
import PropTypes from 'prop-types';
// [...]

const Wrapper = ({ children }) => {
    // [...]
}
Wrapper.propTypes = {
  children: PropTypes.any,
}
```