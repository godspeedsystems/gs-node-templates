# Creating a MongoDB Connection

To create a connection string in MongoDB Atlas for Prisma, follow these steps:

1. **Log In or Sign Up for MongoDB Atlas**:

   If you don't already have an account, go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas) and sign up for a MongoDB Atlas account.

2. **Create a New Project**:

   After signing in, create a new project in MongoDB Atlas. Give your project a name.

3. **Build a New Cluster**:

   Inside your project, create a new cluster by clicking the "Build a Cluster" button. You'll need to choose a cloud provider (e.g., AWS, Azure, Google Cloud) and a region.

4. **Configure Your Cluster**:

   Once your cluster is created, configure it according to your needs.

5. **Create a MongoDB User**:

   In the "Database Access" section of your cluster settings, create a MongoDB user with the necessary privileges. You'll need this user's credentials to connect to the database from your Prisma application.

6. **Get the Connection String**:

   In the "Clusters" view, click the "Connect" button for your cluster. This will open a dialog where you can choose how you want to connect. Select "Connect your application."

7. **Configure Connection String**:

   In the "Connect to Cluster" dialog, you'll see a connection string that you can use in your Prisma application. It will look something like this:

   ```
   mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>
   ```

   Replace `<username>`, `<password>`, `<clustername>`, and `<dbname>` with your actual MongoDB Atlas credentials and database name.

8. **Use the Connection String in Prisma**:

   In your Prisma schema file, configure the `url` property in the `datasource` block to use the MongoDB Atlas connection string you obtained in the previous step:

   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("MONGO_TEST_URL") // Use your MongoDB Atlas connection string here
   }
   ```

   You can use environment variables to securely store the connection string, or you can replace it directly.

9. **Run godspeed prisma prepare command**:

   This command generates the prisma client for your application and connects the prisma to your database.

10. **Start Building Your Application**:

    With the connection string and Prisma models in place, you can now start building your application using Prisma to interact with your MongoDB Atlas database.
