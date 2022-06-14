# Weather App

Weather widget using OpenWeatherMap's API that supports city search & Fahrenheit/Celsius toggling. Background and icons adjust based on local weather and time of day. 

Viewable at https://xiejon.github.io/weather-app/

Daytime, clear skies
![Project photo](/src/readme-photos/photo1.png)
Nighttime, cloudy
![Project photo](/src/readme-photos/photo2.png)

## Objectives 

1. Implement asynchronous code using promises and async/await.
2. Become comfortable making API calls.
3. Design a simple, attractive interface, with clear weather information. 
4. Adjust app according to weather information, including updating background, changing temperatures, and getting local time. 
5. Bundle resources with webpack.

## Overview
 
1. Visitor is shown a loading page as calls are made to the OpenWeatherMap API. 
2. If geolocation allowed, display weather information at user's current location. Else, display weather in default city.
3. Information is displayed by default in imperial units. User can toggle metric by clicking on F|C. This adjusts temperature values to Celsius and speed values to meters/second instead of miles/hour.
4. Background picture and main icon adjusts according to weather & time of day. 
5. User can look up the weather in a different city using the search bar. 

## Challenges 

1. Asynchronous JS
    - This was my first time making calls to and gathering information from an API. As practice, I implemented a variety of promises, async/await, and try...catch statements. Through this project, I gained a better understanding of how the event handler works, how to avoid 'callback hell', and how to communicate with an API and use that information in my code. 

2. OOP
    - In a previous project, I learned a valuable lesson: plan thoroughly, and clean up code early. With my todo list, I let my code get out of hand, to the point where it was almost impossible to refactor without starting from scratch. This time, I stopped frequently to think about how I would organize my code, what kinds of functions/factories/classes I would use, and how I would call them. I tried my best to adhere to SOLID principles and avoid closely-coupled code. 

## Areas for Improvement

- OOP. I am not happy yet with the organization of my code. Ideally, each function should have a single responsibility and stand independently of others. 