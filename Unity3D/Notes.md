# # Unity 3D
# Adding physics and gravity to objects
```
    - Add rigidbody to the object via the inspector menu.
    - Activate "Use gravity" if it's not activated.
```

# # Scripting in unity 3D
# Functions
```
    - void start() : Called before the first frame updates
    - void Update() : Called once per frame
    - void FixedUpdate() : Called once per frame too
```
# Simple scripts to move a Monobehaviour object
```c#
. Forward / backward :
    - transform.Translate(Vector3.forward * speed * Time.fixedDeltaTime * Input.GetAxis("Vertical"));

. Left / right :
    - transform.Translate(Vector3.right * speed * Time.fixedDeltaTime * Input.GetAxis("Horizontal"));
```

