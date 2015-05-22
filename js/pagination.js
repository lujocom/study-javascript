var Pagination = function (option) {

    if(typeof option.pageSize !== 'number' || typeof option.total !== 'number'){
        console.log("未传入pageSize或者total");
        return ;
    }

    var pageSize = option.pageSize;
    var total = option.total;

    var totalPage = Math.ceil(total/pageSize);
    var currentPage = 1;
    this.getTotalPage = function () {
        return totalPage;
    };

    this.nextPage = function () {
        if(currentPage >= totalPage){
            return ;
        }
        ++ currentPage;
    };


    this.getCurrentPage = function () {
        return currentPage;
    }

};

var page = new Pagination({total:1, pageSize:15});
console.log("current :"+page.getCurrentPage());
console.log("total page : " + page.getTotalPage());
page.nextPage();
console.log("current :"+page.getCurrentPage());
console.log( Math.floor(3/2));
/*
console.log("current 1:"+page.getCurrentPageIndex());
page.nextPage();
console.log("current 1:"+page.getCurrentPageIndex());
console.log("total 1 : "  + page.getTotalPage());

var page2 = new Pagination({currentPage:'0',pageTotal:10});
console.log("current 2:" + page2.getCurrentPageIndex());
page2.nextPage();
console.log("current 2:" + page2.getCurrentPageIndex());
page2.nextPage();
page2.nextPage();
page2.getTotalPage();
console.log("current 2:" + page2.getCurrentPageIndex());
console.log("current 1:" + page.getCurrentPageIndex());*/


var Page = function (name) {
    Page.log(name);
    console.log("name : " + name);
};

Page.prototype.sayHello = function () {
    console.log("hello world")
};

Page.log = function (char) {
    console.log("log : " + char);
};

var newPage = new Page("newPage");

newPage.sayHello();
newPage.sayWorld = function (Page) {
};