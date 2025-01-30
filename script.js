// add in draggable.
//make squares per seats w/loop
//baker is some action 


//drag and find position? 
//click and get position? 

$(document).on('click', (event)=>{
  console.log(
    event.target.id, 
    $('#'+event.target.id)
    .position()
    .left);
})