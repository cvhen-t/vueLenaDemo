<template>
    <div class="chat-page">
        <div class="user-list">
            <h3>在线用户列表</h3>
            <ul>
                <li v-for="user in userList"
                    :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
        <div class="chat-area">
            <div class="message-list">
                <div v-for="message in messageList"
                     :key="message.id"
                     class="message">
                    <span class="message-sender">{{ message.sender }}</span>：
                    <span class="message-content">{{ message.content }}</span>
                </div>
            </div>
            <div class="message-input">
                <input type="text"
                       v-model="newMessage"
                       @keyup.enter="sendMessage"
                       placeholder="输入消息...">
                <button @click="sendMessage">发送</button>
                <!-- <button @click="toLongin">连接</button> -->
            </div>
        </div>
    </div>
</template>
  
  <script>
let webSocket = null;

import webSocketClass from '../../../commin/webSocketClass';
export default {
    data() {
        return {
            userList: [
                {
                    name: 'yyyyy',
                    id: '1'
                },
                {
                    name: 'xxxx',
                    id: '2'
                }
            ], // 在线用户列表
            messageList: [], // 消息列表
            newMessage: '' // 新消息输入框内容
        };
    },
    mounted() {},
    created() {
        webSocket = new webSocketClass('ws://121.4.20.238:2103', this.handleMessage);
        webSocket.connect();
    },
    methods: {
        sendMessage() {
            if (this.newMessage) {
                const data = {
                    username: '大新',
                    msg: this.newMessage,
                    time: Date.now(),
                    isown: false
                };
                webSocket.send(data);
                this.newMessage = '';
            }
        },
        toLongin() {
            webSocket.connect();
        },
        handleMessage(message) {
            this.messageList.push({
                id: Date.now(),
                sender: message.username,
                content: message.msg
            });
            console.log(message);
        }
    }
};
</script>
  
  <style>
.chat-page {
    display: flex;
}

.user-list {
    flex: 1;
}

.user-list h3 {
    margin-bottom: 10px;
}

.chat-area {
    flex: 3;
}

.message-list {
    max-height: 400px;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
}

.message-sender {
    font-weight: bold;
}

.message-input {
    margin-top: 10px;
}

.message-input input {
    width: 70%;
    margin-right: 10px;
}

.message-input button {
    padding: 5px 10px;
}
</style>
  