function toSearch() {
    var keywords = document.querySelectorAll('.search-input')[0].value || document.querySelectorAll('.search-input')[1].value;
    if (keywords) {
        location.href = location.origin + '/search/' + keywords + '.html'
    }
}

document.querySelectorAll('.search-input').forEach((item) => {
    item.addEventListener('keyup', function (event) {
        console.log(event)
        event.stopPropagation()
        if (event.keyCode == 13) {
            event.preventDefault();
            toSearch()
        }
    })
});


document.querySelectorAll('.search-wrap').forEach((item) => {
    item.addEventListener('click',function(event){
        event.stopPropagation()
    })
});





; (function backToTop() {
    // 获取返回顶部按钮元素
    const btn = document.querySelector('.backtop');

    document.addEventListener("scroll", (e) => {
        // 获取当前页面的scrollTop值
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 670) {
            btn.classList.remove("none")
        } else {
            btn.classList.add("none")
        }
    })



    // 监听按钮的点击事件
    btn?.addEventListener('click', () => {
        // 将页面滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}());

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

document.querySelector('.ico-open').addEventListener('click', function () {
    document.querySelector('.m-mask').classList.remove("none")
})

document.querySelector('.m-mask').addEventListener('click', function () {
    this.classList.add("none")
})



;(// 获取所有的 <pre> 元素并添加 line-numbers 类
document.querySelectorAll("pre").forEach(function (preElement) {
    preElement.classList.add("line-numbers");

    // 设置复制提示属性
    preElement.dataset.prismjsCopy = "复制代码";
    preElement.dataset.prismjsCopyError = "按Ctrl+C复制";
    preElement.dataset.prismjsCopySuccess = "代码已复制！";
}));


//显示api
;(
   function(){
    if(location.search.includes('debug') && location.search.includes('true')){
        document.querySelector('.api').classList.remove("api")
    }
   }()
);


// 导航加active 高亮
;(function () {
    function buildUrlsFromArray(fileName = "index.html") {
      let url = location.pathname.split("/");
      let filterUrl = url.filter((item) => item != "" && !item.endsWith(".html"));
      const urls = [];
      for (let i = 0; i < filterUrl.length; i++) {
        let finalPath = "/" + filterUrl.slice(0, i + 1).join("/");
        urls.push(finalPath + "/" + fileName);
      }
      return urls;
    }
  
    function setActiveNav(paths) {
      paths.forEach(function (path) {
        var element = document.querySelector('a[href="' + path + '"]');
        if (element) {
          element.parentNode.classList.add("active");
        }
      });
    }
  
    var url =
      location.pathname == "/"
        ? [...buildUrlsFromArray(), ...buildUrlsFromArray("page.html"), "/"]
        : [...buildUrlsFromArray(), ...buildUrlsFromArray("page.html")];
    setActiveNav(url);
  })();
