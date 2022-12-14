alert ("You find that you feel a tad hungry and could use a stack.");

let pantry_or_fruit_bowl = prompt("You go into the kitchen and see both the fruit bowl and the pantry. Type 1 in the box to go to the pantry, or 2 to walk over to the fruit bowl.")

if(pantry_or_fruit_bowl == 1) {
    let chips_or_cookies = prompt("You open the pantry to find both a bag of chips and a jar of cookies. Type 1 in the box if you'd like chips, or 2 if you prefer cookies.")
    if(chips_or_cookies == 1) {
        alert("You've eaten some chips and are no longer hungry.")
    } else {
        alert("You've eaten some cookies and are no longer hungry.")
    }
} else {
    let peach_or_orange =  prompt("You look in the fruit bowl to find, among some other fruits, a peach and an orange. If you'd like the peach, type 1 in the box; for the orange, type 2.")
    if(peach_or_orange == 1) {
        alert("You've eaten a peach and are no longer hungry.")
    } else {
        alert("You've eaten an orange and are no longer hungry.")
    }
}
