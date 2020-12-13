// LaunchBar Action Script

const FLOMO_API_URL = '';

function run(argument) {
    if (argument !== undefined && FLOMO_API_URL) {
        const result = HTTP.postJSON(FLOMO_API_URL, {
            body: {
                content: argument,
            }
        });

        const { code } = JSON.parse(result.data);
        const message = code === 0 ? 'Memo 已添加' : 'Memo 添加失败';
        LaunchBar.displayNotification({
            string: message,
            title: 'Send to Flomo',
        });
    }
}
