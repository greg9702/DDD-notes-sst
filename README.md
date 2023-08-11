# Notes DDD
## Overview

The purpose of this repo is to experimentally try to build a clean architecture using domain driven desing in the serveless world. Very popular apporach for building the serveless apps is when the whole code including application logic, domain logic and ifrastructure is put in a one single lambda file. This has several issues, and the lack of portability is only a minor one there.

The issue was greatly presented by the author in the blog here: https://blog.serverlessadvocate.com/serverless-clean-architecture-code-with-domain-driven-design-852796846d28 

Benefits of using DDD:
- reduce time to market
- improve software quality
- ease of change
- portability

When building non-servless applications it allows for a great separation of concepts, which is very usefull when it comes for example to convertion from monolithic to service / microservices oriented architectures. 

The DDD divedes the application code into:
- primary and secondary adapters (concept from hexagonal architecture)
- use cases (aka services)
- domain models

Such separation allow for better unit testing, faster feedback loop, therefore the DX is also improved.

## What we are building here?

Recently I was playing around with the framework for servless apps called SST. Following the great intro tutorial: https://sst.dev/guide.html

As a result we have build a application allowing for saving notes. The application includes upload of files, modification of user's notes, as well as authorization. The code can be found here: https://github.com/greg9702/sst-app

Now we are going to build the same app, but following the clean architecture pattern. For the sake of a presentation we will have to extend the current capabilities of the current system, to make it a bit more complex. This will be a great exercise presenting ease of extension of the DDD code. 

## Architecture

The system contains of:
- UI created using React framework
- DynamoDB table for storing notes
- S3 bucket for storing note attachments
- lambdas exposing REST application




