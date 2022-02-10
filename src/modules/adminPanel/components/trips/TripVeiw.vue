<template>
   <div class="timeline-view">
      <div class="mb-3">

         <select class="selectpicker timeline-view-month" name="month" id="" v-model="currentMonth">
            <option v-for="(month, index) in months" :key="index" :value="month"> {{month}} </option>
         </select>
      </div>

      <div class="timeline-wrap d-flex">
         <div class="timeline-sidebar">
            <div class="card bg-transparent">
               <div class="card-header timeline-sidebar_header d-flex align-items-center">
                  <h4 class="h4 text-dark-heading mb-0">Trips</h4>
               </div>
               <div class="card-body p-0">
                  <div class="timeline-schedule_item py-2 px-3" v-for="trip in tripsT" :key="trip.id">
                     <div class="d-flex">
                        <h5 class="h5 text-dark-haeding mb-0">
                           {{trip.dist}}
                        </h5>
                     </div>
                  </div>

                  <div class="timeline-schedule_item py-2 px-3">
                     <button @click="addingTrip = true" class="text-left btn text-btn h6 mb-0 py-1 px-2 bg-gray-light int-trip text-gold-heading uppercase w-100">
                        <add-icon class="mr-2"></add-icon>
                        Create a trip
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="timeline-table">
            <div class="timeline-table_body months-in-year">

               <!-- <div class="timeline-item d-flex">
                     <div class="timeline-item_month px-3" v-for="(month, index) in _months()" :key="index">
                        {{month}}
                     </div>
                  </div> -->
               <div class="timeline-calendar  d-flex">
                  <div class="timeline_month" v-for="(item, index) in filterScheduel(_schedule)" :key="index">

                     <div class="d-flex">
                        <div class="timeline-item_day-date" v-for="day in item.days" :digit="day.digit" :key="day.date" @click="_calender(_year ,item.month, day.date)">

                           <div class="timeline_month-name my-2  px-3">
                              <div class="h5 text-dark-content mb-0 w-auto" ref="month">{{day.name}}, {{day.date}}, {{item.month.name}}, {{_yearShort}}</div>
                           </div>

                           <div class="d-flex _times">
                              <div class="timeline-item_time-date text-center h6 mb-0 _time px-3" v-for="(hour, index) in day.hours" :key="index" :data-mill="hour.mill">
                                 {{hour.hour}}
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               <div class="timeline_roadmap">

                  <div class="timeline-trips">
                     <template v-if="tripsT != null">
                        <div class="timeline-item_trip py-2 px-3" v-for="(trip, index) in tripsT" :key="index">

                           <div @mouseover="trip.timelineHover = true" @mouseleave="trip.timelineHover = false" @click="getInfos(trip)" class="_timeline" :style="{'left': trip.ui.left + 'px', 'right': trip.ui.right + 'px', 'width': trip.ui.width + 'px'}">
                              <template v-if="trip.timelineHover">
                                 <div class="timeline-handel d-flex">
                                    <div class="resizing_handel timeline-handel_left" @mousedown="resizing($event)"></div>
                                    <div class="resizing_handel timeline-handel_right" @mousedown="resizing($event)"></div>
                                 </div>
                              </template>
                           </div>
                        </div>
                     </template>
                  </div>
               </div>
            </div>
         </div>
         <!-- <div class="days-in-month d-flex">
            <div class="timeline-item_day-date flex-grow-1 px-3" v-for="(daysInMonth, index) in currentDaysInMonth" :key="index">
               {{daysInMonth}}
               
            </div>
         </div> -->
         <template v-show="sideInfo">

            <div class="timeline-sidebar_info" :class="{'active_info': sideInfo == true}">
               <div class="timeline-sidebar_info-header d-flex justify-content-between">
                  <h4 class="h4 text-dark-heading">{{tripDetails.dist}}</h4>
                  <button class="btn bg-gray-light int-trip crlc-icon form-check" @click="closeSideInfo()">
                     <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                     </svg>
                  </button>

               </div>
            </div>
         </template>

      </div>
      <template v-show="addingTrip">
         <div class="timeline_create-bar" :class="{'active_bar': addingTrip == true}">
            <div class="timeline_create-bar_header d-flex justify-content-between px-3">
               <h4 class="h4 text-dark-heading">Create A new trip</h4>
               <button class="btn bg-gray-light int-trip crlc-icon form-check" @click="addingTrip = false">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px">
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
               </button>
            </div>
            <scrollable-content :height="230">

               <div class="timeline_create-bar_body px-3">
                  <form action="">
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Trip destination</label>
                              <input type="text" placeholder="trip " v-model="addTrip.dist" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                           </div>
                        </div>

                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Trip date</label>
                              <input type="date" placeholder="trip " v-model="addTrip.startDate" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Trip end date</label>
                              <input type="date" placeholder="trip " v-model="addTrip.endDate" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="exampleInputEmail1">start time</label>
                              <input type="time" id="appt" name="appt" min="09:00" max="18:00" v-model="addTrip.startduration" class="form-control" aria-describedby="emailHelp">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="exampleInputEmail1">end time</label>
                              <input type="time" id="appt" name="appt" min="09:00" max="18:00" v-model="addTrip.endduration" class="form-control" aria-describedby="emailHelp">
                           </div>
                        </div>
                     </div>

                     <button type="button" class="btn main-btn rounded gold-btn px-3 uppercase bg-gray py-1" @click="addTripPlane()">add new plane</button>
                  </form>
               </div>
            </scrollable-content>

         </div>
      </template>

   </div>
</template>

<script>
import moment from "moment";
// import dayjs from "dayjs";
import AddIcon from "@/components/svgs/AddIcon";
import ScrollableContent from "../global/ScrollableContent.vue";
import $ from "jquery";
// import { mapGetters } from "vuex";

var m = moment();
var tlenght = () => Math.floor(Math.random() * 100);

export default {
	name: "trip-view",
	components: {
		AddIcon,
		ScrollableContent
	},
	props: {
		digit: {
			type: Number,
			default: () => {}
		}
	},
	data() {
		return {
			moment,
			dateContext: m,
			sideInfo: false,
			addingTrip: false,
			gantt: {},
			currentDay: m.format("[Today is] dddd"),
			days: [],
			weeks: [],
			addTrip: {
				id: tlenght(),
				dist: "",
				startDate: null || m.format("YYYY-M-D"),
				startduration: null,
				endduration: null,
				endDate: null,
				timelineHover: false,
				ui: {
					left: null,
					right: null,
					width: null
				}
			},
			tripDetails: {},
			tripsT: [
				{
					id: null,
					dist: "cairo",
					startDate: "2021-08-20",
					endDate: "2021-08-13",
					time: "6:30 PM",
					timelineHover: false,
					ui: {
						left: 1000,
						right: null,
						width: null
					}
				},
				{
					id: null,
					dist: "cairo2",
					startDate: "2021-08-20",
					endDate: "2021-08-13",
					time: "7:00 PM",
					timelineHover: false,
					ui: {
						left: 1200,
						right: null,
						width: null
					}
				}
			],
			currentMonth: m.format("MMM"),
			// currentMonth: "August",
			currentDaysInMonth: m.daysInMonth()
			// currentDay: null
		};
	},
	watch: {
		// viewMode() {
		// 	this.updateViewMode();
		// },
		// tasks() {
		// 	this.updateTasks();
		// }

		currentDaysInMonth() {
			this._getCurrentDaysInMonth();
		}
	},
	mounted() {
		// this.setupGanttChart();
		// this.clickontask();

		// m.endOf("year")

		// var selectMonth = document.querySelector(".timeline-view-month");

		// selectMonth.addEventListener("change", () => {
		// 	this.setWidth();
		// });

		// this.setWidth();

		this.setHeight();

		// this.$nextTick(() => {
		// 	this.scrollToMonth();
		// });
		var $selfData = this;

		document.querySelectorAll(".timeline-item_day").forEach(day => {
			day.addEventListener("click", function() {
				var $self = this;

				var getDay = $self.dataset.timelinedate;
				var getFullDate = this.moment({ d: getDay }).format("YYYY-MM-D");

				var tripTimeline = document.querySelectorAll(".timeline-item_trip");

				tripTimeline.forEach(t => {
					t.style.left = `${$self.offsetLeft}px`;
				});

				// tripTimeline[0].style.left = `${$self.offsetLeft}px`;

				var tripInfos = {
					id: tlenght(),
					dist: "",
					startDate: getFullDate
				};

				return $selfData.tripsT.push(tripInfos);

				// console.log(parseInt(currentday));
				// console.log(cumulativeOffset($self));
			});
		});

		this.createWeekDays();
		// var dateformat = "YYYY/MM/DD";
		// var dateformat = "dd";
		$(".selectpicker").selectpicker();
		// console.log(getWeekDaysByWeekNumber(0));
		// console.log(getWeekDaysByWeekNumber(2));
		// console.log(getWeekDaysByWeekNumber(25));
	},

	computed: {
		// ...mapGetters(["_currentMonth"]),

		_year() {
			var t = this;
			return t.dateContext.format("YYYY");
		},
		_yearShort() {
			var t = this;
			return t.dateContext.format("YY");
		},

		months() {
			var months = [];
			months = m._locale._monthsShort;
			return months;
		},
		// _currentMonth() {
		// 	var currentMonth = "";
		// 	currentMonth = m.format("MMM");
		// 	return currentMonth;
		// },

		_schedule() {
			var monthNum,
				// monthDays,
				// weekDays,
				schedule = [];
			this.months.forEach((m, i) => {
				// weekDays = moment(m, "MMMM")._locale._weekdaysMin;
				monthNum = i + 1;
				var start = this.moment(m, "MMMM").startOf("month");
				var end = this.moment(m, "MMMM").endOf("month");
				var weks = end.diff(start)
				// var Unix = this.moment.duration(start).milliseconds();

				// var startOfWeek = moment(m, "MMMM").startOf("isoWeek");
				// var endOfWeek = moment(m, "MMMM").endOf("isoWeek");

				// var startTempTime = moment.duration(start.valueOf());
				// var endtTempTime = moment.duration(end.valueOf());
				// var y = tempTime.hours() + tempTime.minutes();
				// var time = utcString.slice(-11, -4);

				// var hrs = [];
				// // var hr = startTempTime;

				// while (hr <= endtTempTime) {
				// 	// hrs.push(hr.hours());
				// 	// days.push({ day: day.format("DD") });
				// 	hr = hr.clone().subtract(1);
				// }

				console.log(weks);
				var hours = [];
				for (let hour = 0; hour <= 24; hour++) {
					for (let minute = 0; minute < 60; minute += 5) {
						hours.push({
							hour: moment({ hour, minute }).format("h:mm"),
							mill: moment({ hour, minute }).format("x")
						});
					}
				}

				var filterhours = hours.filter(hour => {
					if (hour.hour == "Invalid date") {
						hours.splice(hour.hour);
					} else {
						return hour.hour;
					}
				});

				var days = [];
				var day = start;

				while (day <= end) {
					days.push({
						name: day.format("dd"),
						date: day.format("DD"),
						digit: day.valueOf(),
						hours: filterhours
					});
					// days.push({ day: day.format("DD") });
					day = day.clone().add(1, "d");
				}

				// monthDays = moment(m, "MMMM").daysInMonth();

				schedule.push({
					timelineDuration: {
						startMilliseconds: start.valueOf(),
						endMilliseconds: end.valueOf()
					},
					month: {
						name: m,
						number: monthNum
					},
					days

					// weeks
				});
			});
			return this.filterScheduel(schedule);
		}
	},

	// 	var resize = function(e) {
	// 	const dx = m_pos - e.x;
	// 	m_pos = e.x;
	// 	console.log(_timeline.offsetWidth);

	// 	if (e.offsetX < 52) {
	// 		_timeline.style.left =
	// 			parseFloat(getComputedStyle(_timeline, "").left) - dx + "px";

	// 		console.log(
	// 			"left:" +
	// 				" " +
	// 				parseFloat(getComputedStyle(_timeline, "").left + dx)
	// 		);
	// 	}
	// 	if (e.offsetX == 52) {
	// 		console.log(false);

	// 		document.removeEventListener("mousemove", resize, false);
	// 	}
	// };
	methods: {
		resizing(event) {
			var _timeline = event.target.parentNode.parentNode;
			var _timeline_handel = event.target.parentNode;
			var left_side = event.target.classList.contains("timeline-handel_left");
			var right_side = event.target.classList.contains("timeline-handel_right");
			var original_width = parseFloat(
				getComputedStyle(_timeline, null)
					.getPropertyValue("width")
					.replace("px", "")
			);
			// var min_width = 52;
			var right,
				left = false;

			var original_x = event.target.getBoundingClientRect().left;
			// let offsetEl = _timeline.offsetWidth;
			// var original_x_right = parseFloat(
			// 	getComputedStyle(_timeline, null)
			// 		.getPropertyValue("right")
			// 		.replace("px", "")
			// );
			var original_mouse_x;

			var resize = function(e) {
				const mouse_x = original_mouse_x - e.x;

				original_mouse_x = e.x;

				// console.log("rightAndWidth:" + rightAndWidth);
				console.log("original_mouse_x: " + original_mouse_x);
				if (left_side) {
					const width = original_width - (e.x - original_mouse_x);
					right = false;
					left = true;
					console.log("right:" + right);
					console.log("left:" + left);
					if (left === true) {
						event.target.nextElementSibling.classList.add("not-resize");
						event.target.classList.remove("not-resize");
						console.log("right:" + right);
						console.log("width:" + width);
						_timeline.style.left =
							parseFloat(getComputedStyle(_timeline, "").left) - mouse_x + "px";
					}
				}
				if (right_side) {
					right = true;
					left = false;

					// const width = original_width + (e.x - original_mouse_x);

					if (right === true) {
						console.log("right:" + right);
						console.log("left:" + left);
						console.log("original_x:" + original_x);
						event.target.previousElementSibling.classList.add("not-resize");
						event.target.classList.remove("not-resize");
						_timeline.style.right =
							parseFloat(getComputedStyle(_timeline, "").right) +
							mouse_x +
							"px";
					}
				} else {
					right = false;
					left = false;
				}
			};

			// console.log("_timeline:" + _timeline_handel.children.length);

			document.addEventListener("mousemove", resize);

			window.addEventListener("mouseup", function() {
				_timeline_handel.children.forEach(child => {
					child.classList.remove("not-resize");
				});
				right = false;
				left = false;

				document.removeEventListener("mousemove", resize);
			});
		},

		filterScheduel(schedule) {
			var filterScheduel = schedule.filter(
				month => month.month.name == this.currentMonth
			);

			return filterScheduel;
		},

		getWeekDaysByWeekNumber(weeknumber, monthNumber) {
			var date = this.moment()
					.isoWeek(weeknumber || 1)
					.startOf("week"),
				monthname = this.moment(monthNumber, "M").format("MMMM"),
				weeklength = 7,
				result = [];
			while (weeklength--) {
				result.push({
					day_name: date.format("ddd"),
					day_number: date.format("DD"),
					month: monthname
				});
				date.add(1, "day");
			}
			return result;
		},

		createWeekDays() {
			return (this.weeks = m._locale._weekdaysMin);
		},

		_calender(y, m, d) {
			var { day, month } = this._schedule;
			var date;
			month == m;
			day == d;
			date = `${y}-${m.number}-${d}`;
			return date;
		},

		_getCurrentDaysInMonth() {
			// return (this.currentDaysInMonth = m.daysInMonth());
			this.months.forEach(month => {
				return (this.currentDaysInMonth = this.moment(
					month,
					"MMMM"
				).daysInMonth());
			});
		},
		_getCurrentDay() {
			return (this.currentDay = this.moment.format("[Today is] dddd"));
		},

		setWidth() {
			let months = document.querySelectorAll(".timeline-item_month");
			let daysInMonth = document.querySelector(".timeline-item_day");
			let width = daysInMonth.offsetWidth;
			document.querySelector(
				".timeline_days-in-month"
			).style.width = `${width}px`;

			months.forEach(m => {
				// m.setAttribute("style", `width:${width}px`);
				m.style.width = `${width}px`;
			});

			// console.log(width);
		},

		setHeight() {
			let timelineCalendar = document.querySelector(".timeline-calendar");
			let timelineSidebarHeader = document.querySelector(
				".timeline-sidebar_header"
			);

			let timelineCalendarHeight = timelineCalendar.offsetHeight;

			timelineSidebarHeader.style.height = `${timelineCalendarHeight}px`;
		},

		addTripPlane() {
			var NewTrip = this.addTrip; // store the {addTrip} object

			// format the date to (timestamp format )
			var startDate = moment(NewTrip.startDate).valueOf();
			// format the date to (timestamp format )
			var endDate = moment(NewTrip.endDate).valueOf();

			// format the time to (timestamp format)
			var startduration = Date.now(NewTrip.startduration);

			// format the time to (timestamp format)
			// var endduration = Date.now(NewTrip.endduration);

			console.log(startduration);
			// var item_trip = document
			// 	.querySelector(".timeline-item_trip")
			// 	.querySelector("._timeline");

			// get the days divs (timeline-item_day-date)
			var day_date = document.querySelectorAll(".timeline-item_day-date");

			// create Array from the NodeList of(day_date)
			var get_day_date = Array.prototype.slice.call(day_date);

			// var get_time_date = Array.prototype.slice.call(time_date);
			var digits;

			// filter and get the currnt month
			var get_current_month = this._schedule.filter(month => {
				if (month.month.name === this.currentMonth) {
					return month;
				}
			});

			// get days from currnt month
			var get_days_in_month = get_current_month[0].days;

			//  get digit of days from currnt month
			// var get_digit_of_days_in_month = get_days_in_month.map(day => day.digit);

			//  get hours of days from currnt month
			var get_hours_of_day = get_days_in_month.map(day => day.hours);

			console.log(get_hours_of_day);

			this._schedule.forEach(month => {
				var daysInMonths = month.days;
				var element = [];
				for (let index = 0; index < daysInMonths.length; index++) {
					element.push(daysInMonths[index].digit);
				}
				digits = element.filter(dig => {
					if (dig === startDate) {
						// console.log();
						// console.log("startDate:" + startDate);
					}
					if (dig === endDate && startDate < endDate) {
						// console.log("endDate:" + endDate);
					}
					if (endDate < startDate) {
						// console.log("the end Date:" + new Date(endDate) + "not valid");
						return false;
					}
					return dig;
				});

				digits;

				get_day_date.forEach(d => {
					var _times = d.querySelector("._times");
					var time_date = _times.querySelectorAll(".timeline-item_time-date");

					var time_date_array = Array.prototype.slice.call(time_date);
					var digitAttr = parseInt(d.getAttribute("digit"));

					var data_mill = [];
					time_date_array.forEach(time => {
						data_mill.push(time.dataset.mill);
					});
					// console.log(data_mill);

					var _offsetLeft = d.offsetLeft;

					digits.filter(digit => {
						if (
							(digit == digitAttr && digitAttr == startDate) ||
							endDate == null
						) {
							NewTrip.ui.left = _offsetLeft;
							NewTrip.ui.width = d.offsetLeft + d.offsetWidth;
						}
						if (digit == digitAttr && digitAttr == endDate) {
							NewTrip.ui.width = d.offsetLeft + d.offsetWidth;
						}
					});
				});

				// get_time_date.forEach(d => {
				// 	var digitAttr = parseInt(d.getAttribute("digit"));
				// 	//
				// 	digits.filter(digit => {
				// 		if (
				// 			digit == digitAttr &&
				// 			digitAttr == startduration &&
				// 			startduration <= startDate
				// 		) {
				// 			var _offsetLeft = d.offsetLeft;
				// 			NewTrip.ui.left = _offsetLeft;
				// 		}
				// 		if (
				// 			digit == digitAttr &&
				// 			digitAttr == endduration &&
				// 			startduration >= endduration
				// 		) {
				// 			var _offsetRight = d.offsetLeft + d.offsetWidth;
				// 			NewTrip.ui.width = _offsetRight;

				// 			console.log(_offsetRight);
				// 		}
				// 	});
				// });

				// var day = daysInMonths.forEach(day => {});

				// console.log(day);

				// if (d.dataset.date.includes(startDate)) {

				// 	// console.log("left:" + _offsetLeft);
				// 	// console.log(startDate);
				// }
				// if (d.dataset.date.includes(endDate)) {
				// 	// var _offsetRight = d.offsetLeft + d.offsetWidth;
				// 	NewTrip.ui.right = _offsetRight;
				// 	console.log("Right:" + _offsetRight);
				// }
			});

			this.tripsT.push(NewTrip);
			this.addingTrip = false;
			this.addTrip = {
				id: tlenght(),
				dist: "",
				startDate: "",
				time: "",
				endDate: "",
				timelineHover: false,
				ui: {
					left: null,
					right: null
				}
			};
		},

		getInfos(item) {
			this.sideInfo = true;
			this.tripsT.filter(trip => (trip.id = item.id));
			return (this.tripDetails = item);
			// console.log(item);
		},

		closeSideInfo() {
			(this.sideInfo = false), (this.tripDetails = {});
		},

		clickontask(task) {
			var op = {
				id: task.id,
				name: task.name,
				start: task.start,
				end: task.end,
				hasddependencies: task.hasddependencies,
				dependencies: task.dependencies || null,
				progress: task.progress
			};
			return op;
		}

		// scrollToMonth() {
		// 	const timelineTable = document.querySelector(".timeline-table");
		// 	let months = this.$refs.month;

		// 	let getCurrentMonth = months.filter(
		// 		name => name.innerHTML == this.currentMonth
		// 	);

		// 	console.log(getCurrentMonth[0].innerHTML == this.currentMonth);

		// 	if (getCurrentMonth[0].innerHTML == this.currentMonth) {
		// 		let left = getCurrentMonth[0].offsetLeft;

		// 		timelineTable.scrollLeft = left;
		// 		// window.scrollTo(10, left);
		// 	}
		// }
	},
	created() {
		console.log(this.digit);
	},
	updated() {
		var mutationObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				var left = mutation.target.getBoundingClientRect().left;
				var right = mutation.target.getBoundingClientRect().right;
				var width = mutation.target.getBoundingClientRect().width;

				if (width < 50) {
					// mutation.removeEventListener("mousemove", false);
					console.log("stopped");
					// console.log(
					// 	mutation.target.childNodes.forEach(cl => {
					// 		cl.removeEventListener("mousemove");
					// 	})
				}
				console.log("left " + left);
				console.log("right " + right);
				console.log("width " + width);
			});
		});

		document.querySelectorAll("._timeline").forEach(line => {
			mutationObserver.observe(line, {
				attributes: true,
				characterData: true,
				childList: true,
				subtree: true,
				attributeOldValue: true,
				characterDataOldValue: true
			});
		});
	}
};
</script>

<style lang="scss">

</style>