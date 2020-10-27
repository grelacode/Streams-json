# Streams & Files

This is a litle REST API to show the powerful NodeJS Streams.

## How to deploy it

- First you must have nodejs installed
- Clone the repository code to your local: https://github.com/grelacode/Streams-json.git
- On the main project directory, type on console ```npm install```, this command installs all project dependencies
- Type on console ```node src/index.js``` to start the server.
- This API has two functionalities in two routes:
  . GET ```localhost:4005/api/:filename``` 
   This request show the power of streams, there are two saple's filename, test.txt and test.pdf. You could put in the file folder another files to test the app.
  . POST ```localhost:4005/api/item```
   This request receives a JSON file in this format:
     ``` {
        "id": integer,
        "name": string,
        "keywords": [string array]
    }
```

    validate JSON data types with Superstruct library, and delete the repeats keywords.
   
