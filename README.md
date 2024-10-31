# Description

NestJS module containing **Auth** REST API endpoints for **[Quiz](https://github.com/Fellendorf/quiz-ui)** application.  
Table of Contents:

[API endpoints](#api-endpoints)

- [Check Admin password](#check-admin-password)

[How to use](#how-to-use)  
[How to develop](#how-to-develop)

<br/>

# API endpoints

## Check Admin password

<br/>

${\textsf{\color{orange}POST}}$ &nbsp; &nbsp; &nbsp; &nbsp;`https://{host}/quiz/password`

#### REQUEST BODY

```
{
    password: string;
}
```

#### RESPONSE BODY

```
{
    isAdmin: boolean;
}
```

<br/>

# How to use

Install the package to the main NestJS application and add it to the main module imports:

```
import { AuthModule } from '@fellendorf/api-quiz-auth-module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
```

> [!IMPORTANT]
> Main application must be connected to the MongoDB database.

<br/>

# How to develop

Repository contains an app module (`src/_dev-only`) just for development purposes. Additionally:

- command `npm run build` is set to use this main module to develop the "Questions" module;
- the folder containing the main module will not be included in the npm package (see `.npmignore` file)

> [!NOTE]
> Using `npm link` command or `file://...` path in pacakge.json brings some bugs.

<br/>

# App TODO:

- TESTS
