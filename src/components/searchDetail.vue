<template>
    <div class="search">
        <input type="text" placeholder="搜索商品/店铺/品牌">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.search{
    width: 100%;
    height: 5.5%;
    background: rgba(0,0,0,.85);
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 20px;
    
}
input{
    width: 95%;
    height:75%;
    background: url(../assets/home放大镜.png) 5px center no-repeat;
    background-size: 16px;
    background-color: white;
    border: none;
    outline: none;
    border-radius: 2px;
    padding-left: 27px;
}
input::placeholder{
    font-size: 14px;
}
</style>