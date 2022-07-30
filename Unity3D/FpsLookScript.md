# # Simple script to rotate the camera and the player using the mouse .

```c#
public float mouseSensivity = 250f;
public Transform playerBody;
float xRotation = 0f;

void FixedUpdate()
{
    float mouseX = Input.GetAxis("Mouse X") * mouseSensivity * Time.deltaTime;
    float mouseY = Input.GetAxis("Mouse Y") * mouseSensivity * Time.deltaTime;
    xRotation -= mouseY;
    xRotation = Mathf.Clamp(xRotation, -90f, 90f);

    //Rotating the Y axis
    transform.localRotation = Quaternion.Euler(xRotation, 0f, 0f);

    //Rotating the X axis
    playerBody.Rotate(Vector3.up * mouseX);
}
```
- Ps : The "playerBody" is the player object