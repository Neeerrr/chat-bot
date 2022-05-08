function talk(){  
    var know = {  
     "hello" : "Hello,jannnn Tell me what you want🥰",
     "who are you" : "I am your personnel chatbot🤗", 
     "what's your name" : "I am your love chamiya(●'◡'●)🥰😘", 
     "How are you" : "Good :)",  
     "Are you single" : "No........",  
     "Can you be my Gf" : "Yes Way Not",  
     "Love you " : "Love you to my jannnn ",  
     "Bye" : "Ok bye be stay safe and connected😘"  
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }  