$(function () {

    var dishInfo = {
        "dishGroupId": "69593542721440b388482a443760e47a",
        "dishGroupName": "测试菜",
        "dishes": [
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "groupType": 0
    };

    console.log(dishInfo.dishes);
    for(var i = 0; i < dishInfo.dishes.length; i ++){
        var id = dishInfo.dishes[i];
        //console.log(id.length > 0);
        console.log($.isEmptyObject(id));
        //console.log(!!id);
    }




    //setGroupName2DishList(dishInfo.dishMenu,dishInfo.dishes);













});
var pluginObj ={};

function setGroupName2DishList(dishMenu, dishList){

    var i = 0, j = 0, menuLength = dishMenu.length,
        dishLength = 0, dishMenuItem, dishes, index = 0,
        dishId, dishArr = [], dishInfo,dishListItem;
    for(; i < menuLength; i ++){
        dishMenuItem = dishMenu[i];
        dishes = dishMenuItem.dishes;
        dishLength = dishes.length;
        if(dishLength <= 0){
            continue;
        }
        for(j = 0; j < dishLength; j++){
            dishId = dishes[j];
            //对象深复制
            dishInfo = $.extend(true, {}, dishList[dishId]);
            dishInfo.groupName=dishMenuItem.dishGroupName;
            dishInfo.rowIndex = index + "_" + j;
            dishListItem =  pluginsObj.dishList[dishId];
            if(!dishListItem.groupIndex){
                dishListItem.groupIndex = [];
            }
            if(!dishListItem.groupType){
                dishListItem.groupType = [];
            }
            dishListItem.groupType.push(dishMenuItem.groupType);
            dishListItem.groupIndex.push(index);
            dishArr.push(dishInfo);
        }
        index ++;
    }
    return dishArr;
}