const getCurrentTime = () => {
    // 获取当前时间
    let now

    now = new Date();
    // 提取年月日时分秒
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始计数
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // 格式化输出
    const currentDateTime = `${hours}:${minutes}:${seconds}`;
    return currentDateTime


}

const getCurrentDate = () => {
    // 获取当前时间
    let now

    now = new Date();
    // 提取年月日时分秒
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始计数
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // 格式化输出
    const currentDate = `${year}-${month}-${day}`;
    return currentDate


}


export { getCurrentTime, getCurrentDate }
