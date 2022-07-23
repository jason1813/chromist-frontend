
class DateFormatter {
    static toLongDateString(isoDate) {
        const date = new Date(isoDate)
        return date.toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })
    }
}

export default DateFormatter
