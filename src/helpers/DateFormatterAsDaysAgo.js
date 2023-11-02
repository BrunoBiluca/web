import { loc } from "services/LocaleStringBuilder";

const today = loc("Hoje", "Today")
const yesterday = loc("Ontem", "Yesterday")
const daysAgo = loc("dias atrás", "days ago")

class DateFormatterAsDaysAgo {
  constructor(referenceDate) {
    this.referenceDate = referenceDate

  }

  convertSecondToHours(amount) {
    return amount / (1000 * 60 * 60 * 24)
  }

  format(date) {
    const currDate = new Date(Date.parse(date))

    const diffTime = Math.abs(this.referenceDate - currDate);
    const diffDays = Math.ceil(this.convertSecondToHours(diffTime));

    if (diffDays === 0) return today;
    if (diffDays === 1) return yesterday;
    return diffDays + " " + daysAgo
  }
}

export default DateFormatterAsDaysAgo;