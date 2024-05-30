/*

Feedback: Write Modular, cleaner code

## Rendering collapsible lists

A social media app that you are working on includes a piece of UI to show events that have occurred over time. These events are represented as plain objects with three fields:
```
{
timestamp: 1, // the timestamp in milliseconds
category: 'USER_FOLLOW', // the category of the event (see below)
displayText: '..' // the text to render to the screen
}
```
You will be given an array of events, sorted by timestamp in ascending order.

Events will be one of three categories:
* `USER_FOLLOW`
* `TRENDING_TOPIC`
* `DIRECT_MESSAGE`

The issue is that when a user logs on there could potentially be 100s of events, and we want to keep the UI contained. Therefore, we want to collapse events based on the following rules:
* `USER_FOLLOW` events are never collapsed.
* `TRENDING_TOPIC` events are collapsed if there are 2 or more consecutive events
* `DIRECT_MESSAGE` events are collapsed if there are 5 or more consecutive events


When events are collapsed, we show only the first event, with all the rest hidden:
* `USER_FOLLOW`
* `USER_FOLLOW`
* `TRENDING_TOPIC` (+ 6 more)
* `DIRECT_MESSAGE` (+ 5 more)
* `TRENDING_TOPIC`

Create a function, `collapseEvents(events)` which will take an array of events and return a data structure representing the events in their collapsed form. You may represent these events using any structure you wish, but try to think about a structure that will be useful for the frontend engineer to implement the UI with.


Events


USER_FOLLOW
USER_FOLLOW
USER_FOLLOW
 */

input = [
{
timestamp: 1, // the timestamp in milliseconds
category: 'USER_FOLLOW', // the category of the event (see below)
displayText: '..', // the text to render to the screen,
nextCountTimes: 0
},
{
timestamp: 1, // the timestamp in milliseconds
category: TRENDING_TOPIC, // the category of the event (see below)
displayText: '..', // the text to render to the screen,
nextCountTimes: 0
},
{
timestamp: 1, // the timestamp in milliseconds
category: TRENDING_TOPIC, // the category of the event (see below)
displayText: '..', // the text to render to the screen,
nextCountTimes: 0
},
{
timestamp: 1, // the timestamp in milliseconds
category: TRENDING_TOPIC, // the category of the event (see below)
displayText: '..', // the text to render to the screen,
nextCountTimes: 0
}


]


// Adding a field for showing +x
events.forEach(event => {
	event.nextCountTimes = 0
})


let trendingTopicCounter = 0
let directMessageCounter = 0
let startTrendingTopicInd = 0
let startDirectMessageInd = 0

Events = events.map((event, eventInd) => {
	let show = true

	


	If (events[eventInd-1].category === “DIRECT_MESSAGE” and event !== “DIRECT_MESSAGE” and directMessageCounter>4){
		events[startDirectMessageInd].nextCountTimes = directMessageCounter
}

	Else If (event.category === “DIRECT_MESSAGE”){
//If prev event is not equal to current : directMessageCounter = 1
		//If it is equal : trendingTopicCounter++
		If (events[eventInd-1] !== event){
			directMessageCounter = 1
			startDirectMessageInd = eventInd
} else {
	directMessageCounter++
If (directMessageCounter>4){
	Show = false
	}
}	
	}

	If (event.category === “DIRECT_MESSAGE”){
trendingTopicCounter = 0
directMessageCounter = 0
startTrendingTopicInd = 0
startDirectMessageInd = 0

}
If (show){
		return event
}
}).filter(event => !!event)

If (trendingTopicCounter>1){
events[startTrendingTopicInd].nextCountTimes = trendingTopicCounter
}
If (directMessageCounter>4){
events[startDirectMessageInd].nextCountTimes = directMessageCounter
}


Return events



Function updateTrendingTopicCounterAndShow(events,event,eventInd,counter){
Let actualCounter:{TRENDING_TOPIC:1,  DIRECT_MESSAGE: 4}
	If (events[eventInd-1].category === “TRENDING_TOPIC” and event !== “TRENDING_TOPIC” and trendingTopicCounter>actualCounter[]){
		events[startTrendingTopicInd].nextCountTimes = trendingTopicCounter
}

	Else If (event.category === “TRENDING_TOPIC”){
//If prev event is not equal to current : trendingTopicCounter = 1
		//If it is equal : trendingTopicCounter++
		If (events[eventInd-1] !== event){
			trendingTopicCounter = 1
			startTrendingTopicInd = eventInd
}else {
	trendingTopicCounter++
	If (trendingTopicCounter>1){
	Show = false
	}

}	

	}
}
Function updateDirectMessageCounterAndShow(){}
