$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
            message:1,
            comment1: 1,
        },
        600: {
            items: 2,
            message:2,
            comment1: 2,
        },
        1000: {
            items: 3,
            message:3,
            comment1: 2,
        }
    }
})
AOS.init({
    duration: 1200,
  })

  (async () => {
    // DSChatSDK construction accepts two parameters:
    // 1. Chat Room Id
    // 2. ID of the iFrame tag
    // 3. Dead Simple Chat Public API Key.
    const sdk = new DSChatSDK("sq94k9OZV", "chat-frame", "pub_5738506b4e495f744e74556e666a644a68766f4b69767753596239666e473533271517a485775656f354978795830")
    // Call the connect method to connect the SDK to the Chat iFrame.
    await sdk.connect();
});   // const toggleChatboxBtn = document.querySelector(".js-chatbox-toggle");
  // const chatbox = document.querySelector(".js-chatbox");
  // const chatboxMsgDisplay = document.querySelector(".js-chatbox-display");
  // const chatboxForm = document.querySelector(".js-chatbox-form");
  
  // // Use to create chat bubble when user submits text
  // // Appends to display
  // const createChatBubble = input => {
  //   const chatSection = document.createElement("p");
  //   chatSection.textContent = input;
  //   chatSection.classList.add("chatbox__display-chat");
  
  //   chatboxMsgDisplay.appendChild(chatSection);
  // };
  
  // // Toggle the visibility of the chatbox element when clicked
  // // And change the icon depending on visibility
  // toggleChatboxBtn.addEventListener("click", () => {
  //   chatbox.classList.toggle("chatbox--is-visible");
  
  //   if (chatbox.classList.contains("chatbox--is-visible")) {
  //     toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  //   } else {
  //     toggleChatboxBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  //   }
  // });
  
  // // Form input using method createChatBubble
  // // To append any user message to display
  // chatboxForm.addEventListener("submit", e => {
  //   const chatInput = document.querySelector(".js-chatbox-input").value;
  
  //   createChatBubble(chatInput);
  
  //   e.preventDefault();
  //   chatboxForm.reset();
  // });