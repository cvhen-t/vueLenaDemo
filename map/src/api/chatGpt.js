import axios from 'axios';
let key = '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';

class chatGpt {
    /**
     * @name:
     * @description: promise扁平处理
     * @return {*}
     */
    defer = () => {
        let resolve, reject;
        return {
            promise: new Promise((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
            }),
            resolve,
            reject
        };
    };
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    // 发问题咨询chatgpt
    sendChatGPT = (msg) => {
        let sessionId = this.uuid();
        var data = JSON.stringify({
            apiKey: key,
            sessionId: sessionId, // 当前会话id
            content: msg
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.openai-proxy.com/v1/chat/completions',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${key}`
            },
            data: data
        };

        const { promise, reject, resolve } = this.defer();
        axios
            .request(config)
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                reject(error);
            });
        return promise;
    };
    /*
    msgContent  提问的问题内容
    obj         当前聊天实例
    isBreakTime 是否为休息时间，改为true则不调用ChatGPT，而是回复写死的数据
*/

    answerSay = (msgContent, obj, isBreakTime) => {
        // 休息时间不请求ai回复
        if (isBreakTime) {
            let randIndex = parseInt(10 * Math.random());
            const arr = [
                '很抱歉，为了确保服务的质量和顺畅，我们现在需要您充值才能继续享受本AI服务。',
                '我要睡觉，主人不让我回答了',
                '由于服务器维护和运营成本的原因，我们需要您充值后才能继续提供优质的服务。',
                '罗小呆没钱了，无法回答',
                '请罗小呆充值openai，否则无法回答',
                '请先让罗小呆充钱',
                '账户余额不足',
                '为了保证服务的稳定性和安全性，我们需要您完成充值才能继续使用该服务。',
                '账户余额不足',
                '请罗小呆充值openai，否则无法回答'
            ];
            obj.say(arr[randIndex]);
        } else {
            console.log(msgContent);
            this.sendChatGPT(msgContent)
                .then((res) => {
                    obj.say(res);
                })
                .catch((err) => {
                    obj.say('我报错了');
                    console.log(err);
                });
        }
    };
}
export default chatGpt;
// https://juejin.cn/post/7212539744676364346
