console.log("the page has loaded");

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默认表单提交

    // 获取表单数据
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 简单的表单验证
    if (name === "" || email === "" || message === "") {
        alert("所有字段都是必填的！");
    } else {
        alert("表单提交成功！\n姓名：" + name + "\n电子邮件：" + email + "\n消息：" + message);

        // 在这里你可以将数据发送到服务器
        // 例如，使用 fetch() 方法将表单数据发送到 API
        /*
        fetch('https://example.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, message: message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */
    }
});
