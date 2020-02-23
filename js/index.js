//判断移动端和pc端
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    //document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return "mobile";
    } else {
        return "pc";
    }
}

// 生成网页二维码
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 80,
    height: 80
});

function makeCode() {
    qrcode.makeCode("https://blog.csdn.net/CWH0908");
}

window.onload = function () {
    // 头图动画效果~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let className = [
        'updateTime',
        'title_pic',
        'girl_pic',
        'build_pic',
        'money_pic',
        'rocketPart',
        'rocket_pic',
        'smoke_pic',
        'smoke_pic',
        'dustMan_pic'
    ]
    className.forEach(item => {
        document.getElementsByClassName(item)[0].style.transform = "translateX(0px)";
    })

    //火箭烟雾定时器~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    setInterval(() => {
        var opacity = document.getElementsByClassName('smoke_pic')[0].style.opacity;
        opacity == 1 ? document.getElementsByClassName('smoke_pic')[0].style.opacity = 0 : document.getElementsByClassName('smoke_pic')[0].style.opacity = 1
    }, 300)

    //视频播放器~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $(function () {
        //视频
        jsModern.video("#video");
        //播放视频
        $(".VideoBtn").click(function () {
            var video = document.getElementById("videoShow");
            video.play();
            $('.VideoBtn').hide();
        })
        //监听视频的播放状态
        var video = document.getElementById("videoShow");
        video.oncanplay = function () {
            $(".VideoBtn").show();
            //$("#video").attr("poster","");
        }
        //视频播放事件
        video.onplay = function () {
            $("#videoShow").attr("poster", "");
            $(".VideoBtn").hide();
        };
        video.onplaying = function () {
            $(".VideoBtn").hide();
        };

        //视频暂停事件
        video.onpause = function () {
            $(".VideoBtn").show();
        };
        //点击视频周围暂停播放图片出现
        video.onclick = function () {
            if (video.paused) {
                $(".VideoBtn").hide();
                video.play();
            } else {
                $(".VideoBtn").show();
                video.pause();
            }
        };
    })

    // 按钮点击投票~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let whichItem = document.getElementsByClassName("whichItem");
    whichItem = this.Array.from(whichItem);
    whichItem.forEach(item => {
        item.addEventListener("click", function () {
            alert("已投票");
        })
    })

    // 注册登录按钮
    this.document.getElementsByClassName("button")[0].addEventListener("click", function () {
        alert("敬请期待");
    })
    this.document.getElementsByClassName("button")[1].addEventListener("click", function () {
        alert("敬请期待");
    })

    //移动端渲染人物数据列表~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let personUl = document.getElementsByClassName("personUl")[0];
    person.forEach((item, index) => {
        // 生成li节点插入ul中
        let li = document.createElement("li");
        let img = document.createElement("img");
        let div = document.createElement("div");
        let span = document.createElement("span");
        // 给标签加样式
        li.classList.add("personLi");
        img.classList.add("personImg");
        div.classList.add("personName");
        span.classList.add("personIcon");
        if (index == 0) {
            span.classList.add("circleActive");
        } else {
            span.classList.add("circle");
        }
        // 标签绑定数据
        img.src = item.pic_url;
        div.textContent = item.name;
        div.setAttribute("data-index", index)
        span.setAttribute("data-index", index)

        //添加到ul标签
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(span);
        personUl.appendChild(li);
    })
    let Dialog = document.getElementsByClassName("DialogBox")[0];
    Dialog.textContent = person[0].info;

    // 点击人物绑定事件
    personUl.addEventListener("click", function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.classList.contains('personName') || target.nodeName.toLowerCase() == "span") {
            let Dialog = document.getElementsByClassName("DialogBox")[0];
            Dialog.textContent = person[target.getAttribute("data-index")].info;

            var personIcon = document.getElementsByClassName("personIcon");
            personIcon = Array.from(personIcon);
            for (var i = 0; i < personIcon.length; i++) {
                personIcon[i].classList.add('circle'); //先全部添加一个circle样式
                personIcon[i].classList.remove('circleActive');
            }
            personIcon[target.getAttribute("data-index")].classList.remove("circle")
            personIcon[target.getAttribute("data-index")].classList.add("circleActive")
        }

    })


    //渲染视频资源数据列表~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let videoList = document.getElementsByClassName("videoList")[0];
    videoData.forEach(item => {
        // 生成li节点插入ul中
        let li = document.createElement("li");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let playIcon = this.document.createElement("img")

        // 给标签加样式
        li.classList.add("videoLi");
        img.classList.add("videoImg");
        h1.classList.add("videoName");
        p.classList.add("videoTime");
        playIcon.classList.add("playIcon")

        // 标签绑定数据
        img.setAttribute("video_url", item.video_url);
        img.setAttribute("video_name", item.name);
        img.src = item.video_pic;
        playIcon.setAttribute("src", "images/bo1.png");
        h1.textContent = item.name;
        p.textContent = item.time;
        //添加到ul标签
        li.appendChild(playIcon);
        li.appendChild(img);
        li.appendChild(h1);
        li.appendChild(p);
        videoList.appendChild(li);
    })

    videoList.addEventListener("click", function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLowerCase() == 'img') {
            //判断移动端或者pc端，点击视频列表，移动特定距离
            let whichType = browserRedirect();
            let moveHeight = whichType == "pc" ? 300 : 0;
            $("html,body").animate({
                scrollTop: moveHeight
            }, 1000);
            //更换播放源
            document.getElementsByTagName("video")[0].setAttribute("src", target.getAttribute('video_url'))
            // 更换标题
            document.getElementsByClassName("videoTitle")[0].innerHTML = target.getAttribute('video_name');
            //延时1.5秒后播放视频
            var video = document.getElementById("videoShow");
            video.play();
            $('.VideoBtn').hide();
            // setTimeout(function () {
            //     var video = document.getElementById("videoShow");
            //     video.play();
            //     $('.VideoBtn').hide();
            // }, 1500)
        }
    })

    //渲染评论列表~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let commentList = document.getElementsByClassName("commentList")[0];
    commentData.forEach(item => {
        // 生成li节点插入ul中
        let li = document.createElement("li");
        let span_good = document.createElement("span");
        let div_commentRightPart = document.createElement("div");

        let div_userPart = document.createElement("div");
        let img = document.createElement("img");
        let p_userName = document.createElement("p");
        let span_commentInfo = document.createElement("span");

        let p_commentContent = document.createElement("p");

        let div_reply = document.createElement("div");
        let div_replyIcon = document.createElement("div");
        let span_replayText = document.createElement("span");

        let span_c_eli = document.createElement("span");
        let span_c_dialog = document.createElement("span");
        let span_dialog_ico = document.createElement("span");

        // 给标签加样式
        li.classList.add("commentLi");
        span_good.classList.add("goodIcon");
        div_commentRightPart.classList.add("commentRightPart");
        div_userPart.classList.add("userPart");
        img.classList.add("userImg");
        p_userName.classList.add("userName");
        span_commentInfo.classList.add("commentInfo");
        p_commentContent.classList.add("commentContent");
        div_reply.classList.add("reply");
        div_replyIcon.classList.add("replyIcon");
        span_replayText.classList.add("replayText");
        span_c_eli.classList.add("c_eli");
        span_c_dialog.classList.add("c_dialog");
        span_dialog_ico.classList.add("dialog_ico");

        // 标签绑定数据
        span_good.textContent = item.good;
        img.src = item.user_pic;
        p_userName.textContent = item.name;
        span_commentInfo.textContent = item.address + " " + item.time;
        p_commentContent.textContent = item.commentContent;
        span_replayText.textContent = "回复";
        div_reply.addEventListener("click", function () {
            alert("您尚未登录")
        })

        //添加到标签
        // 用户板块
        div_userPart.appendChild(img)
        div_userPart.appendChild(p_userName)
        div_userPart.appendChild(span_commentInfo)

        //回复按钮板块
        span_c_eli.textContent = "..."
        div_replyIcon.appendChild(span_c_eli)
        div_replyIcon.appendChild(span_c_dialog)
        div_replyIcon.appendChild(span_dialog_ico)

        div_reply.appendChild(div_replyIcon)
        div_reply.appendChild(span_replayText)


        // 右板块
        div_commentRightPart.appendChild(div_userPart)
        div_commentRightPart.appendChild(p_commentContent)
        div_commentRightPart.appendChild(div_reply)

        li.appendChild(span_good)
        li.appendChild(div_commentRightPart)

        commentList.appendChild(li);

        //给点赞按钮绑定点击事件
        span_good.addEventListener("click", function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.classList.contains("goodIcon")) {
                target.classList.remove("goodIcon");
                target.classList.add("isVote");
                var temp = Number(target.textContent);
                target.textContent = ++temp;
                alert("投票成功")
            } else {
                alert("您已投票");
            }
        })
    })

    // 社交分享功能
    let shareArr = ['wechat',
        'weibo',
        'qq',
        'qzone'
    ]
    shareArr.forEach(item => {
        let shareLabel = document.getElementById(item);
        shareLabel.addEventListener('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.nodeName.toLowerCase() == 'img') {
                if (target.getAttribute('id') != "wechat") {
                    let param = {
                        url: "https://blog.csdn.net/CWH0908",
                        title: "分享给我的朋友们",
                        desc: "陈伟浩作品",
                        summary: "H5响应式页面",
                        site: "https://blog.csdn.net/CWH0908"
                    }
                    sharePage(target.getAttribute('id'), param)
                } else {
                    // 生成网页二维码
                    makeCode();
                    // 回显到页面
                    let shareQRCode = document.getElementsByClassName('shareQRCode')[0];
                    shareQRCode.style.visibility = "visible";
                    shareQRCode.style.opacity = 1;
                }
            }
        })
    })

    // 点击任意位置关闭二维码分享框
    document.getElementsByClassName("closeShare")[0].addEventListener("click", function (e) {
        let shareQRCode = document.getElementsByClassName('shareQRCode')[0];
        shareQRCode.style.visibility = "hidden";
        shareQRCode.style.opacity = 0;
    })

}