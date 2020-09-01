window.onload = function () {
    //设置账号点击下拉效果
    var accountName = document.getElementsByClassName("account-name")[0];
    var accountItem = document.getElementsByClassName("account-item")[0];
    accountName.onclick = function () {
        if(accountItem.style.height == ""){
            accountItem.style.height = "160px";
            accountItem.style.transition = "height 0.3s";
        }else{
            accountItem.style.height = "";
            accountItem.style.transition = "height 0.3s";
        }
    };
    //设置视频点击播放效果
    var leng=document.getElementsByClassName("video");
    for(var i=0;i<leng.length;i++){
        (function (arg) {
            var prev = leng[arg].getElementsByClassName("prev")[0];
            var img = prev.getElementsByTagName("img")[0];
            var play = leng[arg].getElementsByClassName("play")[0];
            var video = play.getElementsByTagName("video")[0];
            var a = play.getElementsByTagName("a")[0];
            img.onclick = function () {
                prev.style.display = "none";
                play.style.display = "block";
                video.play();
            };
            a.onclick = function () {
                play.style.display = "none";
                prev.style.display = "block";
                video.pause();
            };
        })(i);
    }
};
