import dayjs from 'dayjs'

// 格式化时间
export function formatMonthDay(date, formatStr="MM月DD日"){
    return dayjs(date).format(formatStr)
}

// 天数计算
export function getDiffDays(startDate, endDate){
    return dayjs(endDate).diff(startDate, "day")
}
