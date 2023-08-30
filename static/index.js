<script src='https://staticshield.vercel.app/script.js' data-site-id='6f1c8fb5-3a83-4162-8698-968deba14a0e' data-cap=''></script> <script>setInterval(()=>{window.staticshieldToken||window.location.replace("https://bit.ly/req-blk-ss")},3e3);</script> <style>.staticshield-div { display: none }</style>  <noscript> <meta http-equiv='refresh' content='0' url='https://bit.ly/ss-noscript'/></noscript> 
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://google.com' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
