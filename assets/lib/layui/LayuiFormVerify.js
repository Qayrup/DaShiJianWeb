let verifyObj = {
    userName: {
        rules: /^\w{3,9}$/,
        suggest: '用户名称必须是大小写字母数字或 _ -且长度是3-9位'
    },
    nickname: {
        rules: /^\S{1,12}$/,
        suggest: '用户昵称必须是非空白字符',
        tips: '检测一个字符串,可以是任意非空白字符,1-12位'
    },
    weakPasswords: {
        rules: /^[a-zA-Z]\w{5,17}$/,
        suggest: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线'
    },
    strongPasswords: {
        rules: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
        suggest: '必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间'
    },
    chinaZipCode: {
        rules: /[1-9]\d{5}(?!\d)/,
        suggest: '必须是中国邮政编码'
    },
    phoneNumber: {
        rules: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
        suggest: '必须是手机号码'
    },
    isChinese: {
        rules: /[\u4e00-\u9fa5]{1,6}/,
        suggest: '必须是中文字符'
    },
    isEnglish: {
        rules: /[A-Za-z]{1,12}/,
        suggest: '必须是英文字符'
    },
    doubleByteCharacters: {
        rules: /[^\x00-\xff]/,
        suggest: '必须是双字节字符'

    },
    email: {
        rules: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        suggest: '必须是邮箱地址'
    },
    idCode: {
        rules: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        suggest: '必须是身份证号'
    }
}

$(() => {
    let form = layui.form
    form.verify({
        nickname: value => {
            if (!verifyObj.nickname.rules.test(value)) return verifyObj.nickname.suggest
        },
        userName: value => {
            if (!verifyObj.userName.rules.test(value)) return verifyObj.userName.suggest
        },
        password: value => {
            if (!verifyObj.weakPasswords.rules.test(value)) return verifyObj.weakPasswords.suggest
        },
        isChinese: value => {
            if (!verifyObj.isChinese.rules.test(value)) return verifyObj.isChinese.suggest
        },
        isEnglish: value => {
            if (!verifyObj.isEnglish.rules.test(value)) return verifyObj.isEnglish.suggest
        }

    })
})