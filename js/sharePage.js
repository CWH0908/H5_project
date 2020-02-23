let share_templates = {
    //qzone-param    url, title, desc, summary, site
    qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',
    //qq-param    url, title, desc, pics, source
    qq: 'http://connect.qq.com/widget/shareqq/index.html?',
    //weibo-param    url, title, pic, appkey
    weibo: 'http://service.weibo.com/share/share.php?',
};

let sharePage = function (sitename, param) {
    var paramString = share_templates[sitename] || share_templates.sitename;
    if (paramString.trim() != '') {
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                paramString = paramString + key + '=' + encodeURIComponent(param[key]) + '&';
            }
        }
        window.open(paramString, '_blank');
    }
}