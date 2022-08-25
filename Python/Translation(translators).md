# Installation

```
pip install translators
```

# Import

```py
import translators as ts
```

# Simple usage

```py
import translators as ts

phrase = 'The text to translate' # The text to translate
from_language = 'auto' # Translate from this language
to_language = 'fr' # Translate to fr language [other choices: eng, etc...]
translated = ts.google(phrase, from_language, to_language) # Will contain the translated text
print(translated) # Will print the translation of the phrase to the language choosen
# ...
```
