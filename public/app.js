import './bootstrap';
alert("into java script");
const messages_el=document.getElementById("messages");
const username_input=document.getElementById("username");
const message_input=document.getElementById("message_input");
const message_form=document.getElementById("message-form");

alert("into java script");

message_form.addEventListener('submit', function(e){
    e.preventDefault();

    alert(username_input.value);
    alert(message_input.value);

    let has_errors=false;

    if (username_input.value==''){
        alert("Please enter a username");
        has_errors=true;
    }

    if (message_input.value==''){
        alert("Please enter a message");
        has_errors=true;
    }

    if (has_errors) {
        return;
    }

    const options = {
        method: 'post',
        url: '/send-message',
        data: {
            username: username_input.value,
            message:message_input.value
        }
    }

    axios(options);
});

window.SpeechRecognitionAlternative.channel('chat')
    .listen('.message',(e)=>{
        console.log(e);
    });
