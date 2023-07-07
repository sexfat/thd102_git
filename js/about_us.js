//timeline

let dateImg = document.getElementsByClassName("dateImg");
let selectImg =document.getElementById("selectImg");
let text = document.getElementById("text");
let photo =  ["./img/Slogo.png", "./img/n1.png","./img/n2.png","./img/n3.png","./img/n4.png","./img/n5.png","./img/n6.png","./img/n7.png"]
let text_area = ["NIGERU密室逃脫團工作室是將於2022年5月20日誕生,LOGO以「門」象徵自由與逃脫的機會，「人」代表熱愛密室逃脫的玩家。「Nigeru」這個日文詞彙則象徵著快逃跑和害怕的感覺。這個完美結合的LOGO代表著我們對於挑戰、合作和成功的追求，為您帶來一個神秘的逃脫冒險體驗。",
"在荒島上的倖存者，陸續消失，只剩一人。夜晚，他聽到無數腳步聲接近，悚然回首，眼前浮現骷髏面具的人群。他驚恐奔逃，最終逃出生天。回望時，島上已空無一人，只有無數骷髏面具留在那裡。",
"一位男子收到一個神秘的包裹，裡面是一個迷你娃娃。他開玩笑地對娃娃說話，卻驚訝地發現娃娃會回應。娃娃和他展開了一段滑稽對話，讓他忍俊不禁。從此，他與娃娃成為了最好的朋友，天天一起分享歡樂時光。",
"阿瓦隆, UNO, 狼人殺,  拉密, 三國殺, 德國蟑螂, 矮人礦坑等等....歡迎來到NIGERU一起玩桌游。",
"在一個陰雨綿綿的夜晚，一群年輕人探險進入了一條傳說中的嚇水道。隨著黑暗和濕氣的籠罩，他們聽到了奇怪的聲音。一個接一個消失，只有最後一個倖存者逃出生天，但他的心中永遠留下了那可怕的回憶。",
"在一個孤島上，一把陰森的傘被發現。每當夜晚降臨，傘便活了過來，輕輕搖晃並發出恐怖的哭聲。每個觸摸傘的人都被困在傳奇的詛咒中，他們只有一個晚上的時間尋找解脫。存活下來的人只能成為傘的守護者，直到有人能打破詛咒為止。",
"在一座古老的豪宅中，有一個被稱為「三號室」的房間。每當夜幕低垂，一陣詭異的聲音便從房內傳出。傳言說，進入三號室的人將被困在一個詭異的維度中，無法逃脫。為了解開這個謎團，一群勇敢的冒險者決定一同進入，但他們是否能找到出路呢？",
"在緯育女子高校的一個晚上，十個好朋友決定挑戰校園內的一個傳說密室逃脫遊戲。這個遊戲被稱為「同日死」，傳言其中蘊藏著恐怖的詛咒，只有通過它才能找回失散已久的友誼..............."
]

for( let i = 0; i< dateImg.length; i++){
     dateImg[i].addEventListener("click", function(){
        selectImg.setAttribute("src",photo[i]); 
        text.innerText= text_area[i];
     })

}


//login1
document.getElementById("loginbutton1").addEventListener("click", function(){
   document.querySelector(".poppup").style.display = "flex";
})
//login2
document.getElementById("loginbutton2").addEventListener("click", function(){
   document.querySelector(".poppup").style.display = "flex";
})
document.querySelector(".close-btn").addEventListener("click", function(){
   document.querySelector(".poppup").style.display = "none";
})


// 漢堡
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

