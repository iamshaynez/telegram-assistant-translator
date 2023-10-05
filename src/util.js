
// 组装错误信息成文本，方便发送
export function errorToString(e) {
    return JSON.stringify({
        message: e.message,
        stack: e.stack,
        from: "translator",
    });
}

export function responseToAssistant(message) {
    const data = { message: message };
    const json = JSON.stringify(data);
    return new Response(json);
}
