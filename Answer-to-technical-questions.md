
1. I spent 6 hours coding, 30 mins on writing automation scripts for accessibililty and UI. If I have more time, I would build a better search options with more fileds and filter options like near to your place, filtered by rating etc. 
2. The 
3. The performance issue in production can be tracked down using tools like Locust. I did few load testing in the initial stage of the project when we had to launch it for the first time using Locust to check how effectively our application scales to a large number of users. 
If I have to do tracking of performance issue, I would use Kibana. Although I have not used much in my last job but I think it is a great tool for measuring performance.

4. The Zomato API wasn't available when I looked for it in their developer's page. That is why I created my own JSON file to show the data. The JSON I created was simple enough to show the name, address, cuisine and rating of a restaurant. I added only Toronto, Ottawa and Montreal as cities. However, a real API has more information than I used. For address it also gives longitute and latitude for the purpose of directions, more data regarding the rating and type of the restaurant. I might have used caching to load data faster. There is a technique wherer even we can prefetch the data to decrease the loading time.
5. 
```json
{"some":"json"}
```