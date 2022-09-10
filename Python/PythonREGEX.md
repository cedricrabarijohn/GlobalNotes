
# Regex in python ( [ref](https://www.youtube.com/watch?v=K8L6KVGG-7o) )
## Meta characters (That need to be escaped)
```
. ^ $ * + ? { } [ ] \ | ( )
```

## Simple usage
```py
import re

text='abcd'
pattern = re.compile(r'abc')
matches = pattern.finditer(text)
```
## Snipets
```
. [Any Character except new Line]
\d [Digit (0-9)]
\D [Not a digit]
\w [Word Character (a-z,A-Z,0-9,_)]
\W [Not a word Character]
\s [WhiteSpace (space, tab, newline)]
\S [Not WhiteSpace (space, tab, newline)]

\b [Word Boundary]
\B [Not a Word Boundary]
^ [Beginning of a String]
$ [End of a String]

[] [Matches Characters in brackets]
[^ ] [Matches Characters NOT in brackets]
| [Either Or]
() [Group]

Quantifiers :
* [0 or More]
+ [1 or More]
? [0 or One]
{3} [Exact Number]
{3,4} [Range of Numbers (Min,Max)]
```
## Example :
```py
import re

text='''
cedric@gmail.com
rasoanaivo.s@gmail.com
Ravarp.com
'''

pattern = re.compile(r'[a-zA-Z0-9.-_]+@[a-zA-Z]+\.com')
matches = pattern.finditer(text)
for m in matches:
    print(m)
```