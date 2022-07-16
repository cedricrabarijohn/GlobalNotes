# Flutter
## What is flutter :
- Mobile UI framework for creating native apps for iOS and Android
- Single code-based (dart)

## Install android studio
    Search on google
## Install git
    Search on google
## Clone the repo of flutter
    https://github.com/flutter/flutter
## Double click on flutter_console.bat
- Type the command :
    ```cmd
       > flutter doctor
    ```
# Everything is a widget
- Root widget : surrounds the entire app
- Exemple of prebuilds widget:
    - Text widget
    - Button widget
    - Row widget
    - Column Widget
    - Image widget

- Language used : Dart

# Create flutter app in Android Studio

## Configure the environment
- Open Android studio
- Create an empty project the click on the tools menu
- Click on the AVD manager
- Create new Device > Choose Nexus 6 (for the tutorial) then click on next
- On the system image list, choose "Pie", then next
- Change graphics from automatic to hardware then finish
- Go to plugin settings and install the plugin "Flutter"
- Restart the IDE (Android studio)
## Create the flutter app
- Click on new flutter project
- Follow the project creation and validate
# Hello world
```
Notes : (Most of the time)
    - The value of a property is a widget and
    every widget has a property
```
## # Inside lib/main.dart
```dart
void main(){
    runApp(MaterialApp(
        home: Text('Hello world'),
    ));
}
```
## # Remove warnings prefer const
- Go to 'analysis_options.yaml' file
- Add to the linter rules :
    ```
    prefer_const_constructors: false
    ```
    Ex:
    ```
    linter:
      rules:
        prefer_const_constructors: false
    ```

# Scaffold widget
## Documentation
- [Scaffold Class documentation](https://api.flutter.dev/flutter/material/Scaffold-class.html)
## Example
```dart
void main(){
    runApp(MaterialApp(
        home: Scaffold(
            appBar: AppBar(
                title: Text('Flutter app title'),
            ),
            body: Center(
              child: Text('Hello everyone'),
            ),
            floatingActionButton: FloatingActionButton(
              onPressed: () => {
              },
              child: Text('Click'),
            ),
        ),
    ));
}
```
## Colors and fonts
### Colors : property "backgroundColor"
#### <u>Example</u>
```dart
...
appBar: AppBar(
    title: Text('App title'),
    centerTitle: true,
    backgroundColor: Color.fromARGB(255, 68, 68, 68),
),
...
```
### Fonts
#### Example
```dart
body: Center(
    child: Text(
    'Hello everyone',
    style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            letterSpacing: 2,
            color: Color.fromARGB(255, 233, 0, 0),
        ),
    ),
),
```

# Create a stateless widget
```
Widgets are just like components in react
```
## Stateless Widgets
```
The state of the widget cannot change over time
```
## Stateful Widgets
```
The state of the widget can change over time
```
## How to create a stateless widget ? (In vscode)
```
- Type 'stless' then press tab
- Give a name to your stateless widget (Example: Home)
```
## How to use your stateless widget ?
```
Just call it like a normal class
Example : ... : Home()
```
## Example of a stateless widget
```dart
class Home extends StatelessWidget {
  const Home({ Key? key }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      ...
    ),
  }
}
```
## Example of using a stateless widget
```dart
void main() {
  runApp(MaterialApp(
      home: Home(),
    )
  );
}
```

# Images and assets
## - NetworkImage
```dart
body : Center(
    child: Image(
        image: NetworkImage('url of the image'),
    ),
),
```
## - Asset image
### Configuration
```
- Go inside the file ' pubspec.yaml '
- NOTE : Identation is always 2 spaces
- inside the "flutter" section (usually the last section):
    flutter
      assets:
        - assets/images/ (Or whatever is the path)
        - another_path/
        - another_path/specific_image.jpg
```
### In the code
```dart
body: Center(
    child: Image(
        image: AssetImage('assets/images/image1.jpg'),
    )
),
```

# Buttons and icons
## Icons
```
Use the Icon widget
```
## Example of how to use icons
```dart
body: Center(
    child: Icon(
        Icons.air_outlined,
        color: Colors.lightBlue,
        size: 50,
    ),
),
```

## Buttons
### Example : ElevatedButton
```dart
body: Center(
    child: ElevatedButton(
        onPressed:(){},
        style: ElevatedButton.styleFrom(
            primary: Colors.green
        ),
        child: Icon(
            Icons.air_outlined,
            color: Colors.black,
        ),
    ),
),
```
### Example : ElevatedButton.icon
```dart
body: Center(
child: ElevatedButton.icon(
    onPressed: () => {},
    icon: Icon(
        Icons.mail
    ),
    label: Text('mail me'),
    style: ElevatedButton.styleFrom(
        primary: Colors.red
    ),
  )
),
```

### Example : IconButton
```dart
body: Center(
    child: IconButton(
        onPressed: () => {},
        icon: Icon(
            Icons.abc
        ),
        color: Colors.blue,
    ),
),
```
# Containers and padding
## # Widget used
```
'Container' widget
```

## # How to use the container widget
```dart
body: Container(
    color: Colors.grey[400]
)
```

## # Padding / Margin
### - Which widget do we use ?
```
Use 'EdgeInsets' widget
```
### - Examples of EdgeInsets
```
> EdgeInsets.all
> EdgeInsets.fromLTRB
> EdgeInsets.fromWindowPadding
> EdgeInsets.only
> EdgeInsets.symmetric
```
### - Example inside the code
```dart
body: Container(
  padding: EdgeInsets.fromLTRB(10, 20, 30, 40),
  margin: EdgeInsets.all(50),
  color: Colors.red[800],
  child: Text('hey')
),
```
### - Padding widget
```dart
body: Padding(
  padding: EdgeInsets.all(100),
  child: Text('Padding widget'),
),
```

# Rows
## # Which widget should be used?
```
The "Row" widget
```
## # Example of code
```dart
body: Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      Text('Hello world'),
      ElevatedButton(
        onPressed: () => {},
        style: ElevatedButton.styleFrom(primary: Colors.yellow),
        child: Text('click'),
      ),
      Container(
        color: Colors.cyan,
        padding: EdgeInsets.all(30),
        child: Text('Inside container'),
    )
  ],
),
```
## # Explanations
### - Row()
```
It's the widget used to create a Row and to personnalize its layout
```
### - mainAxisAlignment: MainAxisAlignment.spaceEvenly
```
It's a property used to adjust the 'horizontal' axis layout of the row
```
### - crossAxisAlignment: CrossAxisAligment.start
```
It's a property used to adjust the 'vertical' axis layout of the row
```
### - children: \<Widget>[ ]
```
- Note that it's called 'children' instead of 'child' like usual.

- It takes a list of Widgets, separated by comas (,).

- Here, the layout is controlled by mainAxisAlignment and crossAxisAlignment.
```
# Columns
## # Which widget will be used?
```
The "Column" widget
```
## # Example of code
```

```
# MY TODO LIST
- ~~Variables~~ 
- ~~function~~
- ~~Class~~
- ~~Constructeur~~ 
- ~~Constructeur nommé~~
- ~~Getter et setter~~
- ~~héritage~~
- ~~abstract class~~