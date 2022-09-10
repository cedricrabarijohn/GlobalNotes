# Tutorial Material UI

## Buttons
### Simple button
- Simple button
```js
import { Button } from "@mui/material";
// [...]
<Button variant="outlined">
    Button
</Button>
// [...]
```
### Button with icons
- To put icons with buttons
```js
import { Button } from "@mui/material";
import { Settings } from "@mui/icons-material";

// [...]
<Button 
    variant="contained"
    startIcon = {<Settings />}
    endIcon = {<Settings />}
>
    Button
</Button>
// [...]
```

## Typography
- For typographies
```js
import { Typography } from "@mui/material";
// [...]
<Typography variant="subtitle1" component="h2">
    Typography
</Typography>
// [...]

```

## 'sx' option
- To apply styles for MUI components
```js
import { Button } from "@mui/material";

// [...]
<Button 
    variant="contained"
    sx={{
        backgroundColor:"green",
        "&:hover":{
            backgroundColor:"green",
        }
    }}>
    Unique button
</Button>
// [...]
```

## Styled components (MUI)
```js
import { styled } from "@mui/material";

// [...]
const StyledButton = styled(Button)({
    backgroundColor: "red",
    "&:hover": {
        backgroundColor: "yellow",
    }
});
// [...]

<StyledButton variant="contained">
    Styled Button
</StyledButton>

// [...]

```
