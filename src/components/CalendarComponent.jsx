import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css'

const CalendarComponent = () => {
    const calendars = [{id: 'cal1', name: 'Calendar'}]

  return (
    <div>
        <Calendar
            height="500px"
            view="month"
            month={{
              dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
              visibleWeeksCount: 5,
            }}
            calendars={calendars}
        />
    </div>
  )
}

export default CalendarComponent
