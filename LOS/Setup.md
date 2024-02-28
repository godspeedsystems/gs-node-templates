## Setup of local system
You will need to run Kafka and Postgres using docker or otherwise locally.
Here is the setup usind Docker
### Kafka setup
- Follow the steps on this [url](https://www.baeldung.com/ops/kafka-docker-setup)

### Postgres setup
- Download the postgres image. You can follow the steps [here](https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/)
- Run this command
```
docker run --rm -it --network host --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres -p 127.0.0.1:5432:5432
```