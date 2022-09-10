# # Move fps player using the CharacterController and adding gravity to the player

```c#
public class PlayerMovement : MonoBehaviour
{
    public CharacterController controller;

    public float speed = 12f;
    
    Vector3 velocity;
    //Gravity value
    public float gravity = -9.81f;
    //The object that will check the ground
    public Transform groundCheck;
    //The distance checked by the groundCheck
    public float groundDistance = 0.4f;
    //The LayerMask that will be ckecked (Ex: Ground)
    public LayerMask groundMask;
    //Boolean to check if it's grounded
    bool isGrounded;
    void FixedUpdate()
    {
        /*Gravity script*/
        isGrounded = Physics.CheckSphere(groundCheck.position, groundDistance, groundMask);
        
        if(isGrounded && velocity.y < 0){
            velocity.y = -2f;
        }
        velocity.y += gravity * Time.deltaTime;
        controller.Move(velocity * Time.deltaTime);

        /*Movement script*/
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;
        controller.Move(move * speed * Time.deltaTime);
    }
}

```