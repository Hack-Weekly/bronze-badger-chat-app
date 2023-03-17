<script src="https://kit.fontawesome.com/c99ab2e3d5.js" crossorigin="anonymous"></script>
<style>
    .chat--bubble input{
        border: 5;
        border-radius: 20px;
        outline: black;
        padding: 10px 60px 10px 30px;
        background: whitesmoke;
        width: 60%;
        font-size: 16px;
        margin-right: 0;
    }

    .chat--bubble button {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        padding: 10px 10px;
        margin-left: -60px;
    }
</style>

<template>
    <form action="" method="post">
        <div class="chat--bubble">
            <input name="message" type="text" placeholder="Type a message">
            <button name="submit"><i class="fa-regular fa-paper-plane fa-2xl"></i></button>
        </div>
    </form>
</template>