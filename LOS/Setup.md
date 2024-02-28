## Setup using Docker
You will need to run Kafka and Postgres using docker or otherwise locally.

Here is how to run the service using Docker
### Kafka setup
- Follow the steps on this [url](https://www.baeldung.com/ops/kafka-docker-setup) for setting up Kafka DOcker image

### Postgres setup
- Download the postgres image. You can follow the steps [here](https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/)

- Run this command to start postgres docker container
```
docker run --rm -it --network host --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres -p 127.0.0.1:5432:5432
```

### Salesforce setup
This bit you will need to do yourself on your salesforce dashboard

### Environment variables
You will need to setup your .env file with correct variables

### Running the project
To install your dependencies, setup DB model on your database and start your service,
Refer to Godspeed Documentation for [getting started](https://docs.godspeed.systems/docs/getting_started/overview)

Once your project is running open up `localhost:3000/api-docs` for Swagger endpoints access and `localhost:4000` for Graphql playground.