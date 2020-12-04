// Get Element from Dom
const Thank_You_Modal = document.querySelector('.thank_you_modal')
const Come_back_Soon_Modal = document.querySelector('.come_back_soon_modal')
const btn_accept = document.querySelector('.btn_accept')
const btn_cancel = document.querySelector('.btn_cancel')
const close_Btn_cancel =  document.querySelector('.close-btn-cancel')
const close_Btn_accept =  document.querySelector('.close-btn-accept')


//Display Thank You Modal
const handleAccept = ()=> {
    Thank_You_Modal.style.cssText  = 'right:1rem;'
    setInterval(function(){
        Thank_You_Modal.style.cssText  = 'right:-41rem;'
    }, 8000)
}
// Display Come back soon Modal
const handleCancel = ()=> {
    Come_back_Soon_Modal.style.cssText  = 'right:1rem;'
    setInterval(function(){
   Come_back_Soon_Modal.style.cssText  = 'right:-41rem;'
    }, 8000)

}
// Close Come back Soon Modal
const closeModalcancel = (e)=> {
if(e.target === close_Btn_cancel){ 
        Come_back_Soon_Modal.style.cssText  = 'display  :none;'
}}

// Close Thank you Modal
const closeModalAccept = (e)=> {
if(e.target === close_Btn_accept){
        Thank_You_Modal.style.cssText  = 'display  :none;'
}}

// Append funtion to Buttons
btn_accept.addEventListener('click', handleAccept)
btn_cancel.addEventListener('click', handleCancel)
close_Btn_cancel.addEventListener('click', closeModalcancel)
close_Btn_accept.addEventListener('click', closeModalAccept)

