var vanillaCalendar = {
  //month: document.querySelectorAll('[data-calendar-area="month"]')[0],
  //next: document.querySelectorAll('[data-calendar-toggle="next"]')[0],
  //previous: document.querySelectorAll('[data-calendar-toggle="previous"]')[0],
  //label: document.querySelectorAll('[data-calendar-label="month"]')[0],
  activeDates: null,
  date: new Date(),
  todaysDate: false, //new Date()

  init: function (options) {
    this.model = new VanillaCalendarModel(options.data);
    this.month = document.getElementById(options.month);
    this.next = document.getElementById(options.next);
    this.previous = document.getElementById(options.previous);
    this.label = document.getElementById(options.label);
    this.options = options
    this.date.setDate(1)
    this.createMonth()
    this.createListeners()
  },

  verModelo: function(){
    this.model.mostrar()
  },

  getModelo: function(){
    return this.model.getFechas()
  },

  createListeners: function () {
    var _this = this
    this.next.addEventListener('click', function () {
      _this.clearCalendar()
      var nextMonth = _this.date.getMonth() + 1
      _this.date.setMonth(nextMonth)
      _this.createMonth()
    })
    // Clears the calendar and shows the previous month
    this.previous.addEventListener('click', function () {
      _this.clearCalendar()
      var prevMonth = _this.date.getMonth() - 1
      _this.date.setMonth(prevMonth)
      _this.createMonth()
    })
  },

  createDay: function (num, day, mes, year) {
    var newDay = document.createElement('div')
    var dateEl = document.createElement('span')
    dateEl.innerHTML = num
    newDay.className = 'vcal-date'
    newDay.setAttribute('data-calendar-date', year + "-" + (mes + 1) + "-" + num)

    // if it's the first day of the month
    if (num === 1) {
      if (day === 0) {
        newDay.style.marginLeft = (6 * 14.28) + '%'
      } else {
        newDay.style.marginLeft = ((day - 1) * 14.28) + '%'
      }
    }
    if (this.options.disablePastDays && this.date.getTime() <= this.todaysDate.getTime() - 1) {
      newDay.classList.add('vcal-date--disabled')
    } else {
      newDay.classList.add('vcal-date--active')
      newDay.setAttribute('data-calendar-status', 'active')
    }

    if (this.date.toString() === this.todaysDate.toString()) {
      newDay.classList.add('vcal-date--today')
    }

    if(this.model.existe(year + "-" + (mes + 1) + "-" + num)){
      newDay.classList.add('vcal-date--selected');
    }

    newDay.appendChild(dateEl)
    this.month.appendChild(newDay)
  },

  dateClicked: function () {
    var _this = this;
    this.activeDates = document.querySelectorAll(
      '[data-calendar-status="active"]'
    )
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].addEventListener('click', function (event) {
        var picked = document.querySelectorAll(
          '[data-calendar-label="picked"]'
        )[0]
        picked.innerHTML = this.dataset.calendarDate
        //esto solo hace posible unsa sola selección por mes//_this.removeActiveClass()
        console.log(_this.options);
        if(_this.options.disabled != true){
          if (this.classList.contains('vcal-date--selected')) {
            // do some stuff
            this.classList.remove('vcal-date--selected')
            _this.model.quitar(this.dataset.calendarDate);
          }else{
            this.classList.add('vcal-date--selected')
            _this.model.agregar(this.dataset.calendarDate);
          }
        }
      })
    }
  },

  createMonth: function () {
    var _this = this;
    var currentMonth = this.date.getMonth()
    while (this.date.getMonth() === currentMonth) {
      this.createDay(
        this.date.getDate(),
        this.date.getDay(),
        currentMonth,
        this.date.getFullYear(),
      )
      this.date.setDate(this.date.getDate() + 1)
    }
    // while loop trips over and day is at 30/31, bring it back
    this.date.setDate(1)
    this.date.setMonth(this.date.getMonth() - 1)
    this.label.innerHTML =
      this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear()
    this.dateClicked()
  },

  monthsAsString: function (monthIndex) {
    return this.options.meses[monthIndex]
  },

  clearCalendar: function () {
    vanillaCalendar.month.innerHTML = ''
  },

  removeActiveClass: function () {
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].classList.remove('vcal-date--selected')
    }
  }
}
