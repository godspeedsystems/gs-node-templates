## Setup using Docker
You will need to run Kafka and Postgres using docker or otherwise locally.

There is a `docker-compose.yaml` file in this project. Just run `docker compose up -d` to setup Postgres and Kafka services.

### AWS setup
This bit you will need to do yourself on AWS console dashboard. You can start the project without it but the appl_for_loan API will not work becase there we upload a file to AWS S3 service. 

### Environment variables
You will need to setup your .env file with correct variables

### Running the project
Run this command
```godspeed serve```

To start from scratch, install any plugins, setup DB model on your database and start your service, etc refer to Godspeed Documentation for [getting started](https://docs.godspeed.systems/docs/getting_started/overview)

Once your project is running open up `localhost:3000/api-docs` for Swagger endpoints access and `localhost:4008` for Graphql playground.